# PayPal Merchant Confidence — prototype

Clickable hiring-manager artifact for PayPal's **Director, Product Management — Merchant Onboarding & Growth** role. Built as companion to `../strategy/memo-v2.md`.

## How to read this in 3 minutes

1. **Hero + Paradox (30s)** — The trust-system paradox visualized. Same event, two systems, opposite reactions.
2. **Maya's journey (60s)** — Click through a Shopify seller's onboarding; watch the Confidence Score tick up as her existing PayPal consumer graph pre-populates KYB. *The consumer-graph move — the only recommendation Stripe and Adyen can't match.*
3. **Progressive release (40s)** — Toggle the three release paths. Default stays conservative; opt-in paths unlock for merchants with collateral or enhanced verification.
4. **Guardrails (20s)** — The compliance shape the product has to hold (ECOA, gaming, float tradeoff).
5. **Segments (20s)** — Why SMB-first, then mid-market, then enterprise. Deep link to `/enterprise` for the full argument.

## Run locally

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

## Deploy

```bash
# Vercel (zero-config)
vercel
```

Then share the Vercel URL as the LinkedIn DM link.

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind with OKLCH design tokens
- Framer Motion (compositor-friendly transforms/opacity only)
- Recharts for the progressive-release cashflow chart
- lucide-react for icons

## Not in this prototype

- No authentication, backend, or database. All data is local TypeScript fixtures in `lib/fixtures.ts`.
- No working risk-score algorithm — this is a narrative artifact, not a model.
- No PayPal brand impersonation. No PayPal logos, no PayPal blue primary.

## Caveat

All numbers and product critiques are built on public data and independent engineering work. The author has no access to PayPal-internal systems. See `/evidence` for every source cited on the site.
