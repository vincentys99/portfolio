import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductSpecs } from "@/components/product-specs";
import { RelatedProducts } from "@/components/related-products";
import { SkillTags } from "@/components/skill-tags";
import { badgeLabels, categories, getFlagshipProducts } from "@/data/products";

// Only flagship products get a full page; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getFlagshipProducts().map((product) => ({ slug: product.id }));
}

function getFlagship(slug: string) {
  return getFlagshipProducts().find((product) => product.id === slug);
}

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const product = getFlagship((await params).slug);
  return product ? { title: product.name, description: product.tagline } : {};
}

export default async function FlagshipPage({ params }: PageProps<"/shop/[slug]">) {
  const product = getFlagship((await params).slug);
  if (!product?.flagship) notFound();

  const category = categories.find((c) => c.id === product.category);

  return (
    <article>
      <div className="mx-auto max-w-3xl px-4 pb-10 pt-6 sm:pt-10">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/shop" className="underline-offset-4 hover:underline">
                Shop
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/shop#${product.category}`}
                className="underline-offset-4 hover:underline"
              >
                {category?.name}
              </Link>
            </li>
          </ol>
        </nav>

        <header className="mt-6">
          {product.badge && (
            <span className="mb-2 inline-block rounded-full bg-ink px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-surface">
              {badgeLabels[product.badge]}
            </span>
          )}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-lg text-muted">{product.tagline}</p>
          <p className="mt-4 leading-relaxed">{product.flagship.intro}</p>
        </header>

        <div className="mt-8">
          <ProductSpecs specs={product.specs} />
        </div>

        <section aria-labelledby="stories-heading" className="mt-12">
          <h2 id="stories-heading" className="text-xl font-semibold tracking-tight sm:text-2xl">
            {product.flagship.stories.length === 1 ? "The story" : "Stories"}
          </h2>

          <div className="mt-4 space-y-6">
            {product.flagship.stories.map((story) => (
              <section
                key={story.title}
                className="rounded-2xl border border-line p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight">{story.title}</h3>
                <p className="mt-1 text-sm text-muted">{story.summary}</p>
                <div className="mt-4 space-y-3 leading-relaxed">
                  {story.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {story.result && (
                  <p className="mt-4 rounded-xl bg-muted-surface px-4 py-3 text-sm">
                    <span className="font-semibold">Result: </span>
                    {story.result}
                  </p>
                )}
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    Skills shown
                  </p>
                  <SkillTags ids={story.skills} label={`Skills shown in ${story.title}`} />
                </div>
              </section>
            ))}
          </div>
        </section>

        {product.review && (
          <figure className="mt-12 rounded-2xl bg-muted-surface p-5">
            <blockquote className="leading-relaxed">“{product.review.quote}”</blockquote>
            <figcaption className="mt-2 text-sm text-muted">
              {product.review.name}, {product.review.role}
            </figcaption>
          </figure>
        )}

        <section aria-labelledby="related-heading" className="mt-12">
          <h2 id="related-heading" className="mb-3 text-lg font-semibold tracking-tight">
            Frequently bought together
          </h2>
          <RelatedProducts ids={product.relatedIds} />
        </section>
      </div>

      {/* Sticky add-to-cart, like a real store's product page. */}
      <div className="sticky bottom-0 z-30 border-t border-line bg-surface pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-4">
          <p className="hidden min-w-0 flex-1 truncate text-sm font-semibold sm:block">
            {product.name}
          </p>
          <div className="flex-1 sm:max-w-60">
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>
    </article>
  );
}
