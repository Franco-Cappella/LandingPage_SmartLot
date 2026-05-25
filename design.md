---
name: SmartLot Enterprise
colors:
  background: "#F7F4EF"
  on-background: "#0E121B"
  surface: "#FDFCF9"
  on-surface: "#0E121B"
  primary: "#0C1E3F"
  on-primary: "#FDFCF9"
  accent: "#2A5CBF"
  on-accent: "#FDFCF9"
  accent-sky: "#6C93D6"
  accent-gold: "#C9A96E"
  muted: "#5A6B8A"
typography:
  headline:
    fontFamily: Archivo
    fontSize: 5rem
    fontWeight: 800
    letterSpacing: -0.02em
  subhead:
    fontFamily: Archivo
    fontSize: 3rem
    fontWeight: 700
  body:
    fontFamily: DM Sans
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: DM Sans
    fontSize: 0.875rem
    fontWeight: 500
    textTransform: uppercase
    letterSpacing: 0.06em
  stat:
    fontFamily: Archivo
    fontSize: 6rem
    fontWeight: 900
    fontVariantNumeric: tabular-nums
  caption:
    fontFamily: DM Sans
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 32px
  xl: 40px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 64px
motion:
  energy: moderate
  easing:
    entry: "power4.out"
    exit: "power2.in"
    ambient: "sine.inOut"
  duration:
    entrance: 0.8
    hold: 2.5
    transition: 1.0
  atmosphere:
    - radial-glow
    - subtle-grain
    - grid-lines
  transition: crossfade
---

## Overview

SmartLot is a B2B SaaS platform for corporate parking and access control management, powered by AI. The brand is warm-corporate: cream-based, navy-anchored, with a precise blue accent. The video should communicate control, efficiency, and modernity — eliminating chaos from parking management. The audience is facility managers and corporate real estate directors in Spanish-speaking LATAM enterprises. Copy uses voseo argentino (Gestioná, Optimizá, Escalá). Tone is confident, warm-professional, never cold or technical.

## Colors

- **Background** `#F7F4EF` — warm cream, the canvas for all scenes. No pure white or dark backgrounds. Use full opacity — video needs more color presence than web UIs.
- **Primary** `#0C1E3F` — deep navy for primary containers, headers, and high-emphasis surfaces.
- **Accent** `#2A5CBF` — crisp corporate blue for CTAs, data highlights, and emphasis. The only saturated color.
- **Surface** `#FDFCF9` — off-white for cards, metrics panels, and inset surfaces.
- **Text** `#0E121B` — near-black with warm tint for body copy. Never pure `#000`.
- **Muted** `#5A6B8A` — slate-blue for secondary text, labels, and metadata.
- **Accent-sky** `#6C93D6` — lighter blue for decorative gradients, secondary accents, data viz.
- **Accent-gold** `#C9A96E` — sparingly used for premium indicators and achievement highlights.
- **Gradient rule:** accent → sky for decorative elements. Navy → accent for emphasis gradients. No full-screen gradients — use radial glows at `rgba(42,92,191,X)` with local falloff.

## Typography

- **Headlines:** Archivo 800, 5rem+, tight letter-spacing `-0.02em`. The brand voice — bold, condensed, authoritative.
- **Subheads:** Archivo 700, 3rem.
- **Body:** DM Sans 400, 1.25rem, `line-height: 1.6`. Professional, readable, warm.
- **Labels:** DM Sans 500, 0.875rem, uppercase, `0.06em` tracking.
- **Stats:** Archivo 900, 6rem, `font-variant-numeric: tabular-nums`.
- **Hierarchy rule:** Archivo for display always; DM Sans for reading always. Never use Archivo for body text or DM Sans for headlines.
- **Built-in availability:** Both Archivo and DM Sans are built-in fonts — no `fonts/` directory needed.

## Layout

- Frame composition follows video-medium rules (density, color presence, scale — see video-composition.md).
- Left-aligned text blocks for narrative scenes; centered for stat reveals and impact moments.
- Generous negative space — let the cream background breathe. 80–120px horizontal padding, 60–80px vertical.
- Content containers use padding + flex/gap, never absolute positioning. Reserve absolute for decoratives.
- Cards and panels use `border-radius: 32px` (the brand's `rounded.lg`) with subtle shadow and glass-backdrop.

## Elevation

- **Flat** (default surface): `background: #FDFCF9`, subtle `box-shadow: 0 4px 20px rgba(12,30,63,0.03)`
- **Lifted** (cards, panels): `box-shadow: 0 8px 32px rgba(12,30,63,0.03)`, `backdrop-filter: blur(24px)`
- **Hovered** (interactive): `box-shadow: 0 16px 40px rgba(12,30,63,0.08)`, translateY(-4px)
- **Modal/overlay**: `box-shadow: 0 30px 60px -15px rgba(12,30,63,0.5)`
- No hard shadows. All shadows tinted toward the navy primary. No pure black shadows.

## Components

- **Badges:** `background: rgba(253,252,249,0.8)`, `border: 1px solid rgba(12,30,63,0.1)`, `border-radius: 9999px`, `font-size: 0.75rem`, uppercase, tracking `0.08em`.
- **Cards:** `background: rgba(253,252,249,0.55)`, `backdrop-filter: blur(24px)`, `border-radius: 32px`, `border: 1px solid rgba(253,252,249,0.75)`, `border-bottom: 1px solid rgba(42,92,191,0.05)`.
- **CTA buttons:** `background: #2A5CBF`, `color: #FDFCF9`, `border-radius: 20px` (CTA hero) / 16px (inline) / 12px (compact), `font-weight: 700`, `font-size: 1.125rem`.
- **Stat blocks:** Archivo 900, gold accent `#C9A96E` for the number, label below in muted `#5A6B8A`, DM Sans 500 uppercase.
- **Particles/ambient:** navy `#0C1E3F` and accent `#2A5CBF` at low opacity (0.03–0.10). No bright or white particles.

## Do's and Don'ts

**Do:**
- Use the cream background `#F7F4EF` as the primary canvas.
- Use `#2A5CBF` sparingly — one accent per frame.
- Let text breathe with generous padding and line-height.
- Fade/slide content from below — grounding, stable motion.
- Use gold `#C9A96E` only for premium callouts and achievement moments.
- Keep animations at moderate energy — controlled, professional, never frantic.

**Don't:**
- Don't use pure white `#FFFFFF` or pure black `#000000` backgrounds.
- Don't use cyan, purple, or neon accents. The only saturated color is `#2A5CBF`.
- Don't use full-screen linear gradients — they band in H.264. Use radial glows.
- Don't animate with `back.out()` or bouncy eases — the brand is controlled, not playful.
- Don't use `repeat: -1` on any timeline — always finite repeats.
- Don't add elements that don't serve the message. Every scene earns its place.
- Don't use gradient text (`background-clip: text` + gradient) — it's a web pattern, not video.
- Don't use `<br>` forced line breaks in body text — let `max-width` handle wrapping.
