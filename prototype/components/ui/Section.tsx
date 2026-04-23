import { cn } from "@/lib/cn";

export function Section({
  children,
  id,
  className,
  tight,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-frame px-6 md:px-10",
        tight ? "py-16 md:py-24" : "py-24 md:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
