import { ArrowRight, Boxes, GitBranch, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/config";

const FEATURES = [
  {
    icon: Boxes,
    title: "Pick where tools run",
    description:
      "Run agent tools on your own machine with a lightweight daemon that dials back to the server, or on managed, ephemeral containers the server provisions per session.",
  },
  {
    icon: GitBranch,
    title: "GitHub, MCP, and skills",
    description:
      "Connect a GitHub App to run sessions against real repos, add remote MCP servers for more tools, and install skill bundles — all from the Settings page.",
  },
  {
    icon: ShieldCheck,
    title: "Durable, self-hosted sessions",
    description:
      "Every session's transcript is journaled server-side and streams live, so you can close the tab and reconnect later. Self-host it yourself, on your own models — no lock-in.",
  },
];

const QUICKSTART = `# Self-host the server
git clone https://github.com/blossomstack/horsie.git
docker compose -f horsie/docker/docker-compose.yml up -d
# open http://localhost:3789 -> Settings -> add a provider + model

# Install the CLI to point it at code on your own machine
curl -fsSL https://get.horsie.dev | sh
horsie connect --server https://your-server --workspace .`;

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 text-center">
        <p className="mx-auto mb-4 w-fit rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-widest text-zinc-400">
          Open source · Self-hosted
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          LLM agent sessions,{" "}
          <span className="text-brand-400">on your own terms</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Horsie is a self-hosted web app for running LLM agents as durable chat
          sessions. Open it in a browser, pick a model and a runtime, and chat —
          with your code and your tools running wherever you say.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#quickstart"
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-brand-400"
          >
            Get started
            <ArrowRight className="size-4" />
          </a>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Quickstart snippet */}
      <section id="quickstart" className="mx-auto w-full max-w-3xl scroll-mt-20 px-4 pb-24">
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-2.5">
            <span className="size-3 rounded-full bg-zinc-700" />
            <span className="size-3 rounded-full bg-zinc-700" />
            <span className="size-3 rounded-full bg-zinc-700" />
            <span className="ml-2 text-xs text-zinc-500">terminal</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-zinc-300">
            <code>{QUICKSTART}</code>
          </pre>
        </div>
        <p className="mt-4 text-center text-sm text-zinc-500">
          Full walkthrough in{" "}
          <Link to="/docs/introduction" className="text-brand-400 hover:underline">
            the docs
          </Link>{" "}
          or the repo's{" "}
          <a
            href={SITE.docsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-brand-400 hover:underline"
          >
            user guide
          </a>
          .
        </p>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-20 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <Icon className="mb-4 size-6 text-brand-400" />
              <h3 className="mb-2 font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
