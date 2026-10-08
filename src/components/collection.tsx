"use client";

import type { Category, Product } from "@/data/products";
import { AddSelectedBar } from "./add-selected-bar";
import { CategoryChips } from "./category-chips";
import { ProductGrid } from "./product-grid";
import { useSelection } from "./use-selection";

export type CollectionSection = {
  category: Category;
  products: Product[];
};

export function Collection({ sections }: { sections: CollectionSection[] }) {
  const { selected, toggle, clear, addSelectedToCart } = useSelection();

  return (
    <div>
      <CategoryChips sections={sections} />

      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-8">
        {sections.map(({ category, products }) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className="scroll-mt-32"
          >
            <div className="mb-4">
              <h2
                id={`${category.id}-heading`}
                className="flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl"
              >
                {category.name}
                {category.featured && (
                  <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-surface">
                    Featured
                  </span>
                )}
              </h2>
              <p className="mt-1 text-sm text-muted">{category.description}</p>
            </div>

            <ProductGrid products={products} selected={selected} onToggle={toggle} />
          </section>
        ))}
      </div>

      <AddSelectedBar count={selected.size} onAdd={addSelectedToCart} onClear={clear} />
    </div>
  );
}
