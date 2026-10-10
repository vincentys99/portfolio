"use client";

import { badgeLabels, type Product } from "@/data/products";
import { CheckIcon } from "./icons";
import { useQuickView } from "./quick-view";

type ProductCardProps = {
  product: Product;
  selected: boolean;
  onToggle: () => void;
};

// Most of the card is one toggle button, so it's an easy tap target on a phone.
// Quick view is a separate button below it, since buttons can't be nested.
export function ProductCard({ product, selected, onToggle }: ProductCardProps) {
  const { open } = useQuickView();

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border ${
        selected ? "border-ink bg-muted-surface ring-1 ring-ink" : "border-line bg-surface"
      }`}
    >
      <button
        type="button"
        aria-pressed={selected}
        onClick={onToggle}
        className="relative flex flex-1 flex-col items-start gap-1.5 rounded-t-2xl p-3 pb-1 text-left sm:p-4 sm:pb-1"
      >
        <span
          aria-hidden="true"
          className={`absolute right-3 top-3 flex size-6 items-center justify-center rounded-full border ${
            selected ? "border-ink bg-ink text-surface" : "border-line bg-surface text-transparent"
          }`}
        >
          <CheckIcon className="size-3.5" />
        </span>

        {product.badge && (
          <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-surface">
            {badgeLabels[product.badge]}
          </span>
        )}
        <span className="pr-7 text-sm font-semibold leading-snug sm:text-base">
          {product.name}
        </span>
        <span className="line-clamp-3 text-xs leading-relaxed text-muted sm:text-sm">
          {product.tagline}
        </span>
      </button>

      <button
        type="button"
        onClick={() => open(product.id)}
        aria-label={`Quick view: ${product.name}`}
        className="mx-1.5 mb-1.5 flex h-11 items-center justify-center rounded-xl text-xs font-semibold underline-offset-4 hover:underline sm:text-sm"
      >
        Quick view
      </button>
    </div>
  );
}
