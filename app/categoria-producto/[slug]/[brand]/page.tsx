import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import {
  categories,
  categoryBySlug,
  brandSubcategoriesOf,
  productsInCategory,
} from "@/lib/products";

export function generateStaticParams() {
  const params: { slug: string; brand: string }[] = [];
  for (const cat of categories) {
    if (cat.parent !== 0) continue;
    for (const sub of brandSubcategoriesOf(cat.slug)) {
      params.push({ slug: cat.slug, brand: sub.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; brand: string }>;
}) {
  const { brand } = await params;
  const sub = categoryBySlug[brand];
  if (!sub) return {};
  return {
    title: `${sub.name} - CORMEX`,
    description: `Productos ${sub.name} en CORMEX.`,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string; brand: string }>;
}) {
  const { slug, brand } = await params;
  const parent = categoryBySlug[slug];
  const sub = categoryBySlug[brand];
  if (!parent || !sub || sub.parent !== parent.id) notFound();

  const items = productsInCategory(brand);

  return (
    <section className="container-cmx py-10">
      <nav className="text-[12px] text-ink-2 mb-4">
        <Link href="/" className="hover:text-brand">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/categoria-producto/${parent.slug}/`} className="hover:text-brand">
          {parent.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#222]">{sub.name}</span>
      </nav>

      <h1
        className="text-center text-[32px] font-medium mb-8"
        style={{ color: "#a92727" }}
      >
        {parent.name} — {sub.name}
      </h1>

      {items.length > 0 ? (
        <ProductGrid products={items} cols={4} />
      ) : (
        <p className="text-center text-ink-2 py-10">No hay productos en esta marca.</p>
      )}
    </section>
  );
}
