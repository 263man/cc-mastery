# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack, outputs to .next/dev)
npm run build    # production build (Turbopack by default)
npm run start    # start production server
npx eslint .     # lint (next lint is removed in v16 — use ESLint directly)
npx tsc --noEmit # type-check without building
```

There are no tests in this project.

## Architecture

**Stack:** Next.js 16.2.9 · React 19.2.4 · Tailwind CSS v4 · TypeScript (strict)

All source lives under `src/`. The App Router root is `src/app/`:
- `layout.tsx` — root layout, loads Geist fonts, sets `<html>` and `<body>`
- `page.tsx` — home route (`/`)
- `globals.css` — Tailwind v4 entry (`@import "tailwindcss"`) plus CSS custom properties for light/dark background and foreground tokens

Path alias: `@/*` → `src/*`.

### Next.js 16 conventions to know

- **Named exports only** — do not use `export default` anywhere in this project.
- **Client Components** — add `'use client'` at the top of any file that uses `useState`, `useEffect`, event handlers, or browser APIs. Pages are Server Components by default.
- **Async Request APIs** — `cookies()`, `headers()`, `draftMode()`, and page/layout `params`/`searchParams` are now Promises (synchronous access removed in v16). Use `await` or React's `use()`.
- **`proxy` not `middleware`** — the edge proxy file is named `proxy.ts` and exports `export function proxy(request: Request) {}`.
- **Turbopack** — used for both `dev` and `build` by default. Custom webpack config will break the build unless you pass `--webpack`.
- **`revalidateTag`** now requires a second `cacheLife` profile argument.
- **`next lint` removed** — run `eslint` directly.

### Tailwind v4

No `tailwind.config.*` file. Configuration lives in `globals.css` via `@theme inline { ... }`. Utility classes work the same way in JSX.
