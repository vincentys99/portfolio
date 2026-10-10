"use client";

import type { ProductId } from "@/data/products";
import { useCart } from "./cart-context";
import { CheckIcon } from "./icons";

// Adds one product straight to the cart, for the quick view and flagship pages.
export function AddToCartButton({ productId }: { productId: ProductId }) {
  const { items, add } = useCart();

  if (items.includes(productId)) {
    return (
      <p
        role="status"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line text-sm font-semibold"
      >
        <CheckIcon className="size-4" />
        In your cart
      </p>
    );
  }

  return (
    <button
      type="button"
      onClick={() => add([productId])}
      className="h-12 w-full rounded-full bg-accent px-5 text-sm font-semibold text-on-accent hover:bg-accent-hover"
    >
      Add to cart
    </button>
  );
}
