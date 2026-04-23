import { cn } from "@/lib/cn";

type ChipTone = "neutral" | "accent" | "growth" | "alert" | "muted";

const toneMap: Record<ChipTone, string> = {
  neutral: "bg-paperAlt text-ink border-rule",
  accent: "bg-accentSoft text-accent border-accent/20",
  growth: "bg-growthSoft text-growth border-growth/20",
  alert: "bg-alertSoft text-alert border-alert/20",
  muted: "bg-transparent text-inkMuted border-rule",
};

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: ChipTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
