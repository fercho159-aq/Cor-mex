import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import {
  categories,
  categoryBySlug,
  brandSubcategoriesOf,
  productsInCategory,
} from "@/lib/products";

const TOP_CATEGORY_PAGE_SLUGS = categories
  .filter((c) => c.parent === 0)
  .map((c) => c.slug);

export function generateStaticParams() {
  return TOP_CATEGORY_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categoryBySlug[slug];
  if (!cat) return {};
  return {
    title: `${cat.name} - CORMEX`,
    description: `Productos de la categoría ${cat.name} en CORMEX.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categoryBySlug[slug];
  if (!cat || cat.parent !== 0) notFound();

  const items = productsInCategory(slug);
  const brands = brandSubcategoriesOf(slug);

  return (
    <section className="container-cmx py-10">
      <nav className="text-[12px] text-ink-2 mb-4">
        <Link href="/" className="hover:text-brand">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#222]">{cat.name}</span>
      </nav>

      <h1
        className="text-center text-[32px] font-medium mb-6"
        style={{ color: "#a92727" }}
      >
        {cat.name}
      </h1>

      {brands.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {brands.map((b) => (
            <Link
              key={b.id}
              href={`/categoria-producto/${cat.slug}/${b.slug}/`}
              className="border border-[#e5e5e5] hover:border-brand hover:text-brand text-[13px] uppercase tracking-wide px-5 py-2 transition-colors"
            >
              {b.name}
            </Link>
          ))}
        </div>
      ) : null}

      {items.length > 0 ? (
        <ProductGrid products={items} cols={4} />
      ) : (
        <p className="text-center text-ink-2 py-10">No hay productos en esta categoría.</p>
      )}
    </section>
  );
}
