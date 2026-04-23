// All data on the page. No backend — everything lives here.

export type JourneyStep = {
  id: number;
  title: string;
  merchantAction: string;
  systemResponse: string;
  scoreDelta: number;
  inheritedSignals: string[]; // signals unlocked at this step
  factorExplanation: string; // plain-English factor add
};

export const mayaProfile = {
  name: "Maya Tran",
  business: "Archive Ceramics",
  platform: "Shopify",
  weeklyRevenue: "$4,200",
  consumerSignal: {
    venmoSince: "2019",
    paypalPersonalSince: "2014",
    verifiedConsumerTxnCount: 1420,
    linkedBank: "Chase (verified)",
  },
};

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Email entered",
    merchantAction: "Maya types ceramics@archive.shop",
    systemResponse:
      "PayPal's identity graph recognizes the email from her 2014 personal account and her Venmo profile.",
    scoreDelta: 34,
    inheritedSignals: ["12 yrs consumer history", "1,420 verified txns"],
    factorExplanation: "+34 existing consumer identity graph match",
  },
  {
    id: 2,
    title: "Business info",
    merchantAction: "Name, address, EIN",
    systemResponse:
      "KYB form auto-fills from consumer identity + public business registry. Maya reviews two fields instead of filling twelve.",
    scoreDelta: 12,
    inheritedSignals: [
      "12 yrs consumer history",
      "1,420 verified txns",
      "Address match (residence ↔ DBA)",
    ],
    factorExplanation: "+12 KYB completion via pre-populated fields",
  },
  {
    id: 3,
    title: "Bank connect",
    merchantAction: "Plaid → Chase checking",
    systemResponse:
      "Same bank linked to Maya's personal PayPal since 2017. Re-used, not re-verified.",
    scoreDelta: 18,
    inheritedSignals: [
      "12 yrs consumer history",
      "1,420 verified txns",
      "Address match (residence ↔ DBA)",
      "Bank re-used, 8-yr history",
    ],
    factorExplanation: "+18 bank continuity from consumer account",
  },
  {
    id: 4,
    title: "Shopify OAuth",
    merchantAction: "Authorize Shopify store",
    systemResponse:
      "Store age, rating, and order history become a Confidence Score input. Maya crosses the opt-in threshold.",
    scoreDelta: 16,
    inheritedSignals: [
      "12 yrs consumer history",
      "1,420 verified txns",
      "Address match (residence ↔ DBA)",
      "Bank re-used, 8-yr history",
      "Shopify store — 3 yrs, 4.9★",
    ],
    factorExplanation: "+16 platform OAuth: 3-yr Shopify history",
  },
];

// Base score before the journey begins (Maya has zero merchant signal)
export const baseScore = 0;

// Threshold at which the merchant becomes eligible for opt-in progressive release
export const optInThreshold = 70;

// Chart data — cashflow over first 30 days of merchant activity
// Merchant sells $1000/day across day 1-7, then $500/day through day 30 (blended).
// "Available" is the cashflow the merchant can actually withdraw.
export type ReleasePath = {
  id: "standard" | "enhanced" | "collateral";
  label: string;
  description: string;
  availabilityByDay: number[]; // length 31, cumulative available $ on each day
  floatDeltaPct: number; // vs standard; negative means less float for PayPal
  fraudExposureLabel: string;
  ltvImpactLabel: string;
  eligibility: string;
};

// Generate daily gross revenue schedule for the first 30 days.
// Week 1: aggressive ramp to $1K/day; then settle at ~$500/day.
const dailyRevenue: number[] = Array.from({ length: 31 }, (_, d) => {
  if (d === 0) return 0;
  if (d <= 7) return 1000;
  return 500;
});

// Cumulative gross revenue for reference
const cumulativeGross: number[] = dailyRevenue.reduce<number[]>((acc, v, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + v);
  return acc;
}, []);

// Standard: 0% available until day 21, then 100% lump sum released
const standardAvailable: number[] = dailyRevenue.map((_, d) =>
  d < 21 ? 0 : cumulativeGross[d],
);

// Enhanced opt-in: 25% instant, 50% by day 3, 100% by day 7 (each day's receipts)
// Model as percentage released of each day's revenue by day offset:
function shiftedRelease(revenue: number[], schedule: { offset: number; pct: number }[]): number[] {
  const available = Array.from({ length: revenue.length }, () => 0);
  for (let d = 0; d < revenue.length; d++) {
    const rev = revenue[d];
    for (const { offset, pct } of schedule) {
      const releaseDay = d + offset;
      if (releaseDay < available.length) {
        available[releaseDay] += rev * pct;
      }
    }
  }
  // Convert to cumulative
  for (let d = 1; d < available.length; d++) {
    available[d] += available[d - 1];
  }
  return available;
}

const enhancedAvailable = shiftedRelease(dailyRevenue, [
  { offset: 0, pct: 0.25 },
  { offset: 3, pct: 0.25 }, // +25% → 50% cumulative at day 3
  { offset: 7, pct: 0.5 }, // +50% → 100% cumulative at day 7
]);

