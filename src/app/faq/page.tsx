import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Austin Junk Removal Questions | The Haul Team",
  description: "Frequently asked questions about junk removal, clean-outs, demolition, pricing, scheduling, and service area in Austin.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    section: "Booking & Scheduling",
    items: [
      { q: "How fast can you pick up?", a: "Most days we can be at your door same-day. Worst case, next-day. Text us a photo for the fastest quote." },
      { q: "Do I need to be home?", a: "No. We do curbside and unattended pickups all over Austin. Send us a photo, leave the pile, and we'll send a confirmation photo when it's gone." },
      { q: "How do you confirm appointments?", a: "By text. We confirm the day before and again when our crew is 30 minutes out." },
      { q: "Do you work weekends and evenings?", a: "Yes. We run pickups Mon–Sun, 7am to 8pm. After-hours service available for commercial accounts." },
    ],
  },
  {
    section: "Pricing & Payment",
    items: [
      { q: "How is pricing calculated?", a: "By truck volume — how much of our 16-foot dump trailer your stuff fills. Single items start around $99, a full trailer tops out around $649. We quote up front so you know the price before we touch a thing." },
      { q: "Are there hidden fees?", a: "No. Disposal, donation, recycling, fuel, and labor are all included in your quote. The number we say is the number you pay." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit card, Venmo, and Zelle. You pay when the truck is loaded and you've inspected the work." },
      { q: "Do you charge for quotes?", a: "Never. All quotes are free and there's no obligation." },
    ],
  },
  {
    section: "Service Area & Logistics",
    items: [
      { q: "What areas do you serve?", a: "All of Austin and the Central Texas suburb ring — Round Rock, Cedar Park, Leander, Pflugerville, Georgetown, Hutto, Buda, Kyle, Manor, Lakeway, Bee Cave, Dripping Springs, San Marcos, and beyond." },
      { q: "Do I need to drag everything to the curb?", a: "No. That's the whole point of hiring us. We carry it down from the third-floor walk-up, out of the attic, off the back porch — wherever it lives." },
      { q: "Can you fit a couch up a tight staircase?", a: "Usually yes. We handle stair carries, narrow doorways, and elevator coordination as part of every job. If something genuinely won't fit, we'll problem-solve with you on the spot." },
    ],
  },
  {
    section: "What We Take & Where It Goes",
    items: [
      { q: "What can you not take?", a: "Asbestos, live ammunition, biohazard/medical waste, and bulk liquid paint or motor oil. We'll point you to the right contractor or Austin Resource Recovery drop-off for these." },
      { q: "Where does my junk go?", a: "Anything reusable goes to Austin Pets Alive!, Goodwill, Salvation Army, or Habitat for Humanity ReStore. Metal goes to recycling. Anything left over goes to permitted Travis County transfer stations." },
      { q: "Can you handle hazardous materials?", a: "We're a residential and commercial hauler, not a hazmat company. For paint, oil, batteries, and chemicals, we'll coordinate with Austin Resource Recovery's hazardous waste program." },
    ],
  },
  {
    section: "About Us",
    items: [
      { q: "Are you licensed and insured?", a: "Yes. Full liability insurance and Texas business registration. COI available for property managers on request." },
      { q: "Who's actually doing the work?", a: "Faris and a small crew of Austin locals. Background-checked, uniformed, and trained. No day labor, no subcontractors." },
      { q: "Why are you so cheap?", a: "We're not the cheapest — we're the best value. No franchise fees, no out-of-state corporate overhead, no high-pressure sales. Just a local crew running a tight operation." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Hero
        eyebrow="FAQ"
        title="Common Questions About The Haul Team"
        subtitle="If your question isn't here, text us and we'll answer it directly."
        showRating={false}
      />
      <Section>
        <div className="space-y-12">
          {FAQS.map((section) => (
            <div key={section.section}>
              <h2 className="font-display text-2xl font-extrabold text-ink">{section.section}</h2>
              <div className="mt-4 rounded-2xl border border-ink/10 bg-white px-6">
                <FaqAccordion items={section.items} />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
