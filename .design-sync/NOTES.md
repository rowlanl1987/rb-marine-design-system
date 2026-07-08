# design-sync notes — rb-marine-design-system

## Repo shape
Source-only React DS: **no package.json, no build, no dist/, no Storybook** in the original repo. Components are plain `.jsx` with inline-style objects driven by `tokens/index.js`. Shape = `package`, built in **synth/barrel mode**.

## How the build is wired
- **Added `package.json` at the repo root** (name/version/`module: index.js`). The converter needs a `package.json` with a name to resolve `PKG_DIR`; the source repo had none. This file is a *sync input we added*, not upstream — if the repo later gains its own package.json/build, reconcile with `.design-sync/config.json`.
- `cfg.entry = "./index.js"` bundles the real barrel, so `window.RBMarine` carries the **10 components + 9 token objects** (colors, gradients, typography, spacing, borderRadius, shadows, semantic, breakpoints, default tokens).
- `cfg.componentSrcMap` lists all 10 components explicitly (barrel mode disables heuristic auto-discovery).
- Deps (esbuild, ts-morph, @types/react, react, react-dom, @playwright/test) live in `.ds-sync/node_modules` (gitignored). Build command:
  ```
  node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./.ds-sync/node_modules --out ./ds-bundle
  node .ds-sync/package-validate.mjs ./ds-bundle
  ```

## Expected / triaged warnings (NOT new issues on re-sync)
- **`[DTS_REACT]` @types/react not found** — benign. There are no shipped `.d.ts` to extract from; all prop contracts are hand-authored in `cfg.dtsPropsFor`. The warning refers to auto-extraction, which we don't use.
- **`[CSS_RUNTIME]`** (styles.css / _ds_bundle.css are runtime stubs) — expected. This is an inline-style DS with no shipped stylesheet. Render check passes, so styling is real.
- **`.d.ts parse check skipped — typescript not in node_modules`** — the hand-authored bodies use standard `React.*` types; if you want the tsc check, `npm i typescript` into `.ds-sync`.
- Known render warns: **none**.

## Typeface
Brand font is **Bould** (`"Bould","Poppins",Verdana,sans-serif`), applied via inline `fontFamily`. **Font files are NOT bundled** — Bould is proprietary and the repo ships no font files. Text renders in the Verdana fallback unless the host app loads Bould/Poppins. Documented for the design agent in `conventions.md`. (No `[FONT_MISSING]` fires because there's no shipped CSS to scrape @font-face from.)

## Re-sync risks (what can silently go stale)
- **`cfg.dtsPropsFor` is hand-maintained.** If a component's source props change (new variant, renamed prop), the emitted `.d.ts` will NOT reflect it automatically — update the config body. Cross-check against the source `.jsx` on major changes.
- **`cfg.componentSrcMap` is explicit.** A NEW component added to the repo will not appear in the sync until it's added here (and given a `.design-sync/docs/<Name>.md` stub for grouping). Auto-discovery is off in barrel mode.
- **Groups come from `.design-sync/docs/*.md` `category:` frontmatter.** New components default to `general` without a doc stub.
- **The root `package.json` is ours.** Watch for upstream adding its own.
