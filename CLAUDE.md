# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**fivebitrate** is a SvelteKit web application deployed to Cloudflare Workers using `@sveltejs/adapter-cloudflare`

This is a SvelteKit application configured to deploy on Cloudflare Workers with the following stack:
- **Frontend**: SvelteKit 2.x with Svelte 5
- **Styling**: Tailwind CSS 4.x
- **Database**: LibSQL (SQLite) via Drizzle ORM
- **Deployment**: Cloudflare Workers via Wrangler
- **Package Manager**: pnpm

**IMPORTANT:** Before working on anything, fetch the relevant llms.txt:

- Shadcn/ui components: https://www.shadcn-svelte.com/llms.txt
- Tailwind CSS: https://tailwindcss.com/llms.txt
- svelte: https://svelte.dev/llms.txt
- Svelte documentation for use with medium context windows - https://svelte.dev/llms-medium.txt
- drizzle - https://orm.drizzle.team/llms-full.txt
- Cloudflare d1 - https://developers.cloudflare.com/d1/llms.txt
- Cloudflare workers - https://developers.cloudflare.com/workers/llms-full.txt
- Polar Payment - https://polar.sh/docs/llms-full.txt

When working on styling tasks, read the Tailwind docs above first.
When working on components, read the Shadcn/ui components library docs above first.
When working on svelte, read the svelte docs above first.
When working on drizzle or database operations, read the drizzle docs above and D1 docs above first.
When working on Cloudflare Workers, read the Cloudflare docs above first.
When working on Polar Payment, read the Polar docs above first.

## Commands

- `pnpm dev` — Start dev server (Vite)
- `pnpm build` — Production build
- `pnpm run cf-typegen` — Regenerate Cloudflare Worker types into `src/worker-configuration.d.ts`

Package manager is **pnpm** (enforced via `.npmrc` `engine-strict=true`). Do not use npm or yarn.

## Tech Stack

- **Svelte 5** with runes (`$props()`, `$state()`, etc.)
- **SvelteKit 2** with TypeScript (strict mode)
- **Tailwind CSS v4** via Vite plugin, with `@tailwindcss/forms` and `@tailwindcss/typography` plugins
- **Cloudflare Workers** runtime — access platform bindings via `platform.env` in SvelteKit server hooks/load functions (typed in `src/app.d.ts`)

## Architecture

Standard SvelteKit file-based routing under `src/routes/`. Shared code goes in `src/lib/` (aliased as `$lib`). Global CSS with Tailwind imports lives in `src/routes/layout.css`.

Cloudflare platform types (`Env`, `CfProperties`, `ExecutionContext`) are available on `App.Platform` — run `pnpm run cf-typegen` after modifying `wrangler.jsonc` bindings.

## CSS

Tailwind v4 uses CSS-first configuration. Plugins are imported in `src/routes/layout.css` via `@plugin` directives. CSS files use the `tailwindcss` language association in VS Code.
