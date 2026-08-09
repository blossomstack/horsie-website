import { ChessKnight, Github } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { DOCS, SITE } from "@/lib/config";

const FOOTER_LINKS = [
  { label: "Quickstart", href: DOCS.quickstart },
  { label: "Deploying", href: DOCS.deploying },
  { label: "CLI", href: `${SITE.docsUrl}/cli/reference/` },
  { label: "How it works", href: DOCS.internals },
];

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-rule bg-chassis/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <ChessKnight className="size-5 text-orange" />
            {SITE.name}
          </Link>
          <nav className="flex items-center gap-5">
            <a
              href={SITE.docsUrl}
              className="text-sm text-legend-dim transition-colors hover:text-legend"
            >
              Docs
            </a>
          </nav>
          <div className="ml-auto">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-legend-dim transition-colors hover:text-legend"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-legend-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            {SITE.name} — {SITE.tagline}
          </span>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="transition-colors hover:text-legend"
              >
                {label}
              </a>
            ))}
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-legend"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
