# Prototype Spec — PayPal Merchant Confidence

**Goal:** Clickable hiring-manager artifact linked from LinkedIn DM. Communicates the memo v2 thesis in 3 minutes without the memo.

**Success criterion (single sentence):** A PayPal hiring manager, three minutes in, can name the trust-system paradox, the consumer-graph move, and the opt-in progressive-release opt-in architecture — and believes the candidate has shipped adjacent systems.

---

## Tech stack (fixed — do not re-evaluate)

- **Next.js 14** App Router, TypeScript
- **Tailwind CSS** with CSS custom properties for design tokens
- **Framer Motion** for page transitions and interaction micro-motions
- **Recharts** for the cashflow/progressive-release chart
- **lucide-react** for icons
- **pnpm** as package manager
- Vercel deploy target
- No backend. All data is local TypeScript fixtures.

## Design direction (anti-template)

**Not** a PayPal brand clone. Not dark mode by default. Not a dashboard-by-numbers layout.

Editorial + bento hybrid:
- Serif display type for key framing sentences (paradox headline, recommendation titles). `Fraunces` via next/font.
- Sans for UI chrome. `Inter` via next/font.
- Color tokens in OKLCH. Off-white background `oklch(98% 0.01 90)`, warm near-black text `oklch(20% 0.02 60)`, single accent `oklch(62% 0.18 250)` for active state, alert `oklch(62% 0.18 30)` for the hold/friction visual.
- No gradient blobs. No generic card grids. Use overlap, rule lines, and scale contrast for hierarchy.
- Motion is compositor-friendly only (transform, opacity).

## Information architecture (6 screens as a single scroll + 2 deep-link pages)

The landing is a **scrolly single-page** experience; two deep pages link off it.

### Scroll section 0 — Hero
- Display-serif headline: "PayPal's Growth and Risk systems optimize against each other."
- Subhead: "This is the prototype that resolves the paradox using the consumer graph Stripe doesn't have."
- Author line + "3 min clickable walkthrough" chip.
- Subtle scroll prompt.

### Scroll section 1 — The Paradox, visualized
- Two parallel horizontal timelines that animate on scroll-into-view.
- Top: Growth system — signup → KYB → first txn → activation (green, accelerating).
- Bottom: Risk system — signup → KYB → first txn → **HOLD** (red, decelerating/freezing).
- At "first txn," they diverge. Callout: "Same event. Two systems. Opposite reactions."
- Trustpilot 1.3/5 stat overlay: "35,000+ reviews. The hold is the product."

### Scroll section 2 — Shopify seller journey (interactive)
Primary interactive. A simulated merchant named "Maya — Shopify seller, $4K/week, Venmo user since 2019."
- Step-through onboarding (4 steps, clickable next):
  1. Email → PayPal detects consumer identity (shows verified Venmo + personal PP history as "inherited signals")
  2. Business info → pre-populated from consumer-graph head start
  3. Bank connect → Confidence Score crosses threshold for opt-in
  4. First transaction → merchant chooses release path
- Live Confidence Score panel stays docked right: the score ticks up with each step, factors show "+7 verified consumer history, +12 linked bank, +4 Shopify OAuth."
- Explicit label: "This path is available because PayPal already knows Maya as a consumer. Stripe/Adyen can't offer this."

