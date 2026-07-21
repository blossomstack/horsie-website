# Introduction

**horsie server** is a self-hosted web app for running LLM agents. You open it
in a browser, create a **session**, and chat with an agent that runs its tools
inside a sandboxed **runtime**. Sessions are durable: the full transcript is
journaled server-side and streams live to the browser, so you can close the
tab, reconnect, and pick up where you left off.

## Why horsie?

- **Model-independent.** Point sessions at whichever provider and model you
  configure — horsie isn't tied to a single model lab.
- **Your choice of where tools run.** Use your own machine as a runtime (the
  `local` vendor, a small daemon that dials back to the server) or managed,
  ephemeral containers the server provisions for you (`velos`).
- **More than a chat box.** Connect a GitHub App to run sessions against real
  repositories, add remote MCP servers for more tools, and install skill
  bundles — all configured from the Settings page.
- **Self-hosted and open source.** The server, runtime, and web UI are MIT OR
  Apache-2.0 licensed and run wherever you can run a container.

## How it fits together

```
 Browser (web UI)
    │  HTTP + SSE
    ▼
 horsie-server ──────────────► settings database (providers, models,
    │                          vendors, GitHub, MCP, skill bundles)
    │  runs each session's tools in a…
    ▼
 Runtime vendor
    ├─ local  — a horsie-runtime daemon on your own machine, dialing back
    └─ velos  — a managed, ephemeral container the server provisions for you
```

horsie also ships a separate `horsie` CLI for running multi-agent workflow
graphs as sandboxed background jobs — a different tool from the server above.
See the [repo README](https://github.com/blossomstack/horsie) for how the two
relate.

See [Architecture](/docs/architecture) for a closer look, or the full
[user guide](https://github.com/blossomstack/horsie/tree/main/docs/guide) in
the repo for installing, self-hosting, and day-to-day usage.
