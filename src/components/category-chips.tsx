"use client";

import { useEffect, useRef, useState } from "react";
import type { CategoryId } from "@/data/products";
import type { CollectionSection } from "./collection";

// Filter chips that jump to each category section, highlighting the one in view.
export function CategoryChips({ sections }: { sections: CollectionSection[] }) {
  const [activeId, setActiveId] = useState<CategoryId | undefined>(sections[0]?.category.id);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id as CategoryId);
        }
      },
      // A section counts as "in view" once it reaches the band below the sticky bars.
      { rootMargin: "-130px 0px -65% 0px" },
    );
    for (const { category } of sections) {
      const el = document.getElementById(category.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  // Keep the active chip visible when the chip row scrolls sideways on a phone.
  useEffect(() => {
    const nav = navRef.current;
    const chip = nav?.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    if (!nav || !chip) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    nav.scrollTo({ left: chip.offsetLeft - 16, behavior: reduceMotion ? "auto" : "smooth" });
  }, [activeId]);

  return (
    <nav
      ref={navRef}
      aria-label="Skill categories"
      className="sticky top-14 z-30 overflow-x-auto border-b border-line bg-surface [scrollbar-width:none]"
    >
      <ul className="mx-auto flex max-w-6xl gap-2 px-4 py-2">
        {sections.map(({ category, products }) => {
          const active = category.id === activeId;
          return (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                data-id={category.id}
                aria-current={active ? "true" : undefined}
                onClick={() => setActiveId(category.id)}
                className={`flex h-11 items-center gap-1.5 rounded-full px-4 text-sm font-medium ${
                  active ? "bg-ink text-surface" : "bg-muted-surface hover:bg-line"
                }`}
              >
                {category.name}
                <span className={active ? "text-surface/70" : "text-muted"}>
                  {products.length}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
