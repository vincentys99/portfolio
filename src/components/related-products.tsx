"use client";

import { getProduct, type ProductId } from "@/data/products";
import { useQuickView } from "./quick-view";

// "Frequently bought together": each related skill opens in the quick view.
export function RelatedProducts({ ids }: { ids: ProductId[] }) {
  const { open } = useQuickView();

  return (
    <ul className="space-y-2">
      {ids.map((id) => {
        const related = getProduct(id);
        return (
          <li key={id}>
            <button
              type="button"
              onClick={() => open(id)}
              className="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-left hover:border-muted"
            >
              <span>
                <span className="block text-sm font-semibold">{related.name}</span>
                <span className="block text-xs text-muted">{related.tagline}</span>
              </span>
              <span aria-hidden="true" className="text-muted">
                →
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
