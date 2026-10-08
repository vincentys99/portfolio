"use client";

import { useState } from "react";
import type { ProductId } from "@/data/products";
import { useCart } from "./cart-context";

// Cards toggle in and out of a selection, then "Add selected to cart" adds them all.
export function useSelection() {
  const { add } = useCart();
  const [selected, setSelected] = useState<ReadonlySet<ProductId>>(new Set());

  function toggle(id: ProductId) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function clear() {
    setSelected(new Set());
  }

  function addSelectedToCart() {
    add(selected);
    clear();
  }

  return { selected, toggle, clear, addSelectedToCart };
}
