export type LocationType = "city" | "neighborhood";

export type Location = {
  slug: string;
  name: string;
  fullName: string;
  type: LocationType;
  county?: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
};

export const LOCATIONS: Location[] = [
  // ─── SUBURBAN CITIES ─────────────────────────────────────────────────
  {
    slug: "round-rock-tx",
    name: "Round Rock",
    fullName: "Round Rock, TX",
    type: "city",
    county: "Williamson County",
    metaTitle: "Junk Removal Round Rock TX | Same-Day Pickup | The Haul Team",
    metaDescription: "Family-owned junk removal, clean-outs, and demolition in Round Rock, TX. 200+ five-star reviews. Same-day pickup, upfront pricing.",
    intro:
      "We're in Round Rock most days of the week — Old Town pickups before lunch, master-planned communities out toward 79 in the afternoon. Whether you've got a garage that hasn't been usable since the kids were in middle school or a fence the last storm finally took down, we've got a crew and a trailer in your neighborhood.",
    neighborhoods: ["Old Town Round Rock", "Brushy Creek", "Forest Creek", "Teravista", "Mayfield Ranch", "Paloma Lake", "Vista Oaks", "Behrens Ranch", "Sonoma", "Cat Hollow"],
    landmarks: ["Dell Diamond", "Kalahari Resorts", "Old Settlers Park", "Round Rock Premium Outlets", "Brushy Creek Lake Park", "Round Rock Public Library", "Centennial Plaza", "The Round Rock"],
  },
  {
    slug: "cedar-park-tx",
    name: "Cedar Park",
    fullName: "Cedar Park, TX",
    type: "city",
    county: "Williamson County",
    metaTitle: "Junk Removal Cedar Park TX | The Haul Team",
    metaDescription: "Cedar Park junk removal, clean-outs, demolition, and moving. Family-owned, same-day, upfront pricing. Free quote in minutes.",
    intro:
      "From Anderson Mill to Brushy Creek, we work Cedar Park constantly. Newer master-planned subdivisions mean lots of garage clean-outs and growing families with old furniture to swap out. We're fast, we're upfront, and we leave your driveway cleaner than we found it.",
    neighborhoods: ["Buttercup Creek", "Twin Creeks", "Cypress Creek", "Anderson Mill West", "Block House Creek", "Ranch at Brushy Creek", "Forest Oaks", "Cedar Park Town Center", "Carriage Hills", "Heritage Park"],
    landmarks: ["H-E-B Center at Cedar Park", "Cedar Park Regional Medical Center", "Brushy Creek Sports Park", "Lakeline Mall (adjacent)", "Milburn Park", "Twin Lakes YMCA", "Bell Boulevard corridor", "The Parke shopping center"],
  },
  {
    slug: "leander-tx",
    name: "Leander",
    fullName: "Leander, TX",
    type: "city",
    county: "Williamson County",
    metaTitle: "Junk Removal Leander TX | The Haul Team",
    metaDescription: "Leander, TX junk removal and clean-out services. Family-owned, same-day pickup, 200+ five-star reviews.",
    intro:
      "Leander is one of the fastest-growing cities in the country, and we feel it — new builds going up faster than the old fences are coming down. We service Travisso, Crystal Falls, Bryson, and every other Leander community. Construction debris, garage clean-outs, fence demo, hot tub removal — all of it.",
    neighborhoods: ["Travisso", "Crystal Falls", "Bryson", "Mason Hills", "Larkspur", "Caballo Ranch", "Savanna Ranch", "Block House Creek", "Reagan's Overlook", "Highland Oaks"],
    landmarks: ["Leander Park & Ride", "Devine Lake Park", "Robin Bledsoe Park", "Crystal Falls Golf Club", "Leander City Park", "Northline (new downtown)", "Capital Metro Leander Station"],
  },
  {
    slug: "pflugerville-tx",
    name: "Pflugerville",
    fullName: "Pflugerville, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal Pflugerville TX | The Haul Team",
    metaDescription: "Pflugerville junk removal, clean-outs, and demolition. Family-owned, same-day service. Free quote.",
    intro:
      "Pflugerville is home base for a lot of our crew, and we run it every day. Heatherwilde, Falcon Pointe, Avalon, Highland Park, Blackhawk — we know every short-cut. Garage clean-outs, mattress hauls, hot tub demo, fence pulls.",
    neighborhoods: ["Heatherwilde", "Falcon Pointe", "Avalon", "Highland Park", "Blackhawk", "Spring Trails", "Sorento", "Bohls Place", "Settlers Ridge", "Lakeside Meadows"],
    landmarks: ["Lake Pflugerville", "Typhoon Texas Waterpark", "Stone Hill Town Center", "1849 Park", "Pfluger Park", "Heritage House Museum", "Pflugerville Recreation Center"],
  },
  {
    slug: "georgetown-tx",
    name: "Georgetown",
    fullName: "Georgetown, TX",
    type: "city",
    county: "Williamson County",
    metaTitle: "Junk Removal Georgetown TX | The Haul Team",
    metaDescription: "Georgetown, TX junk removal and clean-out services. Sun City, downtown square, and beyond. Same-day pickup.",
    intro:
      "Georgetown's a city of two halves — the historic square downtown and the giant Sun City retirement community to the west. We do estate clean-outs and downsizing in Sun City almost every week, plus garage clean-outs and demo work all around the square.",
    neighborhoods: ["Sun City", "Berry Creek", "Wolf Ranch", "Cimarron Hills", "Reata Trails", "Old Town Georgetown", "Serenada", "Madison Oaks", "Water Oak", "Crystal Knoll Terrace"],
    landmarks: ["Georgetown Square", "Lake Georgetown", "San Gabriel Park", "Inner Space Cavern", "Sun City Texas", "Blue Hole Park", "Wolf Ranch Town Center", "Southwestern University"],
  },
  {
    slug: "hutto-tx",
    name: "Hutto",
    fullName: "Hutto, TX",
    type: "city",
    county: "Williamson County",
    metaTitle: "Junk Removal Hutto TX | The Haul Team",
    metaDescription: "Hutto, TX junk removal, clean-outs, and demolition. Same-day service, family-owned. Free quote.",
    intro:
      "Hutto keeps growing — and that means lots of new construction debris, old fences coming down, and families trading up to bigger garages. Hippo country, and we're here for it.",
    neighborhoods: ["Star Ranch", "Carmel", "Mager Meadows", "Hutto Highlands", "Glenwood", "Riverwalk", "Lakeside Estates", "Cottonwood Creek", "Lookout at Brushy Creek"],
    landmarks: ["Downtown Hutto", "Hutto Lake Park", "Hippo statues", "Brushy Creek Regional Trail", "East Williamson County Higher Education Center"],
  },
  {
    slug: "buda-tx",
    name: "Buda",
    fullName: "Buda, TX",
    type: "city",
    county: "Hays County",
    metaTitle: "Junk Removal Buda TX | The Haul Team",
    metaDescription: "Buda, TX junk removal, clean-outs, and demolition. Free quote, same-day service from a family-owned local crew.",
    intro:
      "South of Austin on 35, Buda's mix of older neighborhoods and brand-new builds keeps us busy. Whispering Hollow, Garlic Creek, Sunfield — we've worked them all. We're often in Kyle the same day, so we knock both out together.",
    neighborhoods: ["Whispering Hollow", "Garlic Creek", "Sunfield", "Bradfield Village", "Shadow Creek", "Elliott Ranch", "Stagecoach Crossing", "Stoneridge", "Cole Springs"],
    landmarks: ["Cabela's Buda", "Buda City Park", "Stagecoach House", "Garrison Park", "Onion Creek Greenbelt", "Historic Downtown Buda"],
  },
  {
    slug: "kyle-tx",
    name: "Kyle",
    fullName: "Kyle, TX",
    type: "city",
    county: "Hays County",
    metaTitle: "Junk Removal Kyle TX | The Haul Team",
    metaDescription: "Kyle, TX junk removal, clean-outs, and demolition. Family-owned with same-day service and upfront pricing.",
    intro:
      "Kyle has grown faster than anyone predicted, and the housing stock matches — Plum Creek, Anthem, Crosswinds, Bunton Creek. We're in Kyle multiple times a week for garage clean-outs, appliance hauls, and fence demos.",
    neighborhoods: ["Plum Creek", "Anthem", "Crosswinds", "Bunton Creek", "Steeplechase", "Hometown Kyle", "Indian Hills", "Brookside", "Six Creeks", "Amberwood"],
    landmarks: ["Lake Kyle", "Plum Creek Golf Course", "Mary Kyle Hartson City Square Park", "Gregg-Clarke Park", "Kyle City Hall", "Texas Pie Company"],
  },
  {
    slug: "manor-tx",
    name: "Manor",
    fullName: "Manor, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal Manor TX | The Haul Team",
    metaDescription: "Manor, TX junk removal, clean-outs, and demolition with same-day service from a family-owned Austin crew.",
    intro:
      "Manor is east Austin's fastest-growing suburb — Whisper Valley, EastVillage, Wildhorse Ranch. Lots of new construction means lots of remodel debris, fence demo, and growing families that need garage space back.",
    neighborhoods: ["Whisper Valley", "EastVillage", "Wildhorse Ranch", "Presidential Glen", "ShadowGlen", "Stonewater", "Bell Farms", "Lagos", "Sweetwater Crossing"],
    landmarks: ["Manor City Park", "ShadowGlen Golf Club", "Whisper Valley Discovery Center", "Downtown Manor", "Manor New Tech High School"],
  },
  {
    slug: "lakeway-tx",
    name: "Lakeway",
    fullName: "Lakeway, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal Lakeway TX | Lake Travis Area | The Haul Team",
    metaDescription: "Lakeway, TX junk removal, clean-outs, and demolition. Lake Travis area, family-owned, same-day pickup.",
    intro:
      "Lakeway and the Lake Travis corridor — bigger homes, bigger garages, bigger boats and the storage that comes with them. We do hot tub removals on hilltop properties, estate clean-outs in Flintrock, and dock-area furniture hauls. We know every gate code in the area.",
    neighborhoods: ["Flintrock Falls", "The Hills", "Rough Hollow", "Lakeway Highlands", "Lakeway North", "Old Lakeway", "Cardinal Hills", "Hurst Creek"],
    landmarks: ["Lake Travis", "Lakeway Resort and Spa", "Hamilton Greenbelt", "Lakeway City Park", "Live Oak Golf Course", "The Hills Country Club"],
  },
  {
    slug: "bee-cave-tx",
    name: "Bee Cave",
    fullName: "Bee Cave, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal Bee Cave TX | The Haul Team",
    metaDescription: "Bee Cave junk removal and clean-out services. Hill Country Galleria, Spanish Oaks, and beyond. Same-day pickup.",
    intro:
      "Bee Cave is small in population, big in square footage per home. We do garage clean-outs in Spanish Oaks, hot tub removals in Ladera, and patio demos throughout the Hill Country Galleria corridor.",
    neighborhoods: ["Spanish Oaks", "Ladera", "Falconhead", "Uplands", "Bella Mar", "Lake Pointe", "Homestead", "The Backyard"],
    landmarks: ["Hill Country Galleria", "Spanish Oaks Golf Club", "Backyard Amphitheater (former)", "Falconhead Golf Club", "Bee Cave Central Park"],
  },
  {
    slug: "dripping-springs-tx",
    name: "Dripping Springs",
    fullName: "Dripping Springs, TX",
    type: "city",
    county: "Hays County",
    metaTitle: "Junk Removal Dripping Springs TX | The Haul Team",
    metaDescription: "Dripping Springs junk removal, barn demolition, and clean-outs across the Hill Country. Family-owned, same-day service.",
    intro:
      "Dripping Springs is wedding venues, vineyards, breweries, and 10-acre lots — and we love working out here. Barn demos, old fence pulls, big-property clean-outs, hot tub removals on hilltop decks. The drive's worth it for what we get done in a day.",
    neighborhoods: ["Caliterra", "Belterra", "Headwaters", "Mirasol Springs", "Howard Ranch", "Heritage Oaks", "Highpointe", "Sawyer Ranch", "Rim Rock"],
    landmarks: ["Hamilton Pool Preserve", "Pedernales Falls State Park (nearby)", "Mercer Street (downtown)", "Dripping Springs Founders Park", "Treaty Oak Distilling", "Twisted X Brewing", "Salt Lick BBQ (Driftwood)"],
  },
  {
    slug: "lago-vista-tx",
    name: "Lago Vista",
    fullName: "Lago Vista, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal Lago Vista TX | The Haul Team",
    metaDescription: "Lago Vista, TX junk removal, hot tub removal, and clean-outs along Lake Travis's north shore.",
    intro:
      "Lake Travis's north shore — Lago Vista is hilly, the houses are deceptively big, and a lot of them are weekend or rental properties. We do turn-over clean-outs, hot tub removals, and dock-furniture hauls for owners who don't live here full-time.",
    neighborhoods: ["Highland Lake Estates", "Tessera on Lake Travis", "Bar K Ranches", "Sundance Beach", "The Hollows (nearby Jonestown)", "Country Club Estates", "Las Brisas"],
    landmarks: ["Lake Travis", "Lago Vista Yacht Club", "Highland Lakes Air Park", "Bar K Park", "Rusty Allen Airport"],
  },
  {
    slug: "west-lake-hills-tx",
    name: "West Lake Hills",
    fullName: "West Lake Hills, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal West Lake Hills TX | The Haul Team",
    metaDescription: "West Lake Hills, TX junk removal, clean-outs, and demolition. Eanes ISD area, family-owned, same-day service.",
    intro:
      "West Lake Hills is one of Austin's most established luxury neighborhoods, and most of our work here is pre-listing clean-outs, downsizing, and hot tub or deck demos for renovations. Discreet, fast, and respectful of high-end finishes on the way out.",
    neighborhoods: ["Rollingwood (adjacent)", "Davenport Ranch", "Cuernavaca", "Eanes Estates", "Westlake Highlands", "Camp Craft Road corridor"],
    landmarks: ["Eanes Elementary", "Westlake High School", "Wild Basin Preserve", "Camp Craft Road", "Loop 360 / Capital of Texas Highway"],
  },
  {
    slug: "sunset-valley-tx",
    name: "Sunset Valley",
    fullName: "Sunset Valley, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal Sunset Valley TX | The Haul Team",
    metaDescription: "Sunset Valley junk removal and clean-outs. South Austin enclave with same-day service from The Haul Team.",
    intro:
      "Sunset Valley is a small enclave inside south Austin with older homes on bigger lots than the surrounding city. We do a lot of garage and yard clean-outs out here — and the shed-and-fence demo combo on lots that haven't been touched in 20 years.",
    neighborhoods: ["Sunset Valley", "Original Sunset Valley", "Brodie Lane corridor"],
    landmarks: ["Sunset Valley Farmers' Market", "Hill's Cafe (historic)", "Brodie Lane shopping", "Sunset Valley City Hall"],
  },
  {
    slug: "san-marcos-tx",
    name: "San Marcos",
    fullName: "San Marcos, TX",
    type: "city",
    county: "Hays County",
    metaTitle: "Junk Removal San Marcos TX | The Haul Team",
    metaDescription: "San Marcos, TX junk removal, student move-out clean-outs, and demolition. Free quote, family-owned service.",
    intro:
      "San Marcos is half university town, half Hill Country river town. We do tons of student move-out clean-outs at the end of every semester, plus standard residential clean-outs and old fence and shed demos around Wonder World and the river.",
    neighborhoods: ["Texas State campus area", "Willow Creek", "Stonewall Estates", "Blanco Vista", "Whisper", "Hughson Heights", "Paso Robles", "Cottonwood Creek", "Mountain View"],
    landmarks: ["Texas State University", "San Marcos River", "Aquarena Springs", "Outlets at San Marcos", "Wonder World Cave", "Rio Vista Park", "Sewell Park"],
  },
  {
    slug: "wimberley-tx",
    name: "Wimberley",
    fullName: "Wimberley, TX",
    type: "city",
    county: "Hays County",
    metaTitle: "Junk Removal Wimberley TX | The Haul Team",
    metaDescription: "Wimberley, TX junk removal, barn demo, and Hill Country clean-outs. Free quote, family-owned.",
    intro:
      "Wimberley is the Hill Country at its prettiest — and most spread out. We make the drive for barn demos, big-property clean-outs, hot tub removals on cliffside decks, and seasonal home turn-overs. We schedule routes so the trip's worth it for everyone.",
    neighborhoods: ["Woodcreek", "Woodcreek North", "Saddle Ridge", "Mountain Crest", "Paradise Hills", "Pinion Ridge"],
    landmarks: ["Blue Hole Regional Park", "Jacob's Well", "Wimberley Square", "Cypress Creek", "Wimberley Glass Works", "Old Baldy"],
  },
  {
    slug: "jonestown-tx",
    name: "Jonestown",
    fullName: "Jonestown, TX",
    type: "city",
    county: "Travis County",
    metaTitle: "Junk Removal Jonestown TX | The Haul Team",
    metaDescription: "Jonestown, TX junk removal, hot tub removal, and lakeside clean-outs along Lake Travis.",
    intro:
      "Jonestown sits at the top of Lake Travis, and a lot of homes here are weekend places or short-term rentals. We do turn-over clean-outs, garage clear-outs, and a steady stream of hot tub removals on lakeside decks.",
    neighborhoods: ["The Hollows on Lake Travis", "Northlake Hills", "Big Sandy Creek", "Hidden Oaks", "Sandy Creek Estates"],
    landmarks: ["Lake Travis", "Jones Brothers Park", "The Hollows Beach Club", "Sandy Creek Park (Travis County)"],
  },
  {
    slug: "elgin-tx",
    name: "Elgin",
    fullName: "Elgin, TX",
    type: "city",
    county: "Bastrop County",
    metaTitle: "Junk Removal Elgin TX | The Haul Team",
    metaDescription: "Elgin, TX junk removal, barn demolition, and rural property clean-outs east of Austin. Free quote.",
    intro:
      "Elgin is east of Austin where prices drop, lots get bigger, and the property work gets interesting. We do old barn demos, multi-trailer estate clean-outs, and fence pulls across the bigger acreages.",
    neighborhoods: ["Trinity Ranch", "Dogwood Park", "Caldwell Heights", "Heritage", "Hidden Trail"],
    landmarks: ["Downtown Elgin", "Southside Market & Barbeque", "Meyer's Elgin Smokehouse", "Veterans Memorial Park", "Sausage Capital of Texas (city designation)"],
  },

  // ─── AUSTIN NEIGHBORHOODS ───────────────────────────────────────────
  {
    slug: "downtown-austin",
    name: "Downtown Austin",
    fullName: "Downtown Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Downtown Austin | High-Rise & Loft Pickup | The Haul Team",
    metaDescription: "Downtown Austin junk removal and condo clean-outs. We know every loading dock and freight elevator from Rainey to Market District. Same-day service.",
    intro:
      "Downtown Austin pickups are a different game — freight elevators, loading dock reservations, parking enforcement, and one-bedroom condos packed with furniture that won't fit in the elevator the other way. We know the routine at most downtown buildings. Tell us the address and we'll handle the logistics.",
    neighborhoods: ["Rainey Street", "Market District", "Warehouse District", "Second Street District", "Red River Cultural District", "Capitol District"],
    landmarks: ["Texas State Capitol", "Lady Bird Lake", "Long Center", "ACL Live at the Moody Theater", "Frank Erwin Center area", "Republic Square Park", "Texas Capitol Mall"],
  },
  {
    slug: "east-austin",
    name: "East Austin",
    fullName: "East Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal East Austin | The Haul Team",
    metaDescription: "East Austin junk removal, garage clean-outs, demo work, and renovation hauling. Family-owned, same-day, upfront pricing.",
    intro:
      "East Austin has changed faster than any part of the city, and we see it every day — old bungalows getting full renovations, ADUs going up in the back, fences and sheds from the '70s finally coming down. We do a steady stream of construction debris hauls and pre-renovation clean-outs out here.",
    neighborhoods: ["Holly", "Cesar Chavez", "Govalle", "Chestnut", "MLK", "Rosewood", "Mueller (adjacent)", "Springdale"],
    landmarks: ["Mueller (former airport)", "Plaza Saltillo", "East 6th Street", "Boggy Creek Greenbelt", "Pan American Park", "Festival Beach", "Mueller Lake Park"],
  },
  {
    slug: "south-austin",
    name: "South Austin",
    fullName: "South Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal South Austin | The Haul Team",
    metaDescription: "South Austin junk removal, garage clean-outs, and demolition south of the river. Same-day service.",
    intro:
      "South Austin is our highest-volume area — South Lamar, South Congress, Manchaca, Slaughter Lane. Mix of older homes with garages full of decades of stuff and new builds that need post-construction hauls. We're in the area every day.",
    neighborhoods: ["South Lamar", "South Congress", "Bouldin Creek", "Travis Heights", "Galindo", "South Manchaca", "Cherry Creek", "Shady Hollow", "Onion Creek"],
    landmarks: ["South Congress (SoCo)", "Zilker Park (border)", "Barton Creek Greenbelt", "Stassney Lane corridor", "Slaughter Lane corridor", "South First Street"],
  },
  {
    slug: "north-austin",
    name: "North Austin",
    fullName: "North Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal North Austin | The Haul Team",
    metaDescription: "North Austin junk removal, appliance pickup, and clean-outs. Domain, Anderson Mill, Rundberg. Same-day pickup.",
    intro:
      "North Austin runs from the Domain up to Wells Branch and out to Anderson Mill. Apartment-heavy areas mean tons of move-out clean-outs, but we also do a lot of single-family work in Crestview, Allandale, and Wooten.",
    neighborhoods: ["Crestview", "Wooten", "Brentwood", "Allandale (south end)", "North Loop", "Highland", "Wells Branch", "Gracywoods", "Quail Creek"],
    landmarks: ["The Domain", "Q2 Stadium", "Walnut Creek Metropolitan Park", "Highland Mall (former)", "North Lamar corridor"],
  },
  {
    slug: "south-congress",
    name: "South Congress",
    fullName: "South Congress, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal South Congress | SoCo Austin | The Haul Team",
    metaDescription: "SoCo / South Congress junk removal and apartment clean-outs. Music Lane, Hotel San Jose area, Travis Heights. Same-day pickup.",
    intro:
      "South Congress (SoCo) is dense, busy, and full of older bungalows mixed with new condo builds. We do apartment move-outs along the strip, garage clean-outs in Travis Heights, and renovation hauls all over the area.",
    neighborhoods: ["SoCo strip", "Travis Heights", "Bouldin Creek (adjacent)", "Music Lane", "Fairview Park"],
    landmarks: ["South Congress Avenue", "Hotel San Jose", "Continental Club", "Stevie Ray Vaughan Statue", "Long Center (nearby)", "Big Stacy Park", "Lady Bird Lake (north end)"],
  },
  {
    slug: "mueller",
    name: "Mueller",
    fullName: "Mueller, Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Mueller Austin | The Haul Team",
    metaDescription: "Mueller, Austin junk removal and condo / townhome clean-outs. Same-day service from a family-owned crew.",
    intro:
      "Mueller is one of the most walkable neighborhoods in Austin, but that also means narrow alley garages, tandem parking, and freight loading lanes. We know it. Townhomes, single-families, and the apartments off Aldrich — same-day service.",
    neighborhoods: ["Mueller Town Center", "Aldrich Street", "Berkman Drive area", "Mueller Lake Park district"],
    landmarks: ["Mueller Lake Park", "Thinkery (children's museum)", "Dell Children's Medical Center", "Alamo Drafthouse Mueller", "Halcyon Coffee", "Mueller Hangar (event space)"],
  },
  {
    slug: "hyde-park",
    name: "Hyde Park",
    fullName: "Hyde Park, Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Hyde Park Austin | The Haul Team",
    metaDescription: "Hyde Park, Austin junk removal, garage clean-outs, and old-home renovation hauls. Same-day pickup.",
    intro:
      "Hyde Park has some of the oldest housing stock in Austin — bungalows from the 1920s with detached garages, original sheds, and fences that have seen decades of Austin storms. We do a ton of garage clean-outs and pre-renovation hauls here.",
    neighborhoods: ["Hyde Park core", "North Loop (adjacent)", "Hancock", "Avenue G area"],
    landmarks: ["Hyde Park Bar & Grill", "Quack's Bakery", "Shipe Park", "Hancock Golf Course", "Avenue B Grocery", "Elisabet Ney Museum"],
  },
  {
    slug: "tarrytown",
    name: "Tarrytown",
    fullName: "Tarrytown, Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Tarrytown Austin | The Haul Team",
    metaDescription: "Tarrytown, Austin junk removal, estate clean-outs, and renovation hauls. Discreet, same-day pickup.",
    intro:
      "Tarrytown is established, established. Big homes, big garages, lots of estate work and pre-listing clean-outs. We arrive quietly, work cleanly, and don't take up the street.",
    neighborhoods: ["West Austin / Tarrytown", "Pemberton Heights", "Westover Hills", "Old Enfield (adjacent)"],
    landmarks: ["Mayfield Park & Preserve", "Lions Municipal Golf Course", "Westenfield Park", "Reed Park", "Tarrytown Pharmacy"],
  },
  {
    slug: "westlake",
    name: "Westlake",
    fullName: "Westlake, Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Westlake Austin | The Haul Team",
    metaDescription: "Westlake junk removal, hot tub removal, and clean-out services. Family-owned crew with same-day Eanes-area service.",
    intro:
      "Westlake (along with neighboring West Lake Hills and Rollingwood) means hill country lots, long driveways, and a lot of high-end finishes to protect on the way out. Estate clean-outs, downsizing, hot tub demos on hilltop decks — we do all of it.",
    neighborhoods: ["Davenport Ranch", "Rollingwood", "West Lake Hills", "Cuernavaca", "Lost Creek"],
    landmarks: ["Westlake High School", "Eanes Elementary", "Lost Creek Country Club", "Bee Cave Road corridor", "Westbank Drive corridor"],
  },
  {
    slug: "zilker",
    name: "Zilker",
    fullName: "Zilker, Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Zilker Austin | The Haul Team",
    metaDescription: "Zilker neighborhood Austin junk removal and clean-out services. Barton Hills, Bouldin Creek adjacent. Same-day pickup.",
    intro:
      "Zilker is older Austin charm with new Austin prices — small lots, detached garages, and a steady stream of renovations and ADU builds. We handle the construction haul-offs and pre-reno clean-outs.",
    neighborhoods: ["Zilker", "Barton Hills (adjacent)", "Bouldin Creek (adjacent)", "South Lamar (north end)"],
    landmarks: ["Zilker Metropolitan Park", "Barton Springs Pool", "Umlauf Sculpture Garden", "Austin Nature & Science Center", "Zilker Botanical Garden"],
  },
  {
    slug: "barton-hills",
    name: "Barton Hills",
    fullName: "Barton Hills, Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Barton Hills Austin | The Haul Team",
    metaDescription: "Barton Hills, Austin junk removal, garage clean-outs, and demolition. Greenbelt-adjacent same-day service.",
    intro:
      "Barton Hills backs right up to the Greenbelt and Zilker — mostly older single-family homes with garages that have collected a lot of bikes, kayaks, and camping gear over the years. We sort, donate, and haul.",
    neighborhoods: ["Barton Hills", "Zilker (adjacent)", "Sunset Valley (adjacent)"],
    landmarks: ["Barton Creek Greenbelt", "Zilker Park (adjacent)", "Barton Springs Pool (adjacent)", "Barton Hills Elementary", "Sunset Valley Farmers' Market"],
  },
  {
    slug: "allandale",
    name: "Allandale",
    fullName: "Allandale, Austin, TX",
    type: "neighborhood",
    metaTitle: "Junk Removal Allandale Austin | The Haul Team",
    metaDescription: "Allandale, Austin junk removal, appliance pickup, and renovation hauls. Same-day family-owned service.",
    intro:
      "Allandale is mid-century Austin — ranch homes on bigger lots than the central neighborhoods, lots of carports getting converted to garages, and a steady remodel rhythm. We do appliance pickups, garage clean-outs, and pre-listing hauls here weekly.",
    neighborhoods: ["Allandale", "Crestview (south)", "Wooten", "Highland Park West"],
    landmarks: ["Northwest Park", "Anderson High School", "Burnet Road corridor", "Mangieri's Pizza Cafe", "Top Notch Hamburgers"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export const CITIES = LOCATIONS.filter((l) => l.type === "city");
export const NEIGHBORHOODS = LOCATIONS.filter((l) => l.type === "neighborhood");
