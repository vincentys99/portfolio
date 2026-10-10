"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  badgeLabels,
  categories,
  getProduct,
  type Product,
  type ProductId,
} from "@/data/products";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductSpecs } from "./product-specs";
import { RelatedProducts } from "./related-products";

type QuickViewContextValue = {
  open: (id: ProductId) => void;
};

const QuickViewContext = createContext<QuickViewContextValue | null>(null);

export function useQuickView(): QuickViewContextValue {
  const quickView = useContext(QuickViewContext);
  if (!quickView) throw new Error("useQuickView must be used inside QuickViewProvider");
  return quickView;
}

// One quick view for the whole site: a bottom sheet on phones, a side panel on
// desktop. The native <dialog> handles focus, Escape and the inert background.
export function QuickViewProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [productId, setProductId] = useState<ProductId | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (productId && dialog && !dialog.open) dialog.showModal();
  }, [productId]);

  const close = () => dialogRef.current?.close();

  return (
    <QuickViewContext value={{ open: setProductId }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="quick-view-title"
        onClose={() => setProductId(null)}
        // A click on the backdrop lands on the dialog element itself.
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 mt-auto max-h-[85dvh] w-full max-w-none rounded-t-2xl bg-surface p-0 text-ink backdrop:bg-ink/40 sm:my-0 sm:ml-auto sm:h-dvh sm:max-h-dvh sm:w-[28rem] sm:rounded-none"
      >
        {productId && <QuickViewContent product={getProduct(productId)} onClose={close} />}
      </dialog>
    </QuickViewContext>
  );
}

function QuickViewContent({ product, onClose }: { product: Product; onClose: () => void }) {
  const category = categories.find((c) => c.id === product.category);
  const storyHref = product.flagship
    ? `/shop/${product.id}`
    : product.fullStoryOn && `/shop/${product.fullStoryOn}`;

  return (
    <div className="flex max-h-[85dvh] flex-col sm:h-dvh sm:max-h-dvh">
      <div className="flex items-center justify-between gap-3 border-b border-line py-1 pl-5 pr-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {category?.name}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="flex size-11 items-center justify-center rounded-full text-2xl leading-none hover:bg-muted-surface"
        >
          ×
        </button>
      </div>

      {/* Keyed so switching to a related skill starts at the top. */}
      <div key={product.id} className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
        <div>
          {product.badge && (
            <span className="mb-2 inline-block rounded-full bg-ink px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-surface">
              {badgeLabels[product.badge]}
            </span>
          )}
          <h2 id="quick-view-title" className="text-2xl font-semibold tracking-tight">
            {product.name}
          </h2>
          <p className="mt-1 text-muted">{product.tagline}</p>
        </div>

        <ProductSpecs specs={product.specs} />

        <section>
          <h3 className="text-sm font-semibold">Proof</h3>
          <p className="mt-1 text-sm leading-relaxed">{product.proof}</p>
          {storyHref && (
            <Link
              href={storyHref}
              onClick={onClose}
              className="mt-2 flex h-11 w-fit items-center text-sm font-semibold underline underline-offset-4"
            >
              Read the full story
            </Link>
          )}
        </section>

        {product.review && (
          <figure className="rounded-2xl bg-muted-surface p-4 text-sm">
            <blockquote className="leading-relaxed">“{product.review.quote}”</blockquote>
            <figcaption className="mt-2 text-muted">
              {product.review.name}, {product.review.role}
            </figcaption>
          </figure>
        )}

        <section>
          <h3 className="mb-2 text-sm font-semibold">Frequently bought together</h3>
          <RelatedProducts ids={product.relatedIds} />
        </section>

        {/* TODO(step 11): "Did you know" card from product.factId. */}
      </div>

      <div className="border-t border-line px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}
