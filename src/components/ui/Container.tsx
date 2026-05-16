import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  bg = "default",
}: {
  children: React.ReactNode;
  className?: string;
  bg?: "default" | "cream" | "ink" | "brand";
}) {
  const bgClass =
    bg === "cream"
      ? "bg-cream"
      : bg === "ink"
      ? "bg-ink text-cream"
      : bg === "brand"
      ? "bg-brand text-white"
      : "bg-white";
  return (
    <section className={cn("py-14 md:py-20", bgClass, className)}>
      <Container>{children}</Container>
    </section>
  );
}
