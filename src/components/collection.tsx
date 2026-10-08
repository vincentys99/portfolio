"use client";

import { useState } from "react";
import type { Category, Product, ProductId } from "@/data/products";
import { AddSelectedBar } from "./add-selected-bar";
import { CategoryChips } from "./category-chips";
import { ProductCard } from "./product-card";

export type CollectionSection = {
  category: Category;
  products: Product[];
};

// TODO(step 7): move selection into the cart context and save it in localStorage.
export function Collection({ sections }: { sections: CollectionSection[] }) {
  const [selected, setSelected] = useState<ReadonlySet<ProductId>>(new Set());

  function toggle(id: ProductId) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function addSelectedToCart() {
    // TODO(step 7): add the selection to the cart, then clear it and open the drawer.
  }

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

            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductCard
                    product={product}
                    selected={selected.has(product.id)}
                    onToggle={() => toggle(product.id)}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <AddSelectedBar
        count={selected.size}
        onAdd={addSelectedToCart}
        onClear={() => setSelected(new Set())}
      />
    </div>
  );
}
