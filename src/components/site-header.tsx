import Link from "next/link";
import { site } from "@/data/site";
import { CartButton } from "./cart-button";
import { DownloadIcon } from "./icons";

// The fast path: CV and Contact on every page, so a recruiter can skip the store.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <Link
          href="/"
          className="mr-auto flex h-11 items-center text-lg font-semibold tracking-tight"
        >
          {site.name}
        </Link>

        {/* No room for Shop on small phones; the homepage and footer link to it. */}
        <Link
          href="/shop"
          className="hidden h-11 items-center rounded-full px-3 text-sm font-semibold hover:bg-muted-surface sm:flex"
        >
          Shop
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

        <CartButton />
      </div>
    </header>
  );
}