const collateralAvailable = shiftedRelease(dailyRevenue, [
  { offset: 0, pct: 0.4 },
  { offset: 3, pct: 0.4 }, // +40% → 80% cumulative at day 3
  { offset: 5, pct: 0.2 }, // +20% → 100% cumulative at day 5
]);

export const releasePaths: ReleasePath[] = [
  {
    id: "standard",
    label: "Standard (today)",
    description: "0% for 21 days · 100% lump on day 22",
    availabilityByDay: standardAvailable,
    floatDeltaPct: 0,
    fraudExposureLabel: "Baseline",
    ltvImpactLabel: "Baseline (with churn drag)",
    eligibility: "All new merchants",
  },
  {
    id: "enhanced",
    label: "Opt-in · Enhanced verification",
    description: "25% instant · 50% day 3 · 100% day 7",
    availabilityByDay: enhancedAvailable,
    floatDeltaPct: -18,
    fraudExposureLabel: "+0.4pp vs standard",
    ltvImpactLabel: "+2–4pp cohort retention",
    eligibility: "Confidence Score ≥ 70 · ID + bank verified",
  },
  {
    id: "collateral",
    label: "Opt-in · Posted collateral",
    description: "40% instant · 80% day 3 · 100% day 5",
    availabilityByDay: collateralAvailable,
    floatDeltaPct: -32,
    fraudExposureLabel: "Neutral (collateral absorbs tail)",
    ltvImpactLabel: "+4–7pp cohort retention",
    eligibility: "Confidence Score ≥ 70 · $2K collateral · ID + bank verified",
  },
];

export const cumulativeGrossByDay = cumulativeGross;

export const guardrails = [
  {
    title: "ECOA / fair lending",
    body: "Score is an activation signal, not an adverse-action decision. Holds and freezes stay on Risk's existing notice infrastructure.",
  },
  {
    title: "No protected-class proxies",
    body: "Feature set audited pre-release. Plain-English factors exclude geography, language, and device fingerprints.",
  },
  {
    title: "Gaming resistance",
    body: "Model-based scoring with delayed, post-hoc factor explanations. No deterministic rubric exposed to the merchant UI.",
  },
  {
    title: "Float tradeoff, named",
    body: "Float revenue declines on opt-in paths. LTV + TPV lift swamps it under a 2% SMB cohort churn reduction — the A/B measures the crossover.",
  },
];

export const segments = [
  {
    label: "SMB",
    phase: "Primitives ship here",
    body: "Confidence Score, consumer-graph KYB, opt-in progressive release. Q1–Q3.",
    differentiator:
      "Where the paradox is architectural, and where the consumer graph is asymmetric vs. Stripe and Adyen.",
  },
  {
    label: "Mid-market",
    phase: "Primitives → CSM parameters",
    body: "Confidence Score exposed as a CSM risk-adjusted activation dashboard. Release schedules become negotiated, not imposed. Q3–Q4.",
    differentiator:
      "Same data model. Human layer already exists — we give them a better instrument, not a new product.",
  },
  {
    label: "Enterprise",
    phase: "Primitives → contract clauses",
    body: "Score tiers feed reserve-release milestones inside PayPal Complete Payments contracts. Published 'Activation SLA' for RFPs. Year 2.",
    differentiator:
      "Differentiates PayPal on predictability, not price. Templatize down; don't build down.",
  },
];

export const credibilityAnchors = [
  {
    metric: "−40%",
    body: "Merchant onboarding time at Fiserv — unified APIs across 55 APMs and 70+ countries.",
  },
  {
    metric: "+10% YoY",
    body: "BNPL revenue growth via Bread Financial × Clover SMB merchant activation.",
  },
  {
    metric: "+20%",
    body: "Consumer adoption lift on Visa Click to Pay — A/B at web checkout.",
  },
];

export const evidenceSources = [
  {
    claim: "21-day hold on new sellers",
    source: "PayPal — Seller Help: Payment Holds",
    href: "https://www.paypal.com/us/cshelp/article/why-is-my-payment-on-hold-or-unavailable-help277",
    type: "Public documentation",
  },
  {
    claim: "$25,000 / 90-day automated review threshold",
    source: "Merchant Maverick — PayPal Account Review practices",
    href: "https://www.merchantmaverick.com/paypal-risk-management/",
    type: "Public analysis",
  },
  {
    claim: "Trustpilot 1.3 / 5 · 35,000+ reviews",
    source: "Trustpilot — PayPal merchant reviews (2024)",
    href: "https://www.trustpilot.com/review/paypal.com",
    type: "Public aggregate rating",
  },
  {
    claim: "400M+ active consumer accounts",
    source: "PayPal Q3 2024 earnings release",
    href: "https://investor.pypl.com/financials/",
    type: "Public financial disclosure",
  },
  {
    claim: "100M+ Venmo US accounts",
    source: "PayPal investor day 2024 disclosures",
    href: "https://investor.pypl.com/events-and-presentations/",
    type: "Public investor communication",
  },
];
