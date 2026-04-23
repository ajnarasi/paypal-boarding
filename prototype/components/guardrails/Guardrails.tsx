"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ScanEye,
  Lock,
  Scale,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { guardrails } from "@/lib/fixtures";
import { EASE_EXPO } from "@/lib/motion";

const icons = [Scale, ScanEye, Lock, ShieldCheck];

export function Guardrails() {
  return (
    <Section id="guardrails" className="bg-paper">
      <div className="mb-10 flex flex-col gap-4">
        <Eyebrow num="04">Guardrails</Eyebrow>
        <h2 className="display max-w-[24ch] text-4xl text-ink md:text-5xl">
          The compliance shape this product has to hold.
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-inkMuted">
          A visible merchant score without this section is a fair-lending
          exposure and a fraud surface. These are the four constraints the
          Confidence Score and opt-in release architecture are built to satisfy.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guardrails.map((g, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE_EXPO }}
              className="flex flex-col rounded-2xl border border-rule bg-paperAlt p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-inkMuted">
                {g.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
