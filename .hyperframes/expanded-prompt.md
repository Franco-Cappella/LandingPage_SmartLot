# Expanded Production Prompt: SmartLot Enterprise

## 1. Title + Style Block

**Title:** "SmartLot — El estacionamiento del futuro"
**Duration:** ~40s (1920×1080, 30fps)
**Audience:** Enterprise facility managers, corporate real estate directors, HR/office managers in LATAM
**Tone:** Warm-professional, confident, controlled. Spanish (voseo argentino).

**Brand tokens (from design.md):**

| Token | Value | Usage |
|---|---|---|
| `colors.background` | `#F7F4EF` | Warm cream canvas (scenes 1, 2, 3, 5) |
| `colors.on-background` | `#0E121B` | Primary text (near-black, warm tint) |
| `colors.surface` | `#FDFCF9` | Off-white cards, panels |
| `colors.on-surface` | `#0E121B` | Text on surfaces |
| `colors.primary` | `#0C1E3F` | Deep navy — containers, high-emphasis, stat scene bg |
| `colors.on-primary` | `#FDFCF9` | Text on navy |
| `colors.accent` | `#2A5CBF` | Brand blue — CTAs, data highlights, accent hits |
| `colors.on-accent` | `#FDFCF9` | Text on accent |
| `colors.accent-sky` | `#6C93D6` | Lighter blue — decorative gradients, secondary accent |
| `colors.accent-gold` | `#C9A96E` | Gold — premium indicators, achievement highlights (scene 4 only) |
| `colors.muted` | `#5A6B8A` | Slate blue — secondary text, labels, metadata |
| `typography.headline` | Archivo 800, 5rem+, -0.02em | Display voice |
| `typography.subhead` | Archivo 700, 3rem | Section headers |
| `typography.body` | DM Sans 400, 1.25rem, 1.6 | Reading text |
| `typography.label` | DM Sans 500, 0.875rem, uppercase, 0.06em | Labels, badges |
| `typography.stat` | Archivo 900, 6rem, tabular-nums | Stat values |
| `rounded.lg` | 32px | Cards, panels |
| `rounded.xl` | 40px | Demo/CTA containers |
| `rounded.full` | 9999px | Badges |
| `spacing` | xs:8 / sm:16 / md:24 / lg:48 / xl:64 | Spacing scale |
| `motion.energy` | moderate | Controlled, professional |
| `motion.easing.entry` | `power4.out` | Decelerating entrance |
| `motion.easing.exit` | `power2.in` | Accelerating exit |
| `motion.easing.ambient` | `sine.inOut` | Breathing, drifting |
| `motion.duration.entrance` | 0.8s | Standard entrance |
| `motion.duration.hold` | 2.5s | Content visible time |
| `motion.duration.transition` | 1.0s | Scene change |

---

## 2. Rhythm Declaration

**Pattern:** `problem-PRODUCT-features-SOCIAL PROOF-breathe-CTA`

```
Scene 1 (The Problem)     0.0s —  7.0s   | slow-burn, unsettling, tight
Scene 2 (Solution)        8.0s — 15.0s   | building, reveal, hopeful
Scene 3 (Features)       16.0s — 24.0s   | cascading, energetic, layered
Scene 4 (Social Proof)   25.0s — 33.0s   | PEAK, slamming, gold accent
Scene 5 (CTA)            34.0s — 40.0s   | breathe, warm, resolve
```

Transitions between all scenes. No jump cuts.

---

## 3. Global Rules

**Parallax layers:** Every scene has BG (decoratives + atmosphere), MG (content cards/text), FG (structural elements: rules, labels, metadata). 8-10 elements per scene.

**Micro-motion requirements:** Every decorative has ambient animation (breathe, drift, pulse). No static decoratives.

**Transition style:** Velocity-matched blur crossfade for all scenes. Exit outgoing with `opacity: 0, blur: 8px, 0.33s power2.in`. Enter incoming with `opacity: 0→1, blur: 8px→0, 0.7s power2.out`. The fastest point of both curves meets at the cut at T+0.33s.

