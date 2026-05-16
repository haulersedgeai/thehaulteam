import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICE_CATEGORIES, getServicesByCategory, getHub } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | The Haul Team",
  description: "Every service The Haul Team offers across Austin and Central Texas — junk removal, clean-outs, demolition, and moving.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="All Services"
        title="What The Haul Team Does"
        subtitle="Junk removal, clean-outs, demolition, and moving — one crew, one truck, one upfront price."
        showRating={false}
      />
      {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map((k, idx) => {
        const cat = SERVICE_CATEGORIES[k];
        const hub = getHub(k);
        const subs = getServicesByCategory(k);
        return (
          <Section key={k} bg={idx % 2 === 0 ? "default" : "cream"}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm font-bold uppercase tracking-wider text-brand">{cat.label}</div>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                  {hub?.h1 || cat.label}
                </h2>
                <p className="mt-3 text-ink/75">{hub?.intro || cat.description}</p>
              </div>
              <Link href={`/services/${cat.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-brand">
                Hub page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-brand/30"
                >
                  <div className="text-base font-bold text-ink">{s.shortTitle}</div>
                  <p className="mt-1.5 line-clamp-2 text-sm text-ink/70">{s.intro}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}
      <CTASection />
    </>
  );
}
