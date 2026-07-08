---
category: Brand
---

# Logo

The RB Marine wordmark — a ship's-wheel/compass icon paired with the "RB MARINE" lockup. Use it in headers, footers, and splash screens. Pick the `variant` to match the background.

- `variant="primary"` — navy wordmark, green icon. Use on white/light backgrounds.
- `variant="reversed"` — white "RB", green icon + "MARINE". Use on dark navy backgrounds.
- `variant="mono-dark"` / `variant="mono-light"` — single-color lockups for constrained contexts.
- `variant="icon-only"` — just the compass mark.
- `layout="stacked"` centers the icon above the wordmark; `height` scales the whole lockup.

```jsx
<Logo variant="reversed" height={72} />
<Logo variant="icon-only" height={48} />
```