**Primary easing:** `power4.out` for entrances, `power2.in` for exits, `sine.inOut` for ambient.

**Font sizes (video scale):** Headlines 64-100px. Body 28-36px. Labels 18-24px. Stats 80-96px. Decorative opacity 12-25%.

**No gradient text** (`background-clip: text`). No pure `#000` or `#FFF`. No `back.out()` eases. No cyan/purple/neon. No `<br>` in body text.

**All tweens use `tl.fromTo()` for deterministic seek behavior.** Ambient loops attach to the timeline via `tl.to()` with finite `repeat` (never `repeat: -1`).

---

## 4. Per-Scene Beats

### Scene 1: The Problem (0.0s → 7.0s)

**Concept:** The viewer is inside the chaos of manual parking management. Fragmented papers, scattered times, a pile of spreadsheets. The frame feels tight, cramped, overwhelming. This is the pain SmartLot eliminates. The message: "No more spreadsheets. No more chaos. Your parking lot runs itself."

**Mood direction:** Tense, slightly claustrophobic. Think editorial documentary about inefficiency — overlaid documents, crossing lines, muted tension. Not dramatic, just uncomfortable.

**Depth layers:**
- **BG (3 elements):** Cream `#F7F4EF` fill. Subtle radial glow `rgba(42,92,191,0.06)` pulsing slowly. Ghost grid lines `rgba(42,92,191,0.08)` horizontal+vertical, with slow scale breath.
- **MG (4 elements):** Scattered "document" panels in `#FDFCF9` at slight random rotations, each with faint navy border `rgba(12,30,63,0.08)`. Inside each: ghost text fragments ("Planilla", "10:30 — 11:45", "Espacio 47", "Pendiente"). These are barely readable — they're texture, not content. They drift slowly upward.
- **FG (3 elements):** Badge top-left: `background: rgba(253,252,249,0.8)` + `border: 1px solid rgba(12,30,63,0.1)`, text "SMARTLOT" in gold `#C9A96E` label style. Headline in Archivo 800, 72px, `#0E121B`: `"Gestioná tu estacionamiento."` — SLIDES in from left. Subheadline in DM Sans 400, 28px, `#5A6B8A`: `"Sin planillas. Sin caos."` — FADES in below. Hairline rule `height: 3px, width: 80px, background: #2A5CBF` — GROWS from `scaleX:0` to `scaleX:1`.

**Animation choreography:**
- `t=0.2` — Badge FADES in from `opacity:0→1`, 0.4s, `power2.out`
- `t=0.5` — Hairline rule GROWS `scaleX:0→1`, 0.6s, `expo.out`
- `t=0.7` — Headline SLIDES from `x:-60, opacity:0→0`, 0.8s, `power4.out`
- `t=1.2` — Subhead FADES from `opacity:0, y:10→0`, 0.5s, `power2.out`
- `t=0.0` — BG glow BREATHES: `scale:1→1.03`, 3s, `sine.inOut`, `yoyo:true`, `repeat:2`
- `t=0.0` — Document panels DRIFT upward: `y:0→-30`, 7s, `none`, each staggered by element
- `t=3.0` — Subhead softens on screen — hold for 1.5s
- `t=5.5` — Begin resolve: all elements begin subtle blur exit

**Transition Out (t=6.7):** Velocity-matched blur crossfade. Outgoing: `opacity:1→0, blur:0→8px, 0.33s power2.in`. Incoming: `opacity:0→1, blur:8px→0, 0.7s power2.out`. The cut at 7.0s.

---

### Scene 2: The Solution (8.0s → 15.0s)

**Concept:** The chaos dissolves into clarity. SmartLot appears as the single source of truth. A clean, organized interface preview — one dashboard to rule them all. The frame breathes. This is the calm after the storm.

**Mood direction:** Clean, premium, editorially crisp. Think Stripe dashboard meets architectural magazine spread. Organized, confident, spacious.

