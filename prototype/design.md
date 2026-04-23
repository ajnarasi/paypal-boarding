# Design Spec — PayPal Merchant Confidence Prototype

**Source:** Generated with Google Stitch. v2.0 reinterprets the output as a tech-forward, future-thinking surface — obsidian canvas, electric cyan accent, neon lime emphasis. v1.0 (warm editorial + PayPal-adjacent) is kept as a changelog reference at the bottom of this file.
**Status:** Shipped in the prototype at `APM/PayPal-Merchant-Onboarding/prototype/`.
**Version:** v2.0 · 2026-04-23 (supersedes v1.0)

---

## 1 · Why this document exists

Google Stitch is a generative UI tool — it emits design tokens, component sketches, and layout ideas that are provider-agnostic. This document is the bridge between that output and a visual language for the hiring-manager artifact.

**The v2.0 brief:** the prototype should read *tech-forward and future-thinking* — the register of Linear, Vercel, Arc, Figma's 2024 marketing surface — rather than warm editorial print. The payoff is instant signal: when a hiring manager opens the link, the first impression is "this candidate&rsquo;s visual language tracks with the companies doing the best merchant-platform work right now."

**The v2.0 constraints are unchanged from v1.0.** No PayPal logos, no PayPal Sans typeface license, no PayPal-site mocks. The brand-impersonation guardrails in § 6 still bind.

## 2 · Visual reference — what we're mapping to

Tech-forward / future-thinking reference set (what we observed on the open web and distilled):

| Surface trait | Observation we&rsquo;re tracking |
|---|---|
| Canvas | Deep obsidian, not pure black — cool undertone, often with a subtle blue shift |
| Elevated surfaces | One step up from canvas (~5% lighter) rather than shadow-on-white |
| Primary foreground | Near-white with cool undertone, never #FFFFFF (which reads harsh on dark) |
| Primary accent | **Electric cyan-blue** — the color that signals "digital native" across Linear, Vercel, Arc |
| Secondary emphasis | **Neon lime / chartreuse** — used for moments of signal rather than decoration |
| Typography | Sharp serif display against a neutral geometric sans — editorial authority on a tech canvas |
| Corner radii | 12–16px surfaces; 999px pills; 4px inline chips |
| Shadow | Mostly replaced by elevation-via-lightness; subtle ambient glows instead of drop shadows |
| Motion | Restrained entrances, opacity/transform only, no grandstanding |
| Illustration | Abstract data-viz and editorial typography are the illustration — no stock human figures |

## 3 · Token mapping — Stitch → Tech-Forward → Tailwind

All color tokens are stored in OKLCH so we can reason about perceptual lightness and adjust without hue drift. Hex approximations are for reference in screenshots/OG image.

### 3.1 Color

| Token | Role | OKLCH | Reference hex | Rationale |
|---|---|---|---|---|
| `paper` | Page canvas | `oklch(16% 0.015 250)` | ~#141821 | **Deep obsidian, cool blue undertone** — not pure black; reads calm on OLED and dimmed displays |
| `paperAlt` | Elevated surface (cards, panels) | `oklch(21% 0.018 250)` | ~#1C2130 | One-step lift via lightness, not shadow |
| `ink` | Primary foreground text | `oklch(96% 0.003 250)` | ~#F3F4F6 | Near-white with cool cast, never harsh |
| `inkMuted` | Secondary text | `oklch(72% 0.008 250)` | ~#A8ADB7 | Reads comfortably on `paper`; meets WCAG 2.2 AA for body copy |
| `inkFaint` | Tertiary / caption | `oklch(55% 0.008 250)` | ~#7A7F88 | For metadata only, not body |
| `rule` | Hairline dividers | `oklch(30% 0.015 250)` | ~#2F3441 | Low-contrast, reads on both paper and paperAlt |
| **`accent`** | **Primary — electric cyan-blue** | `oklch(74% 0.18 215)` | **~#38C9F5** | **The tech-forward signature. Luminous, energetic, unmistakable** |
| **`accentBright`** | Luminous highlight (metric callouts) | `oklch(85% 0.15 200)` | **~#80E6FF** | Lighter sibling of `accent` for text emphasis that needs to glow |
| `accentSoft` | Accent-tinted chip backgrounds (on dark) | `oklch(28% 0.08 220)` | ~#1E3E58 | Dark navy-tinted — readable chip tone on obsidian |
| **`gold`** | **Neon lime emphasis — the signal color** | `oklch(90% 0.19 125)` | **~#C8F050** | **Replaces v1.0 amber. Used only on reply-hooks and metric substitutions** |
| `goldSoft` | Lime-tinted chip background | `oklch(28% 0.08 125)` | ~#2A3A18 | Dark lime-tint |
| `growth` | Positive state (Growth timeline, success chips) | `oklch(78% 0.17 155)` | ~#64E49E | Vivid mint, high-energy not corporate-green |
| `growthSoft` | Growth-tinted background | `oklch(28% 0.06 155)` | ~#1E362A | |
| `alert` | Friction / warning state (Risk timeline, hold callout) | `oklch(72% 0.19 30)` | ~#EC7B48 | Vivid coral — not alarm-red; fits the editorial calm |
| `alertSoft` | Alert-tinted background | `oklch(28% 0.08 30)` | ~#3C1F18 | |

