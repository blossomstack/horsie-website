import { ArrowRight, MonitorSmartphone, Split, TerminalSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/config";

const FEATURES = [
  {
    icon: MonitorSmartphone,
    title: "Your machines, your browser",
    description:
      "Run Claude Code on your own dev machines and drive it from any web browser — no SSH, no tmux gymnastics.",
  },
  {
    icon: Split,
    title: "Control / data plane split",
    description:
      "A thin worker manages agent lifecycles while each session streams I/O independently, so sessions stay isolated and resilient.",
  },
  {
    icon: TerminalSquare,
    title: "Built for Claude Code",
    description:
      "Purpose-built around the Claude Code CLI: session creation, live streaming chat, and worker management out of the box.",
  },
];

const QUICKSTART = `# Install dependencies and build
make setup && make build

# Run the server
make dev-server

# In another terminal, connect a worker
make dev-worker TOKEN=<token> DIR=<path>`;

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 text-center">
        <p className="mx-auto mb-4 w-fit rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-widest text-zinc-400">
          Open source · Self-hosted
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Remote Claude Code sessions,{" "}
          <span className="text-brand-400">from your browser</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Horsie is a web-based interface for managing Claude Code CLI sessions
          running on your worker machines. Create sessions, chat live, and keep
          your code exactly where it belongs — on your hardware.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            to="/docs/quickstart"
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-brand-400"
          >
            Get started
            <ArrowRight className="size-4" />
          </Link>
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
      <section className="mx-auto w-full max-w-3xl px-4 pb-24">
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