**Depth layers:**
- **BG (3 elements):** Cream `#F7F4EF`. Two radial glows — one top-right `rgba(42,92,191,0.05)`, one bottom-left `rgba(12,30,63,0.03)`, slowly drifting. Subtle grain overlay at `opacity: 0.025`.
- **MG (4 elements):** A large "dashboard preview" panel — center-left, `background: rgba(253,252,249,0.55)`, `backdrop-filter: blur(24px)`, `border-radius: 32px`, `border: 1px solid rgba(253,252,249,0.75)`, `padding: 32px`. Inside: mock stat bars (3 thin accent `#2A5CBF` bars at different widths acting as abstract chart), a circular occupancy widget (ring `border: 4px solid #6C93D6` with inner fill `rgba(42,92,191,0.1)`). Right of dashboard: 3 feature pills stacked — "Asignación IA", "Dashboard", "Acceso Móvil" — each with accent dot `#2A5CBF`.
- **FG (3 elements):** Subhead Archivo 700, 48px, `#0E121B`: `"Todo el control en un solo lugar."` — enters from right. Body text DM Sans 400, 26px, `#5A6B8A`: `"Una plataforma diseñada para eliminar el caos y modernizar la gestión de tus espacios."` — fades below. Metal label bottom-right: "SMARTLOT" in label style, `#C9A96E`.

**Animation choreography:**
- `t=0` (at scene 2 start, T=8.0s) — BG glows already present with drift
- `t=0.2` — Dashboard panel SLIDES from `x:80, opacity:0→0`, 1.0s, `expo.out`
- `t=0.4` — Chart bars FILL: `scaleX:0→1` each at 0.5s stagger, `expo.out`
- `t=0.6` — Occupancy ring DRAWS: `rotation: 0→360` on a circle segment, 1.2s, `expo.out`
- `t=0.8` — Feature pills CASCADE from `y:20, opacity:0→0`, 0.5s each, stagger 0.15, `power3.out`
- `t=1.2` — Subhead SLIDES from `x:-40, opacity:0→0`, 0.8s, `power4.out`
- `t=1.6` — Body FADES from `opacity:0, y:10→0`, 0.6s, `power2.out`
- `t=2.0` — Gold label FADES in, 0.4s
- `t=4.5` — Dashboard panel breathes: `scale: 1→1.01` subtle pulse, 2s, `sine.inOut`, yoyo
- `t=5.5` — Begin exit blur

**Transition Out (t=14.7):** Same blur crossfade pattern. Cut at 15.0s.

---

### Scene 3: Features Showcase (16.0s → 24.0s)

**Concept:** The product in action. Four core features laid out as a grid of cards — each one a distinct value proposition. They cascade in like tiles snapping into a board. This is the "proof" scene: here's what SmartLot actually does.

**Mood direction:** Editorial but dynamic. Think Wired magazine feature layout — structured grid, confident typography, accent highlights pulling attention through the sequence.

**Depth layers:**
- **BG (3 elements):** Cream `#F7F4EF`. Subtle grid overlay `rgba(42,92,191,0.04)` at 80px intervals. Radial glow center `rgba(42,92,191,0.05)`. Large ghost text "SMARTLOT" at `font-size: 300px, opacity: 0.03, color: #0C1E3F` bleeding off-frame right.
- **MG (4 elements):** 2×2 grid of feature cards. Each card:
  - `background: rgba(253,252,249,0.55)`, `border-radius: 32px`, `padding: 32px`
  - `border: 1px solid rgba(253,252,249,0.75)`, `border-bottom: 1px solid rgba(42,92,191,0.05)`
  - Icon circle: `width/height: 48px`, `background: rgba(42,92,191,0.1)`, `border-radius: 16px`, accent `#2A5CBF` icon inside
  - Title: Archivo 700, 28px, `#0E121B`
  - Description: DM Sans 400, 20px, `#5A6B8A`
  - Cards: (1) "Asignación IA" — dynamic AI allocation, (2) "Dashboard Analítico" — real-time metrics, (3) "Acceso Móvil" — contactless entry, (4) "Seguridad" — license plate control
- **FG (3 elements):** Headline Archivo 800, 56px, `#0E121B`: `"Cuatro pilares. Una plataforma."` Top section eyebrow label `#5A6B8A` uppercase: "PRODUCTO". Hairline accent rule `80px, #2A5CBF` beneath headline.

