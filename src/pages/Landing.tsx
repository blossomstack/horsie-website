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

/** Primitive -> the horsie noun that owns it. Signals the shape of the system. */
const PRIMITIVES = [
  { name: "Harness", owns: "horsie-server", note: "the loop that decides what happens next" },
  { name: "Agent", owns: "an agent preset", note: "model, instructions, tools, skills" },
  { name: "Environment", owns: "an environment", note: "where it runs, and against what" },
  { name: "Session", owns: "a session", note: "one running agent, and its full record" },
  { name: "Sandbox", owns: "a runtime", note: "where tool calls actually execute" },
  { name: "Trace", owns: "the transcript", note: "how a run gets reviewed afterwards" },
];

const FEATURES = [
  {
    icon: History,
    title: "Sessions are logs, not processes",
    body: "Every model call, tool call and result is appended server-side as it happens. Close the tab mid-run, restart the server, reopen an hour later — the record is intact, and it is also the audit trail.",
    href: DOCS.internals,
    linkLabel: "Sessions & durability",
  },
  {
    icon: Boxes,
    title: "A sandbox per session",
    body: "The horsie CLI dials out from your own machine and works in the directories you name — no inbound port, no upload. Or configure a Fly Machines or velos vendor and the server builds a fresh one per session, then throws it away.",
    href: DOCS.localRuntime,
    linkLabel: "Runtimes",
  },
  {
    icon: Timer,
    title: "Work that happens without you",
    body: "Routines run an agent against a fixed prompt on a schedule or from the API. What comes back is a session you can open, read and continue — not a log file and a red cross.",
    href: `${SITE.docsUrl}/using/routines/`,
    linkLabel: "Routines",
  },
  {
    icon: Puzzle,
    title: "An outer harness you build",
    body: "Skills, plugin bundles, hooks and MCP servers, selected per session. Skills load progressively, so a bundle of forty costs a line each until one is picked. Hooks are deterministic — a check that runs is worth more than a rule in a prompt.",
    href: `${SITE.docsUrl}/using/skills-and-plugins/`,
    linkLabel: "Skills & plugins",
  },
  {
    icon: GitBranch,
    title: "Real repositories",
    body: "Connect a GitHub App once and launch sessions with repositories checked out into the sandbox, using a short-lived scoped token minted per session that is never stored and never reaches the browser.",
    href: `${SITE.docsUrl}/using/github-repositories/`,
    linkLabel: "GitHub",
  },
  {
    icon: ShieldCheck,
    title: "Your models, your keys",
    body: "Anthropic and OpenAI-compatible providers, the Responses API, or a ChatGPT plan. Nothing in the server's environment can lend a provider a credential it was not given explicitly.",
    href: `${SITE.docsUrl}/operating/models-and-providers/`,
    linkLabel: "Models & providers",
  },
];

const QUICKSTART = `# Run the harness
git clone https://github.com/blossomstack/horsie.git
docker compose -f horsie/docker/docker-compose.yml up -d
# open http://localhost:3789 -> Settings -> add a provider + model

# Give it a sandbox
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
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          An open-source <span className="text-orange">managed agent harness</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-legend-dim">
          An agent is a model plus a harness — the loop that assembles context,
          calls the model, decides whether a tool call is allowed, runs it, and
          writes down what happened. horsie is the harness. You bring the model.
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

        {/* Two minutes of the real thing, above the argument for it. Nothing
            below this point is as persuasive as watching a session run. */}
        <div className="mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-lg border border-rule bg-panel">
          <iframe
            src="https://www.youtube-nocookie.com/embed/saoVBeuFrT4"
            title="horsie — a two-minute walkthrough"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="block aspect-video w-full border-0"
          />
        </div>
        <p className="mx-auto mt-3 max-w-4xl text-sm text-legend-faint">
          A session end to end, a sandbox on your own machine, and an agent
          building a workflow that another agent then runs.
        </p>
      </section>

      {/* The argument. Everything else on this page is evidence for it. */}
      <section className="border-t border-rule bg-screen">
        <div className="mx-auto w-full max-w-5xl px-4 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Three lifetimes, not one
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-legend-dim">
            The session, the harness and the sandbox are separate things with
            separate lifetimes. That one decision is why a run here behaves
            differently from a job on a build server.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-rule bg-chassis p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-legend-faint">
                A CI job
              </p>
              <p className="text-sm leading-relaxed text-legend-dim">
                The run <em>is</em> a process. State lives in it, so when it
                exits all that survives is a log. Isolation and execution are
                the same object — the container is the run — so you cannot
                pause without destroying the workspace, and you cannot resume
                without starting from the top. An agent inside such a job has
                nowhere durable to keep its own state.
              </p>
            </div>
            <div className="rounded-lg border border-orange-quiet bg-chassis p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-orange">
                A horsie run
              </p>
              <p className="text-sm leading-relaxed text-legend-dim">
                The session is a durable log, so a run can be paused, resumed
                and <em>steered</em>: open a failed one, read exactly what
                happened, answer the question it parked on, retry a single step
                against the workspace as the last attempt left it. The sandbox
                is disposable and can be rebuilt underneath it.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-legend-faint">
            A build server hands you a log file and a red cross. This hands you
            a run you can walk back into.
          </p>
        </div>
      </section>

      <section
        id="quickstart"
        className="mx-auto w-full max-w-3xl scroll-mt-20 px-4 py-24"
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
        <div className="mx-auto w-full max-w-4xl px-4 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            The pieces, named
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-legend-dim">
            Systems like this are described with a handful of nouns. The useful
            test is whether you can say which component owns each one.
          </p>
          <dl className="mt-8 divide-y divide-rule border-y border-rule">
            {PRIMITIVES.map(({ name, owns, note }) => (
              <div
                key={name}
                className="grid gap-1 py-4 sm:grid-cols-[10rem_11rem_1fr] sm:items-baseline sm:gap-4"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.08em] text-legend">
                  {name}
                </dt>
                <dd className="text-sm text-orange">{owns}</dd>
                <dd className="text-sm text-legend-dim">{note}</dd>
              </div>
            ))}
          </dl>
          <a
            href={DOCS.whatItIs}
            className="mt-8 inline-flex items-center gap-2 text-sm text-orange hover:underline"
          >
            The full mapping, and what horsie does not have yet
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </section>

      <section className="border-t border-rule bg-screen">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Managed, and owned
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-legend-dim">
            You do not build a harness — you declare an agent and start a
            session. But the harness runs on your infrastructure, the sandbox is
            a machine you chose, the record is in your database, and the model
            keys are yours. Your code never has to leave the machine it is
            already on.
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-legend-dim">
            It is not an IDE. There is deliberately no file browser and no diff
            view — you already have an editor open, and horsie's job ends where
            that begins.
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
