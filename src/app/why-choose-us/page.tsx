import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Container";
import { CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose The Haul Team | Austin Junk Removal",
  description: "Family-owned, upfront pricing, 200+ five-star reviews, licensed and insured. Here's why Austin keeps picking us.",
  alternates: { canonical: "/why-choose-us" },
};

const US = [
  "Same-day & next-day pickup",
  "Upfront, flat-rate pricing",
  "Two-man uniformed crew",
  "Locally owned, locally hired",
  "Donation & recycling routing",
  "COI and W-9 on file for property managers",
  "Real Austin phone number answered by a real person",
  "Background-checked, insured crew",
];

const THEM = [
  "Vague \"call for pricing\" estimates",
  "Slow-roll quotes that take a week",
  "Out-of-state franchises with no local accountability",
  "Surprise fees at the curb",
  "Voicemail-only customer service",
  "Crews you can't verify or vet",
];

export default function WhyChooseUsPage() {
  return (
    <>
      <Hero
        eyebrow="Why Us"
        title="Why Austin Keeps Calling The Haul Team"
        subtitle="No franchise overhead. No surprise fees. No middlemen. Just a local crew that shows up and does the job right."
      />

      <WhyUs />

      <Section>
        <div className="text-sm font-bold uppercase tracking-wider text-brand">The Difference</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          The Haul Team vs. the other guys
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-brand bg-cream p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-brand">The Haul Team</div>
            <ul className="mt-4 space-y-2">
              {US.map((u) => (
                <li key={u} className="flex items-start gap-2 text-ink/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-ink/50">The Other Guys</div>
            <ul className="mt-4 space-y-2">
              {THEM.map((t) => (
                <li key={t} className="flex items-start gap-2 text-ink/60">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-ink/40" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Process steps={[
        { title: "Send a photo or list", body: "Text or upload pictures. Same-day quote." },
        { title: "Pick a time", body: "Same-day and next-day windows." },
        { title: "We do the work", body: "Lift, load, sweep, haul." },
        { title: "Pay when done", body: "Upfront price, payment when you're happy." },
      ]} />

      <ReviewsStrip />
      <CTASection />
    </>
  );
}
