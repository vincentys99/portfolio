"use client";

import Link from "next/link";
import { useCart } from "./cart-context";
import { CartIcon } from "./icons";

export function CartButton() {
  const count = useCart().items.length;

  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${count} ${count === 1 ? "item" : "items"}`}
      className="relative flex size-11 items-center justify-center rounded-full hover:bg-muted-surface"
    >
      <CartIcon className="size-6" />
      {count > 0 && (
        <span className="absolute right-0.5 top-0.5 flex min-w-5 items-center justify-center rounded-full bg-ink px-1 text-xs font-semibold leading-5 text-surface">
          {count}
        </span>
      )}
    </Link>
  );
}
