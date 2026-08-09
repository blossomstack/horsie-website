import {
  ArrowRight,
  Boxes,
  GitBranch,
  History,
  Puzzle,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { DOCS, SITE } from "@/lib/config";

const FEATURES = [
  {
    icon: History,
    title: "Sessions you come back to",
    body: "Every message, tool call and result is journaled server-side and streams live to the browser. Close the tab mid-run, restart the server, reopen an hour later — the transcript is intact, and it is also the audit log.",
    href: DOCS.internals,
    linkLabel: "How durability works",
  },
  {
    icon: Boxes,
    title: "Tools run where you say",
    body: "The horsie CLI dials out from your own machine and works in the directories you name — no inbound port, no upload. Or configure a Fly Machines or velos vendor and the server builds a fresh sandbox per session.",
    href: DOCS.localRuntime,
    linkLabel: "Runtimes",
  },
  {
    icon: GitBranch,
    title: "Real repositories",
    body: "Connect a GitHub App once and launch sessions with repositories checked out into the runtime, using a short-lived token minted per session that is never stored and never reaches the browser.",
    href: `${SITE.docsUrl}/using/github-repositories/`,
    linkLabel: "GitHub",
  },
  {
    icon: Puzzle,
    title: "More tools, per session",
    body: "Remote MCP servers and git-installed skill and plugin bundles, enabled per session rather than globally. Skills, slash commands, subagent types and hooks all come along.",
    href: `${SITE.docsUrl}/using/skills-and-plugins/`,
    linkLabel: "Skills & plugins",
  },
  {
    icon: Timer,
    title: "Work that happens without you",
    body: "Save an agent and a fixed prompt as a routine and run it on a timer or from the API. Or chain agents into a workflow graph, where each step's result decides the next and they all share one workspace.",
    href: DOCS.workflows,
    linkLabel: "Workflows",
  },
  {
    icon: ShieldCheck,
    title: "Your models, your keys",
    body: "Anthropic and OpenAI-compatible providers, the OpenAI Responses API, or a ChatGPT plan. Nothing in the server's environment can lend a provider a credential it was not given explicitly.",
    href: `${SITE.docsUrl}/operating/models-and-providers/`,
    linkLabel: "Models & providers",
  },
];

const QUICKSTART = `# Run the server
git clone https://github.com/blossomstack/horsie.git
docker compose -f horsie/docker/docker-compose.yml up -d
# open http://localhost:3789 -> Settings -> add a provider + model

# Give sessions somewhere to run tools
curl -fsSL https://get.horsie.dev | sh
horsie auth login --server http://localhost:3789
horsie connect --server http://localhost:3789 --workspace .`;

export default function Landing() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 text-center">
        <p className="mx-auto mb-4 w-fit rounded-full border border-rule px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-legend-faint">
          Open source · Self-hosted
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          LLM agent sessions, <span className="text-orange">on your own terms</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-legend-dim">
          horsie is a self-hosted web app for running LLM agents as durable chat
          sessions. Open it in a browser, pick a model and a runtime, and chat —
          with your code and your tools running wherever you say.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#quickstart"
            className="flex items-center gap-2 rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-orange-ink transition-colors hover:bg-orange-hover"
          >
            Get started
            <ArrowRight className="size-4" />
          </a>
          <a
            href={SITE.docsUrl}
            className="rounded-md border border-rule px-5 py-2.5 text-sm font-semibold text-legend transition-colors hover:border-rule-strong hover:bg-panel"
          >
            Read the docs
          </a>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-rule px-5 py-2.5 text-sm font-semibold text-legend transition-colors hover:border-rule-strong hover:bg-panel"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section
        id="quickstart"
        className="mx-auto w-full max-w-3xl scroll-mt-20 px-4 pb-24"
      >
        <div className="overflow-hidden rounded-lg border border-rule bg-panel">
          <div className="flex items-center gap-1.5 border-b border-rule px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-rule-strong" />
            <span className="size-2.5 rounded-full bg-rule-strong" />
            <span className="size-2.5 rounded-full bg-rule-strong" />
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.1em] text-legend-faint">
              terminal
            </span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-legend-dim">
            <code>{QUICKSTART}</code>
          </pre>
        </div>
        <p className="mt-4 text-center text-sm text-legend-faint">
          The full walkthrough is in{" "}
          <a href={DOCS.quickstart} className="text-orange hover:underline">
            the quickstart
          </a>
          , and{" "}
          <a href={DOCS.deploying} className="text-orange hover:underline">
            deploying the server
          </a>{" "}
          covers PostgreSQL, Render and Fly.io.
        </p>
      </section>

      <section className="border-t border-rule bg-screen">
        <div className="mx-auto w-full max-w-6xl px-4 py-20">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight">
            What it does
          </h2>
          <p className="mb-10 max-w-2xl text-legend-dim">
            Everything below ships today. Where something has a limit worth
            knowing about, the docs say so.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body, href, linkLabel }) => (
              <div
                key={title}
                className="flex flex-col rounded-lg border border-rule bg-chassis p-6"
              >
                <Icon className="mb-4 size-5 text-orange" />
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-legend-dim">
                  {body}
                </p>
                <a
                  href={href}
                  className="flex items-center gap-1.5 text-sm text-orange hover:underline"
                >
                  {linkLabel}
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            It is not an IDE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-legend-dim">
            There is deliberately no file browser and no diff view — you already
            have an editor open, and horsie's job ends where that begins. What it
            gives you instead is a run you can walk away from, come back to, and
            read in full.
          </p>
          <a
            href={DOCS.whatItIs}
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-rule px-5 py-2.5 text-sm font-semibold text-legend transition-colors hover:border-rule-strong hover:bg-panel"
          >
            What horsie is
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