**Animation choreography:**
- `t=0.2` — Eyebrow FADES in, 0.4s, `power2.out`
- `t=0.4` — Hairline GROWS from `scaleX:0→1`, 0.5s, `expo.out`
- `t=0.5` — Headline SLIDES from `x:-40, opacity:0→0`, 0.7s, `power4.out`
- `t=0.8` — Cards CASCADE in: each from `y:40, scale:0.95, opacity:0→0`, 0.8s, stagger 0.15s, `expo.out`. Card 1 top-left, Card 2 top-right, Card 3 bottom-left, Card 4 bottom-right.
- `t=1.8` — Icon dots in each card PULSE: `scale:1→1.1`, 1.0s, `sine.inOut`, yoyo, repeat:6
- `t=2.5` — Each card gets a subtle shadow deepener on stagger 0.5s
- `t=6.0` — Begin exit blur

**Transition Out (t=23.7):** Blur crossfade. Cut at 24.0s.

---

### Scene 4: Social Proof / Stats (25.0s → 33.0s)

**Concept:** PEAK moment. The dark navy canvas SHIFTS — this is the most dramatic visual departure. Gold appears for the first time. Stats SLAM into the frame. The message: this isn't theoretical — real companies already use SmartLot. Trust through numbers.

**Mood direction:** Premium, cinematic, confident. Think annual report hero spread — dark background, gold accents, large numbers that command attention. The brand's "money shot."

**Depth layers:**
- **BG (4 elements):** Deep navy `#0C1E3F` full frame. Golden radial glow `rgba(201,169,110,0.08)` breathing from center. Subtle grain `opacity: 0.02`. Ghost stat numbers at `opacity: 0.04` in light gold, large (200px+), bleeding off edges — giving depth texture.
- **MG (4 elements):** Three stat blocks arranged horizontally, distributed evenly. Each:
  - Number: Archivo 900, 80px, `#FDFCF9`, `font-variant-numeric: tabular-nums`
  - Label: DM Sans 500, 20px, `rgba(253,252,249,0.6)`, uppercase, 0.06em tracking
  - Stats: "+500 Usuarios activos", "+20 Empresas", "+1000 Espacios gestionados"
  - Below: one more row: "+10k Sesiones mensuales" + "99.9% Uptime"
  - Optional gold line under each stat: `height: 2px, width: 40px, background: #C9A96E`
- **FG (3 elements):** Eyebrow label top "TRACCIÓN" in `#C9A96E` uppercase DM Sans 500, 18px. Headline Archivo 700, 44px, `#FDFCF9`: `"Empresas que ya gestionan mejor."` Gold accent rule `width: 120px, height: 3px` `#C9A96E` centered below headline.

**Animation choreography:**
- `t=0.2` — Eyebrow SLIDES from `x:-30, opacity:0→0`, 0.5s, `expo.out`
- `t=0.4` — Gold rule GROWS from `scaleX:0→1`, 0.6s, `expo.out`
- `t=0.6` — Headline SLIDES from `y:-20, opacity:0→0`, 0.8s, `power4.out`
- `t=1.0` — First row stats COUNTER UP (count from 0 to their values) — each at 0.15s stagger, 1.2s count duration, `expo.out`. Gold underline beneath each expands on completion.
- `t=2.2` — Second row stats COUNTER UP, same pattern.
- `t=3.0` — Gold accent rule under each stat PULSES: `opacity: 1→0.6→1`, 1.5s, `sine.inOut`, repeat
- `t=5.5` — BG glow expands slightly for dramatic exit
- `t=7.0` — Begin exit: elements fade slowly

**Transition Out (t=32.7):** Blur crossfade to scene 5. Cut at 33.0s.

---

### Scene 5: CTA (34.0s → 40.0s)

**Concept:** Back to warmth. The cream canvas returns. This is the landing — the invitation. No more features, no more stats. Just a simple, confident ask: try SmartLot. The viewer should feel like they're being welcomed through a door.

**Mood direction:** Warm, open, welcoming. Think premium hospitality welcome desk — clean, warm, nothing selling. Just an invitation.

