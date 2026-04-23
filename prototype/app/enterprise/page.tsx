import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Chip } from "@/components/ui/Chip";

export const metadata = {
  title: "Enterprise sequencing — Merchant Confidence",
  description:
    "Why SMB-first, then mid-market, then enterprise. The paradox is architectural at SMB and parametric at enterprise.",
};

const matrix = [
  {
    behavior: "Default hold policy",
    smb: "21-day hold on new sellers",
    mid: "Negotiated hold / rolling reserve",
    ent: "Bespoke reserve contract",
  },
  {
    behavior: "$25K / 90-day auto-review",
    smb: "Automated",
    mid: "Automated, CSM-intercepted",
    ent: "Pre-negotiated ceiling",
  },
  {
    behavior: "KYB flow",
    smb: "Self-serve form",
    mid: "Self-serve + CSM review",
    ent: "White-glove, RFP-driven",
  },
  {
    behavior: "Merchant visibility into status",
    smb: "None — paradox origin",
    mid: "Via CSM",
    ent: "Dedicated AM + custom dashboard",
  },
  {
    behavior: "Typical TPV velocity",
    smb: "$0 → $50K in 60 days",
    mid: "$1M → $10M in 90 days",
    ent: "$10M+ in week 1",
  },
];

export default function EnterprisePage() {
  return (
    <main className="relative z-10">
      <Section tight>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-inkMuted hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to prototype
        </Link>

        <div className="mt-8">
          <Eyebrow>Companion brief · Loom comparison</Eyebrow>
          <h1 className="display mt-3 max-w-[22ch] text-5xl text-ink md:text-6xl">
            Why SMB-first, enterprise-next.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-inkMuted">
            The JD covers SMB through enterprise. The trust-system paradox is{" "}
            <span className="text-ink">architectural at SMB</span> and{" "}
            <span className="text-ink">parametric at enterprise</span>. You ship
            the primitives where the product lives, then expose them as
            parameters upward.
          </p>
        </div>
      </Section>

      <Section tight className="rule-top rule-bottom bg-paperAlt">
        <Eyebrow num="01">The paradox only exists at SMB</Eyebrow>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-rule bg-paper">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rule bg-paperAlt/60 text-xs uppercase tracking-[0.1em] text-inkMuted">
                <th className="px-5 py-4 font-medium">System behavior</th>
                <th className="px-5 py-4 font-medium">SMB</th>
                <th className="px-5 py-4 font-medium">Mid-market</th>
                <th className="px-5 py-4 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {matrix.map((row) => (
                <tr key={row.behavior} className="align-top">
                  <td className="px-5 py-4 font-semibold text-ink">
                    {row.behavior}
                  </td>
                  <td className="px-5 py-4 text-ink">
                    {row.behavior === "Merchant visibility into status" ? (
                      <span className="rounded bg-alertSoft px-1.5 py-0.5 text-alert">
                        {row.smb}
                      </span>
                    ) : (
                      row.smb
                    )}
                  </td>
                  <td className="px-5 py-4 text-inkMuted">{row.mid}</td>
                  <td className="px-5 py-4 text-inkMuted">{row.ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-inkMuted">
          The opaque, automated, punitive experience that drives Trustpilot 1.3
          and churn-to-Stripe <span className="text-ink">only exists at SMB</span>.
          Enterprise already has the human layer that resolves the paradox
          case-by-case.
        </p>
      </Section>

      <Section tight>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow num="02">Where the consumer graph is asymmetric</Eyebrow>
            <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
              PayPal&rsquo;s 400M+ consumer graph is only a moat where the
              merchant is also a consumer.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-inkMuted">
              Shopify sellers. Creators. Venmo business profiles. Subscription
              apps. These are people PayPal already knows. Enterprise merchants
              are legal entities whose KYB signal comes from D&B, Experian
              Business, and corporate registries — markets where Stripe and
              Adyen have parity.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip tone="accent">SMB · asymmetric advantage</Chip>
              <Chip tone="muted">Mid-market · partial advantage</Chip>
              <Chip tone="muted">Enterprise · parity</Chip>
            </div>
          </div>
          <div>
            <Eyebrow num="03">The revenue math</Eyebrow>
            <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
              Enterprise has the logos. SMB has the marginal TPV lift.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-inkMuted">
              A 5% SMB activation lift across the acquiring cohort moves
              aggregate TPV more than a 5% enterprise retention lift — because
              the SMB denominator is millions of merchants. Enterprise is
              already served adequately by PayPal Complete Payments + Braintree
              + dedicated sales. Marginal PM leverage per engineering hour is
              lower.
            </p>
          </div>
        </div>
      </Section>

      <Section tight className="rule-top bg-paperAlt">
        <Eyebrow num="04">The roadmap, on one slide</Eyebrow>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {[
            {
              q: "Q1–Q2",
              label: "SMB foundations",
              body: "Confidence Score v1 data model. Progressive-release opt-in A/B. Consumer-graph KYB pilot.",
            },
            {
              q: "Q3",
              label: "Mid-market lift",
              body: "Score exposed to CSMs as activation dashboard. Release schedules parameterized, not imposed.",
            },
            {
              q: "Q4",
              label: "Enterprise sequencing",
              body: "Score tiers as contract clauses. Published Activation SLA for RFPs. Differentiate on predictability, not price.",
            },
            {
              q: "Year 2",
              label: "Full coverage",
              body: "One Confidence Score data model across segments. SMB primitives → mid-market tools → enterprise clauses.",
            },
          ].map((s) => (
            <div
              key={s.q}
              className="rounded-2xl border border-rule bg-paper p-6"
            >
              <div className="eyebrow text-accent">{s.q}</div>
              <h3 className="mt-2 text-base font-semibold text-ink">
                {s.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-inkMuted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tight>
        <Eyebrow num="05">The two pushbacks, anticipated</Eyebrow>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-rule bg-paperAlt p-6">
            <div className="eyebrow text-alert">
              If the hiring manager asks: &ldquo;Why not enterprise-first?&rdquo;
            </div>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Enterprise already has a human layer that resolves the paradox
              case-by-case through dedicated CSMs and custom contracts. The
              broken product experience — and the TPV leakage — lives at SMB,
              and SMB is also the only segment where PayPal&rsquo;s consumer
              graph is asymmetric vs. Stripe and Adyen. Building the primitives
              at SMB and exposing them as parameters upward is the
              highest-leverage architectural move; starting at enterprise and
              templating downward leaves seams — which is what Stripe and Adyen
              are still unwinding.
            </p>
          </div>
          <div className="rounded-2xl border border-rule bg-paperAlt p-6">
            <div className="eyebrow text-alert">
              If the hiring manager asks: &ldquo;Enterprise is where the revenue
              is.&rdquo;
            </div>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Enterprise is where the logos are; SMB is where the marginal TPV
              lift per PM-quarter is highest because the denominator is millions
              of merchants currently churning on a fixable architecture. A 3–5%
              SMB activation lift, properly measured, outweighs any mid-market
              retention win at the segment-TPV level — I have the cohort math
              ready to walk through.
            </p>
          </div>
        </div>
      </Section>

      <Section tight className="rule-top">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform duration-200 ease-expo hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to the prototype
        </Link>
      </Section>
    </main>
  );
}
