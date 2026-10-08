import Link from "next/link";
import { BundleCard } from "@/components/bundle-card";
import { FeaturedProducts } from "@/components/featured-products";
import { Hero } from "@/components/hero";
import {
  bundles,
  categories,
  featuredProductIds,
  getProduct,
  products,
} from "@/data/products";

const featured = featuredProductIds.map(getProduct);

const roleBundles = bundles.map((bundle) => ({
  bundle,
  skillNames: bundle.productIds.map((id) => getProduct(id).name),
}));

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts products={featured} />

      <section aria-labelledby="roles-heading" className="mx-auto max-w-6xl px-4 py-10">
        <h2 id="roles-heading" className="text-xl font-semibold tracking-tight sm:text-2xl">
          Shop by role
        </h2>
        <p className="mt-1 text-sm text-muted">
          Hiring for one of these? Add the whole skill set in one tap.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {roleBundles.map(({ bundle, skillNames }) => (
            <li key={bundle.id}>
              <BundleCard bundle={bundle} skillNames={skillNames} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <Link
          href="/shop"
          className="flex min-h-14 items-center justify-between gap-4 rounded-2xl bg-ink px-5 py-4 text-surface"
        >
          <span>
            <span className="block font-semibold">Browse all skills</span>
            <span className="block text-sm text-surface/70">
              {products.length} skills in {categories.length} categories
            </span>
          </span>
          <span aria-hidden="true" className="text-xl">
            →
          </span>
        </Link>
      </section>
    </>
  );
}
