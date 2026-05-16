import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { WhyUs } from "@/components/sections/WhyUs";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About The Haul Team | Family-Owned Austin Junk Removal",
  description: "Faris-owned, locally operated, and built on 200+ five-star reviews. Meet the crew behind Austin's most-recommended junk removal service.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  "Show up when we say we will — every single time.",
  "Quote honestly. The number we say is the number you pay.",
  "Treat every house like our grandma lives there.",
  "Donate and recycle anything we can keep out of the landfill.",
  "Hire locally — every crew member is from the Austin metro.",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="Family-Owned, Austin-Based, Built on Word of Mouth"
        subtitle="Faris started The Haul Team in 2022 with one truck and a promise: do it right or don't do it. 200+ five-star reviews later, that's still the rule."
        showRating={false}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2 space-y-6 text-lg text-ink/80">
            <p>
              The Haul Team is a small, family-owned junk removal, clean-out, and demolition crew based in Austin, TX. We started in 2022 working out of one trailer in Pflugerville. We weren't trying to be the biggest — we just wanted to be the most trusted.
            </p>
            <p>
              Three years later, we've worked for hundreds of Austin families: estate clean-outs in Tarrytown, hoarder clean-outs in north Austin, hot tub removals in Westlake, shed demos in Round Rock, and every kind of garage clear-out you can picture. 200+ of those families have left us five-star Google reviews — and that's the only marketing budget that's ever mattered to us.
            </p>
            <p>
              We're licensed, insured, and background-checked. We arrive in marked vehicles unless you ask otherwise. We carry COIs and W-9s for property managers. And we sweep up before we leave, every job, every time.
            </p>
            <p>
              If you're somewhere in the Austin metro and you've got something to get rid of, give us a call. Worst case, you get a free quote.
            </p>
          </div>

          <aside className="rounded-2xl border border-ink/10 bg-cream p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-brand">Our Values</div>
            <ul className="mt-3 space-y-2">
              {VALUES.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {v}
                </li>
              ))}
            </ul>
            <Link href="/get-a-quote" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-brand py-3 font-bold text-white hover:bg-brand-dark">
              Get a Free Quote →
            </Link>
          </aside>
        </div>
      </Section>

      <WhyUs />
      <CTASection />
    </>
  );
}
