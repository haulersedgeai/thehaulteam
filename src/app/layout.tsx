import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Austin Junk Removal, Clean-Outs, Demolition & Moving`,
    template: `%s | ${SITE.name}`,
  },
  description: `Family-owned Austin junk removal, clean-outs, demolition, and moving. 200+ five-star Google reviews. Same-day service across Central Texas. ${SITE.phoneDisplay}.`,
  applicationName: SITE.name,
  authors: [{ name: SITE.legal }],
  keywords: [
    "junk removal Austin TX",
    "Austin junk hauling",
    "estate clean outs Austin",
    "demolition Austin",
    "moving Austin TX",
    "hot tub removal Austin",
    "furniture removal Austin",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | Austin Junk Removal, Clean-Outs, Demolition & Moving`,
    description: `Family-owned Austin junk removal with 200+ five-star reviews. Same-day pickup, upfront pricing.`,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: SITE.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
