import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import type { Product, Category } from "@/lib/types";

export const products = productsData as Product[];
export const categories = categoriesData as Category[];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));
export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

export const TOP_CATEGORY_SLUGS = [
  "cizallas",
  "cortadoras-2",
  "cortadoras-electricas",
  "dobladoras",
  "punzadoras",
] as const;

export const TOP_CATEGORIES: Category[] = TOP_CATEGORY_SLUGS
  .map((s) => categoryBySlug[s])
  .filter((c): c is Category => Boolean(c));

const naturalCollator = new Intl.Collator("es", { numeric: true, sensitivity: "base" });

export function productsInCategory(catSlug: string): Product[] {
  const cat = categoryBySlug[catSlug];
  if (!cat) return [];
  const ids = new Set<number>([cat.id]);
  let added = true;
  while (added) {
    added = false;
    for (const c of categories) {
      if (c.parent && ids.has(c.parent) && !ids.has(c.id)) {
        ids.add(c.id);
        added = true;
      }
    }
  }
  return products
    .filter((p) => p.categoryIds.some((id) => ids.has(id)))
    .sort((a, b) => naturalCollator.compare(a.title, b.title));
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function brandSubcategoriesOf(parentSlug: string): Category[] {
  const parent = categoryBySlug[parentSlug];
  if (!parent) return [];
  return categories.filter((c) => c.parent === parent.id);
}
