import { SITE } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    legalName: SITE.legal,
    image: `${SITE.url}/images/logo.png`,
    logo: `${SITE.url}/images/logo.png`,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Austin" },
      { "@type": "City", name: "Round Rock" },
      { "@type": "City", name: "Cedar Park" },
      { "@type": "City", name: "Leander" },
      { "@type": "City", name: "Pflugerville" },
      { "@type": "City", name: "Georgetown" },
      { "@type": "City", name: "Buda" },
      { "@type": "City", name: "Kyle" },
      { "@type": "City", name: "Lakeway" },
      { "@type": "City", name: "Dripping Springs" },
      { "@type": "City", name: "San Marcos" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
    },
    sameAs: [
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.socials.youtube,
      SITE.socials.yelp,
      SITE.socials.tiktok,
      SITE.socials.google,
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
