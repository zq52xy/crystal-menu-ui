# Design Tokens

## Status

The library has design tokens in two synchronized places:

- `src/styles/variables.less`: canonical styling source used by Less modules.
- `src/styles/tokens.ts`: public read-only TypeScript mirror for AI assistants and app builders.

Use `variables.less` when editing component styles. Use `crystalTokens` when an app, generator, or AI assistant needs to inspect the design system from TypeScript.

## Import

```tsx
import { crystalTokens } from 'crystal-menu-ui';
```

## Token Groups

| Group | Purpose |
|---|---|
| `color` | background, glass panels, text, borders, cyan highlights, danger/success/violet accents |
| `font` | body and display font stacks |
| `radius` | panel and control corner radius |
| `border` | standard border and focus ring width |
| `space` | 4px-based spacing scale |
| `shadow` | panel, focus, inset, and text shadows |

## Display Font Stack

The `font.display` stack is led by `Optima` so consumer apps that have the face installed pick it up automatically. The library does **not** ship or self-host any Optima font file. The fallback chain ends in `Georgia` so every platform renders a humanist-serif feel even without Optima.

Stack (left-to-right preference):

```
"Optima", "Optima Nova", "Linotype Optima", Optima-Regular,
"URW Classico", "Charter", Georgia, "Times New Roman", serif
```

- macOS ships Optima system-wide.
- iOS ships Optima.
- Windows / Linux fall through to URW Classico (open metric-compatible) → Charter → Georgia.
- Optima is a trademarked/licensed face owned by Linotype/Monotype. This library is unofficial learning material; consuming applications are responsible for their own font licensing if they bundle or self-host Optima.

## Core Color Tokens

| Token | Value | Use |
|---|---|---|
| `color.bg` | `#17191e` | page and deep surface base |
| `color.panelTop` | `rgba(57, 69, 82, 0.7)` | glass panel upper gradient |
| `color.panelBottom` | `rgba(15, 26, 37, 0.84)` | glass panel lower gradient |
| `color.border` | `#81dfff` | cyan frame and primary border |
| `color.borderShadow` | `#043c6f` | text and border shadow |
| `color.text` | `#f8fbff` | primary readable text |
| `color.textMuted` | `#949492` | secondary metadata |
| `color.cyan` | `#4bcdff` | active cyan accent |
| `color.success` | `#00f9fb` | resource fills and high-energy cyan |
| `color.danger` | `#f06161` | danger/down states |
| `color.violet` | `#9f7dff` | magic/orb variant |

## Spacing Scale

| Token | Value |
|---|---|
| `space.1` | `4` |
| `space.2` | `8` |
| `space.3` | `12` |
| `space.4` | `16` |
| `space.5` | `20` |
| `space.6` | `24` |

## AI Rules

- Use existing components first; do not rebuild component visuals with ad hoc CSS.
- If custom layout is unavoidable, use `crystalTokens` values.
- Do not introduce new colors for one-off effects; propose a token update instead.
- Do not use official fonts, logos, screenshots, extracted UI cuts, or remote Figma image assets.
- Keep panels angular: radius should stay close to `radius.panel` and `radius.control`.
- Keep the dominant look dark glass + cyan line work, not a broad fantasy palette.

## Sync Rule

When shared token values change, update both:

- `src/styles/variables.less`
- `src/styles/tokens.ts`

Then run:

```bash
npm run typecheck
npm run build
npm run audit:docs
```
