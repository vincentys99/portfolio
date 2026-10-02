import { site } from "@/data/site";

// TODO(step 5): replace with the hero and collection page.
export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {site.role}.
      </h1>
      <p className="mt-3 text-muted">The store is opening soon.</p>
    </section>
  );
}
