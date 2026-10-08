import type { Metadata } from "next";
import { Collection, type CollectionSection } from "@/components/collection";
import { categories, getProductsByCategory, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop all skills",
  description: "Every skill I offer, grouped by category. Select the ones you need and add them to your cart.",
};

const sections: CollectionSection[] = categories.map((category) => ({
  category,
  products: getProductsByCategory(category.id),
}));

export default function ShopPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-8 sm:pt-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">All skills</h1>
        <p className="mt-2 max-w-xl text-muted">
          {products.length} skills in {categories.length} categories. Select the ones you
          need, then add them to your cart.
        </p>
      </div>
      <Collection sections={sections} />
    </>
  );
}
