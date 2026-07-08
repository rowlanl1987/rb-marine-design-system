---
category: Actions
---

# Button

The primary call-to-action control. Green `primary` for the main action, navy `secondary` for supporting actions, `outline`/`ghost` for low-emphasis. Renders as a `<button>` by default; pass `as="a"` with `href` for links.

- `variant`: `primary` (green), `secondary` (navy), `outline`, `outline-light` (for dark backgrounds), `ghost`.
- `size`: `sm` | `md` | `lg`.
- `fullWidth` stretches to the container; `disabled` dims and disables interaction.

```jsx
<Button variant="primary" size="lg" onClick={handleStart}>Get started</Button>
<Button variant="outline-light" as="a" href="/fleet">View fleet</Button>
```
