# Enterprise Sequencing Brief — Why SMB-First, Enterprise-Next

**For:** Hiring manager follow-up + Loom comparison segment
**Date:** 2026-04-23
**Status:** Companion to `strategy/memo-v2.md`

---

## The question

The JD covers SMB, mid-market, and enterprise. Memo v2 leads with SMB. Why is that the right PM call, and what does the enterprise arc look like?

## The one-line answer

**The trust-system paradox is architectural at SMB and parametric at enterprise.** You fix it where it was born, then inherit the solution upward.

---

## Why SMB-first is the stronger pitch

### 1. The paradox only exists at SMB

| System behavior | SMB | Mid-market | Enterprise |
|---|---|---|---|
| Default hold policy | 21-day hold on new sellers | Negotiated hold / rolling reserve | Bespoke reserve contract |
| $25K / 90-day auto-review | Automated | Automated but CSM-intercepted | Pre-negotiated ceiling |
| KYB flow | Self-serve form | Self-serve + CSM review | White-glove, RFP-driven |
| Merchant visibility into status | None (paradox origin) | Via CSM | Via dedicated AM + custom dashboard |
| Typical TPV velocity | $0 → $50K in 60 days | $1M → $10M in 90 days | $10M+ in week 1 |

The opaque, automated, punitive experience — the one driving Trustpilot 1.3 and churn to Stripe — **only exists at SMB.** Enterprise already has the human layer that resolves the paradox case-by-case. You can't fix what isn't broken for them.

### 2. SMB is where the consumer graph is asymmetric

PayPal's 400M+ consumer identity graph is *most valuable* for the merchant segment that is **also a consumer**. A Shopify seller, a Venmo business profile, a creator with a PayPal personal account — these are people PayPal already knows. Enterprise merchants are legal entities whose KYB signal comes from D&B, Experian Business, and corporate registries — markets where Stripe and Adyen have parity.

**SMB is the only segment where PayPal's competitive moat mathematically applies.**

### 3. Revenue math favors SMB-first even though enterprise has bigger logos

Rough back-of-envelope for FY26 (public directional estimates; not PayPal-internal):
- SMB segment: high-churn, high-friction, currently *losing* TPV to Stripe and Square at the activation stage. A 5% lift in SMB activation rate across the acquiring cohort moves aggregate TPV more than a 5% lift in enterprise retention, because the SMB denominator is millions of merchants.
- Enterprise segment: already served adequately by PayPal Complete Payments + Braintree + dedicated sales. The marginal PM leverage per engineering hour is lower.

**The highest-leverage merchant-onboarding investment PayPal can make is at SMB.** That's a Director-level capital-allocation argument, not a scope limitation.

### 4. The solution primitives templatize upward, not the reverse

Rec 1 (consumer-graph onboarding), Rec 2 (Merchant Confidence Score), Rec 3 (opt-in progressive release) are all **parameters** at mid-market and enterprise:

- **Consumer-graph onboarding** → becomes "pre-populated KYB from PayPal Business Hub" for mid-market, and "API-delivered identity graph signal feeding the enterprise RFP response" for enterprise.
- **Confidence Score** → becomes a CSM-facing risk dashboard for mid-market, and a line-item in the enterprise contract for reserve-release milestones.
- **Progressive release** → becomes a negotiated rolling-reserve schedule for mid-market, and a contract clause for enterprise with predefined collateral posture.

You build the primitives for SMB because SMB is where the product ships at scale. You then expose them as parameters for the higher tiers. The reverse — building enterprise custom and templating down — is how Stripe and Adyen *started*, and it's why their SMB experience still has seams.

---

## The enterprise sequencing roadmap (one slide)

**Q1–Q2 (SMB foundations):** Confidence Score v1 data model. Progressive-release opt-in A/B. Consumer-graph KYB pilot for Shopify + Venmo-graph merchants.

**Q3 (mid-market lift):** Expose Confidence Score to mid-market CSMs as a risk-adjusted activation dashboard. Parameterize progressive release as a CSM-negotiated release schedule. Integrate with PayPal Business Hub.

**Q4 (enterprise sequencing):** Templatize the score as an optional enterprise-contract feature — reserve-release milestones tied to Confidence Score tiers. Publish an "Activation SLA" for enterprise RFPs, differentiating from Stripe/Adyen on predictability not just price.

**Year 2:** Full segment coverage. SMB primitives → mid-market CSM tools → enterprise contract clauses, all reading from one Confidence Score data model. That's the architectural payoff: one Risk/Growth system of record across segments.

---

## If the hiring manager pushes back with "why not enterprise-first?"

Three-sentence response:

> Enterprise already has a human layer that resolves the paradox case-by-case through dedicated CSMs and custom contracts. The broken product experience — and the TPV leakage — lives at SMB, and SMB is also the only segment where PayPal's consumer graph is asymmetric vs. Stripe and Adyen. Building the primitives at SMB and exposing them as parameters upward is the highest-leverage architectural move; starting at enterprise templates downward and leaves seams, which is what Stripe and Adyen are still unwinding.

---

## If the hiring manager pushes back with "enterprise is where the revenue is"

Two-sentence response:

> Enterprise is where the logos are; SMB is where the *marginal* TPV lift per PM-quarter is highest because the denominator is millions of merchants currently churning on a fixable architecture. A 3–5% SMB activation lift, properly measured, outweighs any mid-market retention win at the segment-TPV level — I have the cohort math ready to walk through.

---

## The Loom comparison beat (90 seconds, companion video)

**Screen 1 (0:00–0:20):** SMB Shopify seller running through the Confidence Score + consumer-graph onboarding path. Day-0 to day-7 cashflow visible.

**Screen 2 (0:20–0:40):** Same merchant in today's PayPal experience. 21-day hold, no status visibility, Trustpilot quote overlay.

**Screen 3 (0:40–1:00):** Mid-market parameterization — same score, exposed to a CSM dashboard. Release schedule becomes negotiated, not imposed.

**Screen 4 (1:00–1:20):** Enterprise contract view — score tier feeds a reserve-release milestone clause. One data model, three segments.

**Voiceover close (1:20–1:30):** "The primitives ship first where the product lives — SMB. Mid-market inherits the dashboard. Enterprise inherits the clause. One Risk/Growth system across segments, starting with the segment where the paradox is real."
