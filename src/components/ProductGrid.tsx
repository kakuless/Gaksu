import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
}: {
  products: Product[];
  columns?: string;
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}
