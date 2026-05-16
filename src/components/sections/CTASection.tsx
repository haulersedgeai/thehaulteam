import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export function CTASection({
  heading = "Ready to get it gone?",
  body = "Text us a photo for a same-day quote. No commitment, no walk-throughs needed.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{heading}</h2>
            <p className="mt-3 max-w-xl text-white/90">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="accent">
              <Link href="/get-a-quote">Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand">
              <a href={`tel:${SITE.phoneRaw}`}>
                <Phone className="h-5 w-5" />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
