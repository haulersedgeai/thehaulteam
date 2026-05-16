import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const PROCESS = [
  { title: "Send a photo or list", body: "Text or upload pictures of what you need gone. Same-day quote." },
  { title: "Pick a time", body: "Same-day and next-day windows. We text when we're on the way." },
  { title: "We do the work", body: "Two-man uniformed crew. We lift, load, sweep, and haul." },
  { title: "Pay when done", body: "Upfront price, no surprises. Cash, card, Venmo, Zelle." },
];

const HIGHLIGHTS = [
  "Family-owned and operated by Faris since 2022",
  "Two-man uniformed crew, every job",
  "Licensed and insured — COI on request",
  "16-foot dump trailers, capacity for big jobs",
  "Donation & recycling routing built in",
  "200+ five-star reviews on Google",
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Austin, TX · Family-Owned"
        title="Austin's Junk Removal, Clean-Out & Demolition Crew"
        subtitle="Same-day pickup, upfront pricing, 200+ five-star Google reviews. We haul anything, anywhere across Austin and Central Texas."
      />

      <ServicesGrid />

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-brand">About Us</div>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Local, family-owned, and serious about doing it right.
            </h2>
            <p className="mt-4 text-ink/75">
              The Haul Team is owned and run by Faris and a small crew of Austin locals. We started in 2022 with one truck, a few referrals, and a simple promise: show up when we say we will, quote honestly, and treat every house like our grandma lives there. Three years and 200+ five-star reviews later, we're still doing it the same way.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-1 text-sm font-bold text-brand">
                More about us →
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-ink to-brand/60 p-8 text-white shadow-xl">
            <div className="absolute inset-0 rounded-3xl opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/junk-removal.png')" }} />
            <div className="relative flex h-full flex-col justify-end">
              <div className="text-5xl font-extrabold">200+</div>
              <div className="text-lg font-bold">Five-star Google reviews</div>
              <div className="mt-1 text-sm text-white/80">From real Austin neighbors — read them at the link below.</div>
              <Link href="/reviews" className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand">
                Read the reviews →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Process steps={PROCESS} />
      <WhyUs />
      <ReviewsStrip />
      <ServiceArea />
      <CTASection />
    </>
  );
}