### 3.2 Typography

| Role | Face | Source | Why |
|---|---|---|---|
| Display (hero, section headlines) | **Fraunces** (opsz, SOFT axes) | Google Fonts (open-source, SIL OFL) | Editorial serif with high optical variability — signals *prototype/essay*, not a PayPal surface mock |
| Body / UI | **Inter** | Google Fonts | PayPal Sans is proprietary and cannot be used outside PayPal. Inter is the closest open-source substitute at UI scale |
| Mono (numbers, metadata) | `ui-monospace, SFMono-Regular, Menlo` | System stack | Zero network cost |

**Scale:**
- `--text-hero`: `clamp(2.5rem, 1.2rem + 5vw, 5.5rem)` — fluid hero display
- Section headlines: `text-4xl` → `md:text-5xl`
- Body: `text-base` → `text-lg`
- Chips and eyebrows: `0.72rem` with `0.14em` tracking — mirrors PayPal's product-nav eyebrow treatment

**Deviation declared.** This prototype uses a *serif display + geometric sans body* pairing on a dark canvas. The serif provides editorial authority; the dark canvas provides the tech-forward register. This pairing is the visual signature of the artifact — it is not trying to look like PayPal.com. If ported inside PayPal, every serif headline would become PayPal Sans Medium at the same optical weight. `§ 8` holds the porting note.

### 3.3 Corner radii

| Token | Value | Usage |
|---|---|---|
| `rounded-sm` | 4px | Inline chips |
| `rounded-xl` | 12px | Surface cards |
| `rounded-2xl` | 16px | Hero surfaces |
| `rounded-full` | 999px | Pills, buttons, score avatar |

Matches the 2024-era tech-forward surface convention — slightly more generous than Material, tighter than iOS.

### 3.4 Spacing

8px base grid. Section vertical rhythm `py-24 md:py-32` (≈ 96–128px) — editorial breath, not dashboard density.

### 3.5 Motion

Compositor-friendly only (`transform`, `opacity`). Easing:

```ts
EASE_EXPO    = [0.16, 1, 0.3, 1]      // entrance
EASE_STANDARD = [0.4, 0, 0.2, 1]      // interface
DUR.fast: 180ms · DUR.normal: 320ms · DUR.slow: 600ms
```

`prefers-reduced-motion: reduce` honored globally (`app/globals.css`).

## 4 · Component inventory — how each one maps

| Component | Stitch pattern | Tech-forward application (v2.0) |
|---|---|---|
| `Hero` | Single-column editorial hero | Display-serif headline in `ink`; the emphasized phrase in `accent` (electric cyan). Primary CTA renders as a *luminous* `ink`-filled pill on obsidian — the inverted tokens deliver the "big light button on dark page" signature without code changes |
| `ParadoxTimelines` | Parallel-timeline data-viz | `growth` mint row vs. `alert` coral row on obsidian — the contrast is stronger than v1.0 because luminous on dark beats dark on light |
| `MayaJourney` | Stepper + live side-panel | Step cards elevate via `paperAlt`; current step ringed in `ink/30`; completed steps tint in `growthSoft`. Confidence Score uses `growth` when past threshold |
| `ConfidenceScore` | Live metric side-panel | Large serif digit on `paperAlt` panel; score bar transitions `accent` → `growth` at threshold. Signal chips are `growthSoft` pills with `growth` icons |
| `ReleaseChart` | Area chart + tab group | Chart stroke `accent` (electric cyan). Reference line in `alert` coral — echoes the paradox timeline. Recharts tooltip inherits `paperAlt` + `ink` for readability on dark |
| `Guardrails` | Bento 4-tile grid | `accent`-tinted circular icon slots on `paperAlt` tiles — the cyan on obsidian is the calmest, most on-brand moment of the site |
| `WouldNotBuild` | Contrast-inversion section | With v2.0 tokens, `bg-ink text-paper` now renders as a **luminous light panel on the dark page** — the inversion trick still works; the "grid-breaking moment" just goes from dark-on-light to light-on-dark. Italic `accent` on the word "not" |
| `SegmentRibbon` | Three-panel segment ribbon | Numbered panels on `paperAlt`; phase label in `accent`; body in `inkMuted` |
| `WhyCandidate` | Metric-card row + inverted CTA | `accent` on the metric digits (−40%, +10%, +20%) creates the electric-glow effect. The dark-CTA trick inverts to a luminous `ink`-filled island, same hierarchy as v1.0 |
| `AboutPitch` | Tabbed content panel | Pill-tab rail; active tab `accentSoft` bg + `accent` numeral. Tab body on `paperAlt`; pull-quote gets a left rule in `accent`. **Gold bullet on the reply-hook line is the single use of neon lime across the whole site** — that&rsquo;s what gives it its signal weight |
| Ambient glow | New in v2.0 | Fixed-position radial gradients in the body background anchor the hero with a subtle cyan glow (top-left) and a very faint lime glow (top-right). No animation; purely atmospheric |

