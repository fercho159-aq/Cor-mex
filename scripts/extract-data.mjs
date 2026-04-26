// Reads wp-json mirror, normalizes products + categories into data/*.json
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MIRROR = "/Users/fernandotrejo/Developer/cor-mex-mirror/cor-mex.com.mx/wp-json/wp/v2";
const OUT = join(ROOT, "data");

const SITE_PREFIX = "https://cor-mex.com.mx";
const BRAND_SLUGS = new Set(["azar", "cormex", "trebol"]);

mkdirSync(OUT, { recursive: true });

// --- categories ---
const catFiles = readdirSync(join(MIRROR, "product_cat")).filter((f) => /^\d+$/.test(f));
const categories = catFiles
  .map((f) => JSON.parse(readFileSync(join(MIRROR, "product_cat", f), "utf8")))
  .map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    parent: c.parent,
    description: c.description || "",
  }))
  .sort((a, b) => a.id - b.id);

const catById = Object.fromEntries(categories.map((c) => [c.id, c]));

// detect brand from category slug, falling back to a sub-slug match
function brandFromSlug(slug) {
  if (!slug) return undefined;
  for (const b of BRAND_SLUGS) {
    if (slug === b || slug.startsWith(b + "-") || slug.endsWith("-" + b)) return b;
  }
  return undefined;
}

// resolve "main" category (top-level parent) for a list of category ids
function mainCategoryId(ids) {
  for (const id of ids) {
    const c = catById[id];
    if (c && c.parent === 0) return id;
  }
  // walk up first id
  let cur = catById[ids[0]];
  while (cur && cur.parent !== 0) cur = catById[cur.parent];
  return cur ? cur.id : ids[0];
}

function rewriteUrls(html) {
  if (!html) return "";
  let out = html.replaceAll(SITE_PREFIX, "");
  out = out.replaceAll("/wp-content/uploads/", "/uploads/");
  // strip <script> and on*= attrs (shallow safety; trusted source)
  out = out.replace(/<script[\s\S]*?<\/script>/gi, "");
  out = out.replace(/\son\w+="[^"]*"/gi, "");
  out = out.replace(/\son\w+='[^']*'/gi, "");
  return out;
}

// --- products ---
const prodFiles = readdirSync(join(MIRROR, "product")).filter((f) => /^\d+$/.test(f));
const products = prodFiles
  .map((f) => JSON.parse(readFileSync(join(MIRROR, "product", f), "utf8")))
  .filter((p) => p.status === "publish")
  .map((p) => {
    const ogUrl = p?.yoast_head_json?.og_image?.[0]?.url || "";
    const ogW = p?.yoast_head_json?.og_image?.[0]?.width;
    const ogH = p?.yoast_head_json?.og_image?.[0]?.height;
    const imgSrc = ogUrl.replace(SITE_PREFIX, "").replace("/wp-content/uploads/", "/uploads/");
    const ids = Array.isArray(p.product_cat) ? p.product_cat : [];
    const mainId = mainCategoryId(ids);
    const main = catById[mainId];

    // brand: first id whose slug matches a brand
    let brand;
    for (const id of ids) {
      const c = catById[id];
      if (!c) continue;
      const b = brandFromSlug(c.slug);
      if (b) { brand = b; break; }
    }

    return {
      id: p.id,
      slug: p.slug,
      title: (p.title?.rendered || "").replace(/&#?\w+;/g, (m) =>
        m === "&amp;" ? "&" : m === "&#176;" ? "°" : m === "&deg;" ? "°" : m
      ),
      excerptHtml: rewriteUrls(p.excerpt?.rendered || p.content?.rendered || ""),
      image: { src: imgSrc, w: ogW, h: ogH, alt: p.title?.rendered || "" },
      categoryIds: ids,
      brandSlug: brand,
      mainCategorySlug: main ? main.slug : "sin-categorizar",
      mainCategoryName: main ? main.name : "Sin categoría",
    };
  })
  .sort((a, b) => a.id - b.id);

// --- write outputs ---
writeFileSync(join(OUT, "categories.json"), JSON.stringify(categories, null, 2));
writeFileSync(join(OUT, "products.json"), JSON.stringify(products, null, 2));

// detect upload dirs referenced (for copy-assets to mirror)
const uploadDirs = new Set();
const re = /\/uploads\/(\d{4})\/(\d{2})\//g;
for (const p of products) {
  for (const m of p.excerptHtml.matchAll(re)) uploadDirs.add(`${m[1]}/${m[2]}`);
  const im = p.image.src.match(/\/uploads\/(\d{4})\/(\d{2})\//);
  if (im) uploadDirs.add(`${im[1]}/${im[2]}`);
}
writeFileSync(join(OUT, "upload-dirs.json"), JSON.stringify([...uploadDirs].sort(), null, 2));

console.log(`✓ ${products.length} products → data/products.json`);
console.log(`✓ ${categories.length} categories → data/categories.json`);
console.log(`✓ upload dirs: ${[...uploadDirs].sort().join(", ")}`);
