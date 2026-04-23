"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";
import { EASE_EXPO } from "@/lib/motion";

type TabId = "what" | "why" | "how" | "problem";

type TabContent = {
  id: TabId;
  label: string;
  headline: string;
  body: React.ReactNode;
  pullQuote?: React.ReactNode;
  replyHook: string;
};

const tabs: TabContent[] = [
  {
    id: "what",
    label: "What this pitch is",
    headline: "A prototype-first application, not a cover letter.",
    body: (
      <>
        A one-page memo, a clickable walkthrough, a four-minute Loom, and a
        business-panel-reviewed recommendation — all built in four business
        days from public data.
        <br />
        <br />
        <span className="text-ink">What it is not:</span> a resume, a case
        study, or a polished consulting deck. Every number on this site traces
        to a public source, linked out from <a href="/evidence" className="underline decoration-accentBright/40 underline-offset-2 hover:decoration-accentBright">/evidence</a>.
      </>
    ),
    pullQuote:
      "Could any other candidate have shipped this over a weekend? If not, the signal is the artifact.",
    replyHook:
      "If you'd rather skip the prototype and read the memo, it's one scroll and a link away.",
  },
  {
    id: "why",
    label: "Why I built it",
    headline:
      "Because the JD describes a problem I've already shipped adjacent to — and I'd rather show it than describe it.",
    body: (
      <>
        Over four years at Fiserv, I built the merchant side of the exact same
        paradox — unified onboarding APIs across{" "}
        <span className="text-ink">55 APMs and 70+ countries</span>, where
        regional KYC/KYB and network-level risk models sit between a
        merchant&rsquo;s signup and their first transaction. I cut onboarding
        time <span className="text-ink">40%</span> by collapsing those silos
        into one integration layer.
        <br />
        <br />
        I don&rsquo;t need twelve months to understand PayPal&rsquo;s system. I
        need twenty minutes of your time to show I already do.
      </>
    ),
    pullQuote:
      "The prototype is the evidence. The memo is the argument. The Loom is the compression.",
    replyHook:
      "Ask me to diagram the Fiserv unified-boarding architecture on a whiteboard — it&rsquo;s the pattern I&rsquo;d port to PayPal on week one.",
  },
  {
    id: "how",
    label: "How I prioritized",
    headline:
      "Three heuristics cut ten potential recommendations to three.",
    body: (
      <ol className="space-y-4">
        <li className="flex items-start gap-4">
          <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent">
            01
          </span>
          <div>
            <div className="font-semibold text-ink">
              Architectural leverage &gt; UX polish.
            </div>
            <div className="mt-1 text-inkMuted">
              Fix the conflict between two subsystems, not the handoff between
              them. A redesigned signup form is downstream entropy.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent">
            02
          </span>
          <div>
            <div className="font-semibold text-ink">Segment leverage.</div>
            <div className="mt-1 text-inkMuted">
              SMB is where the paradox is architectural <em>and</em> where
              PayPal&rsquo;s consumer graph is asymmetric vs. Stripe and Adyen.
              Enterprise inherits the parameters; it doesn&rsquo;t generate the
              primitives.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent">
            03
          </span>
          <div>
            <div className="font-semibold text-ink">Risk optionality.</div>
            <div className="mt-1 text-inkMuted">
              Default stays conservative. Opt-in is where velocity lives. A
              blanket flip from the 21-day hold is fragile to coordinated
              fraud; opt-in survives contact with the real regime.
            </div>
          </div>
        </li>
      </ol>
    ),
    replyHook:
      "Happy to walk through the rejected seven — that&rsquo;s usually the more useful half of a prioritization conversation.",
  },
  {
    id: "problem",
    label: "What problem I'm solving",
    headline:
      "A new SMB who sells $4K on day 3 and can't access funds until day 24 is functionally not activated — regardless of what the funnel dashboard says.",
    body: (
      <>
        Trustpilot <span className="text-ink">1.3 / 5</span> across{" "}
        <span className="text-ink">35,000+ reviews</span>. That is not a
        signup-form problem. It is the downstream experience of two systems
        optimizing against each other at the SMB tier.
        <br />
        <br />
        The Merchant Onboarding team owns time-to-first-transaction. The Risk
        team owns loss rate. Both are local maxima. The metric that realigns
        them is one substitution the rest of this prototype keeps circling:
      </>
    ),
    pullQuote: (
      <div className="flex flex-col gap-2">
        <div className="eyebrow text-gold">The single metric substitution</div>
        <div className="text-xl text-ink">
          <span className="line-through decoration-alert/50 decoration-2">
            time-to-first-transaction
          </span>{" "}
          →{" "}
          <span className="text-accent">
            time-to-first-successful-withdrawal
          </span>
        </div>
        <div className="text-sm text-inkMuted">
          That one substitution realigns Growth and Risk on the same goal.
          Everything else in this pitch is downstream of it.
        </div>
      </div>
    ),
    replyHook:
      "I&rsquo;d walk into week one asking whether this substitution would even survive an Operating Review conversation — that&rsquo;s a revealing test.",
  },
];

export function AboutPitch() {
  const [activeId, setActiveId] = useState<TabId>("what");
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <Section id="about" className="bg-paper rule-top">
      <div className="mb-10 flex flex-col gap-4">
        <Eyebrow num="00·5">About this pitch</Eyebrow>
        <h2 className="display max-w-[28ch] text-4xl text-ink md:text-5xl">
          The meta-frame — before you go deeper.
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-inkMuted">
          Four questions a hiring manager would reasonably ask before spending
          three minutes on a clickable prototype. Answered here, up front, so
          the rest of the scroll is product thinking, not context-setting.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-14">
        {/* Tab rail */}
        <div
          role="tablist"
          aria-label="About this pitch"
          className="flex flex-row flex-wrap gap-2 lg:flex-col"
        >
          {tabs.map((t, i) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(t.id)}
                className={cn(
                  "group flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
                  isActive
                    ? "border-accent/30 bg-accentSoft text-ink"
                    : "border-rule bg-paperAlt text-inkMuted hover:border-accent/20 hover:bg-accentSoft/60 hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-mono text-[0.7rem] transition-colors",
                    isActive
                      ? "bg-accent text-paper"
                      : "bg-rule/60 text-inkMuted group-hover:bg-accent/20 group-hover:text-accent",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE_EXPO }}
              className="rounded-2xl border border-rule bg-paperAlt p-7 md:p-9"
            >
              <h3 className="display text-2xl leading-[1.15] text-ink md:text-3xl">
                {active.headline}
              </h3>

              <div className="mt-5 max-w-prose text-base leading-relaxed text-inkMuted">
                {active.body}
              </div>

              {active.pullQuote && (
                <figure className="mt-7 rounded-xl border-l-4 border-accent bg-paper p-5">
                  {typeof active.pullQuote === "string" ? (
                    <blockquote className="text-lg italic leading-relaxed text-ink">
                      &ldquo;{active.pullQuote}&rdquo;
                    </blockquote>
                  ) : (
                    active.pullQuote
                  )}
                </figure>
              )}

              <div className="mt-7 flex items-start gap-3 border-t border-rule pt-5 text-sm leading-relaxed text-inkMuted">
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                />
                <em
                  className="not-italic"
                  dangerouslySetInnerHTML={{ __html: active.replyHook }}
                />
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
