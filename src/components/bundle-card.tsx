"use client";

import type { Bundle } from "@/data/products";
import { useCart } from "./cart-context";
import { CheckIcon } from "./icons";

type BundleCardProps = {
  bundle: Bundle;
  skillNames: string[];
};

export function BundleCard({ bundle, skillNames }: BundleCardProps) {
  const { items, add } = useCart();
  const allInCart = bundle.productIds.every((id) => items.includes(id));

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        Bundle · {bundle.productIds.length} skills
      </p>
      <h3 className="mt-1 text-lg font-semibold tracking-tight">{bundle.name}</h3>
      <p className="mt-1 text-sm text-muted">{bundle.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Skills in ${bundle.name}`}>
        {skillNames.map((name) => (
          <li key={name} className="rounded-full bg-muted-surface px-2.5 py-1 text-xs font-medium">
            {name}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        {allInCart ? (
          <p
            role="status"
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-line text-sm font-semibold"
          >
            <CheckIcon className="size-4" />
            All in your cart
          </p>
        ) : (
          <button
            type="button"
            onClick={() => add(bundle.productIds)}
            className="h-12 w-full rounded-full bg-accent px-5 text-sm font-semibold text-on-accent hover:bg-accent-hover"
          >
            Add all {bundle.productIds.length} to cart
          </button>
        )}
      </div>
    </article>
  );
}
