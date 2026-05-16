import { ShieldCheck, Clock, DollarSign, Heart, Truck, Star } from "lucide-react";
import { Section } from "@/components/ui/Container";

const REASONS = [
  { icon: Star, title: "200+ Five-Star Reviews", body: "Austin neighbors trust us more than any other crew in the metro. Read the reviews — we'll wait." },
  { icon: Heart, title: "Family-Owned & Local", body: "No franchise overhead, no corporate scripts. Owner-operated by Faris and a crew that lives here." },
  { icon: DollarSign, title: "Upfront, Honest Pricing", body: "You see the price before we lift a finger. No fuel surcharges, no junk fees, no surprises at the curb." },
  { icon: Clock, title: "Same-Day & Next-Day", body: "We hold open spots every day for last-minute calls. Text us a photo and we'll often be there before sunset." },
  { icon: ShieldCheck, title: "Licensed & Insured", body: "Full liability coverage, background-checked crew, and W-9 + COI for property managers." },
  { icon: Truck, title: "Donate, Recycle, Repeat", body: "We route reusable items to Austin Pets Alive!, Habitat ReStore, and Goodwill before the landfill ever gets a vote." },
];

export function WhyUs({ heading = "Why Austin Picks The Haul Team" }: { heading?: string }) {
  return (
    <Section bg="cream">
      <div className="max-w-2xl">
        <div className="text-sm font-bold uppercase tracking-wider text-brand">Why Us</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r) => (
          <div key={r.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <r.icon className="h-8 w-8 text-brand" />
            <div className="mt-3 text-lg font-bold text-ink">{r.title}</div>
            <p className="mt-1.5 text-ink/70">{r.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
