import { yearsOfUse, type Specs } from "@/data/products";

// Concrete specs instead of skill bars. Rows without data yet are left out.
export function ProductSpecs({ specs }: { specs: Specs }) {
  const years = yearsOfUse(specs);
  const rows = [
    {
      label: "Experience",
      value:
        years === undefined
          ? undefined
          : years < 1
            ? `Since ${specs.since}`
            : `About ${years} ${years === 1 ? "year" : "years"} (since ${specs.since})`,
    },
    { label: "Where used", value: specs.usedAt.join(", ") || undefined },
    { label: "Tools", value: specs.tools.join(", ") || undefined },
  ].filter((row) => row.value);

  if (rows.length === 0) return null;

  return (
    <dl className="divide-y divide-line rounded-2xl border border-line text-sm">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-3 px-4 py-3">
          <dt className="text-muted">{row.label}</dt>
          <dd className="font-medium">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
