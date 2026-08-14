# iOS Job Roadmap

A single-page checklist for getting job-ready as a junior iOS developer. 206 things
worth doing at least once, in order, each linking to the thing you actually do.

Static Astro site. No account, no backend, no database — progress is saved in your
browser and can be exported to a file.

## Running it

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # static output in dist/
bun run preview
bun run check    # astro check (TypeScript)
```

## How progress is stored

Ticked items live in `localStorage` under the key `ios-roadmap.v1`:

```json
{ "version": 1, "updatedAt": "2026-08-15T…", "done": ["swift-closures", "lc-two-sum"] }
```

That means progress is per-browser. Clearing site data wipes it, so use **Export**
to save a JSON backup, and **Import** to restore it or move to another device.

Every task carries a hand-written, permanent `id` (`swift-closures`,
`lc-two-sum`, `ship-testflight-build`). Progress is keyed on that id and never on
list position, so items can be reordered, reworded, or inserted without disturbing
anything already ticked off. The build fails if two tasks share an id.

## Editing the roadmap

Content is typed data, not markdown:

```
src/data/phases/foundations.ts   Phases 1–3   Swift, SwiftUI, UIKit
src/data/phases/craft.ts         Phases 4–5   Modern Swift, Xcode & shipping
src/data/phases/portfolio.ts     Phases 6–7   The two portfolio apps
src/data/phases/career.ts        Phases 8, 10, 11
src/data/leetcode.ts             Phase 9      The 75 problems
src/data/gate.ts                 Application Gate
src/data/roadmap.ts              Assembles all of it
```

Adding a task means adding one object with a fresh `id`, a `label`, and a `url`.
Never change an `id` that has already shipped — that silently unticks it for anyone
who had it done.

### The Application Gate

The gate is not its own checklist. It's a view over ids that already exist in the
phases (see `src/data/gate.ts`), so finishing a phase item advances the gate
automatically rather than asking you to tick the same work twice. The build fails
if a gate requirement points at an id that no longer exists.

## Deploying

Vercel, framework preset **Astro**, root directory `.`, no environment variables.
Build `astro build`, output `dist/`.

## Licence

MIT — see [LICENSE](LICENSE).
