import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery | Before & After Junk Removal Austin | The Haul Team",
  description: "Real before-and-after photos of Austin junk removal, clean-outs, and demolition jobs by The Haul Team.",
  alternates: { canonical: "/gallery" },
};

const SHOWCASE = [
  { title: "Garage Clean-Out — Round Rock", category: "Clean-Outs", img: "/images/cleanouts.png", body: "From not-a-single-square-inch to able-to-park-a-car-again. One afternoon." },
  { title: "Hot Tub Removal — Westlake", category: "Demolition", img: "/images/demolitions.png", body: "Cut the shell in place, hauled every piece off the deck. Final sweep included." },
  { title: "Full House Move-Out — Cedar Park", category: "Moving", img: "/images/moving.png", body: "One-bedroom move-out + post-move junk haul, all in the same day." },
  { title: "Estate Clean-Out — Sun City", category: "Clean-Outs", img: "/images/cleanouts.png", body: "Three days of work, two trips to charity, one broom-swept handoff to the realtor." },
  { title: "Construction Haul — East Austin", category: "Junk Removal", img: "/images/junk-removal.png", body: "Two full trailers of remodel debris in one trip. Cheaper than the dumpster quote." },
  { title: "Fence & Shed Demo — Pflugerville", category: "Demolition", img: "/images/demolitions.png", body: "Old privacy fence and rotted shed, gone in a single visit." },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="Before & After: Real Austin Jobs"
        subtitle="Every photo is a job we did for a real Austin family. These are the kinds of transformations we do every week."
        showRating={false}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
              <div
                className="aspect-[4/3] bg-cream bg-cover bg-center"
                style={{ backgroundImage: `url('${s.img}')` }}
              />
              <div className="p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-brand">{s.category}</div>
                <h3 className="mt-1 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/60">
          More photos coming soon — follow us on{" "}
          <a href="https://www.instagram.com/haulteam" className="font-bold text-brand">
            Instagram
          </a>{" "}
          for daily job pics.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
