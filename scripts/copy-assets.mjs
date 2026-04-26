// Copies images and fonts from the wget mirror into public/
import { cpSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MIRROR = "/Users/fernandotrejo/Developer/cor-mex-mirror/cor-mex.com.mx";
const PUBLIC = join(ROOT, "public");

mkdirSync(PUBLIC, { recursive: true });

// 1. uploads — driven by data/upload-dirs.json (years/months actually referenced)
const uploadDirs = JSON.parse(readFileSync(join(ROOT, "data", "upload-dirs.json"), "utf8"));
for (const rel of uploadDirs) {
  const src = join(MIRROR, "wp-content", "uploads", rel);
  const dst = join(PUBLIC, "uploads", rel);
  if (existsSync(src)) {
    cpSync(src, dst, { recursive: true, force: true });
    console.log(`✓ uploads/${rel}`);
  } else {
    console.warn(`! missing: ${src}`);
  }
}

// 2. logo (always referenced, lives in 2022/02 not in upload-dirs)
const logoSrcDir = join(MIRROR, "wp-content", "uploads", "2022", "02");
const logoDstDir = join(PUBLIC, "uploads", "2022", "02");
if (existsSync(logoSrcDir)) {
  cpSync(logoSrcDir, logoDstDir, { recursive: true, force: true });
  console.log("✓ uploads/2022/02 (logos)");
}

import { readdirSync, renameSync, statSync } from "node:fs";

function stripQueryFromFilenames(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) { stripQueryFromFilenames(full); continue; }
    const idx = entry.indexOf("?");
    if (idx >= 0) {
      const clean = entry.slice(0, idx);
      const dest = join(dir, clean);
      renameSync(full, dest);
    }
  }
}

// 3. fonts: NeueEinstellung
const fontNeueSrc = join(MIRROR, "wp-content/themes/the-hanger/inc/fonts/neueeinstellung");
const fontNeueDst = join(PUBLIC, "fonts/neueeinstellung");
if (existsSync(fontNeueSrc)) {
  cpSync(fontNeueSrc, fontNeueDst, { recursive: true, force: true });
  stripQueryFromFilenames(fontNeueDst);
  console.log("✓ fonts/neueeinstellung");
}

// 4. fonts: thehanger-icons
const fontIconSrc = join(MIRROR, "wp-content/themes/the-hanger/inc/fonts/thehanger-icons");
const fontIconDst = join(PUBLIC, "fonts/thehanger-icons");
if (existsSync(fontIconSrc)) {
  cpSync(fontIconSrc, fontIconDst, { recursive: true, force: true });
  stripQueryFromFilenames(fontIconDst);
  console.log("✓ fonts/thehanger-icons");
}

console.log("done.");
