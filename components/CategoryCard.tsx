import Link from "next/link";
import type { Category } from "@/lib/types";
import { productsInCategory } from "@/lib/products";

const COVERS: Record<string, string> = {
  cizallas: "/uploads/2022/03/ciz-azar-27.jpg",
  "cortadoras-2": "/uploads/2022/03/cor-azar-0320.jpg",
  "cortadoras-electricas": "/uploads/2022/03/Diseno-sin-titulo-1.png",
  dobladoras: "/uploads/2022/03/dobladoras-azar.254ar.jpg",
  punzadoras: "/uploads/2022/03/punzon-azar30.jpg",
};

export default function CategoryCard({ category }: { category: Category }) {
  const cover = COVERS[category.slug] || productsInCategory(category.slug)[0]?.image.src;
  const href = `/categoria-producto/${category.slug}/`;
  return (
    <Link
      href={href}
      className="group relative block bg-white border border-[#e5e5e5] overflow-hidden aspect-[4/3] hover:shadow-md transition-shadow"
    >
      {cover && (
        <img
          src={cover}
          alt={category.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="text-[11px] uppercase tracking-[0.2em] opacity-80">Categoría</div>
        <div className="text-[18px] font-medium mt-1">{category.name}</div>
      </div>
    </Link>
  );
}
