import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4Z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}
function Youtube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.7 3.6 12 3.6 12 3.6s-4.7 0-7.9.3c-.4.1-1.4.1-2.2 1C1.2 5.6 1 7.2 1 7.2S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.3 7.7.3s4.7 0 7.9-.3c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8ZM9.7 14.6V8.4l6 3.1-6 3.1Z" />
    </svg>
  );
}
import { SITE } from "@/lib/site";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/content/services";
import { CITIES, NEIGHBORHOODS } from "@/content/locations";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="text-2xl font-extrabold text-white">{SITE.name}</div>
            <p className="mt-3 max-w-sm text-cream/70">{SITE.tagline}</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4" /> {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {SITE.city}, {SITE.state} — serving all of {SITE.region}
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-4">
              <a href={SITE.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SITE.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE.socials.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wide text-gold">Services</div>
            <ul className="mt-3 space-y-2 text-sm">
              {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map((k) => (
                <li key={k}>
                  <Link href={`/services/${SERVICE_CATEGORIES[k].slug}`} className="text-cream/80 hover:text-white">
                    {SERVICE_CATEGORIES[k].label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-cream/80 hover:text-white">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wide text-gold">Cities</div>
            <ul className="mt-3 space-y-2 text-sm">
              {CITIES.slice(0, 10).map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className="text-cream/80 hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-cream/80 hover:text-white">
                  See All →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wide text-gold">Austin</div>
            <ul className="mt-3 space-y-2 text-sm">
              {NEIGHBORHOODS.slice(0, 10).map((n) => (
                <li key={n.slug}>
                  <Link href={`/locations/${n.slug}`} className="text-cream/80 hover:text-white">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {SITE.legal}. Licensed & insured in Texas.</div>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-white">FAQ</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/get-a-quote" className="hover:text-white">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
