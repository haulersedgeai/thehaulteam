import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact | Austin Junk Removal | The Haul Team",
  description: "Contact The Haul Team for Austin junk removal, clean-outs, demolition, and moving. Call, text, or send a quote request.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in Touch with The Haul Team"
        subtitle="Text us a photo for the fastest quote. We're answering calls and texts every day, 7am–8pm."
        showRating={false}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-5">
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-3">
                <Phone className="mt-0.5 h-6 w-6 text-brand" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">Call</div>
                  <div className="mt-0.5 text-xl font-bold text-ink">{SITE.phoneDisplay}</div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <a href={`sms:${SITE.smsRaw}`} className="flex items-start gap-3">
                <MessageSquare className="mt-0.5 h-6 w-6 text-brand" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">Text</div>
                  <div className="mt-0.5 text-xl font-bold text-ink">{SITE.phoneDisplay}</div>
                  <div className="mt-1 text-sm text-ink/70">Send a photo for the fastest quote</div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3">
                <Mail className="mt-0.5 h-6 w-6 text-brand" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">Email</div>
                  <div className="mt-0.5 text-base font-bold text-ink break-all">{SITE.email}</div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-6 w-6 text-brand" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">Service Area</div>
                  <div className="mt-0.5 text-base font-bold text-ink">Austin, TX & Central Texas</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-6 w-6 text-brand" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">Hours</div>
                  <div className="mt-0.5 text-base font-bold text-ink">{SITE.hours}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-extrabold text-ink">Send a Message</h2>
              <p className="mt-2 text-ink/70">
                Fill out the form and we'll respond same day. Or just text us — that's usually faster.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
