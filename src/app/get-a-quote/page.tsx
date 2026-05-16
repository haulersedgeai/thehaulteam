import type { Metadata } from "next";
import { Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Austin Junk Removal | The Haul Team",
  description: "Get a free same-day quote for junk removal, clean-outs, demolition, or moving in Austin, TX. Photo upload supported.",
  alternates: { canonical: "/get-a-quote" },
};

const PROMISES = [
  "Same-day response (usually within an hour)",
  "Free quote, no obligation",
  "Honest, upfront pricing",
  "No high-pressure sales calls",
];

export default function GetAQuotePage() {
  return (
    <>
      <Hero
        eyebrow="Free Quote"
        title="Get a Free Quote in Minutes"
        subtitle="The fastest way to a price is to text us a photo. Or fill out the form below — we'll respond same-day."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-5">
            <a href={`tel:${SITE.phoneRaw}`} className="block rounded-2xl border-2 border-brand bg-cream p-6 transition-colors hover:bg-brand hover:text-white">
              <Phone className="h-8 w-8 text-brand group-hover:text-white" />
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-brand">Call</div>
              <div className="mt-1 text-2xl font-extrabold text-ink">{SITE.phoneDisplay}</div>
            </a>
            <a href={`sms:${SITE.smsRaw}`} className="block rounded-2xl border-2 border-brand bg-cream p-6">
              <MessageSquare className="h-8 w-8 text-brand" />
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-brand">Text Us</div>
              <div className="mt-1 text-2xl font-extrabold text-ink">{SITE.phoneDisplay}</div>
              <div className="mt-2 text-sm text-ink/70">Send a photo for the fastest quote</div>
            </a>
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <div className="text-sm font-bold uppercase tracking-wider text-brand">Our Promise</div>
              <ul className="mt-3 space-y-2">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-extrabold text-ink">Quote Request Form</h2>
            <p className="mt-2 text-ink/70">Tell us what you need gone. Photo upload supported.</p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
