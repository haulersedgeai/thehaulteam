import Link from "next/link";
import { ArrowRight, Truck, Hammer, Home, MoveRight } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { SERVICE_CATEGORIES } from "@/content/services";

const ICONS = {
  "junk-removal": Truck,
  "clean-outs": Home,
  demolitions: Hammer,
  "moving-and-delivery": MoveRight,
} as const;

export function ServicesGrid({ heading = "What We Do" }: { heading?: string }) {
  const keys = Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>;
  return (
    <Section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-wider text-brand">Services</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-ink/70">
            Four services, one crew, one truck. Family-owned and operating across Austin and Central Texas.
          </p>
        </div>
        <Link href="/services" className="inline-flex items-center gap-1 text-sm font-bold text-brand">
          See all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {keys.map((k) => {
          const c = SERVICE_CATEGORIES[k];
          const Icon = ICONS[k];
          return (
            <Link
              key={k}
              href={`/services/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-xl font-bold text-ink">{c.label}</div>
              <p className="mt-1.5 flex-1 text-sm text-ink/70">{c.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
