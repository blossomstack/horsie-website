# Introduction

Horsie is a web-based interface for managing remote
[Claude Code](https://docs.anthropic.com/en/docs/claude-code) sessions. It lets
you interact with the Claude Code CLI running on your worker machines through a
web browser — no SSH sessions or terminal multiplexers required.

## Why Horsie?

- **Your code stays on your machines.** Workers run on your own hardware; the
  server only routes messages.
- **Many sessions, one browser tab each.** Create and drive multiple Claude Code
  sessions across multiple worker machines from a single web UI.
- **Self-hosted and open source.** The whole stack — server, worker, agent, and
  web UI — is MIT licensed and runs anywhere Rust and Node.js do.

## How it fits together

A central **server** (Rust/Axum) manages workers and proxies messages between
browser clients and agents. A thin **worker** runs on each dev machine and
spawns an **agent** process per session; each agent runs the Claude Code CLI and
streams its I/O back to the server over a WebSocket data plane.

See [Architecture](/docs/architecture) for the full picture, or jump straight to
the [Quickstart](/docs/quickstart).
