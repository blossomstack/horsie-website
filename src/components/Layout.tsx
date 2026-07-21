import { ChessKnight, Github } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { SITE } from "@/lib/config";
import { cn } from "@/lib/utils";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "text-sm transition-colors hover:text-zinc-100",
    isActive ? "text-zinc-100" : "text-zinc-400",
  );
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <ChessKnight className="size-5 text-brand-400" />
            {SITE.name}
          </Link>
          <nav className="flex items-center gap-5">
            <NavLink to="/docs" className={navLinkClass}>
              Docs
            </NavLink>
            {SITE.portalUrl ? (
              <a
                href={SITE.portalUrl}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                Portal
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-sm text-zinc-600">
                Portal
                <span className="rounded-full border border-zinc-700 px-1.5 py-0.5 text-[10px] uppercase tracking-wide">
                  Soon
                </span>
              </span>
            )}
          </nav>
          <div className="ml-auto">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-zinc-100"
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

      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-zinc-500">
          <span>
            {SITE.name} — {SITE.tagline}
          </span>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
