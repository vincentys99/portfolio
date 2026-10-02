import { site, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-muted-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:justify-between">
        <div className="space-y-1">
          <p className="font-semibold">{site.name}</p>
          <p className="text-sm text-muted">{site.role}</p>
          <p className="text-sm text-muted">{site.location}</p>
        </div>

        <ul className="-mx-2 flex flex-wrap gap-x-2 gap-y-1">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center px-2 text-sm font-medium underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto max-w-6xl px-4 pb-8 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS,
        hosted on Vercel.
      </p>
    </footer>
  );
}
