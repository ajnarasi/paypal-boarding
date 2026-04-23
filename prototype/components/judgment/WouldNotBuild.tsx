"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EASE_EXPO } from "@/lib/motion";

const items = [
  {
    title: "A redesigned signup form",
    because: "The entropy is downstream.",
  },
  {
    title: "In-product AI onboarding coaches",
    because: "They solve a discovery problem, not a trust problem.",
  },
  {
    title: "More merchant education content",
    because:
      "The issue isn't that merchants don't understand the hold. It's that the hold exists.",
  },
  {
    title: "A separate 'premium onboarding' tier",
    because: "It splits the product when the real answer unifies it.",
  },
  {
    title: "Wholesale elimination of holds",
    because:
      "Float economics fund the low take rate. The tradeoff is real, and must be named — not waved away.",
  },
];

export function WouldNotBuild() {
  return (
    <Section id="would-not-build" className="bg-ink text-paper">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <Eyebrow className="text-paper/60">What I would not build</Eyebrow>
          <h2 className="display mt-4 text-4xl md:text-5xl">
            The strongest signal of PM judgment is what you choose{" "}
            <span className="italic text-accent">not</span> to ship.
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-paper/70">
            A Director job owning KYB/KYC compliance rewards restraint as much
            as ambition. These are the shapes the memo deliberately avoids —
            each one would have been the obvious-but-wrong answer.
          </p>
        </div>

        <ul className="divide-y divide-paper/10 border-y border-paper/10">
          {items.map((it, i) => (
            <motion.li
              key={it.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE_EXPO }}
              className="flex items-start gap-5 py-5"
            >
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper/50">
                <X className="h-3 w-3" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-paper">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-paper/70">
                  {it.because}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
