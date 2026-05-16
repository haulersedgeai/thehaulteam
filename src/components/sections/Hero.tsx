import Link from "next/link";
import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export function Hero({
  eyebrow,
  title,
  subtitle,
  showRating = true,
  primaryHref = "/get-a-quote",
  primaryLabel = "Get a Free Quote",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  showRating?: boolean;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-brand/30" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(245,183,0,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(215,38,56,0.25), transparent 40%)" }} />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold ring-1 ring-white/15">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">{subtitle}</p>

        {showRating && (
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9</span>
            <span>· {SITE.rating.count}+ five-star Google reviews</span>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl" variant="primary">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-ink">
            <a href={`tel:${SITE.phoneRaw}`}>
              <Phone className="h-5 w-5" />
              {SITE.phoneDisplay}
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <span>✓ Same-day & next-day service</span>
          <span>✓ Upfront pricing — no surprises</span>
          <span>✓ Licensed & insured</span>
        </div>
      </div>
    </section>
  );
}
