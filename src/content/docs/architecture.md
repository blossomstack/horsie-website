# Architecture

`horsie-server` is a single binary: a Rust/Axum HTTP server that serves the web
UI, terminates session traffic over HTTP + SSE, and accepts runtime
connections over a WebSocket on the same port.

```text
┌─────────────────┐   HTTP + SSE    ┌──────────────────┐
│   Web Client    │◄───────────────►│  horsie-server   │
│  (React/Vite)   │    /api/* + /events               │
└─────────────────┘                 └──────────────────┘
                                       │
                                       │ /api/runtime/connect (WebSocket)
                                       ▼
                                ┌───────────────┐
                                │ Runtime vendor │
                                ├───────────────┤
                                │ local — a      │
                                │ daemon on your │
                                │ own machine    │
                                ├───────────────┤
                                │ velos —        │
                                │ managed        │
                                │ containers the │
                                │ server         │
                                │ provisions     │
                                └───────────────┘
```

## Runtime vendors

Every session's tools run inside a **runtime** — a sandbox where the agent
reads files, runs commands, and optionally clones repositories. A **runtime
vendor** is a source of runtimes:

- **`local`** — you run a `horsie-runtime` daemon on your own machine; it
  dials the server over an outbound WebSocket and registers as a selectable
  vendor. The server never reaches into your machine.
- **`velos`** — the server provisions a fresh, isolated container per session
  on a [velos](https://github.com/blossomstack/velos) backend and tears it
  down when the session ends. Supports GitHub repo checkout and skill/plugin
  bundle installation; `local` doesn't.

## Two kinds of configuration

The server never mixes these:

- **`config.json`** — deployment/bootstrap only: storage paths, the database
  location, whether the `local` runtime is allowed. Edited by hand.
- **The settings database** (SQLite) — everything you tune day to day: model
  providers and models, runtime vendors, GitHub, MCP servers, skill bundles.
  Edited from the **Settings** page in the UI.

## Components

| Component | Tech | Role |
| --- | --- | --- |
| `horsie-server` | Rust, Axum, SQLite (sqlx) | Serves the web UI and API, journals sessions, brokers runtime connections |
| `horsie-runtime` | Rust | Sandboxed process that runs a session's tools; deployed via the `local` or `velos` vendor |
| Web UI | React 19, Vite, Tailwind CSS 4 | Session chat, Settings, and admin views |

The separate `horsie` CLI (workflow/job orchestration with per-job sandboxing)
shares the `horsie-runtime` binary but is otherwise an independent tool from
the server above — see the
[repo README](https://github.com/blossomstack/horsie) for how the pieces
relate, and the
[user guide](https://github.com/blossomstack/horsie/tree/main/docs/guide) for
day-to-day usage of the server.
