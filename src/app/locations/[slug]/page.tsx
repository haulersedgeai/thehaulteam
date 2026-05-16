import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { LOCATIONS, getLocation } from "@/content/locations";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/content/services";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: { title: loc.metaTitle, description: loc.metaDescription },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const isCity = loc.type === "city";

  return (
    <>
      <Hero
        eyebrow={isCity ? "Service Area" : "Austin Neighborhood"}
        title={`${isCity ? "Junk Removal in" : "Junk Removal in"} ${loc.fullName}`}
        subtitle={`Family-owned junk removal, clean-outs, demolition, and moving in ${loc.name}. Same-day pickup, upfront pricing, 200+ five-star reviews.`}
      />

      <Section>
        <nav className="mb-4 flex items-center gap-1 text-sm text-ink/60">
          <Link href="/" className="hover:text-brand">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/locations" className="hover:text-brand">Service Area</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-ink">{loc.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Serving {loc.fullName} {loc.county ? `(${loc.county})` : ""} since 2022
            </h2>
            <p className="mt-4 text-lg text-ink/80">{loc.intro}</p>

            <h3 className="mt-10 font-display text-xl font-extrabold text-ink">
              Services in {loc.name}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map((k) => {
                const c = SERVICE_CATEGORIES[k];
                return (
                  <Link
                    key={k}
                    href={`/services/${c.slug}`}
                    className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:border-brand/30 hover:shadow-md"
                  >
                    <div className="text-lg font-bold text-ink">{c.label}</div>
                    <p className="mt-1 text-sm text-ink/70">{c.description}</p>
                  </Link>
                );
              })}
            </div>

            {loc.neighborhoods.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-xl font-extrabold text-ink">
                  {isCity ? `Neighborhoods We Cover in ${loc.name}` : `Areas We Cover`}
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {loc.neighborhoods.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm text-ink/80">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {n}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {loc.landmarks.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-xl font-extrabold text-ink">
                  Landmarks Near Our {loc.name} Routes
                </h3>
                <p className="mt-2 text-ink/70">
                  We're regularly working near:
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {loc.landmarks.map((lm) => (
                    <li key={lm} className="text-sm text-ink/80">• {lm}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="mt-10 font-display text-xl font-extrabold text-ink">
              Popular {loc.name} Pickups
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[...getServicesByCategory("junk-removal").slice(0, 3), ...getServicesByCategory("clean-outs").slice(0, 2), ...getServicesByCategory("demolitions").slice(0, 1)].map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border border-ink/10 bg-cream p-4 text-sm font-semibold text-ink hover:border-brand/30">
                  {s.shortTitle} in {loc.name}
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="text-sm font-bold uppercase tracking-wider text-brand">{loc.name} Quote</div>
              <div className="mt-2 text-lg font-bold text-ink">Same-day pickup</div>
              <p className="mt-2 text-sm text-ink/70">
                Text us a photo. We'll quote you in minutes and book you for today or tomorrow.
              </p>
              <Link href="/get-a-quote" className="mt-4 block rounded-md bg-brand py-3 text-center font-bold text-white hover:bg-brand-dark">
                Free Quote →
              </Link>
              <a href="tel:+17376100113" className="mt-2 block rounded-md border-2 border-brand py-3 text-center font-bold text-brand hover:bg-brand hover:text-white">
                (737) 610-0113
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Process steps={[
        { title: "Text us a photo", body: `From anywhere in ${loc.name}, send us a pic of the pile. We'll quote you same-day.` },
        { title: "Pick a window", body: `We hold open spots every day for ${loc.name} customers. Same-day or next-day.` },
        { title: "We arrive & haul", body: "Two-man uniformed crew, 16-foot dump trailer. You don't touch a thing." },
        { title: "Pay when done", body: "Final sweep, final price, payment when you're satisfied." },
      ]} />

      <WhyUs heading={`Why ${loc.name} Picks The Haul Team`} />
      <ReviewsStrip />
      <CTASection
        heading={`Need junk gone in ${loc.name}?`}
        body="Text a photo for a same-day quote — we're in your area today."
      />
    </>
  );
}
