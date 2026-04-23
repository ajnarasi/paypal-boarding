# PayPal — Director, Product Management (Merchant Onboarding & Growth)

Pre-application hiring-manager outreach pack. Built by Ajay Narasimmamoorthy as a LinkedIn DM artifact.

**Repo:** https://github.com/ajnarasi/paypal-boarding

## What&rsquo;s here

```
PayPal-Merchant-Onboarding/
├── strategy/
│   └── memo-v2.md                     ← revised memo (8 business-panel edits applied)
├── panel-review/
│   └── business-panel-debate.md       ← SuperClaude 9-expert DEBATE transcript
├── enterprise/
│   └── sequencing-brief.md            ← Why SMB-first, then mid-market, then enterprise
├── prototype/                         ← Next.js 14 clickable prototype (web/)
│   ├── app/ · components/ · lib/
│   ├── SPEC.md                        ← locked prototype spec for the Karpathy loop
│   ├── karpathy-loop-log.md           ← 3-iteration generator/evaluator log
│   ├── README.md                      ← run / deploy / 3-min reading path
│   └── opengraph-image.tsx            ← dynamic OG card for LinkedIn sharing
└── loom/
    └── walkthrough-script.md          ← 4-min script: 2:30 SMB + 1:30 enterprise
```

## How to read this pack

**Hiring manager, 3-minute read**
1. Open the prototype (`prototype/` — `npm run dev` or the Vercel URL). Scroll through the seven scroll sections.
2. Skim [`strategy/memo-v2.md`](strategy/memo-v2.md).
3. That&rsquo;s enough to decide.

**Hiring manager, 10-minute read**
- Add [`enterprise/sequencing-brief.md`](enterprise/sequencing-brief.md) and the Loom walkthrough.

**Risk / Compliance partner**
- Start at [`panel-review/business-panel-debate.md`](panel-review/business-panel-debate.md) &mdash; the Taleb and Meadows entries name the ECOA/fair-lending and fraud-tail concerns that shaped the final architecture.

## The thesis

PayPal doesn&rsquo;t have an onboarding UX problem. It has a **trust-system paradox** &mdash; Growth accelerates new merchants toward first transaction; Risk slows them down the moment that transaction happens. The fix is the consumer graph Stripe and Adyen can&rsquo;t replicate, not a redesigned signup form.

See also the generalized pattern in [`../wiki/concept/trust-system-paradox.md`](../wiki/concept/trust-system-paradox.md).

## Running the prototype

```bash
cd prototype
npm install
npm run dev
# http://localhost:3500
```

Or from the APM workspace root via the preview harness: the launch config is registered as `paypal-merchant-confidence` (port 3500).

## Credibility anchor

- **&minus;40%** merchant onboarding time at Fiserv across 55 APMs and 70+ countries.
- **+10% YoY** BNPL revenue via Bread Financial &times; Clover SMB activation.
- **+20%** consumer adoption lift on Visa Click to Pay (A/B at web checkout).

## Disclaimer

All numbers, quotes, and product critiques are built on public data and independent engineering work. The author has no PayPal-internal access. Every cited statistic traces to a public source, all linked out from `/evidence` in the prototype.

— Ajay Narasimmamoorthy &middot; [linkedin.com/in/ajaynar](https://linkedin.com/in/ajaynar) &middot; ajay.narasimmamoorthy@gmail.com
