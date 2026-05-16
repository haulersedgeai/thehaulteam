import { Star } from "lucide-react";
import { Section } from "@/components/ui/Container";

const REVIEWS = [
  { name: "Jenna R.", area: "South Austin", body: "Faris and his crew showed up an hour after I texted a photo. Cleared a 10x20 storage unit, swept it, and we still got our deposit back. Best decision we made that week." },
  { name: "Marcus T.", area: "Round Rock", body: "Hot tub removal in the backyard. They cut it up in place, hauled every piece, and you couldn't tell anything had been there. Quoted exactly what we paid." },
  { name: "Priya S.", area: "Cedar Park", body: "Estate clean-out for my mom's house. They were respectful, careful with photo albums, and got it done in a day. Highly recommend." },
  { name: "Dan H.", area: "East Austin", body: "Tore down an old fence and hauled it all. Showed up on time, two big guys, gone in 90 minutes. Way cheaper than the dumpster quote." },
  { name: "Alli M.", area: "Pflugerville", body: "Couch, mattress, and a broken treadmill out of a third-floor walk-up. They didn't even break a sweat. Will use again." },
  { name: "Rob K.", area: "Westlake", body: "Pre-listing clean-out before we put the house up. Realtor said it was the cleanest she'd seen. Faris is a good guy and runs a real operation." },
];

export function ReviewsStrip({ heading = "What Austin Says" }: { heading?: string }) {
  return (
    <Section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-wider text-brand">Reviews</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-ink/70">Real Google reviews from real Austin customers. 4.9 average across 200+ jobs.</p>
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
            <blockquote className="mt-3 text-ink/80">"{r.body}"</blockquote>
            <figcaption className="mt-4 text-sm font-bold text-ink">
              {r.name} <span className="font-normal text-ink/60">— {r.area}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
