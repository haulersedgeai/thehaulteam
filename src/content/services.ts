export type ServiceCategory = "junk-removal" | "clean-outs" | "demolitions" | "moving-and-delivery";

export type ServiceFAQ = { q: string; a: string };

export type ServiceItemGroup = { heading?: string; items: string[] };

export type Service = {
  slug: string;
  category: ServiceCategory;
  isHub?: boolean;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatsIncluded: string[];
  items?: ServiceItemGroup[];
  process?: { title: string; body: string }[];
  whyUs?: string[];
  relatedSlugs: string[];
  faq?: ServiceFAQ[];
  heroImage?: string;
};

const COMMON_PROCESS = [
  { title: "Send us a photo or list", body: "Text or upload pictures of what you need gone. We'll quote you the same day — no walk-throughs unless you want one." },
  { title: "Pick a time that works", body: "Same-day and next-day windows across Austin and Central Texas. We text you when we're on the way." },
  { title: "We do all the heavy lifting", body: "Two-man uniformed crew loads everything from wherever it sits — upstairs, backyard, attic, basement, doesn't matter." },
  { title: "Clean sweep & pay when done", body: "We broom-sweep the area, show you the final price, and you pay only when you're happy. Cash, card, Venmo, Zelle." },
];

const COMMON_WHY = [
  "Locally owned by Faris — 200+ five-star Google reviews from Austin neighbors",
  "Licensed, insured, and background-checked crew",
  "Upfront pricing — you see the price before we lift a finger",
  "Same-day and next-day availability across the Austin metro",
  "We donate and recycle whatever we can keep out of the landfill",
];

