<<<<<<< HEAD
# SmartLot — Sistema de Diseño

## Dirección Estética: Azul Señal

Una estética industrial-precisa construida sobre el azul que ya domina el producto. No se inventa una paleta nueva — se sistematiza y refina lo que existe.

El azul señalético (#156fe5 / #2563eb) evoca paneles de control marítimos, señalética de hospitales e infraestructura urbana. Es un azul funcional, de alta visibilidad, que comunica confianza y precisión operativa.

Inspiración: paneles de instrumentación técnica, señalética de transporte, dashboards de control industrial, la claridad de un plano de ingeniería bien ejecutado.

El sistema es **preciso, funcional y consistente** — prioriza la legibilidad operativa sobre la decoración.

=======
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
>>>>>>> ca3118eaca0ce7be42412fa77441bbf292201b49
---

## Tipografía

| Uso | Fuente | Peso |
|-----|--------|------|
| Títulos | **DM Sans** | 500–700 |
| Subtítulos | **DM Sans** | 500 |
| Cuerpo | **DM Sans** | 400 |
| Datos/monospace | **JetBrains Mono** | 400–600 |
| UI (botones, labels) | **DM Sans** | 500 |

DM Sans ya se usa en el códigobase. JetBrains Mono se añade para datos. Sin fuentes adicionales — la solidez tipográfica viene de la jerarquía, no de la variedad.

---

## Paleta de Color (extraída del código existente)

### Base

| Variable | Color actual | Uso |
|----------|-------------|-----|
| `--bg` | `#F5F7FB` | Fondo de página |
| `--bg-surface` | `#FFFFFF` | Tarjetas, paneles |
| `--bg-elevated` | `#F1F5F9` | Hover, secciones secundarias |
| `--bg-dark` | `#191C1E` | Header, footer, nav |
| `--bg-dark-alt` | `#1A1C1E` | Superficie oscura alternativa |

### Texto

| Variable | Color actual | Uso |
|----------|-------------|-----|
| `--text-primary` | `#1E293B` | Cuerpo principal |
| `--text-secondary` | `#64748B` | Metadatos, descripciones |
| `--text-muted` | `#94A3B8` | Placeholder, texto secundario |
| `--text-inverse` | `#E2E8F0` | Sobre fondos oscuros |

### Acento primario

| Variable | Color actual | Uso |
|----------|-------------|-----|
| `--accent` | `#2563EB` | Botones, enlaces, elementos activos |
| `--accent-hover` | `#156FE5` | Hover de acento |
| `--accent-active` | `#1A73E8` | Active/pressed |
| `--accent-bg` | `#DBEAFE` | Fondos de badge/etiqueta azul |
| `--accent-border` | `#BFDBFE` | Bordes de estado azul |

### Semántica

| Variable | Color actual | Uso |
|----------|-------------|-----|
| `--success` | `#22C55E` | Disponible, activo |
| `--success-bg` | `#F0FDF4` | Fondo de badge success |
| `--warning` | `#EAB308` | Alerta media |
| `--warning-bg` | `#FEFCE8` | Fondo de badge warning |
| `--error` | `#EF4444` | Lleno, error, bloqueado |
| `--error-bg` | `#FEF2F2` | Fondo de badge error |
| `--error-strong` | `#B91C1C` | Error en hover/active |

### Bordes

| Variable | Color actual | Uso |
|----------|-------------|-----|
| `--border` | `#E2E8F0` | Bordes de tarjetas, inputs, tablas |
| `--border-strong` | `#CBD5E1` | Bordes en foco |
| `--border-accent` | `#2563EB` | Borde de estado activo |

---

## Radios y Sombras

| Variable | Valor | Uso |
|----------|-------|-----|
| `--radius-sm` | `6px` | Badges, inputs |
| `--radius-md` | `10px` | Tarjetas, botones |
| `--radius-lg` | `14px` | Paneles grandes |
| `--radius-full` | `9999px` | Pills, avatares |

| Variable | Valor |
|----------|-------|
| `--shadow-sm` | `0 1px 3px rgba(15, 23, 42, 0.06)` |
| `--shadow-md` | `0 4px 12px rgba(15, 23, 42, 0.08)` |
| `--shadow-lg` | `0 8px 30px rgba(15, 23, 42, 0.1)` |
| `--shadow-accent` | `0 4px 14px rgba(37, 99, 235, 0.25)` |

---

## Componentes

### Botones

| Variante | Fondo | Texto |
|----------|-------|-------|
| Primary | `--accent` | `#FFFFFF` |
| Primary hover | `--accent-hover` | `#FFFFFF` |
| Secondary | Transparente | `--text-primary` / borde `--border` |
| Ghost | Transparente | `--text-secondary` |
| Danger | `--error` | `#FFFFFF` |

Altura unificada: `40px` (md), `48px` (lg). Radio `--radius-md`.

### Inputs

Floating labels (patrón existente). Caja de `48px`. Borde `--border`. Focus: borde `--accent` + ring `rgba(37, 99, 235, 0.15)`. Error: borde `--error`.

### Badges

| Tipo | Fondo | Texto |
|------|-------|-------|
| neutral | `--bg-elevated` | `--text-secondary` |
| success | `--success-bg` | `--success` |
| warning | `--warning-bg` | `--warning` |
| error | `--error-bg` | `--error` |
| info | `--accent-bg` | `--accent` |

Radio `--radius-sm`, padding `2px 8px`, DM Sans 500 12px.

