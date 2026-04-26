import Link from "next/link";
import { notFound } from "next/navigation";
import { products, productBySlug, categoryBySlug, categoryById } from "@/lib/products";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} - CORMEX`,
    description: `${p.title} — ${p.mainCategoryName}. Cotiza al ${PHONE_DISPLAY}.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const cat = categoryBySlug[product.mainCategorySlug];
  const subCat = cat
    ? product.categoryIds
        .map((id) => categoryById[id])
        .find((c) => c && c.parent === cat.id)
    : undefined;

  return (
    <article className="container-cmx py-8">
      <nav className="text-[12px] text-ink-2 mb-6">
        <Link href="/" className="hover:text-brand">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        {cat ? (
          <>
            <Link
              href={`/categoria-producto/${cat.slug}/`}
              className="hover:text-brand"
            >
              {cat.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        ) : null}
        {subCat ? (
          <>
            <Link
              href={`/categoria-producto/${cat?.slug}/${subCat.slug}/`}
              className="hover:text-brand"
            >
              {subCat.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        ) : null}
        <span className="text-[#222]">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white border border-[#e5e5e5] p-6 flex items-center justify-center">
          {product.image.src ? (
            <img
              src={product.image.src}
              alt={product.image.alt || product.title}
              className="max-w-full max-h-[500px] object-contain"
            />
          ) : (
            <div className="aspect-square w-full flex items-center justify-center text-[#bbb]">
              Sin imagen
            </div>
          )}
        </div>

        <div>
          <h1 className="text-[28px] md:text-[32px] font-medium text-[#222] mb-6">
            {product.title}
          </h1>

          <div
            className="product-desc"
            dangerouslySetInnerHTML={{ __html: product.excerptHtml }}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-block bg-brand hover:bg-brand-hover text-white font-medium px-8 py-3 text-[14px] uppercase tracking-wide transition-colors"
            >
              Llámanos {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#25d366] hover:bg-[#1da851] text-white font-medium px-8 py-3 text-[14px] uppercase tracking-wide transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