export const SERVICES: Service[] = [
  // ─── JUNK REMOVAL HUB ────────────────────────────────────────────────
  {
    slug: "junk-removal",
    category: "junk-removal",
    isHub: true,
    title: "Junk Removal in Austin, TX",
    shortTitle: "Junk Removal",
    h1: "Austin Junk Removal — Same-Day Pickup, Upfront Pricing",
    metaTitle: "Junk Removal Austin TX | The Haul Team — Same-Day Pickup",
    metaDescription: "Family-owned Austin junk removal with 200+ five-star reviews. Furniture, appliances, garages, construction debris — we haul it all. Free quote in minutes.",
    intro:
      "When Austin needs junk gone, The Haul Team shows up. We've been hauling for Central Texas families since 2022 — pickups, clean-outs, single items, whole houses. You point, we lift, load, sweep up, and recycle or donate what we can. No hidden fees, no minimum truck loads, no waiting a week for a quote.",
    whatsIncluded: [
      "Two uniformed movers and a 16-foot dump trailer",
      "All loading, lifting, and hauling — you don't touch a thing",
      "Disposal, donation, and recycling fees included in the quote",
      "Broom-sweep of the pickup area when we're done",
      "Same-day and next-day service across the Austin metro",
    ],
    items: [
      {
        heading: "Inside the home",
        items: ["Couches & sectionals", "Mattresses & box springs", "Dressers, desks, bookshelves", "Refrigerators & freezers", "Washers & dryers", "TVs & electronics", "Exercise equipment", "Pianos & organs"],
      },
      {
        heading: "Garage, yard & beyond",
        items: ["Construction debris", "Hot tubs & spas", "Sheds, decks, fences (demo + haul)", "Yard waste & tree limbs", "Storage unit clean-outs", "Office furniture", "Estate & hoarder homes", "Foreclosure & eviction clean-outs"],
      },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["furniture-removal", "appliance-removal", "construction-debris-removal", "garage-cleanouts", "commercial-junk-removal"],
    faq: [
      { q: "How fast can you pick up?", a: "Most days we can be at your door same-day. Worst case, next-day. Text us a photo for the fastest quote." },
      { q: "What does junk removal cost in Austin?", a: "Pricing is by truck volume — single items start around $99, a quarter trailer around $199, a full 16-ft trailer tops out around $649. You see the price before we touch anything." },
      { q: "Do I need to drag everything to the curb?", a: "No. That's the whole point of hiring us. We carry it down from the third-floor walk-up, out of the attic, off the back porch — wherever it lives." },
      { q: "Where does the junk actually go?", a: "Anything reusable goes to Austin Pets Alive!, Goodwill, Salvation Army, or Habitat for Humanity ReStore. Metal goes to recycling. The rest goes to permitted Travis County transfer stations." },
    ],
  },
  {
    slug: "furniture-removal",
    category: "junk-removal",
    title: "Furniture Removal in Austin, TX",
    shortTitle: "Furniture Removal",
    h1: "Austin Furniture Removal & Disposal",
    metaTitle: "Furniture Removal Austin TX | Couch & Mattress Pickup | The Haul Team",
    metaDescription: "Old couch, broken sectional, dresser you can't move alone? Austin furniture removal starting at $99 with same-day pickup. Free quote.",
    intro:
      "That sectional looked great in the showroom — and impossible to get back out the door. We handle furniture removal across Austin every day: sleeper sofas, oversized recliners, dining sets that won't fit in the elevator. Two of us show up, disassemble what we have to, and walk it out. Whatever's still in good shape we deliver to Austin charities; the rest gets disposed of legally.",
    whatsIncluded: [
      "Disassembly of beds, tables, and modular sectionals",
      "Floor and wall protection during the carry-out",
      "Stair, elevator, and tight-doorway navigation",
      "Donation to local Austin nonprofits when possible",
      "Final sweep of the area we worked in",
    ],
    items: [
      { items: ["Couches, sectionals & loveseats", "Recliners & lift chairs", "Dining tables & chairs", "Bedroom sets (bed frames, dressers, nightstands)", "Office desks & filing cabinets", "Entertainment centers & TV stands", "Bookshelves & china hutches", "Outdoor patio furniture"] },
    ],
    relatedSlugs: ["mattress-removal", "appliance-removal", "junk-removal", "move-out-cleanouts", "moving-and-delivery"],
    faq: [
      { q: "Can you take a single couch?", a: "Absolutely. Single-item furniture pickups start around $99 in Austin." },
      { q: "Do you take furniture from upstairs apartments?", a: "Yes — third-floor walk-ups, sketchy stairwells, narrow hallways. That's a normal Tuesday for us." },
      { q: "Will you donate my couch?", a: "If it's stain-free and structurally sound, we'll route it to a local charity. We're transparent — we tell you upfront whether it's donate-able or not." },
    ],
  },
  {
    slug: "appliance-removal",
    category: "junk-removal",
    title: "Appliance Removal in Austin, TX",
    shortTitle: "Appliance Removal",
    h1: "Appliance Removal & Recycling — Austin, TX",
    metaTitle: "Appliance Removal Austin TX | Fridge, Washer, Dryer Pickup | The Haul Team",
    metaDescription: "Refrigerator, washer, dryer, oven, dishwasher pickup across Austin. Eco-friendly appliance disposal and recycling. Free quote, same-day service.",
    intro:
      "Refrigerators are heavier than they look, and Austin Resource Recovery won't put a fridge on the curb. We will. The Haul Team picks up working and broken appliances across the Austin metro — fridges, freezers, washers, dryers, ovens, dishwashers — and routes them to certified recyclers so the refrigerant and metal get handled the right way.",
    whatsIncluded: [
      "Disconnection of water and gas lines (when accessible)",
      "Two-man dolly carry-out — even from upstairs laundry rooms",
      "EPA-compliant refrigerant recovery on fridges and freezers",
      "Metal recycling on all major appliances",
      "Door and floor protection during removal",
    ],
    items: [
      { items: ["Refrigerators & freezers (working or not)", "Washers & dryers", "Ovens & ranges (gas or electric)", "Dishwashers", "Microwaves & wine fridges", "Water heaters", "Trash compactors", "Window AC units"] },
    ],
    relatedSlugs: ["furniture-removal", "tv-electronics-removal", "junk-removal", "garage-cleanouts", "construction-debris-removal"],
    faq: [
      { q: "Do you take working appliances?", a: "Yes — working appliances usually go to Habitat for Humanity ReStore or a local charity instead of the landfill." },
      { q: "What about the water hookup on a washer?", a: "We disconnect supply lines as part of the pickup. If the shutoff valve is seized, we'll let you know before we yank anything." },
      { q: "How much to haul a fridge in Austin?", a: "Single fridges run $129–$169 depending on location and stairs. Stacked washer/dryer combos a little more." },
    ],
  },
  {
    slug: "mattress-removal",
    category: "junk-removal",
    title: "Mattress Removal in Austin, TX",
    shortTitle: "Mattress Removal",
    h1: "Mattress & Box Spring Removal — Austin, TX",
    metaTitle: "Mattress Removal Austin TX | Bed & Box Spring Disposal | The Haul Team",
    metaDescription: "Austin mattress removal starting at $99. Single, queen, king, and box springs picked up same-day. Mattress recycling when possible.",
    intro:
      "Mattresses are the worst thing to wrestle down a staircase, and most Austin landfills charge extra to take them. We'll grab yours, bag it on the way out so nothing trails on your carpet, and route it to a mattress recycler whenever the foam and steel are salvageable.",
    whatsIncluded: [
      "Mattress bagging on-site to keep your floors clean",
      "Pickup from any room — bedroom, upstairs guest room, garage",
      "Box spring, frame, and headboard all included",
      "Recycling when the mattress is dry and intact",
      "No need to lug it to the curb",
    ],
    items: [
      { items: ["Twin, twin XL, full mattresses", "Queen and king mattresses", "California king mattresses", "Box springs and bunkie boards", "Bed frames (metal and wood)", "Headboards and footboards", "Crib mattresses", "Hospital bed mattresses"] },
    ],
    relatedSlugs: ["furniture-removal", "junk-removal", "move-out-cleanouts", "estate-cleanouts", "hoarder-cleanouts"],
    faq: [
      { q: "Will you take a bed bug mattress?", a: "Yes, but tell us upfront so we can bag it before it enters our truck. Pricing is the same." },
      { q: "Do you recycle mattresses in Austin?", a: "When they're dry and structurally sound, yes — through Austin-area mattress recyclers. Wet or torn-up mattresses have to go to the landfill." },
    ],
  },
  {
    slug: "tv-electronics-removal",
    category: "junk-removal",
    title: "TV & Electronics Removal — Austin, TX",
    shortTitle: "TV & Electronics",
    h1: "TV & Electronics Removal in Austin, TX",
    metaTitle: "TV & Electronics Removal Austin | E-Waste Recycling | The Haul Team",
    metaDescription: "Austin TV and electronics removal — flat screens, tube TVs, projectors, monitors, computers. Certified e-waste recycling. Same-day pickup.",
    intro:
      "Don't put that tube TV on the curb — Austin Resource Recovery will leave it there. We pick up TVs and electronics of every size across the metro and drop them at certified e-waste recyclers so the lead, mercury, and circuit boards don't end up in a Travis County landfill.",
    whatsIncluded: [
      "Pickup of CRT, LCD, LED, OLED, and plasma TVs",
      "Wall-mount uninstall (when reachable from a step ladder)",
      "Certified e-waste recycling for components",
      "Data destruction available on request for hard drives",
      "Bulk office electronics pickup",
    ],
    items: [
      { items: ["Flat-screen TVs (any size)", "Tube and projection TVs", "Computers, monitors & laptops", "Printers, copiers & fax machines", "Stereo equipment & speakers", "Gaming consoles & VR headsets", "Servers & networking gear", "Cables, batteries & small electronics"] },
    ],
    relatedSlugs: ["appliance-removal", "office-cleanouts", "junk-removal", "commercial-junk-removal", "estate-cleanouts"],
  },
  {
    slug: "construction-debris-removal",
    category: "junk-removal",
    title: "Construction Debris Removal — Austin, TX",
    shortTitle: "Construction Debris",
    h1: "Construction & Remodel Debris Removal in Austin, TX",
    metaTitle: "Construction Debris Removal Austin TX | The Haul Team",
    metaDescription: "Austin construction and remodel debris hauling — drywall, lumber, tile, flooring, roofing. Faster and cheaper than a dumpster for most projects.",
    intro:
      "Dumpsters are great if your project lasts a week. If you're a remodeler or homeowner who just needs the pile gone, we're faster, cleaner, and you don't have to live with a 30-yard container in the driveway. We service Austin contractors, flippers, and DIYers across Travis, Williamson, Hays, and Bastrop counties.",
    whatsIncluded: [
      "Sorting and loading by hand (we don't damage your driveway)",
      "Recycling of clean concrete, metal, and lumber",
      "Pickup from interior remodels, garages, and yards",
      "No dumpster permit needed",
      "Net wrap or tarp the load before we leave your site",
    ],
    items: [
      {
        heading: "Interior remodel",
        items: ["Drywall & sheetrock", "Tile & backsplash", "Cabinets & countertops", "Hardwood, laminate & vinyl flooring", "Carpet & padding", "Bathroom fixtures & vanities"],
      },
      {
        heading: "Exterior & framing",
        items: ["Roofing shingles & underlayment", "Lumber, studs & framing scrap", "Brick, stone & broken concrete (small loads)", "Siding & soffit", "Fence pickets & posts", "Trim, doors & windows"],
      },
    ],
    relatedSlugs: ["junk-removal", "shed-demolition", "deck-demolition", "fence-removal", "commercial-junk-removal"],
    faq: [
      { q: "Can you handle a kitchen demo haul-out?", a: "Yes — cabinets, counters, flooring, drywall, all of it. Most kitchens fit in one to two trailer loads." },
      { q: "Dumpster vs. The Haul Team — which is cheaper?", a: "For one or two clean-outs of debris, we're almost always cheaper than a 20-yard dumpster rental once permits, weight overages, and rental days are included." },
    ],
  },
  {
    slug: "yard-waste-removal",
    category: "junk-removal",
    title: "Yard Waste Removal — Austin, TX",
    shortTitle: "Yard Waste",
    h1: "Yard Waste & Brush Removal in Austin, TX",
    metaTitle: "Yard Waste Removal Austin TX | Brush, Limbs & Debris | The Haul Team",
    metaDescription: "Brush, limbs, leaves, and storm debris hauled away across Austin and Central Texas. Same-day yard waste removal — free quote.",
    intro:
      "After a Central Texas storm or a long-overdue trimming, the pile in the side yard isn't going to fit in your green bin. We haul brush, tree limbs, leaves, sod, and storm debris all over the Austin metro — usually same-day. We load it by hand so we don't tear up your lawn.",
    whatsIncluded: [
      "Hand-loading from anywhere on the property",
      "Brush, limb, and leaf hauling",
      "Storm debris cleanup",
      "Composting and mulching when possible",
      "No bagging required",
    ],
    items: [
      { items: ["Tree limbs and branches", "Brush and shrub trimmings", "Leaves, pine needles & pine cones", "Sod and dirt (small loads)", "Storm debris", "Fence boards mixed with brush", "Bagged yard waste", "Old mulch and landscape rock (small loads)"] },
    ],
    relatedSlugs: ["junk-removal", "construction-debris-removal", "fence-removal", "shed-demolition", "deck-demolition"],
  },
  {
    slug: "hot-tub-removal",
    category: "junk-removal",
    title: "Hot Tub Removal — Austin, TX",
    shortTitle: "Hot Tub Removal",
    h1: "Hot Tub & Spa Removal in Austin, TX",
    metaTitle: "Hot Tub Removal Austin TX | Spa & Jacuzzi Disposal | The Haul Team",
    metaDescription: "Austin hot tub and spa removal. We drain, cut, and haul. Backyard, deck, or basement — same-week service. Flat-rate quote.",
    intro:
      "Hot tubs are 800 pounds of fiberglass and foam that nobody wants. We bring saws, sledges, and a four-person crew when needed, cut the shell apart in place, and haul every piece out. We've removed hot tubs from backyards in Westlake, off second-floor decks in East Austin, and out of basements in Round Rock.",
    whatsIncluded: [
      "Drain and disconnect (electrical and water)",
      "Cut and demo of the shell in place",
      "Full haul-off of fiberglass, foam, motor & cabinet",
      "Site cleanup and broom-sweep",
      "Flat-rate quote — no surprise add-ons",
    ],
    relatedSlugs: ["shed-demolition", "deck-demolition", "small-structure-demolition", "junk-removal", "construction-debris-removal"],
  },
  {
    slug: "piano-removal",
    category: "junk-removal",
    title: "Piano Removal — Austin, TX",
    shortTitle: "Piano Removal",
    h1: "Piano & Organ Removal in Austin, TX",
    metaTitle: "Piano Removal Austin TX | Upright & Grand Piano Hauling | The Haul Team",
    metaDescription: "Upright, baby grand, and grand piano removal across Austin. Heavy-duty four-wheel piano dolly and a crew that's done it 100 times. Free quote.",
    intro:
      "Pianos are the heaviest single item we move — and they're awkward, fragile, and unforgiving. We bring the right dolly, the right straps, and a crew that's done it dozens of times across Austin. Uprights, spinets, baby grands, and full grand pianos.",
    whatsIncluded: [
      "Piano dolly and proper straps",
      "Floor and wall protection",
      "Stair and turn navigation",
      "Disposal or donation routing",
      "Crew of three or four for grand pianos",
    ],
    items: [
      { items: ["Upright pianos", "Spinet & console pianos", "Baby grand pianos", "Grand pianos", "Player pianos", "Electric organs", "Church organs", "Piano benches and stools"] },
    ],
    relatedSlugs: ["furniture-removal", "junk-removal", "moving-and-delivery", "estate-cleanouts", "whole-house-cleanouts"],
  },
  {
    slug: "curbside-pickup",
    category: "junk-removal",
    title: "Curbside Junk Pickup — Austin, TX",
    shortTitle: "Curbside Pickup",
    h1: "Curbside Junk Pickup in Austin, TX",
    metaTitle: "Curbside Pickup Austin TX | Drop & Go Junk Removal | The Haul Team",
    metaDescription: "Drop your junk at the curb and we'll grab it. Austin curbside pickup with no contact required — text us a photo and we'll handle the rest.",
    intro:
      "Sometimes you just want it gone — no walk-throughs, no meet-and-greet, no waiting around. Drag it to the curb (or the driveway), text us a photo, and we'll grab it on our next route through your part of Austin. We bill by card or Venmo when the truck's loaded.",
    whatsIncluded: [
      "No-contact pickup option",
      "Pay by card, Venmo, or Zelle when we're loaded",
      "Photo-confirmation when the pile is gone",
      "Same-day or next-day window",
      "All standard junk types accepted",
    ],
    relatedSlugs: ["trash-pickup", "junk-removal", "furniture-removal", "yard-waste-removal", "appliance-removal"],
  },
  {
    slug: "trash-pickup",
    category: "junk-removal",
    title: "Trash Pickup & Hauling — Austin, TX",
    shortTitle: "Trash Pickup",
    h1: "Trash Pickup & Hauling in Austin, TX",
    metaTitle: "Trash Pickup Austin TX | Bag, Box & Bulk Hauling | The Haul Team",
    metaDescription: "Bag, box, or bulk trash hauling in Austin. One-time and recurring pickups. Loads the city bin won't take.",
    intro:
      "Bagged trash piled up after a remodel, a tenant move-out, or a property cleanup that the city won't grab? We will. One-time hauls, recurring service for short-term rentals, and overflow pickups when your regular service falls behind.",
    whatsIncluded: [
      "Bag, box, and loose bulk pickup",
      "Recurring service for STRs and small properties",
      "Yard waste mixed in is fine",
      "Same-day availability across Austin",
      "Flat-rate truck volume pricing",
    ],
    relatedSlugs: ["curbside-pickup", "junk-removal", "commercial-junk-removal", "move-out-cleanouts", "yard-waste-removal"],
  },
  {
    slug: "commercial-junk-removal",
    category: "junk-removal",
    title: "Commercial Junk Removal — Austin, TX",
    shortTitle: "Commercial Junk Removal",
    h1: "Commercial Junk Removal in Austin, TX",
    metaTitle: "Commercial Junk Removal Austin TX | Office, Retail, Property | The Haul Team",
    metaDescription: "Austin commercial junk removal for offices, retail, property managers, and contractors. Recurring service, after-hours pickup, certificate of insurance available.",
    intro:
      "We work with Austin property managers, retail operators, restaurants, and contractors who need junk hauled on a schedule that doesn't interrupt business. After-hours service, recurring pickups, certificate of insurance on request, and W-9 invoicing for accounting.",
    whatsIncluded: [
      "After-hours and weekend pickup windows",
      "Recurring service contracts",
      "Certificate of insurance and W-9 on request",
      "Property manager and contractor accounts",
      "Bulk office, retail, and warehouse loads",
    ],
    relatedSlugs: ["office-cleanouts", "construction-debris-removal", "tv-electronics-removal", "junk-removal", "storage-unit-cleanouts"],
  },

  // ─── CLEAN-OUTS HUB ──────────────────────────────────────────────────
  {
    slug: "clean-outs",
    category: "clean-outs",
    isHub: true,
    title: "Clean-Outs in Austin, TX",
    shortTitle: "Clean-Outs",
    h1: "Austin Clean-Out Services — Whole Homes, Estates & More",
    metaTitle: "Clean Out Services Austin TX | Estate, Hoarder, Garage | The Haul Team",
    metaDescription: "Whole-house, hoarder, estate, garage, and storage unit clean-outs across Austin. Discreet, fast, and respectful. Free on-site quote.",
    intro:
      "Clean-outs are about more than hauling — they're about handling someone's life with care. We do estate clean-outs for families after a loss, hoarder clean-outs without judgment, foreclosure and eviction work for property managers, and garage and storage unit clear-outs for folks who finally need the space back.",
    whatsIncluded: [
      "Whole-house, single-room, or single-space clean-outs",
      "Sort what stays, what donates, and what hauls",
      "Discreet, no-logo arrival on request",
      "Donation and recycling routing built in",
      "Final broom-sweep and trash bag pickup",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["whole-house-cleanouts", "hoarder-cleanouts", "estate-cleanouts", "garage-cleanouts", "storage-unit-cleanouts"],
  },
  {
    slug: "whole-house-cleanouts",
    category: "clean-outs",
    title: "Whole-House Clean-Outs — Austin, TX",
    shortTitle: "Whole-House Clean-Outs",
    h1: "Whole-House Clean-Outs in Austin, TX",
    metaTitle: "Whole House Clean Out Austin TX | The Haul Team",
    metaDescription: "From attic to garage — whole-house clean-outs across Austin. Pre-sale, post-tenant, downsizing. Free walk-through quote.",
    intro:
      "Whether you're prepping a house for sale, downsizing after years in the same home, or clearing out a rental between tenants, we handle the whole thing. Every room, every closet, the attic, the garage, the shed in the back. You walk away with empty rooms and a broom-swept slab.",
    whatsIncluded: [
      "Every room, every closet, every level",
      "Attic, garage, shed, and outbuildings",
      "Donation sort and routing",
      "Hazardous item disposal coordination",
      "Final clean-sweep walkthrough",
    ],
    relatedSlugs: ["estate-cleanouts", "hoarder-cleanouts", "move-out-cleanouts", "foreclosure-eviction-cleanouts", "garage-cleanouts"],
  },
  {
    slug: "hoarder-cleanouts",
    category: "clean-outs",
    title: "Hoarder Clean-Outs — Austin, TX",
    shortTitle: "Hoarder Clean-Outs",
    h1: "Compassionate Hoarder Clean-Outs in Austin, TX",
    metaTitle: "Hoarder Clean Out Austin TX | Compassionate & Discreet | The Haul Team",
    metaDescription: "Discreet, judgment-free hoarder clean-outs in Austin. We work room-by-room at your pace. Free private consultation.",
    intro:
      "Hoarder clean-outs aren't about a pile of stuff — they're about a person and a family. We move at your pace, never throw anything away without your okay on each pile, and arrive in unmarked trucks if you ask. We've done this work for Austin families dealing with mental health, mobility loss, and grief. It's confidential and we don't judge.",
    whatsIncluded: [
      "Confidential, judgment-free service",
      "Room-by-room pacing — we follow your lead",
      "Unmarked vehicle option for privacy",
      "Sort piles for keep / donate / haul",
      "PPE, deep-clean partners, and biohazard referrals when needed",
    ],
    relatedSlugs: ["estate-cleanouts", "whole-house-cleanouts", "garage-cleanouts", "attic-cleanouts", "move-out-cleanouts"],
  },
  {
    slug: "estate-cleanouts",
    category: "clean-outs",
    title: "Estate Clean-Outs — Austin, TX",
    shortTitle: "Estate Clean-Outs",
    h1: "Estate Clean-Outs in Austin, TX",
    metaTitle: "Estate Clean Out Austin TX | Respectful & Family-Owned | The Haul Team",
    metaDescription: "Austin estate clean-outs handled with respect. We work with executors, realtors, and families. Donation routing and discreet service.",
    intro:
      "After a loved one passes, the last thing a family should be handling is twelve hours in a garage sorting through forty years of memories. We work with executors, realtors, and family members directly to clear estates respectfully. Keepsakes go where you want them. Donations go to Austin charities. Everything else gets handled.",
    whatsIncluded: [
      "Coordination with executor and realtor",
      "Sorting for family keepsakes, donation, and disposal",
      "Photo documentation on request",
      "Donation receipts for tax purposes",
      "Final broom-sweep before showings begin",
    ],
    relatedSlugs: ["whole-house-cleanouts", "hoarder-cleanouts", "foreclosure-eviction-cleanouts", "move-out-cleanouts", "garage-cleanouts"],
  },
  {
    slug: "garage-cleanouts",
    category: "clean-outs",
    title: "Garage Clean-Outs — Austin, TX",
    shortTitle: "Garage Clean-Outs",
    h1: "Garage Clean-Outs in Austin, TX",
    metaTitle: "Garage Clean Out Austin TX | Park Your Car Again | The Haul Team",
    metaDescription: "Austin garage clean-outs that get your car back inside. Tools, paint, old furniture, kids' stuff — we sort, haul, and sweep.",
    intro:
      "If you can't remember the last time your car fit in your garage, that's our specialty. We clear out years of paint cans, broken patio furniture, kids' bikes, dead exercise equipment, and storage tubs full of stuff you forgot you owned. You point — we sort it into keep, donate, and haul piles right on the driveway.",
    whatsIncluded: [
      "Driveway sort for keep / donate / haul",
      "Hazardous waste pickup coordination (paint, oil, batteries)",
      "Metal recycling on old tools and equipment",
      "Broom-sweep when we're done",
      "Same-day turnaround on most garages",
    ],
    relatedSlugs: ["attic-cleanouts", "storage-unit-cleanouts", "whole-house-cleanouts", "junk-removal", "construction-debris-removal"],
  },
  {
    slug: "attic-cleanouts",
    category: "clean-outs",
    title: "Attic Clean-Outs — Austin, TX",
    shortTitle: "Attic Clean-Outs",
    h1: "Attic Clean-Outs in Austin, TX",
    metaTitle: "Attic Clean Out Austin TX | Insulation & Storage Removal | The Haul Team",
    metaDescription: "Austin attic clean-outs — boxes, furniture, old insulation. We bring the right gear and we don't damage your ceiling.",
    intro:
      "Attics in Central Texas hit 130 degrees in July. We bring the right gear, the right ladders, and the right PPE so you don't have to climb up there yourself. Box piles, old furniture, abandoned holiday decorations, even rodent-damaged storage — we handle it.",
    whatsIncluded: [
      "Pull-down ladder and attic-access friendly",
      "PPE for dust and insulation",
      "Floor protection on the way down",
      "Box, furniture, and storage tub removal",
      "Coordination with pest and insulation contractors",
    ],
    relatedSlugs: ["garage-cleanouts", "whole-house-cleanouts", "storage-unit-cleanouts", "estate-cleanouts", "junk-removal"],
  },
  {
    slug: "storage-unit-cleanouts",
    category: "clean-outs",
    title: "Storage Unit Clean-Outs — Austin, TX",
    shortTitle: "Storage Unit Clean-Outs",
    h1: "Storage Unit Clean-Outs in Austin, TX",
    metaTitle: "Storage Unit Clean Out Austin TX | The Haul Team",
    metaDescription: "Storage unit clean-outs across Austin — Public Storage, Extra Space, CubeSmart, Life Storage. Sort, donate, haul, sweep.",
    intro:
      "That 10x20 you've been paying $200/month on for three years? We can have it empty and broom-swept in an afternoon. We work all over Austin's storage facilities — Public Storage, Extra Space, CubeSmart, Life Storage, the independents — and we know the loading-dock etiquette at every one.",
    whatsIncluded: [
      "Pickup at any Austin-metro facility",
      "Sort for keep / donate / haul on-site",
      "Photo documentation",
      "Final broom-sweep so you can hand back the key",
      "Auction-purchase clean-outs welcomed",
    ],
    relatedSlugs: ["garage-cleanouts", "whole-house-cleanouts", "estate-cleanouts", "move-out-cleanouts", "junk-removal"],
  },
  {
    slug: "foreclosure-eviction-cleanouts",
    category: "clean-outs",
    title: "Foreclosure & Eviction Clean-Outs — Austin, TX",
    shortTitle: "Foreclosure & Eviction Clean-Outs",
    h1: "Foreclosure & Eviction Clean-Outs in Austin, TX",
    metaTitle: "Foreclosure & Eviction Clean Out Austin TX | The Haul Team",
    metaDescription: "Austin foreclosure and eviction clean-outs for property managers, banks, and landlords. COI on request, photo documentation, fast turnaround.",
    intro:
      "We work with Austin landlords, property managers, and bank-asset managers on foreclosure and eviction clean-outs across Travis, Williamson, and Hays counties. Photo documentation, secure disposal, certificate of insurance, and turnaround that doesn't hold up your relist date.",
    whatsIncluded: [
      "Photo and inventory documentation",
      "Certificate of insurance on request",
      "Trash-out and personal property handling per Texas law",
      "Donation routing when appropriate",
      "Final broom-sweep and re-key coordination",
    ],
    relatedSlugs: ["whole-house-cleanouts", "estate-cleanouts", "move-out-cleanouts", "commercial-junk-removal", "office-cleanouts"],
  },
  {
    slug: "move-out-cleanouts",
    category: "clean-outs",
    title: "Move-Out Clean-Outs — Austin, TX",
    shortTitle: "Move-Out Clean-Outs",
    h1: "Move-Out Clean-Outs in Austin, TX",
    metaTitle: "Move Out Clean Out Austin TX | Get Your Deposit Back | The Haul Team",
    metaDescription: "Austin move-out clean-outs that protect your deposit. Furniture left behind, last-day trash, broom-clean handoff. Same-day service.",
    intro:
      "You're moving, the truck is full, and the apartment still has a couch nobody wanted and three trash bags by the door. That's where we come in. We clear out whatever you can't fit, broom-sweep, and leave the unit ready for a final walk-through. Apartments, condos, and short-term rentals across Austin.",
    whatsIncluded: [
      "Same-day move-out window",
      "Furniture, trash, and pantry haul-out",
      "Broom-sweep and final walk-through prep",
      "STR turnover service available",
      "Apartment and condo elevator coordination",
    ],
    relatedSlugs: ["whole-house-cleanouts", "estate-cleanouts", "foreclosure-eviction-cleanouts", "moving-and-delivery", "junk-removal"],
  },
  {
    slug: "office-cleanouts",
    category: "clean-outs",
    title: "Office Clean-Outs — Austin, TX",
    shortTitle: "Office Clean-Outs",
    h1: "Office & Commercial Clean-Outs in Austin, TX",
    metaTitle: "Office Clean Out Austin TX | Commercial Furniture Removal | The Haul Team",
    metaDescription: "Austin office and commercial clean-outs — cubicles, desks, files, electronics. After-hours, COI available, certified data destruction on request.",
    intro:
      "Downsizing the office, closing a location, or finally getting rid of the cube farm? We handle Austin office clean-outs after hours so business keeps running, with COI on file and certified hard-drive destruction available for any electronics that need it.",
    whatsIncluded: [
      "After-hours and weekend service",
      "Cubicle disassembly and removal",
      "Electronics and e-waste recycling",
      "Certified data destruction on request",
      "Donation of usable office furniture to Austin nonprofits",
    ],
    relatedSlugs: ["commercial-junk-removal", "tv-electronics-removal", "whole-house-cleanouts", "estate-cleanouts", "foreclosure-eviction-cleanouts"],
  },

  // ─── DEMOLITION HUB ──────────────────────────────────────────────────
  {
    slug: "demolitions",
    category: "demolitions",
    isHub: true,
    title: "Demolition in Austin, TX",
    shortTitle: "Demolition",
    h1: "Austin Demolition Services — Sheds, Decks, Fences & More",
    metaTitle: "Demolition Services Austin TX | Shed, Deck, Fence | The Haul Team",
    metaDescription: "Small-structure demolition across Austin. Sheds, decks, fences, hot tubs, mobile homes, barns. Demo + haul-off in one trip.",
    intro:
      "Demolition is in our name. We do small-structure demos all over the Austin metro — sheds, decks, patios, fences, hot tubs, even barns and mobile homes. Demo and haul-off are one job, one crew, one price. We don't sub anything out.",
    whatsIncluded: [
      "Demo, haul-off, and final cleanup in one trip",
      "Hand tools and reciprocating saws (no heavy equipment damage)",
      "Concrete pad and footing removal (small loads)",
      "Permits and HOA coordination on request",
      "Site grading and dirt-fill for small footprints",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["shed-demolition", "deck-demolition", "fence-removal", "patio-removal", "small-structure-demolition"],
  },
  {
    slug: "shed-demolition",
    category: "demolitions",
    title: "Shed Demolition — Austin, TX",
    shortTitle: "Shed Demolition",
    h1: "Shed Demolition & Removal in Austin, TX",
    metaTitle: "Shed Demolition Austin TX | Tear Down & Haul | The Haul Team",
    metaDescription: "Austin shed demolition and haul-off. Wood, metal, plastic. Demo + haul + cleanup in one trip. Flat-rate quote.",
    intro:
      "Backyard sheds rot, lean, get raccoons, and one day they have to go. We tear down wood, metal, and plastic sheds across Austin in a single visit, haul everything away, and broom-sweep the slab. Most sheds are a half-day job.",
    whatsIncluded: [
      "Full tear-down (no leftovers)",
      "Concrete pad demo (when requested)",
      "Hauling and disposal included",
      "Hand tools — no heavy equipment damage to your yard",
      "Flat-rate quote",
    ],
    relatedSlugs: ["deck-demolition", "fence-removal", "small-structure-demolition", "demolitions", "barn-demolition"],
  },
  {
    slug: "deck-demolition",
    category: "demolitions",
    title: "Deck Demolition — Austin, TX",
    shortTitle: "Deck Demolition",
    h1: "Deck Demolition & Removal in Austin, TX",
    metaTitle: "Deck Demolition Austin TX | Tear Down & Haul Off | The Haul Team",
    metaDescription: "Austin deck demolition — wood, composite, attached or freestanding. Demo, haul-off, and footing removal in one trip.",
    intro:
      "Old decks are heavy, full of rusted nails, and almost always more rotten than they look. We tear down wood and composite decks across Austin, pull the footings, and haul every board, joist, and post away in one trip.",
    whatsIncluded: [
      "Full deck tear-down",
      "Post and footing removal",
      "Hauling included",
      "Site cleanup and rake-out",
      "Coordination with deck rebuild contractors",
    ],
    relatedSlugs: ["shed-demolition", "patio-removal", "fence-removal", "demolitions", "construction-debris-removal"],
  },
  {
    slug: "patio-removal",
    category: "demolitions",
    title: "Patio Removal — Austin, TX",
    shortTitle: "Patio Removal",
    h1: "Patio Removal & Demolition in Austin, TX",
    metaTitle: "Patio Removal Austin TX | Concrete & Pavers | The Haul Team",
    metaDescription: "Concrete patio, paver patio, and flagstone patio removal across Austin. Small to mid-sized slabs handled with hand tools and a dump trailer.",
    intro:
      "Small-to-mid concrete patios, paver patios, and flagstone patios across Austin. We break, load, and haul — no jackhammer chaos and no driveway damage. Bigger slabs get a price-break with a Bobcat add-on we coordinate.",
    whatsIncluded: [
      "Concrete, paver, and flagstone patio removal",
      "Hand tools or coordinated equipment as needed",
      "Hauling and recycling of clean concrete",
      "Site grading and rake-out",
      "Tree and root protection",
    ],
    relatedSlugs: ["deck-demolition", "fence-removal", "small-structure-demolition", "demolitions", "construction-debris-removal"],
  },
  {
    slug: "fence-removal",
    category: "demolitions",
    title: "Fence Removal — Austin, TX",
    shortTitle: "Fence Removal",
    h1: "Fence Removal & Demo in Austin, TX",
    metaTitle: "Fence Removal Austin TX | Wood, Chain Link, Iron | The Haul Team",
    metaDescription: "Austin fence removal — wood, chain link, iron. Posts and concrete footings pulled. Hauling included.",
    intro:
      "Falling-down privacy fences are everywhere in Austin after a wet winter. We pull pickets, rails, posts, and the concrete footings — for wood, chain link, and wrought iron fences. New fence company shows up to a clean line.",
    whatsIncluded: [
      "Picket, rail, and post removal",
      "Concrete footing extraction",
      "Hauling included",
      "Property line and survey marker care",
      "Coordination with fence install contractors",
    ],
    relatedSlugs: ["deck-demolition", "shed-demolition", "patio-removal", "demolitions", "yard-waste-removal"],
  },
  {
    slug: "small-structure-demolition",
    category: "demolitions",
    title: "Small Structure Demolition — Austin, TX",
    shortTitle: "Small Structure Demo",
    h1: "Small Structure Demolition in Austin, TX",
    metaTitle: "Small Structure Demolition Austin TX | The Haul Team",
    metaDescription: "Austin small structure demolition — playsets, pergolas, carports, outbuildings, chicken coops, gazebos.",
    intro:
      "Playsets, pergolas, carports, gazebos, chicken coops, outhouses — the awkward stuff that's too small for a demo contractor and too big for the trash. We bring tools, manpower, and a 16-foot dump trailer and we handle it in a single trip.",
    whatsIncluded: [
      "Playset, pergola, gazebo, carport demo",
      "Outbuilding and chicken coop tear-down",
      "Hauling included",
      "Site cleanup",
      "Hand tools — no yard damage",
    ],
    relatedSlugs: ["shed-demolition", "deck-demolition", "fence-removal", "demolitions", "patio-removal"],
  },
  {
    slug: "barn-demolition",
    category: "demolitions",
    title: "Barn Demolition — Austin, TX",
    shortTitle: "Barn Demolition",
    h1: "Barn & Outbuilding Demolition in Austin, TX",
    metaTitle: "Barn Demolition Austin TX | The Haul Team",
    metaDescription: "Barn demolition across Austin and Central Texas. Old wood barns, metal pole barns, equestrian barns — tear down and haul-off.",
    intro:
      "Old hill country barns, metal pole barns, and small equestrian barns across Travis, Hays, and Williamson counties. We tear down, sort the salvageable lumber if you want it, and haul the rest. Larger barns we coordinate equipment for.",
    whatsIncluded: [
      "Wood, metal, and pole barn demolition",
      "Salvage lumber set-aside on request",
      "Hauling included",
      "Site cleanup and grading",
      "Permit coordination on request",
    ],
    relatedSlugs: ["shed-demolition", "small-structure-demolition", "mobile-home-demolition", "demolitions", "fence-removal"],
  },
  {
    slug: "mobile-home-demolition",
    category: "demolitions",
    title: "Mobile Home Demolition — Austin, TX",
    shortTitle: "Mobile Home Demo",
    h1: "Mobile Home & Trailer Demolition in Austin, TX",
    metaTitle: "Mobile Home Demolition Austin TX | The Haul Team",
    metaDescription: "Mobile home, single-wide, and travel trailer demolition across Austin and Central Texas. Demo, haul-off, and site cleanup.",
    intro:
      "Singlewides, doublewides, and travel trailers. We coordinate utility shutoff verification, demo the structure, haul off the steel and debris, and leave the pad ready for whatever comes next. Permit help available.",
    whatsIncluded: [
      "Singlewide, doublewide, and trailer demo",
      "Utility shutoff verification",
      "Metal recycling on the chassis",
      "Pad and tie-down removal",
      "Permit coordination on request",
    ],
    relatedSlugs: ["barn-demolition", "small-structure-demolition", "demolitions", "shed-demolition", "hot-tub-removal"],
  },

  // ─── MOVING HUB ──────────────────────────────────────────────────────
  {
    slug: "moving-and-delivery",
    category: "moving-and-delivery",
    isHub: true,
    title: "Moving & Delivery in Austin, TX",
    shortTitle: "Moving & Delivery",
    h1: "Austin Moving & Furniture Delivery",
    metaTitle: "Moving & Delivery Austin TX | Local Movers | The Haul Team",
    metaDescription: "Local Austin moving and furniture delivery by the same crew that hauls junk for 200+ five-star clients. Hourly or flat rate.",
    intro:
      "The same crew that hauls junk also moves you. Local Austin moves, single-item moves, furniture store deliveries, and storage-unit-to-home runs. Two-man crew, 16-foot trailer, blankets and straps. Hourly or flat-rate quoted up front.",
    whatsIncluded: [
      "Local Austin and Central Texas moves",
      "Single-item moves (couches, pianos, gun safes)",
      "Furniture store pickups and deliveries",
      "Storage unit moves",
      "Hourly or flat-rate pricing",
    ],
    items: [
      { items: ["Studio and 1-bedroom moves", "Furniture delivery from Austin stores & Facebook Marketplace", "Single-item moves (couch, fridge, piano)", "Storage unit to home", "Office moves", "Junk removal added to your move at a discount"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["furniture-removal", "piano-removal", "move-out-cleanouts", "junk-removal", "office-cleanouts"],
    faq: [
      { q: "Do you do whole-house moves?", a: "We're best for studio, one-bedroom, and partial moves. For full four-bedroom moves we'll refer you to a partner — we'd rather tell you straight than over-promise." },
      { q: "Can I add junk removal to my move?", a: "Yes — that's actually our most-requested combo. We move what you're keeping and haul what you're not, all in one trip." },
    ],
  },
];

export const SERVICE_CATEGORIES: Record<ServiceCategory, { label: string; slug: ServiceCategory; description: string }> = {
  "junk-removal": {
    label: "Junk Removal",
    slug: "junk-removal",
    description: "Furniture, appliances, electronics, debris — anything you don't want anymore.",
  },
  "clean-outs": {
    label: "Clean-Outs",
    slug: "clean-outs",
    description: "Estates, hoarder homes, garages, storage units, foreclosures — start to finish.",
  },
  demolitions: {
    label: "Demolition",
    slug: "demolitions",
    description: "Sheds, decks, fences, hot tubs, barns, mobile homes — demo and haul in one trip.",
  },
  "moving-and-delivery": {
    label: "Moving & Delivery",
    slug: "moving-and-delivery",
    description: "Local moves, furniture delivery, single-item moves across Austin.",
  },
};

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(cat: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === cat && !s.isHub);
}

export function getHub(cat: ServiceCategory): Service | undefined {
  return SERVICES.find((s) => s.category === cat && s.isHub);
}