**Depth layers:**
- **BG (3 elements):** Cream `#F7F4EF` full frame. Soft radial glow `rgba(42,92,191,0.04)` diffused low-center. Subtle warmer tint on one corner `rgba(201,169,110,0.03)`.
- **MG (3 elements):** CTA card centered: `background: rgba(253,252,249,0.7)`, `backdrop-filter: blur(32px)`, `border-radius: 40px`, `padding: 48px 64px`, `box-shadow: 0 8px 32px rgba(12,30,63,0.03)`, `border: 1px solid rgba(253,252,249,0.8)`. Inside: Headline, body, CTA button group.
- **FG (4 elements):** Headline Archivo 800, 56px, `#0E121B`: `"¿Listo para modernizar tu estacionamiento?"` Body DM Sans 400, 26px, `#5A6B8A`: `"Dejá de perder tiempo gestionando planillas. Implementá SmartLot hoy."` CTA button: `background: #2A5CBF`, `color: #FDFCF9`, `border-radius: 20px`, `padding: 16px 40px`, `font-size: 22px`, Archivo 700: `"Solicitar Demo Gratis"` + right arrow icon. Gold logo text bottom-center: "SMARTLOT" in `#C9A96E`, label style.

**Animation choreography (last scene — exit animations allowed):**
- `t=0.2` — CTA card SLIDES from `y:30, opacity:0, scale:0.98→1`, 0.8s, `power4.out`
- `t=0.6` — Headline FADES from `opacity:0, y:15→0`, 0.6s, `power3.out`
- `t=1.0` — Body FADES from `opacity:0, y:10→0`, 0.5s, `power2.out`
- `t=1.3` — CTA button SCALES from `scale:0.95, opacity:0→1`, 0.5s, `back.out(1.2)`
- `t=1.7` — Gold logo FADES in, 0.6s
- `t=2.5` — Button PULSES gently: `box-shadow: 0 0 0 0 rgba(42,92,191,0.4) → 0 0 0 12px rgba(42,92,191,0)`, 1.5s, `sine.inOut`, repeat:3 (finite)
- **Exit animations (LAST SCENE ONLY):**
- `t=5.0` — Everything fades to `opacity:0` gently over 1.0s, `power2.inOut`
- `t=6.0` — Frame fades to `background: #0C1E3F` (final hold/fade to navy)
- Final frame at 40s: dark navy with "SMARTLOT" in gold `#C9A96E` centered, small, fading out.

---

## 5. Recurring Motifs

- **Hairline accent rule** — `80-120px wide, 2-3px height, #2A5CBF` — appears in every scene as a structural divider. In scene 4 it's gold `#C9A96E`.
- **Badge "SMARTLOT"** — gold `#C9A96E` label-style badge in scenes 1 and 5 (bookend). In scene 2 it's bottom-right.
- **Radial glow** — every scene has at least one `rgba(42,92,191, X)` radial glow breathing. Scene 4 switches to gold.
- **Grain overlay** — subtle `opacity: 0.02-0.025` fractal noise in scenes 2, 3, 4, 5.
- **Tabular-nums** on all number elements (stat blocks, counters).
- **Brand accent pulse** — the accent `#2A5CBF` appears as a small animated element (rule, icon dot, ring segment) in every scene.

---

## 6. Negative Prompt

- No gradient text (`background-clip: text` + gradient)
- No pure `#000000` or `#FFFFFF`
- No cyan, purple, pink, or neon accents
- No `back.out()` eases (except the button in scene 5 — intentional)
- No `repeat: -1` on any timeline. All repeats are finite and calculated.
- No `<br>` forced line breaks. Text wraps via `max-width`.
- No full-screen linear gradients (H.264 banding — use radial only)
- No absolute-positioned content containers. Use padding + flex/gap.
- No identical entrance patterns across elements within a scene
- No more than 2 independent tweens with the same ease in a scene
- No offscreen content that accidentally overlaps visible content
- No iframes for captured content
- No background-less solid color frames — every scene has 2-5 decorative BG elements
- No static decoratives — every background element has ambient motion
