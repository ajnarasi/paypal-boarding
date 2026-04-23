"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Chip } from "@/components/ui/Chip";
import { EASE_EXPO } from "@/lib/motion";

const milestones = [
  { id: "signup", label: "Signup" },
  { id: "kyb", label: "KYB" },
  { id: "first", label: "First txn" },
  { id: "activation", label: "Activation" },
];

export function ParadoxTimelines() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <Section id="paradox" className="bg-paper">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-16">
        <div>
          <Eyebrow num="01">The paradox</Eyebrow>
          <h2 className="display mt-4 text-4xl text-ink md:text-5xl">
            Same event. Two systems. Opposite reactions.
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-inkMuted">
            The Growth team is chartered to accelerate merchants toward a first
            transaction. The Risk team is chartered to slow them down the moment
            that transaction happens. The merchant experiences the conflict as a
            single broken product.
          </p>
          <div className="mt-8 space-y-3 border-l-2 border-accent/30 pl-5">
            <p className="text-sm text-inkMuted">
              <span className="text-ink">Trustpilot 1.3 / 5</span> across
              35,000+ reviews.
            </p>
            <p className="text-sm text-inkMuted">
              <span className="text-ink">The hold is the product.</span> Not a
              signup-form problem.
            </p>
            <Chip tone="muted">
              <a href="/evidence" className="hover:text-ink">
                [public sources]
              </a>
            </Chip>
          </div>
        </div>

        <div ref={ref} className="relative">
          <div className="flex flex-col gap-10">
            {/* Growth timeline */}
            <Timeline
              tone="growth"
              icon={<TrendingUp className="h-4 w-4" />}
              title="Growth system"
              goal="Goal · first successful transaction"
              inView={inView}
              accelerating
            />

            {/* Risk timeline */}
            <Timeline
              tone="alert"
              icon={<Snowflake className="h-4 w-4" />}
              title="Risk system"
              goal="Goal · loss-rate minimization"
              inView={inView}
              accelerating={false}
            />

            {/* Divergence annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0, ease: EASE_EXPO }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full border border-alert/30 bg-paper px-3 py-1.5 text-xs font-medium text-alert shadow-sm">
                  Divergence at first txn
                </div>
                <div className="mt-2 h-4 w-px bg-alert/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Timeline({
  tone,
  icon,
  title,
  goal,
  inView,
  accelerating,
}: {
  tone: "growth" | "alert";
  icon: React.ReactNode;
  title: string;
  goal: string;
  inView: boolean;
  accelerating: boolean;
}) {
  const barColor =
    tone === "growth" ? "bg-growth" : "bg-alert";
  const softColor =
    tone === "growth" ? "bg-growthSoft" : "bg-alertSoft";
  const textColor =
    tone === "growth" ? "text-growth" : "text-alert";
  const borderColor =
    tone === "growth" ? "border-growth/30" : "border-alert/30";

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className={`flex items-center gap-2 ${textColor}`}>
          <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${softColor}`}>
            {icon}
          </span>
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <span className="eyebrow">{goal}</span>
      </div>
      <div
        className={`relative h-[88px] rounded-xl border ${borderColor} ${softColor} p-3`}
      >
        <div className="relative flex h-full items-center">
          {milestones.map((m, i) => (
            <div
              key={m.id}
              className="flex flex-1 flex-col items-center"
              style={{ minWidth: 0 }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.12,
                  ease: EASE_EXPO,
                }}
                className={`h-3 w-3 rounded-full ${barColor}`}
              />
              <span className="mt-2 text-xs text-ink">{m.label}</span>
              {m.id === "first" && !accelerating && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.85,
                    ease: EASE_EXPO,
                  }}
                  className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-alert"
                >
                  → 21-day hold
                </motion.span>
              )}
              {m.id === "activation" && accelerating && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.85,
                    ease: EASE_EXPO,
                  }}
                  className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-growth"
                >
                  → KPI win
                </motion.span>
              )}
            </div>
          ))}

          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE_EXPO }}
            className={`pointer-events-none absolute left-[6%] right-[6%] top-[26%] h-px origin-left ${barColor} opacity-60`}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
}
