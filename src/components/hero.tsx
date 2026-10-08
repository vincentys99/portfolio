import { site } from "@/data/site";

const steps = ["Select the skills you need", "Add them to your cart", "Check out to get in touch"];

// TODO(step 12): the live A/B test swaps this headline between two variants.
export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:pb-12 sm:pt-16">
      <p className="text-sm font-medium text-muted">{site.location}</p>
      <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
        {site.role}.
      </h1>
      <p className="mt-4 max-w-xl text-muted sm:text-lg">
        Browse my skills like a store. A/B testing comes first, backed by the
        engineering to build it.
      </p>

      <ol className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted-surface text-xs font-semibold">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
