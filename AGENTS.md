# SmartLot — Vercel React Best Practices

This project is a **Vite + React 19 SPA** (no Next.js, no SSR/RSC). Below are the applicable rules from the Vercel React Best Practices guide.

## Applicable Rules

### Bundle Size Optimization (CRITICAL)

| Rule | Applied | Notes |
|------|---------|-------|
| `bundle-barrel-imports` | ✅ `vite.config.js` | `manualChunks` splits `gsap` and vendor code. Avoid `import { X } from 'lucide-react'` — Vite tree-shakes it, but individual imports are preferred. |
| `bundle-dynamic-imports` | ✅ `src/App.jsx` | Below-fold sections (BentoGrid, Demo, Contact) loaded via `React.lazy()` + `<Suspense>`. |
| `bundle-analyzable-paths` | ✅ | All imports use direct relative paths. |
| `bundle-conditional` | ✅ `src/App.jsx` | IntroAnimation loaded eagerly (critical path), lazy for rest. |

### Re-render Optimization (MEDIUM)

| Rule | Applied | Notes |
|------|---------|-------|
| `rerender-derived-state-no-effect` | ✅ `src/App.jsx` | Body scroll lock uses `classList.toggle` instead of direct style mutation. |
| `rerender-hoist-jsx` | ✅ | Static data (`features`, `stats`) hoisted outside components. |

### Rendering Performance (MEDIUM)

| Rule | Applied | Notes |
|------|---------|-------|
| `rendering-content-visibility` | ✅ `src/index.css` | `.content-visibility-auto` class applied to below-fold sections (BentoGrid, Demo). |
| `rendering-conditional-render` | ✅ | Ternary preferred; `&&` used for one-shot intro (correct). |

### JavaScript Performance (LOW-MEDIUM)

| Rule | Applied | Notes |
|------|---------|-------|
| `client-passive-event-listeners` | ✅ `InteractiveBackground.jsx` | `mousemove` listener uses `{ passive: true }`. |
| `js-early-exit` | ✅ | Already used throughout (e.g., `!startAnimation return`). |

## Non-Applicable Rules

The following categories have **zero applicability** to this Vite + React SPA:

- **`async-*`** — No server-side waterfalls (no data fetching at all)
- **`server-*`** — No server components, RSC, or server actions (not Next.js)
- **`client-*` (except passive listener)** — No data fetching, no SWR, no localStorage
- **`advanced-*`** — `useEffectEvent`, `useLatest` patterns are overkill for this app's complexity

## When Adding New Features

1. **New components** — Keep critical-path components eagerly loaded; use `React.lazy()` for anything below the fold or behind an interaction.
2. **New dependencies** — Check bundle impact. Split heavy libraries via `manualChunks` in `vite.config.js`.
3. **Event listeners** — Always add `{ passive: true }` for scroll/wheel/touch/mousemove listeners that don't call `preventDefault()`.
4. **Data fetching** — If adding API calls, use a single `fetch` wrapper; no need for SWR/React Query at this scale.
