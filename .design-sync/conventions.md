# Building with the RB Marine Design System

Brand system for RB Marine (marine propulsion). Palette: **dark navy `#001e60`**, **light green `#00e99a`** (accent), plus light blue `#41b6e6`, lilac `#d28dd3`, digital blue `#0066cc`. The signature look is a navy base with green accents and diagonal gradients.

## Setup — no provider needed

Components are fully self-contained: they inline their own styles, read no React context, and need **no provider, theme wrapper, or global stylesheet**. Import and render directly:

```jsx
import { Button, GradientBlock, Display, Body } from 'rb-marine-design-system';
```

All exports are also on `window.RBMarine` at runtime — the 10 components plus the raw token objects: `colors`, `gradients`, `typography`, `spacing`, `borderRadius`, `shadows`, `semantic`, `breakpoints`.

## Styling idiom — props, not classes

There are **no CSS classes and no utility vocabulary**. Style each component two ways:

1. **Component props** carry the design language — `variant`, `size`, `color`, `gradient`, `level`. Prefer these; they encode the brand.
2. **The `style` prop** (`React.CSSProperties`) on every component for layout overrides. Reach for the token objects for values you add yourself:

```jsx
import { colors, spacing, gradients } from 'rb-marine-design-system';
<div style={{ background: colors.darkBlue, padding: spacing.xl }}>…</div>
```

Do not invent class names — they resolve to nothing. For your own layout scaffolding (grids, flex rows), use inline `style` with token values.

## Light-on-dark vs dark-on-light — the one gotcha

Text components split by intended background, so pick the surface to match the default (or pass `color`):

- **Default to navy text (for light backgrounds):** `Heading`, `Body`, `Label`, `Badge` (most variants).
- **Default to light text (for dark/gradient backgrounds):** `Display` (white), `Tagline` (lilac), `Button variant="outline-light"`.

So `Display`, `Tagline`, and `outline-light` buttons must sit on a dark surface — wrap them in a `GradientBlock` or a `{ background: colors.darkBlue }` container, exactly as `HeroCard` does internally. On white, white-default `Display` is invisible.

## Components

- **Logo** — `variant`: primary / reversed (for navy bg) / mono-dark / mono-light / icon-only; `layout`: horizontal | stacked; `height`.
- **Button** — `variant`: primary (green) / secondary (navy) / outline / outline-light / ghost; `size`: sm/md/lg; `fullWidth`, `disabled`; `as="a"` + `href` for links.
- **Badge** — `variant`: green / blue / navy / lilac / light / outline. Uppercase pill.
- **GradientBlock** — full-bleed brand-gradient panel; `gradient`: hero / greenEnergy / lilacWave / powerSurge; `size`: sm/md/lg/full. Content bottom-aligns.
- **HeroCard** — navy hero block; props `eyebrow`, `headline`, `body` (no children).
- **Display / Heading / Body / Label / Tagline** — the type scale (see gotcha above). `Heading` `level` 1–4 sets the tag and size.

Each component ships a `.d.ts` (its exact prop contract) and a `.prompt.md` (usage) — read those for the authoritative API.

## Typeface

The brand font is **Bould** (with Poppins → Verdana fallback), applied via `fontFamily` in inline styles. **The font files are not bundled** — unless the host app loads Bould/Poppins, text renders in Verdana. Layout and spacing are unaffected.

## Idiomatic snippet

```jsx
import { GradientBlock, Display, Body, Button } from 'rb-marine-design-system';

<GradientBlock gradient="hero" size="lg">
  <Display>Always on.</Display>
  <Body color="rgba(255,255,255,0.75)" style={{ margin: '8px 0 20px' }}>
    Marine power, engineered to run.
  </Body>
  <Button variant="primary">Get started</Button>
</GradientBlock>
```
