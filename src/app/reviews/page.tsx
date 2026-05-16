import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Reviews | 200+ Five-Star Google Reviews | The Haul Team",
  description: "Read what 200+ Austin neighbors are saying about The Haul Team — junk removal, clean-outs, demolition, and moving.",
  alternates: { canonical: "/reviews" },
};

const REVIEWS = [
  { name: "Jenna R.", area: "South Austin", body: "Faris and his crew showed up an hour after I texted a photo. Cleared a 10x20 storage unit, swept it, and we still got our deposit back. Best decision we made that week." },
  { name: "Marcus T.", area: "Round Rock", body: "Hot tub removal in the backyard. They cut it up in place, hauled every piece, and you couldn't tell anything had been there. Quoted exactly what we paid." },
  { name: "Priya S.", area: "Cedar Park", body: "Estate clean-out for my mom's house. They were respectful, careful with photo albums, and got it done in a day. Highly recommend." },
  { name: "Dan H.", area: "East Austin", body: "Tore down an old fence and hauled it all. Showed up on time, two big guys, gone in 90 minutes. Way cheaper than the dumpster quote." },
  { name: "Alli M.", area: "Pflugerville", body: "Couch, mattress, and a broken treadmill out of a third-floor walk-up. They didn't even break a sweat. Will use again." },
  { name: "Rob K.", area: "Westlake", body: "Pre-listing clean-out before we put the house up. Realtor said it was the cleanest she'd seen. Faris is a good guy and runs a real operation." },
  { name: "Sara V.", area: "Leander", body: "Came out for a garage clean-out, ended up doing the shed too. Same day, same upfront quote. Honest people." },
  { name: "Mike B.", area: "Buda", body: "Construction debris from a kitchen remodel. Two trailer loads, one trip. Saved me a week of dumpster rental." },
  { name: "Lakshmi P.", area: "Georgetown", body: "Helped clear out my dad's place in Sun City. They were patient and respectful while we sorted keepsakes. Recommend without hesitation." },
  { name: "Trevor L.", area: "Pflugerville", body: "Same-day pickup of a fridge and washer. They handled the disconnect themselves and even swept the laundry room." },
  { name: "Emily W.", area: "North Austin", body: "Move-out from a 1-bedroom and a haul of all the stuff I didn't want to take. Two birds, one truck, awesome team." },
  { name: "Carlos R.", area: "Kyle", body: "Fence demo and yard cleanup after a storm. Showed up the next morning, fair price, friendly crew." },
];

export default function ReviewsPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews"
        title="200+ Five-Star Google Reviews"
        subtitle="The only marketing budget we've ever had. Real Austin neighbors, real jobs, real reviews."
      />

      <Section>
        <div className="rounded-2xl border border-ink/10 bg-cream p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="text-5xl font-extrabold text-ink">4.9</div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="text-sm text-ink/70">Based on 200+ Google reviews</div>
              </div>
            </div>
            <a
              href="https://g.page/haulteam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 font-bold text-white hover:bg-brand-dark"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-3 text-ink/80">&ldquo;{r.body}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-ink">
                {r.name} <span className="font-normal text-ink/60">— {r.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
