"use client";

import { useActionState } from "react";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { submitQuote } from "@/app/actions/quote";
import { QUOTE_SERVICES as SERVICES, type QuoteState } from "@/lib/quote-options";
import { CheckCircle2, AlertCircle, Upload } from "lucide-react";

const INITIAL: QuoteState = { ok: false };

export function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, INITIAL);

  if (state.ok && state.message) {
    return (
      <div className="rounded-xl border-2 border-brand bg-cream p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand" />
        <div className="mt-3 text-xl font-extrabold text-ink">Got it!</div>
        <p className="mt-2 text-ink/80">{state.message}</p>
        <p className="mt-4 text-sm text-ink/60">
          Faster route: text <a className="font-bold text-brand" href="sms:+17376100113">(737) 610-0113</a>.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] opacity-0" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="(737) 555-0123" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email (optional)</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" />
        </div>
        <div>
          <Label htmlFor="zip">ZIP code</Label>
          <Input id="zip" name="zip" inputMode="numeric" placeholder="78704" />
        </div>
      </div>

      <div>
        <Label htmlFor="service">Service needed</Label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="flex h-11 w-full rounded-md border border-ink/15 bg-white px-3 py-2 text-base text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
        >
          <option value="" disabled>Pick a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message">Tell us what you need *</Label>
        <Textarea id="message" name="message" required placeholder="Old couch, mattress, and a treadmill in a 2nd-floor apartment. Need it gone this week." />
      </div>

      <div>
        <Label htmlFor="photos">Photos (optional, faster quote!)</Label>
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-ink/20 bg-cream px-4 py-6 text-sm font-semibold text-ink/70 transition-colors hover:border-brand hover:text-brand">
          <Upload className="h-5 w-5" />
          <span>Click to upload (up to 5 images, 8MB each)</span>
          <input id="photos" name="photos" type="file" accept="image/*" multiple className="hidden" />
        </label>
      </div>

      {state.message && !state.ok && (
        <div className="flex items-start gap-2 rounded-md border border-brand/30 bg-brand/5 p-3 text-sm text-brand-dark">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {state.message}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending..." : "Send Quote Request"}
      </Button>
      <p className="text-xs text-ink/60">
        By submitting, you agree to be contacted by The Haul Team about your quote. We don't share your info.
      </p>
    </form>
  );
}
