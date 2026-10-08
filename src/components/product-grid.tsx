import type { Product, ProductId } from "@/data/products";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
  selected: ReadonlySet<ProductId>;
  onToggle: (id: ProductId) => void;
  /** Use 3 when the product count divides better into rows of three. */
  maxColumns?: 3 | 4;
};

export function ProductGrid({
  products,
  selected,
  onToggle,
  maxColumns = 4,
}: ProductGridProps) {
  return (
    <ul
      className={`grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 ${
        maxColumns === 4 ? "xl:grid-cols-4" : ""
      }`}
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            selected={selected.has(product.id)}
            onToggle={() => onToggle(product.id)}
          />
        </li>
      ))}
    </ul>
  );
}
