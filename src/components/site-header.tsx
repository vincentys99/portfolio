import Link from "next/link";
import { site } from "@/data/site";
import { CartIcon, DownloadIcon } from "./icons";

// The fast path: CV and Contact on every page, so a recruiter can skip the store.
export function SiteHeader() {
  // TODO(step 7): read the count from the cart context and open the drawer.
  const cartCount: number = 0;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <Link
          href="/"
          className="mr-auto flex h-11 items-center text-lg font-semibold tracking-tight"
        >
          {site.name}
        </Link>

        {site.cv.available ? (
          <a
            href={site.cv.href}
            download
            className="flex h-11 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent hover:bg-accent-hover"
          >
            <DownloadIcon className="size-4" />
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
          </a>
        ) : (
          <span
            aria-disabled="true"
            title="CV coming soon"
            className="flex h-11 cursor-not-allowed items-center gap-1.5 rounded-full bg-muted-surface px-4 text-sm font-semibold text-muted"
          >
            <DownloadIcon className="size-4" />
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
          </span>
        )}

        <Link
          href={site.contactHref}
          className="flex h-11 items-center rounded-full px-3 text-sm font-semibold hover:bg-muted-surface"
        >
          Contact
        </Link>

        <button
          type="button"
          aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
          className="relative flex size-11 items-center justify-center rounded-full hover:bg-muted-surface"
        >
          <CartIcon className="size-6" />
          {cartCount > 0 && (
            <span className="absolute right-0.5 top-0.5 flex min-w-5 items-center justify-center rounded-full bg-ink px-1 text-xs font-semibold leading-5 text-surface">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
