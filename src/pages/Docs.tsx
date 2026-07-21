import ReactMarkdown from "react-markdown";
import { Navigate, NavLink, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { docs, getDoc } from "@/lib/docs";
import { cn } from "@/lib/utils";

export default function Docs() {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? getDoc(slug) : undefined;

  if (!doc) {
    return <Navigate to="/docs/introduction" replace />;
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl gap-10 px-4 py-10">
      <aside className="hidden w-52 shrink-0 sm:block">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Documentation
        </p>
        <nav className="flex flex-col gap-1">
          {docs.map(({ slug: docSlug, title }) => (
            <NavLink
              key={docSlug}
              to={`/docs/${docSlug}`}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                docSlug === doc.slug
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200",
              )}
            >
              {title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <article className="prose prose-invert prose-zinc min-w-0 max-w-none flex-1 prose-headings:scroll-mt-20 prose-a:text-brand-400 prose-pre:border prose-pre:border-zinc-800 prose-pre:bg-zinc-900">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>
      </article>
    </div>
  );
}
