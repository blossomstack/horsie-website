# horsie-website

The marketing landing page and documentation site for
[Horsie](https://github.com/blossomstack/horsie) — a self-hosted web app for
running LLM agents as durable, browser-based chat sessions. This site will
also become the entry point to the hosted horsie portal (TBD).

Docs pages here are a light orientation only; the full user guide lives in
the [repo's `docs/guide/`](https://github.com/blossomstack/horsie/tree/main/docs/guide)
and isn't duplicated here.

Deployed to [horsie.dev](https://horsie.dev).

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS 4** (with `@tailwindcss/typography` for docs)
- **React Router 7**
- **react-markdown** + remark-gfm for docs content
- **Bun** as package manager

Mirrors the toolchain and conventions of `horsie/web`.

## Development

```bash
make setup    # bun install
make dev      # dev server with hot reload
make build    # type-check + production build
make lint     # ESLint
make check    # lint + build, run before committing
```

## Project structure

```
├── src/
│   ├── components/     # Shared UI (Layout, header/footer)
│   ├── content/docs/   # Docs pages as markdown (register in src/lib/docs.ts)
│   ├── lib/            # Site config, docs loader, utilities
│   └── pages/          # Landing, Docs
├── index.html
├── vite.config.ts
└── Makefile
```

## Adding a docs page

1. Create `src/content/docs/<slug>.md`.
2. Add `{ slug, title }` to `DOC_ORDER` in `src/lib/docs.ts`.

The page is then available at `/docs/<slug>`.

## Deployment

`.github/workflows/deploy.yml` builds and runs `wrangler pages deploy` on
every push to `main`, direct-upload to the `horsie-website` Cloudflare Pages
project (no Cloudflare git-integration — see `ops` repo's
`iac/cloudflare/horsie-website.tf` for the project, `horsie.dev` custom
domain, and the scoped deploy token).

## Notes

- The "Portal" nav item is a placeholder until the hosted portal's location is
  decided; set `portalUrl` in `src/lib/config.ts` to enable it.
- The site uses `BrowserRouter`, so static hosting needs a SPA fallback
  (rewrite all paths to `index.html`) — handled by `public/_redirects`.
