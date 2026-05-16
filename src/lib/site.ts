export const SITE = {
  name: "The Haul Team",
  legal: "The Haul Team LLC",
  tagline: "Austin's family-owned junk removal, clean outs, demolition & moving crew.",
  phoneDisplay: "(737) 610-0113",
  phoneRaw: "+17376100113",
  smsRaw: "+17376100113",
  email: "haulteam2022@gmail.com",
  fromEmail: process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev",
  toEmail: process.env.QUOTE_TO_EMAIL || "haulteam2022@gmail.com",
  city: "Austin",
  state: "TX",
  region: "Central Texas",
  address: {
    street: "",
    locality: "Austin",
    region: "TX",
    postal: "78701",
    country: "US",
  },
  geo: { lat: 30.2672, lng: -97.7431 },
  hours: "Mon-Sun 7:00am-8:00pm",
  rating: { value: "4.9", count: "200" },
  url: process.env.SITE_URL || "https://thehaulteam.com",
  socials: {
    facebook: "https://www.facebook.com/HaulTeamLLC",
    instagram: "https://www.instagram.com/haulteam",
    youtube: "https://www.youtube.com/channel/UC_SQXYR9kpFEGcJAWeDjq3Q",
    yelp: "https://www.yelp.com/biz/haul-team-austin-2",
    tiktok: "https://www.tiktok.com/@thehaulteam",
    google: "https://g.page/haulteam",
  },
} as const;

export type NavItem = { href: string; label: string; hasMenu?: boolean };

export const NAV_MAIN: NavItem[] = [
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/locations", label: "Service Area" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const NAV_MOBILE: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Service Area" },
  { href: "/items-we-take", label: "Items We Take" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
