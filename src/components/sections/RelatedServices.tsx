import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { getService } from "@/content/services";

export function RelatedServices({ slugs, heading = "Related Services" }: { slugs: string[]; heading?: string }) {
  const items = slugs.map(getService).filter(Boolean) as NonNullable<ReturnType<typeof getService>>[];
  if (!items.length) return null;
  return (
    <Section bg="cream">
      <div className="text-sm font-bold uppercase tracking-wider text-brand">More Services</div>
      <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand/30"
          >
            <div className="text-lg font-bold text-ink">{s.shortTitle}</div>
            <p className="mt-1.5 line-clamp-2 text-sm text-ink/70">{s.intro}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
