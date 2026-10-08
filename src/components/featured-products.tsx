"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { AddSelectedBar } from "./add-selected-bar";
import { ProductGrid } from "./product-grid";
import { useSelection } from "./use-selection";

export function FeaturedProducts({ products }: { products: Product[] }) {
  const { selected, toggle, clear, addSelectedToCart } = useSelection();

  return (
    <section aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl px-4 pb-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 id="featured-heading" className="text-xl font-semibold tracking-tight sm:text-2xl">
              Featured skills
            </h2>
            <p className="mt-1 text-sm text-muted">What I&apos;m hired for. Tap to select.</p>
          </div>
          <Link
            href="/shop"
            className="flex h-11 shrink-0 items-center text-sm font-semibold underline-offset-4 hover:underline"
          >
            See all
          </Link>
        </div>

        <ProductGrid
          products={products}
          selected={selected}
          onToggle={toggle}
          maxColumns={3}
        />
      </div>

      <AddSelectedBar count={selected.size} onAdd={addSelectedToCart} onClear={clear} />
    </section>
  );
}
