"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Chip } from "@/components/ui/Chip";
import {
  releasePaths,
  cumulativeGrossByDay,
  type ReleasePath,
} from "@/lib/fixtures";
import { cn } from "@/lib/cn";
import { EASE_EXPO } from "@/lib/motion";

type TabId = ReleasePath["id"];

export function ReleaseSection() {
  const [active, setActive] = useState<TabId>("enhanced");
  const current = releasePaths.find((p) => p.id === active)!;

  const data = useMemo(() => {
    return current.availabilityByDay.map((val, day) => ({
      day,
      available: Math.round(val),
      gross: cumulativeGrossByDay[day],
    }));
  }, [current]);

  return (
    <Section id="release" className="bg-paperAlt rule-top rule-bottom">
      <div className="mb-10 flex flex-col gap-4">
        <Eyebrow num="03">Merchant-elected release</Eyebrow>
        <h2 className="display max-w-[28ch] text-4xl text-ink md:text-5xl">
          Progressive release is an{" "}
          <span className="text-accent">opt-in</span>, not a default change.
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-inkMuted">
          A blanket move from the 21-day hold is fragile to coordinated fraud.
          The architecture that survives contact with the real fraud regime:
          merchants <span className="text-ink">opt in</span> by posting
          collateral or completing enhanced verification. The default stays
          conservative. An A/B on risk-matched cohorts measures whether LTV
          + TPV lift swamps the float-revenue delta.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <div>
          {/* Tabs */}
          <div role="tablist" className="mb-6 flex flex-wrap gap-2">
            {releasePaths.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.id === active}
                onClick={() => setActive(p.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  p.id === active
                    ? "border-ink bg-ink text-paper"
                    : "border-rule bg-paper text-inkMuted hover:text-ink",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
            className="rounded-2xl border border-rule bg-paper p-6"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-ink">
                  {current.label}
                </h3>
                <p className="mt-0.5 text-sm text-inkMuted">
                  {current.description}
                </p>
              </div>
              <Chip tone={current.id === "standard" ? "alert" : "accent"}>
                {current.eligibility}
              </Chip>
            </div>

            <div className="h-[280px] w-full">
              <ResponsiveContainer>
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
                >
                  <defs>
                    <linearGradient id="availFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="oklch(74% 0.18 215)"
                        stopOpacity={0.35}
                      />
                      <stop
                        offset="100%"
                        stopColor="oklch(74% 0.18 215)"
                        stopOpacity={0.02}
                      />
                    </linearGradient>
                    <linearGradient id="grossFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="oklch(72% 0.008 250)"
                        stopOpacity={0.14}
                      />
                      <stop
                        offset="100%"
                        stopColor="oklch(72% 0.008 250)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    stroke="oklch(30% 0.015 250)"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    stroke="oklch(72% 0.008 250)"
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={{ stroke: "oklch(30% 0.015 250)" }}
                    label={{
                      value: "Day since first sale",
                      position: "insideBottom",
                      offset: -4,
                      fontSize: 11,
                      fill: "oklch(72% 0.008 250)",
                    }}
                  />
                  <YAxis
                    stroke="oklch(72% 0.008 250)"
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
                    width={44}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(21% 0.018 250)",
                      border: "1px solid oklch(30% 0.015 250)",
                      borderRadius: 10,
                      fontSize: 12,
                      color: "oklch(96% 0.003 250)",
                    }}
                    labelFormatter={(d) => `Day ${d}`}
                    formatter={(v: number, name: string) => [
                      `$${v.toLocaleString()}`,
                      name === "available" ? "Available to withdraw" : "Gross sales",
                    ]}
                  />
                  <ReferenceLine
                    x={21}
                    stroke="oklch(72% 0.19 30)"
                    strokeDasharray="4 4"
                    label={{
                      value: "Legacy hold lifts",
                      position: "insideTopRight",
                      fontSize: 10,
                      fill: "oklch(72% 0.19 30)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="gross"
                    stroke="oklch(72% 0.008 250)"
                    strokeWidth={1}
                    strokeDasharray="2 3"
                    fill="url(#grossFill)"
                    name="gross"
                  />
                  <Area
                    type="monotone"
                    dataKey="available"
                    stroke="oklch(74% 0.18 215)"
                    strokeWidth={2}
                    fill="url(#availFill)"
                    name="available"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-inkMuted">
              <LegendDot color="oklch(74% 0.18 215)" label="Available to withdraw" />
              <LegendDot
                color="oklch(72% 0.008 250)"
                label="Gross sales (reference)"
                dashed
              />
            </div>
          </motion.div>
        </div>

        <TradeoffPanel path={current} />
      </div>
    </Section>
  );
}

function LegendDot({
  color,
  label,
  dashed,
}: {
  color: string;
  label: string;
  dashed?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={cn(
          "block h-2 w-3 rounded-sm",
          dashed ? "opacity-60" : "opacity-100",
        )}
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

function TradeoffPanel({ path }: { path: ReleasePath }) {
  const rows = [
    {
      label: "Eligibility",
      value: path.eligibility,
    },
    {
      label: "Fraud exposure",
      value: path.fraudExposureLabel,
    },
    {
      label: "Float revenue Δ",
      value:
        path.floatDeltaPct === 0 ? "Baseline" : `${path.floatDeltaPct}% vs std`,
    },
    {
      label: "LTV impact",
      value: path.ltvImpactLabel,
    },
  ];
  return (
    <motion.aside
      key={path.id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_EXPO }}
      className="rounded-2xl border border-rule bg-paper p-6"
    >
      <div className="eyebrow">Tradeoff panel</div>
      <h4 className="mt-2 text-lg font-semibold text-ink">{path.label}</h4>
      <dl className="mt-5 divide-y divide-rule">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-1 py-3 text-sm">
            <dt className="eyebrow text-inkFaint">{r.label}</dt>
            <dd className="text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 border-t border-rule pt-4 text-xs leading-relaxed text-inkMuted">
        The A/B doesn&rsquo;t test whether progressive release is &ldquo;better.&rdquo;
        It measures whether LTV + TPV lift swamps the float delta under a risk-matched cohort design.
      </p>
    </motion.aside>
  );
}
