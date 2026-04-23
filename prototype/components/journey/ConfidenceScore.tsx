"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { EASE_EXPO } from "@/lib/motion";
import { optInThreshold } from "@/lib/fixtures";

export function ConfidenceScore({
  score,
  signals,
  lastFactor,
}: {
  score: number;
  signals: string[];
  lastFactor: string | null;
}) {
  const eligible = score >= optInThreshold;
  const pct = Math.min(100, (score / 100) * 100);

  return (
    <aside className="sticky top-6 rounded-2xl border border-rule bg-paperAlt p-6">
      <div className="eyebrow">Confidence Score · live</div>

      <div className="mt-4 flex items-end justify-between">
        <div className="font-mono">
          <motion.span
            key={score}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
            className="display text-6xl text-ink"
          >
            {score}
          </motion.span>
          <span className="text-sm text-inkFaint"> / 100</span>
        </div>
        <div
          className={cn(
            "rounded-full border px-2.5 py-1 text-xs font-medium",
            eligible
              ? "border-growth/30 bg-growthSoft text-growth"
              : "border-rule bg-paper text-inkMuted",
          )}
        >
          {eligible ? "Opt-in eligible" : `Threshold ${optInThreshold}`}
        </div>
      </div>

      {/* Bar */}
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-rule/50">
        <motion.div
          className={cn("h-full", eligible ? "bg-growth" : "bg-accent")}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.55, ease: EASE_EXPO }}
        />
      </div>
      {/* Threshold tick */}
      <div className="relative mt-1 h-3">
        <div
          className="absolute top-0 h-3 w-px bg-ink/40"
          style={{ left: `${optInThreshold}%` }}
        />
        <span
          className="absolute top-3 -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.12em] text-inkFaint"
          style={{ left: `${optInThreshold}%` }}
        >
          opt-in
        </span>
      </div>

      <div className="mt-8 space-y-2">
        <div className="eyebrow">Inherited signals</div>
        <ul className="flex flex-wrap gap-2">
          <AnimatePresence mode="popLayout">
            {signals.map((s) => (
              <motion.li
                key={s}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_EXPO }}
                className="flex items-center gap-1.5 rounded-full border border-growth/30 bg-growthSoft px-2.5 py-1 text-xs font-medium text-growth"
              >
                <Check className="h-3 w-3" />
                {s}
              </motion.li>
            ))}
          </AnimatePresence>
          {signals.length === 0 && (
            <li className="text-xs text-inkFaint">
              No merchant signal yet. Signals unlock as Maya proceeds.
            </li>
          )}
        </ul>
      </div>

      {lastFactor && (
        <motion.div
          key={lastFactor}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_EXPO }}
          className="mt-6 rounded-lg bg-paper p-3 text-xs leading-relaxed text-inkMuted ring-1 ring-rule"
        >
          <span className="font-semibold text-ink">Latest factor.</span>{" "}
          {lastFactor}
        </motion.div>
      )}

      <div className="mt-6 border-t border-rule pt-4 text-[0.72rem] leading-relaxed text-inkFaint">
        Score is an <span className="text-ink">activation signal</span>, not an
        adverse-action decision. Freeze decisions stay on Risk&rsquo;s existing
        notice infrastructure.
      </div>
    </aside>
  );
}
