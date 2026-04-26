import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

export default function ProductGrid({
  products,
  cols = 4,
}: {
  products: Product[];
  cols?: 3 | 4 | 5 | 6;
}) {
  const colMap: Record<number, string> = {
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
  };
  return (
    <ul className={`grid grid-cols-2 ${colMap[cols]} gap-4 list-none p-0 m-0`}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  );
}
