import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { evidenceSources } from "@/lib/fixtures";

export const metadata = {
  title: "Evidence — Merchant Confidence",
  description:
    "Every number in the prototype traces to a public source. Nothing here is PayPal-internal material.",
};

export default function EvidencePage() {
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
          <Eyebrow>Public research only</Eyebrow>
          <h1 className="display mt-3 max-w-[22ch] text-5xl text-ink md:text-6xl">
            Every number in the prototype traces to a public source.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-inkMuted">
            This artifact is pre-application independent research. Nothing here
            is PayPal-internal material. Real internal data would refine every
            figure below.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-rule bg-paper">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rule bg-paperAlt text-xs uppercase tracking-[0.1em] text-inkMuted">
                <th className="px-5 py-4 font-medium">Claim</th>
                <th className="px-5 py-4 font-medium">Source</th>
                <th className="px-5 py-4 font-medium">Type</th>
                <th className="px-5 py-4 font-medium" />
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {evidenceSources.map((e) => (
                <tr key={e.claim}>
                  <td className="px-5 py-4 align-top text-ink">{e.claim}</td>
                  <td className="px-5 py-4 align-top text-inkMuted">
                    {e.source}
                  </td>
                  <td className="px-5 py-4 align-top text-xs text-inkFaint">
                    {e.type}
                  </td>
                  <td className="px-5 py-4 align-top text-right">
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      Link <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border border-rule bg-paperAlt p-6 text-sm leading-relaxed text-inkMuted">
          <p>
            <span className="text-ink">Disclaimer.</span> This prototype was
            built as part of a job application for PayPal&rsquo;s Director,
            Product Management — Merchant Onboarding &amp; Growth role. All
            numbers, quotes, and product critiques are built on public data and
            independent engineering work. The author has no access to
            PayPal-internal data, dashboards, or roadmaps. Fiserv-side
            credentials (55 APMs, 70+ countries, 40% onboarding-time reduction)
            reflect the author&rsquo;s personal work at Fiserv Global Commerce
            Orchestration.
          </p>
        </div>
      </Section>
    </main>
  );
}
