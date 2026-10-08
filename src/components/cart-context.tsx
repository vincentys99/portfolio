"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { ProductId } from "@/data/products";

type CartContextValue = {
  items: ProductId[];
  add: (ids: Iterable<ProductId>) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

// TODO(step 8): save to localStorage, add remove/clear, "Added to cart" message.
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ProductId[]>([]);

  function add(ids: Iterable<ProductId>) {
    setItems((prev) => {
      const next = [...prev];
      for (const id of ids) if (!next.includes(id)) next.push(id);
      return next.length === prev.length ? prev : next;
    });
  }

  return <CartContext value={{ items, add }}>{children}</CartContext>;
}

export function useCart(): CartContextValue {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside CartProvider");
  return cart;
}
