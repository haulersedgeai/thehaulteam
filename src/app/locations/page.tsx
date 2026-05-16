import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { CITIES, NEIGHBORHOODS } from "@/content/locations";

export const metadata: Metadata = {
  title: "Service Area | Austin & Central Texas | The Haul Team",
  description: "Every Austin neighborhood and Central Texas city we serve. Same-day junk removal, clean-outs, and demolition.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <Hero
        eyebrow="Service Area"
        title="Where The Haul Team Works"
        subtitle="Austin, every neighborhood inside the loop, and the whole Central Texas suburb ring — from Georgetown to San Marcos."
        showRating={false}
      />

      <Section>
        <div className="text-sm font-bold uppercase tracking-wider text-brand">Cities We Serve</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">Central Texas Cities</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-brand/30"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <div>
                <div className="text-base font-bold text-ink group-hover:text-brand">{c.fullName}</div>
                {c.county && <div className="text-xs text-ink/60">{c.county}</div>}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="cream">
        <div className="text-sm font-bold uppercase tracking-wider text-brand">Austin Neighborhoods</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">Every Part of Austin</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOODS.map((n) => (
            <Link
              key={n.slug}
              href={`/locations/${n.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-brand/30"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <div className="text-base font-bold text-ink group-hover:text-brand">{n.fullName}</div>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
