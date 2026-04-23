import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  num,
}: {
  children: React.ReactNode;
  className?: string;
  num?: string;
}) {
  return (
    <div className={cn("eyebrow flex items-center gap-3", className)}>
      {num ? (
        <span className="font-mono text-[0.68rem] text-inkFaint">{num}</span>
      ) : null}
      <span>{children}</span>
    </div>
  );
}
