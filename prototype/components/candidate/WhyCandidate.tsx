"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { credibilityAnchors } from "@/lib/fixtures";
import { EASE_EXPO } from "@/lib/motion";

export function WhyCandidate() {
  return (
    <Section id="candidate" className="bg-paper">
      <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <Eyebrow num="06">Why this candidate</Eyebrow>
          <h2 className="display mt-4 text-4xl text-ink md:text-5xl">
            I have shipped this pattern before — just on a different stack.
          </h2>
        </div>
        <p className="max-w-prose self-end text-base leading-relaxed text-inkMuted">
          Over the last four years at Fiserv, I owned the merchant side of this
          same problem — unified onboarding APIs across 55 payment methods and
          70+ countries, where regional KYC/KYB rules and network-level risk
          models sit between a merchant&rsquo;s signup and their first
          transaction. The numbers below are the flywheel I would port to
          PayPal.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {credibilityAnchors.map((c, i) => (
          <motion.div
            key={c.metric}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_EXPO }}
            className="rounded-2xl border border-rule bg-paperAlt p-7"
          >
            <div className="display text-5xl text-accent">{c.metric}</div>
            <p className="mt-5 text-sm leading-relaxed text-ink">{c.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl border border-ink bg-ink p-8 text-paper md:flex-row md:items-center md:justify-between">
        <div>
          <div className="eyebrow text-paper/70">Next step</div>
          <p className="display mt-2 max-w-[22ch] text-2xl md:text-3xl">
            Happy to walk through the Confidence Score data model or the opt-in
            cohort design.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:ajay.narasimmamoorthy@gmail.com?subject=PayPal%20Director%20Merchant%20Onboarding"
            className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-transform duration-200 ease-expo hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://linkedin.com/in/ajaynar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://cal.com/ajaynar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
          >
            <Calendar className="h-4 w-4" /> Book 20 min
          </a>
        </div>
      </div>

      <footer className="mt-16 flex flex-col gap-3 border-t border-rule pt-8 text-sm text-inkMuted md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-ink">Ajay Narasimmamoorthy</span> · Senior
          Director, Product — Fiserv Global Commerce Orchestration
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-inkFaint">
          <a href="/evidence" className="hover:text-ink">
            Evidence & public sources
          </a>
          <a href="/enterprise" className="hover:text-ink">
            Enterprise sequencing brief
          </a>
          <span>Built for Apr 2026 outreach</span>
        </div>
      </footer>
    </Section>
  );
}
