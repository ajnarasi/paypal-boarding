"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Chip } from "@/components/ui/Chip";
import { ConfidenceScore } from "./ConfidenceScore";
import { journeySteps, mayaProfile, baseScore } from "@/lib/fixtures";
import { EASE_EXPO } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function MayaJourney() {
  const [stepIndex, setStepIndex] = useState(0); // 0 = before step 1, 4 = after step 4
  const completedSteps = journeySteps.slice(0, stepIndex);
  const currentStep = stepIndex < journeySteps.length ? journeySteps[stepIndex] : null;

  const score = completedSteps.reduce((acc, s) => acc + s.scoreDelta, baseScore);
  const signals = completedSteps.length
    ? completedSteps[completedSteps.length - 1].inheritedSignals
    : [];
  const lastFactor = completedSteps.length
    ? completedSteps[completedSteps.length - 1].factorExplanation
    : null;

  function next() {
    if (stepIndex < journeySteps.length) setStepIndex((i) => i + 1);
  }

  function reset() {
    setStepIndex(0);
  }

  return (
    <Section id="journey" className="bg-paper">
      <div className="mb-10 flex flex-col gap-4">
        <Eyebrow num="02">The consumer-graph move</Eyebrow>
        <h2 className="display max-w-[22ch] text-4xl text-ink md:text-5xl">
          Maya signs up. PayPal already knows her.
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-inkMuted">
          Maya runs Archive Ceramics on Shopify, $4K/wk. She&rsquo;s had a
          PayPal personal account since 2014 and a Venmo profile since 2019. Her
          business onboarding reuses what PayPal already verified.{" "}
          <span className="text-ink">Stripe and Adyen can&rsquo;t offer this.</span>
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          {/* Merchant card */}
          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-rule bg-paperAlt px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-paper">
              M
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-ink">{mayaProfile.name}</div>
              <div className="text-xs text-inkMuted">
                {mayaProfile.business} · {mayaProfile.platform} · {mayaProfile.weeklyRevenue}/wk
              </div>
            </div>
            <Chip tone="accent">Digital-native SMB</Chip>
          </div>

          {/* Step list */}
          <ol className="space-y-3">
            {journeySteps.map((step, i) => {
              const state: "done" | "current" | "pending" =
                i < stepIndex ? "done" : i === stepIndex ? "current" : "pending";
              return (
                <StepCard key={step.id} step={step} state={state} index={i} />
              );
            })}
          </ol>

          {/* Controls */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={next}
              disabled={stepIndex >= journeySteps.length}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 ease-expo",
                stepIndex >= journeySteps.length
                  ? "cursor-not-allowed bg-paperAlt text-inkFaint"
                  : "bg-ink text-paper hover:-translate-y-0.5",
              )}
            >
              {stepIndex >= journeySteps.length
                ? "Journey complete — opt-in unlocked"
                : stepIndex === 0
                  ? "Start Maya's journey"
                  : `Next · ${journeySteps[stepIndex].title}`}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            {stepIndex > 0 && (
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-rule bg-paper px-4 py-3 text-sm text-inkMuted hover:text-ink"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset
              </button>
            )}
            <span className="text-xs text-inkFaint">
              Step {Math.min(stepIndex + 1, journeySteps.length)} of{" "}
              {journeySteps.length}
            </span>
          </div>

          <AnimatePresence>
            {currentStep && (
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_EXPO }}
                className="mt-6 rounded-xl border border-accent/20 bg-accentSoft p-4 text-sm text-ink"
              >
                <div className="eyebrow mb-1 text-accent">Next up</div>
                <div>
                  <span className="text-ink">{currentStep.merchantAction}</span>
                  <span className="text-inkMuted">
                    {" "}
                    — {currentStep.systemResponse}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ConfidenceScore
          score={score}
          signals={signals}
          lastFactor={lastFactor}
        />
      </div>
    </Section>
  );
}

function StepCard({
  step,
  state,
  index,
}: {
  step: (typeof journeySteps)[number];
  state: "done" | "current" | "pending";
  index: number;
}) {
  return (
    <motion.li
      layout
      className={cn(
        "relative rounded-xl border p-4 transition-colors",
        state === "done" && "border-growth/30 bg-growthSoft/60",
        state === "current" && "border-ink/30 bg-paper shadow-sm",
        state === "pending" && "border-rule bg-paperAlt/40 opacity-60",
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm",
            state === "done"
              ? "bg-growth text-paper"
              : state === "current"
                ? "bg-ink text-paper"
                : "bg-rule text-inkFaint",
          )}
        >
          {state === "done" ? "✓" : index + 1}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="text-sm font-semibold text-ink">{step.title}</h4>
            <span
              className={cn(
                "text-xs font-mono",
                state === "done" ? "text-growth" : "text-inkFaint",
              )}
            >
              +{step.scoreDelta}
            </span>
          </div>
          <p className="mt-1 text-sm text-inkMuted">
            <span className="text-ink">{step.merchantAction}.</span>{" "}
            {step.systemResponse}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