### Scroll section 3 — Progressive release, merchant-elected
- Chart: Recharts area chart showing day-0 to day-30 cashflow.
- Three toggleable paths:
  - (A) Standard PayPal hold — 0% for 21 days, 100% at day 22 (today's default).
  - (B) Opt-in, enhanced verification — 25% instant / 50% day 3 / 100% day 7.
  - (C) Opt-in, posted collateral — 40% instant / 80% day 3 / 100% day 5.
- Tradeoff panel below the chart: fraud exposure column, float-revenue-delta column, LTV-impact column.
- Small-print callout: "Default stays conservative. Merchant opts in. Risk-matched cohort A/B measures the crossover." (This is the Taleb-proofing in plain English.)

### Scroll section 4 — Compliance guardrails (the section Meadows and Taleb demanded)
Bento grid, 4 tiles:
1. **ECOA / fair lending** — Score is an activation signal, not adverse action. Freezes stay on Risk's existing notice infra.
2. **No protected-class proxies** — Feature-set audited pre-release. Plain-English factors exclude geo/language/device.
3. **Gaming resistance** — Model-based scoring, post-hoc factor explanations, no deterministic rubric.
4. **Float tradeoff named** — Float line reduces on opt-in path; LTV + TPV lift swamps it at 2% cohort churn reduction; we'll A/B it.

### Scroll section 5 — Segment sequencing ribbon
Horizontal ribbon of three panels (SMB → Mid-market → Enterprise):
- SMB — "Primitives ship here. Confidence Score, consumer-graph KYB, opt-in release. Q1–Q3."
- Mid-market — "Primitives become CSM dashboard parameters. Q3–Q4."
- Enterprise — "Primitives become contract clauses. Year 2."
- Each panel has one differentiator bullet.
- CTA link: "Full brief" → deep-link to `/enterprise` page.

### Scroll section 6 — Why this candidate
Quote-card, rule-line treatment:
- "40% reduction in merchant onboarding time across 55 APMs and 70+ countries at Fiserv."
- "10% YoY BNPL revenue growth via Bread Financial × Clover SMB activation."
- "+20% consumer adoption lift on Visa Click to Pay via A/B at web checkout."
- "This prototype is the pattern I would port to PayPal on week one."
- CTA: Book a call link + LinkedIn + email.

### Deep page — `/enterprise`
- Renders the content of `enterprise/sequencing-brief.md` as a styled page. Table for the SMB/Mid/Enterprise matrix. The three rebuttal scripts as quote-cards.

### Deep page — `/evidence`
- Cited public sources: PayPal seller help page (21-day hold), risk-management analyses ($25K/90 auto-review), Trustpilot rating + review count, Merchant Maverick quotes. All linked out. Footer: "All numbers are public-domain research. Nothing here is PayPal-internal."

---

## Interaction details (load-bearing)

- Hero scroll prompt: reveals on load with 150ms delay, removes after first scroll event.
- Paradox timelines: IntersectionObserver trigger at 40% visibility; 600ms staggered animation on the two rows; respect `prefers-reduced-motion`.
- Maya journey stepper: clicking "Next" advances one step; ConfidenceScore ticks up with a number-rolling transition (200ms ease-out). Each step reveals a new "inherited signal" chip in the score panel.
- Progressive release chart: tab-group for the three paths; chart morphs smoothly (Recharts + Framer layout animation).
- All transitions compositor-friendly (transform/opacity only).

## Content rules

- Every number on screen has a visible "[public]" or "[est]" tag with a link to `/evidence`.
- Zero PayPal-internal data claims. Every stat traces to a public source.
- Plain-English PM voice. No consultant filler ("leverage," "holistic," "synergy").

## File structure

```
prototype/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                   # scrolly landing
│   ├── enterprise/page.tsx        # deep page
│   ├── evidence/page.tsx          # deep page
│   └── globals.css                # tokens + base
├── components/
│   ├── hero/Hero.tsx
│   ├── paradox/ParadoxTimelines.tsx
│   ├── journey/MayaJourney.tsx
│   ├── journey/ConfidenceScore.tsx
│   ├── release/ReleaseChart.tsx
│   ├── guardrails/Guardrails.tsx
│   ├── segments/SegmentRibbon.tsx
│   ├── candidate/WhyCandidate.tsx
│   └── ui/ (Button, Chip, RuleLine, QuoteCard)
├── lib/
│   ├── fixtures.ts                # Maya journey data, release paths, segment copy
│   └── tokens.ts                  # OKLCH values, motion constants
├── public/
│   └── og.png                     # social card
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## README must include
- `pnpm install && pnpm dev` one-liner
- Vercel deploy instructions
- "How to read this in 3 minutes" for the hiring manager
- Caveat that all numbers are public research

---

## Evaluation rubric (used by Karpathy loop evaluator)

Each dimension scored 1–5. Minimum passing score: 4+ on every dimension, average ≥ 4.3.

1. **Narrative clarity (Doumont):** Does the core message — trust-system paradox resolved via consumer graph — survive at every level of zoom (title / subtitle / hero / recommendations)?
2. **PM judgment signal:** Does the "what I would not build" equivalent (the Guardrails + Release tradeoff panel + opt-in framing) land as sophisticated PM, not naive?
3. **Interaction quality:** Do Maya's journey, the Release chart, and the Paradox timelines feel designed, not template?
4. **Credibility anchor (Collins):** Does the Fiserv 55-APM / 40% stat appear as a flywheel, not a bullet?
5. **Compliance awareness (Meadows + Taleb):** Are ECOA/fair-lending, gaming, float-tradeoff, and opt-in architecture visibly addressed?
6. **Design quality (anti-template):** Does it look like a PM with taste shipped it, or like a Tailwind template?
7. **LinkedIn-shareable fitness:** Does it work as a 3-minute scroll on desktop *and* on mobile? Is the OG card distinctive? Does the hero work as a screenshot?

## Non-goals (do not build)
- Authentication, backend, database, analytics.
- A working score algorithm. It's a narrative artifact, not a model.
- PayPal brand impersonation (no PayPal logos, no PayPal blue-primary).
- Scrollytelling 3D / WebGL (over-spend for the brief).
