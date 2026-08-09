# horsie-website

The marketing landing page for
[horsie](https://github.com/blossomstack/horsie) — a self-hosted web app for
running LLM agents as durable, browser-based chat sessions.

Deployed to [horsie.dev](https://horsie.dev).

**Documentation is not here.** It lives at
[docs.horsie.dev](https://docs.horsie.dev), built from `docs/` in the horsie
repository so that a behaviour change and its documentation land in the same
commit. `/docs*` on this site redirects there — see `public/_redirects`.

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **React Router 7**
- **Bun** as package manager

Mirrors the toolchain and conventions of `horsie/clients/web`.

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
│   ├── components/     # Layout: header and footer
│   ├── lib/            # Site config and docs links, utilities
│   └── pages/          # Landing
├── public/_redirects   # /docs* -> docs.horsie.dev, plus the SPA fallback
├── index.html
├── vite.config.ts
└── Makefile
```

## Design tokens

`src/index.css` carries a copy of horsie's palette and type scale. The source
of truth is `DESIGN.md` at the root of the horsie repository, which the product
UI and docs.horsie.dev both derive from — change it there first, then copy.

## Deployment

`.github/workflows/deploy.yml` builds and runs `wrangler pages deploy` on every
push to `main`, direct-upload to the `horsie-website` Cloudflare Pages project.
Cloudflare's git integration is not used — its GitHub App is not authorized for
the organisation.

The site uses `BrowserRouter`, so static hosting needs a SPA fallback;
`public/_redirects` handles it, after the docs redirects.
