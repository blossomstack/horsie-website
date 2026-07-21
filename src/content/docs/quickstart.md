# Quickstart

Get a horsie server and worker running locally in a few minutes.

## Prerequisites

- **Rust 1.85+** (2024 edition)
- **Bun** — JavaScript/TypeScript runtime and package manager
- **Node.js** — required for E2E tests (Playwright)
- **Claude Code CLI** installed on the worker machine

## Build and run

Clone the repository and install dependencies:

```bash
git clone https://github.com/zhxiaogg/horsie.git
cd horsie
make setup
```

Build everything (Rust binaries + web frontend):

```bash
make build
```

Run the server (defaults to port 3000, auto-builds the web frontend first):

```bash
make dev-server
# or on a custom port:
make dev-server PORT=8080
```

In another terminal, start a worker on the machine where you want Claude Code
sessions to run:

```bash
make dev-worker TOKEN=<token> DIR=<path>
```

Useful variations:

```bash
# Connect to a remote server
make dev-worker TOKEN=<token> DIR=<path> SERVER_URL=ws://host:port

# Use a custom agent binary
make dev-worker TOKEN=<token> DIR=<path> AGENT_BINARY=/path/to/horsie-agent
```

Then open the web UI, create a session on your worker, and start chatting with
Claude Code from the browser.

## Next steps

- [Architecture](/docs/architecture) — control plane / data plane split and
  component overview