## 5 · Visual motif — "paradox echo"

The prototype uses one recurring visual motif that ties every section back to the thesis. The v2.0 palette *amplifies* this motif because luminous-on-dark reads more emphatic than dark-on-light:

- **Mint (`growth`) = Growth system**, forward motion.
- **Coral (`alert`) = Risk system**, friction/hold.
- **Electric cyan (`accent`) = the resolution** — the Confidence Score, the consumer-graph move, the unified path.
- **Neon lime (`gold`) = the signal moment** — used only on reply hooks and the single metric-substitution callout. Scarcity gives it weight.

This motif runs through: the Paradox timelines, the Confidence Score bar (below/above threshold), the Release chart (reference line vs. available line), and the Guardrails icons.

A hiring manager should be able to look at any single section out of context and reconstruct the paradox from the color alone.

## 6 · What we explicitly did NOT do — brand-impersonation guardrails

These choices are deliberate to keep the artifact on the right side of the brand line. They are unchanged from v1.0:

- **No PayPal logomark, wordmark, or PP monogram anywhere** — not in the hero, not in the OG card, not as a favicon.
- **No PayPal Sans.** The proprietary face would imply licensed use.
- **No PayPal-dot-com surface mocks.** The prototype is editorial on an obsidian canvas; PayPal is not.
- **The v2.0 palette goes further.** The PayPal-adjacent deep navy and amber that v1.0 used are gone. The v2.0 electric cyan + neon lime is *not* a PayPal brand color — it&rsquo;s the candidate&rsquo;s visual language, declared independent.
- **The disclaimer on `/evidence`** names that this is an independent research artifact and none of the numbers are PayPal-internal.

## 7 · Accessibility

- **Contrast.** `ink` (L=96) on `paper` (L=16) clears WCAG 2.2 AAA for body text. `inkMuted` (L=72) on `paper` clears AA for body. `accent` (L=74) on `paper` clears AA for large text and interactive UI.
- **Color scheme.** `color-scheme: dark` is set at the root so form controls and scrollbars render natively-dark; focus ring is the `accent` cyan at 2px with 3px offset.
- **Target sizes** ≥ 44×44 for touch; tabs and stepper buttons satisfy this.
- `prefers-reduced-motion` globally respected — ambient glow is purely static, so no motion to disable.
- Recharts tooltips get explicit `color: ink` + `background: paperAlt` since Recharts defaults would render white-on-white on dark.

## 8 · Porting inside PayPal (hypothetical)

If an internal PM wanted to take this prototype and productionize it, here&rsquo;s what would swap:

| Token or component | Prototype value (v2.0) | PayPal internal value |
|---|---|---|
| Color scheme | Obsidian canvas (dark) | Light by default; PayPal marketing surfaces are primarily light-mode |
| Display face | Fraunces (serif) | PayPal Sans Medium |
| Body face | Inter | PayPal Sans Regular |
| `paper` | `oklch(16% 0.015 250)` | PayPal surface token (light) |
| `accent` | `oklch(74% 0.18 215)` electric cyan | PayPal Deep Blue / Bright Blue token |
| `gold` | `oklch(90% 0.19 125)` neon lime | PayPal warning/emphasis token — map intent, not hue |
| Iconography | `lucide-react` | PayPal's internal icon system |
| Section rhythm | `py-24 md:py-32` | PayPal's internal `Spacing/4xl` token |

The rest of the structure (scroll sections, Confidence Score visual, Release chart tradeoff panel, Guardrails bento, WouldNotBuild inversion block, AboutPitch tab rail) ports 1:1. Dark → light migration is a one-shot token swap since every component references semantic tokens rather than hex values.

## 9 · Changelog

**v2.0 · 2026-04-23** — **Stitch Tech-Forward palette.** Moved from warm editorial + PayPal-adjacent to obsidian canvas with electric cyan primary and neon lime emphasis. All color tokens updated; body background flipped from warm off-white to deep obsidian; paper-grain noise replaced by a subtle ambient cyan glow. WCAG AA/AAA re-verified. Recharts stroke and tooltip colors migrated. Component structure unchanged — every one of the v1.0 sections ports cleanly because they all reference semantic tokens rather than hex.

**v1.0 · 2026-04-23 (superseded)** — Initial design system. Stitch export mapped to a warm editorial palette with PayPal-adjacent deep navy + amber accents. First production build, `AboutPitch` tabbed component, dynamic OG card. Karpathy loops for palette + About-tab copy logged in `karpathy-loop-log.md` and `about-tab-karpathy-log.md` respectively.
