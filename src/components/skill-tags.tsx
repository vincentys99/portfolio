"use client";

import { getProduct, type ProductId } from "@/data/products";
import { useQuickView } from "./quick-view";

// Tags for the skills a story proves; each opens that skill's quick view.
export function SkillTags({ ids, label }: { ids: ProductId[]; label: string }) {
  const { open } = useQuickView();

  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {ids.map((id) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => open(id)}
            className="flex min-h-10 items-center rounded-full bg-muted-surface px-3 text-xs font-medium hover:bg-line"
          >
            {getProduct(id).name}
          </button>
        </li>
      ))}
    </ul>
  );
}
