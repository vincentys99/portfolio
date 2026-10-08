import type { Badge, Product } from "@/data/products";
import { CheckIcon } from "./icons";

const badgeLabels: Record<Badge, string> = {
  bestseller: "Bestseller",
  featured: "Featured",
};

type ProductCardProps = {
  product: Product;
  selected: boolean;
  onToggle: () => void;
};

// The whole card is one toggle button, so it's an easy tap target on a phone.
export function ProductCard({ product, selected, onToggle }: ProductCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={`relative flex h-full w-full flex-col items-start gap-1.5 rounded-2xl border p-3 text-left sm:p-4 ${
        selected
          ? "border-ink bg-muted-surface ring-1 ring-ink"
          : "border-line bg-surface hover:border-muted"
      }`}
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
  );
}
