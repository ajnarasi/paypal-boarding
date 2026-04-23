"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { segments } from "@/lib/fixtures";
import { EASE_EXPO } from "@/lib/motion";

export function SegmentRibbon() {
  return (
    <Section id="segments" className="bg-paperAlt rule-top rule-bottom">
      <div className="mb-10 flex flex-col gap-4">
        <Eyebrow num="05">Segment sequencing</Eyebrow>
        <h2 className="display max-w-[26ch] text-4xl text-ink md:text-5xl">
          Why SMB-first, then mid-market, then enterprise.
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-inkMuted">
          The paradox is <span className="text-ink">architectural at SMB</span>{" "}
          and <span className="text-ink">parametric at enterprise</span>. You
          ship the primitives where the product lives, then expose them as
          parameters upward. Templatize up; don&rsquo;t build down.
        </p>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-3">
        {segments.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_EXPO }}
            className="flex flex-col rounded-2xl border border-rule bg-paper p-6"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="display text-2xl text-ink">{s.label}</h3>
              <span className="font-mono text-xs text-inkFaint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="eyebrow mt-2 text-accent">{s.phase}</div>
            <p className="mt-4 text-sm leading-relaxed text-inkMuted">
              {s.body}
            </p>
            <p className="mt-4 border-t border-rule pt-4 text-sm leading-relaxed text-ink">
              {s.differentiator}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/enterprise"
          className="group inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-5 py-3 text-sm font-medium text-ink transition-transform duration-200 ease-expo hover:-translate-y-0.5"
        >
          Full enterprise sequencing brief
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Section>
  );
}
