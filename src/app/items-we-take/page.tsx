import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Items We Take | Austin Junk Removal | The Haul Team",
  description: "From couches to construction debris, hot tubs to whole-house clean-outs — here's everything The Haul Team hauls in Austin.",
  alternates: { canonical: "/items-we-take" },
};

const GROUPS = [
  {
    heading: "Furniture",
    items: ["Couches & sectionals", "Recliners & lift chairs", "Mattresses & box springs", "Bed frames & headboards", "Dressers & nightstands", "Dining tables & chairs", "Office desks & cubicles", "Bookshelves & china hutches", "Entertainment centers", "Outdoor patio furniture"],
  },
  {
    heading: "Appliances",
    items: ["Refrigerators & freezers", "Washers & dryers", "Ovens & ranges", "Dishwashers", "Microwaves", "Water heaters", "Wine coolers", "Trash compactors", "Window AC units"],
  },
  {
    heading: "Electronics",
    items: ["Flat-screen TVs", "Tube and projection TVs", "Computers & monitors", "Printers & copiers", "Stereo equipment", "Gaming consoles", "Servers & networking gear", "Cables & batteries"],
  },
  {
    heading: "Yard & Outdoor",
    items: ["Tree limbs & brush", "Leaves & yard waste", "Sod & dirt (small loads)", "Storm debris", "Old mulch & landscape rock", "Sheds (with demo)", "Hot tubs (with demo)", "Playsets & swingsets", "Trampolines"],
  },
  {
    heading: "Construction Debris",
    items: ["Drywall & sheetrock", "Lumber & framing scrap", "Tile & flooring", "Roofing shingles", "Cabinets & countertops", "Bathroom fixtures", "Concrete (small loads)", "Brick & stone"],
  },
  {
    heading: "Whole-House & Estate",
    items: ["Whole-house clean-outs", "Estate clean-outs", "Hoarder clean-outs", "Foreclosure & eviction trash-outs", "Garage clean-outs", "Attic & basement clean-outs", "Storage unit clean-outs", "Office & commercial clean-outs"],
  },
  {
    heading: "Special / Heavy",
    items: ["Pianos (upright & grand)", "Pool tables", "Gun safes", "Exercise equipment", "Riding lawnmowers", "Jet skis & small trailers (no titles needed for haul-off)", "Hot tubs & spas"],
  },
];

const CANT = [
  "Live ammunition or explosives",
  "Liquid paint or motor oil (we'll point you to Austin Resource Recovery's hazardous drop-off)",
  "Medical waste or biohazards (we partner with specialists when needed)",
  "Asbestos (requires a licensed abatement contractor)",
];

export default function ItemsWeTakePage() {
  return (
    <>
      <Hero
        eyebrow="Items"
        title="What The Haul Team Takes"
        subtitle="The short answer is almost everything. Here's the long list."
        showRating={false}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.heading} className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="text-sm font-bold uppercase tracking-wider text-brand">{g.heading}</div>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-ink/80">• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section bg="cream">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-wider text-brand">What We Can't Take</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">A few things we don't haul</h2>
          <p className="mt-3 text-ink/75">
            We follow Texas law and Austin Resource Recovery guidelines. For anything in this list, we'll point you to the right contractor or drop-off.
          </p>
          <ul className="mt-6 space-y-2">
            {CANT.map((c) => (
              <li key={c} className="rounded-xl border border-ink/10 bg-white p-3 text-sm text-ink/80">• {c}</li>
            ))}
          </ul>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
