"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE, NAV_MAIN } from "@/lib/site";
import { SERVICES, SERVICE_CATEGORIES, getServicesByCategory } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="The Haul Team" width={140} height={40} className="h-10 w-auto" priority />
          <span className="sr-only">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_MAIN.map((item) =>
            item.hasMenu ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold text-ink hover:text-brand"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div
                  className={cn(
                    "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all",
                    servicesOpen ? "visible opacity-100" : "invisible opacity-0"
                  )}
                >
                  <div className="grid w-[760px] grid-cols-4 gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-xl">
                    {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map((catKey) => {
                      const cat = SERVICE_CATEGORIES[catKey];
                      const subs = getServicesByCategory(catKey);
                      return (
                        <div key={catKey}>
                          <Link
                            href={`/services/${cat.slug}`}
                            className="mb-2 block text-sm font-bold uppercase tracking-wide text-brand"
                          >
                            {cat.label}
                          </Link>
                          <ul className="space-y-1">
                            {subs.slice(0, 7).map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  className="block py-0.5 text-sm text-ink hover:text-brand"
                                >
                                  {s.shortTitle}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-ink hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-brand">
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Button asChild>
            <Link href="/get-a-quote">Free Quote</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {NAV_MAIN.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-semibold text-ink hover:bg-cream"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-ink/10 pt-3 mt-3">
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 rounded-md px-3 py-2 font-bold text-brand">
                  <Phone className="h-5 w-5" />
                  {SITE.phoneDisplay}
                </a>
                <Link
                  href="/get-a-quote"
                  className="mt-2 block rounded-md bg-brand px-3 py-3 text-center font-bold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
