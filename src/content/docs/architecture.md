# Architecture

Horsie is split into a central server and per-machine worker/agent processes,
with a React frontend for session management and chat.

```text
┌─────────────────┐      SSE/HTTP        ┌──────────────────┐
│   Web Client    │◄───────────────────►│  Horsie Server   │
│  (React/Vite)   │   /api/* + /events   │  (Rust/Axum)     │
└─────────────────┘                      └──────────────────┘
                                           │ Control Plane    │ Data Plane
                                           │ /ws/control      │ /ws/agent
                                           ▼                  ▼
                                    ┌────────────┐    ┌──────────────┐
                                    │   Worker   │───►│    Agent     │
                                    │  (control) │    │  (data plane)│
                                    └────────────┘    └──────────────┘
                                                             │
                                                             ▼ spawns
                                                      ┌──────────────┐
                                                      │  Claude CLI  │
                                                      └──────────────┘
```

## Control plane / data plane split

Each worker machine runs a two-process architecture:

- **Worker** (control plane): connects to the server via `/ws/control`. Manages
  agent process lifecycle (start, stop, monitor). Does **not** handle session
  I/O.
- **Agent** (data plane): spawned by the worker as a child process, one per
  session. Connects to the server via `/ws/agent`. Runs the Claude CLI and
  streams I/O directly to the server.

This separation keeps the worker a thin process manager while each agent
handles its own data streaming independently.

## Components

| Component | Tech | Role |
| --- | --- | --- |
| Server | Rust, Axum, SQLite (sqlx) | Central hub; manages workers/agents and routes messages between web clients and agents |
| Worker | Rust | Control plane on dev machines; spawns and monitors agent processes |
| Agent | Rust | Data plane; one per session; runs Claude CLI and streams I/O |
| Web | React 19, Vite, Tailwind CSS 4 | Frontend for creating sessions and chatting with Claude |

## Technology stack

- **Rust 1.85** (2024 edition) with **Axum 0.8** and WebSocket support
- **SQLite** via sqlx for worker and session persistence
- **React 19** with React Router 7, **Vite 7**, **Tailwind CSS 4**
- **Bun** as the JavaScript/TypeScript runtime and package manager
- **Playwright** for E2E tests (requires Node.js)
