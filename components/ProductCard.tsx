import Link from "next/link";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const href = `/producto/${product.slug}/`;
  return (
    <li className="product group bg-white border border-[#e5e5e5] hover:shadow-md transition-shadow flex flex-col">
      <Link href={href} className="block relative overflow-hidden aspect-square bg-white">
        {product.image.src ? (
          <img
            src={product.image.src}
            alt={product.image.alt || product.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#bbb] text-xs">
            Sin imagen
          </div>
        )}
      </Link>
      <div className="p-3 flex flex-col gap-2 flex-1">
        <Link href={href} className="block">
          <h3 className="title text-[#222] text-[13px] leading-[1.3] line-clamp-2 group-hover:text-brand transition-colors">
            {product.title}
          </h3>
        </Link>
      </div>
    </li>
  );
}
