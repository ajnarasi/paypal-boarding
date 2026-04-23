"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EASE_EXPO } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[92vh] w-full max-w-frame flex-col justify-between px-6 pt-12 md:px-10 md:pt-16"
    >
      <header className="flex items-center justify-between">
        <Eyebrow num="00">Merchant Confidence · prototype</Eyebrow>
        <div className="hidden items-center gap-3 md:flex">
          <Chip tone="muted">3-minute walkthrough</Chip>
          <Chip tone="muted">Public research only</Chip>
        </div>
      </header>

      <div className="flex flex-1 flex-col justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_EXPO }}
        >
          <Chip tone="accent" className="mb-6">
            A prototype for PayPal — Director, Merchant Onboarding & Growth
          </Chip>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.08 }}
          className="display max-w-[22ch] text-hero text-ink"
        >
          PayPal&rsquo;s Growth and Risk systems
          <span className="text-accent"> optimize against each other.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.2 }}
          className="mt-6 max-w-[56ch] text-lg leading-relaxed text-inkMuted md:text-xl"
        >
          This prototype resolves the paradox using the consumer graph Stripe
          doesn&rsquo;t have — not with a redesigned signup form.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE_EXPO, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#paradox"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform duration-200 ease-expo hover:-translate-y-0.5"
          >
            <Play className="h-3.5 w-3.5" />
            Begin the walkthrough
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accentSoft px-5 py-3 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accentSoft/80"
          >
            About this pitch
          </a>
          <a
            href="/enterprise"
            className="inline-flex items-center gap-2 rounded-full border border-rule bg-paperAlt px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Why SMB-first &middot; Enterprise brief
          </a>
        </motion.div>
      </div>

      <footer className="flex flex-col gap-4 border-t border-rule py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-inkMuted">
          <span>
            <span className="text-ink">Ajay Narasimmamoorthy</span> · Sr Director
            PM, Fiserv Global Commerce Orchestration
          </span>
        </div>
        <motion.a
          href="#paradox"
          className="eyebrow flex items-center gap-2 text-inkFaint transition-colors hover:text-ink"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll <ArrowDown className="h-3 w-3" />
        </motion.a>
      </footer>
    </section>
  );
}
