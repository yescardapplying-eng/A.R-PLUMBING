export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  overview: string;
  clientType: string;
  scopeOfWork: string[];
  materialsInstalled: string[];
  keyOutcomes: string[];
  faqs: { question: string; answer: string }[]; // EXACTLY 3 FAQS
  whatsappMessage: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "residential-apartment-omr",
    slug: "residential-apartment-omr",
    title: "Multi-Storey Residential Apartment Plumbing Network",
    category: "Building Plumbing",
    location: "OMR IT Corridor, Chennai",
    image: "/images/projects/project-apartment-omr.webp",
    overview: "Representative plumbing contractor project for a 12-storey residential apartment development along Old Mahabalipuram Road (OMR), Chennai. Scope involved end-to-end rough-in piping, shaft vertical risers, pressure-reducing stations, and terrace manifold distribution for 72 residential units.",
    clientType: "Residential Real Estate Builder / General Contractor",
    scopeOfWork: [
      "Concealed CPVC hot & cold water piping for 144 luxury bathrooms",
      "Twin vertical SWR soil and waste stacks with expansion ring couplings",
      "Terrace 4-tank balancing distribution header with isolation brass valves",
      "Hydrostatic pressure testing at 8 bar before wall plaster closure",
      "Ground floor boundary connection to municipal drainage line"
    ],
    materialsInstalled: [
      "Ashirvad / Astral SDR 11 CPVC pipes & brass transition fittings",
      "Prince / Supreme SWR PVC drainage pipes (Type B heavy duty)",
      "Zoloto / Leader industrial brass ball valves and non-return valves"
    ],
    keyOutcomes: [
      "Zero leakages detected across 144 bathroom rough-ins during 24-hr pressure tests",
      "Balanced water pressure of 2.8 bar across all floors via zoned PRVs",
      "Completed milestone handovers on schedule in coordination with site engineers"
    ],
    faqs: [
      {
        question: "How was uniform water pressure ensured across all 12 floors of this apartment complex?",
        answer: "The building was divided into vertical hydraulic zones. Upper floors operate on gravity head augmented by a rooftop booster pump, while lower floors incorporate calibrated Pressure Reducing Valves (PRVs) to prevent excessive pressure."
      },
      {
        question: "What inspection protocol was followed before wall plastering and bathroom tile work?",
        answer: "Each bathroom pipeline network was pressurized to 8 bar with a hydraulic test pump for 24 hours. Written sign-off was provided to site engineers before masonry and tile work commenced."
      },
      {
        question: "Can A.R Plumbing execute similar multi-storey apartment plumbing projects in Chennai?",
        answer: "Yes, our team is equipped with specialized pipe fusion tools, shaft scaffolding expertise, and experienced plumbing supervisors for apartment projects of 50 to 300+ units across Chennai."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I saw your Multi-Storey Residential Apartment project and would like to discuss a similar project in Chennai."
  },
  {
    id: "commercial-tech-park-perungudi",
    slug: "commercial-tech-park-perungudi",
    title: "Corporate Tech Park Washroom & Drainage Infrastructure",
    category: "Commercial Plumbing",
    location: "Perungudi, Chennai",
    image: "/images/projects/project-tech-park-perungudi.webp",
    overview: "Representative commercial plumbing execution for an IT office facility in Perungudi, Chennai. Implemented multi-cubicle executive washrooms, touchless sensor sanitaryware lines, cafeteria grease interceptors, and dual-plumbing lines for treated STP flushing water.",
    clientType: "Corporate Facility Management & Commercial Fit-Out Contractor",
    scopeOfWork: [
      "Multi-occupancy executive restroom sanitary and water distribution lines",
      "Sensor-operated urinal battery flush valves and automated touchless faucets",
      "Commercial cafeteria drainage line with multi-stage stainless steel grease trap",
      "Separate STP treated water loop for dual-flush toilet cisterns",
      "Emergency night-shift execution to match commercial tenant move-in date"
    ],
    materialsInstalled: [
      "Schedule 40/80 UPVC pressure pipes for main distribution loops",
      "Heavy duty cast iron / SWR soil drainage stacks with acoustic lagging",
      "Jaquar / Euronics commercial touchless sensor fittings"
    ],
    keyOutcomes: [
      "Water savings achieved via low-flow aerators and dual-flush STP recycling",
      "Zero business downtime by scheduling pipe cutovers during weekend shifts",
      "Hassle-free operation under heavy footfall of 1,200+ daily employees"
    ],
    faqs: [
      {
        question: "How was dual-water plumbing managed to prevent cross-contamination between drinking and STP water?",
        answer: "Distinct color-coded piping, separate pipe shafts, physical air gaps, and dedicated non-return backflow preventers were installed to guarantee zero cross-contamination."
      },
      {
        question: "What preventive maintenance setup was provided for commercial kitchen grease traps?",
        answer: "We installed accessible stainless steel grease interceptors with removable baffle plates and quick-release covers, enabling facility staff to perform weekly cleanouts in minutes."
      },
      {
        question: "Does A.R Plumbing provide ongoing commercial maintenance support after project handover?",
        answer: "Yes, we offer quarterly preventive maintenance contracts (AMC) and priority call-out support for commercial clients across Chennai."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to discuss commercial plumbing services for our office/facility in Chennai."
  },
  {
    id: "gated-villa-community-adyar",
    slug: "gated-villa-community-adyar",
    title: "Luxury Gated Villa Community Water Supply & Sewerage",
    category: "Residential Plumbing",
    location: "Adyar & Besant Nagar, Chennai",
    image: "/images/projects/project-villa-adyar.webp",
    overview: "Representative project execution for 18 luxury independent villas in South Chennai. Included individual underground sump suction lines, hydro-pneumatic booster pump systems, concealed thermostatic bath fittings, and external landscaped drainage.",
    clientType: "Luxury Villa Developer & Individual Villa Owners",
    scopeOfWork: [
      "Custom concealed bathroom plumbing for thermostatic shower systems and wall-hung EWCs",
      "Independent hydro-pneumatic booster pump setup for each villa delivering 3 bar pressure",
      "Solar water heater and central heat pump insulated hot water loop piping",
      "Interconnected rainwater percolation channels and perimeter stormwater drains",
      "Underground drainage chambers with odor-free deep seal gully traps"
    ],
    materialsInstalled: [
      "SDR 11 CPVC hot and cold pipes with thermal elastomeric lagging",
      "Grohe / Kohler concealed thermostatic valve bodies and trim sets",
      "High-density polyethylene (HDPE) corrugated drainage conduits for landscape runoff"
    ],
    keyOutcomes: [
      "Hotel-grade shower experience with constant hot water circulation",
      "Invisible underground drainage network with airtight chamber covers",
      "Zero rainwater waterlogging around villa perimeters during heavy rainfall"
    ],
    faqs: [
      {
        question: "How does the hot water circulation loop work in large duplex villas?",
        answer: "A return hot water line with a timer-controlled mini circulation pump ensures instant hot water at any tap in the villa within 2 seconds of turning the knob, preventing cold water wastage."
      },
      {
        question: "Can A.R Plumbing coordinate with interior designers for luxury bathroom sanitary ware?",
        answer: "Yes, our senior plumbers work directly with architects and interior designers to ensure wall cutouts, vanity depths, and faucet centerlines match design drawings to the millimeter."
      },
      {
        question: "How are villa rainwater harvesting lines integrated with groundwater recharge?",
        answer: "Terrace rainwater downspouts are routed through first-flush sediment filters directly into specialized gravel-bedded recharge pits, replenishing the local water table."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I am interested in plumbing services for a villa or independent house project in Chennai."
  },
  {
    id: "high-rise-tower-porur",
    slug: "high-rise-tower-porur",
    title: "16-Storey Residential High-Rise Vertical Shaft Plumbing",
    category: "High-Rise Plumbing",
    location: "Porur, Chennai",
    image: "/images/projects/project-highrise-porur.webp",
    overview: "Representative high-rise plumbing execution focusing on vertical riser stability, expansion loops, acoustic drainage stacks, and rooftop hydro-pneumatic pumping stations for a 16-storey residential tower in Porur, Chennai.",
    clientType: "Infrastructure & High-Rise General Contracting Group",
    scopeOfWork: [
      "Fabrication and installation of vertical UPVC Schedule 80 riser stacks",
      "Multi-stage Pressure Reducing Valve (PRV) stations every 4 floors",
      "Low-noise SWR soil and waste drainage stacks with acoustic lagging",
      "Structural floor bracket anchoring with anti-vibration rubber isolation",
      "Terrace storm drainage leaders capable of handling Chennai monsoon deluges"
    ],
    materialsInstalled: [
      "Heavy duty Schedule 80 UPVC pressure pipes and ASTM CPVC",
      "Acoustically insulated SWR soil pipes with elastomeric gasket seals",
      "Calibrated industrial pressure reducing valves with upstream strainers"
    ],
    keyOutcomes: [
      "Safe, regulated pressure of 3.0 bar delivered to lower-floor fixtures without water hammer",
      "Virtually silent wastewater drainage through vertical utility shafts",
      "Fully documented shaft hydraulic schematics provided at handover"
    ],
    faqs: [
      {
        question: "How are vertical pipes supported to prevent strain on lower joints in a 16-storey tower?",
        answer: "We install heavy-duty structural cantilever brackets anchored into RCC floor beams on every level, incorporating thermal expansion loops and vertical guides that accommodate building movement."
      },
      {
        question: "What measures are taken to eliminate water hammer noise in high-rise pipelines?",
        answer: "We install water hammer arrestors at the end of long pipe runs, use slow-closing solenoid and check valves, and design pipeline velocities below 1.5 meters per second."
      },
      {
        question: "What safety protocols did your plumbing crew follow on this high-rise site?",
        answer: "Plumbing technicians working inside shafts utilized full-body safety harnesses, lifelines, safety netting at shaft openings, and hard hats in accordance with Indian safety standards."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I visited your website and would like to enquire about High-Rise Building Plumbing in Chennai."
  },
  {
    id: "commercial-retail-t-nagar",
    slug: "commercial-retail-t-nagar",
    title: "Commercial Retail Showroom Sanitary & Washroom Fitout",
    category: "Commercial Plumbing",
    location: "T. Nagar, Chennai",
    image: "/images/projects/project-retail-tnagar.webp",
    overview: "Representative commercial plumbing project for a 4-level apparel retail showroom in T. Nagar, Chennai. Focused on high-durability customer restrooms, handicap-accessible toilets, staff pantry plumbing, and reliable water booster pumping.",
    clientType: "Commercial Retail Store Developer",
    scopeOfWork: [
      "Customer restroom suites with sensor-operated faucets and auto-flush urinals",
      "ADA-compliant accessible washroom with grab bars and custom height sanitaryware",
      "Staff cafeteria pantry sink and commercial water purifier connections",
      "Automatic rooftop booster pump set to maintain constant fixture pressure",
      "Fast-track 2-week execution schedule to meet commercial grand opening"
    ],
    materialsInstalled: [
      "Vitreous china sanitaryware from Hindware / Parryware Commercial Series",
      "Quarter-turn solid brass angle valves and stainless steel braided hoses",
      "Class 3 UPVC supply lines and anti-cockroach stainless steel drain traps"
    ],
    keyOutcomes: [
      "Zero plumbing downtime during peak weekend retail shopping crowds",
      "Rapid completion within 14 days without compromising quality testing",
      "Modern, hygienic touchless restroom environment for retail shoppers"
    ],
    faqs: [
      {
        question: "Can A.R Plumbing handle fast-track plumbing fitouts for commercial retail stores in Chennai?",
        answer: "Yes, we regularly deploy organized multi-shift plumbing crews to deliver fast-track commercial fit-outs on strict retail opening deadlines."
      },
      {
        question: "Do you install disabled-friendly / accessible bathroom fixtures in commercial spaces?",
        answer: "Yes, we install ADA-compliant accessible toilets with heavy-duty stainless steel grab rails, lever-operated faucets, and barrier-free floor drains."
      },
      {
        question: "How do you prevent blockages in high-traffic retail customer washrooms?",
        answer: "We install wide 110mm soil drain lines with swept radius long bends, deep floor traps with anti-clog strainers, and easily accessible cleanout inspection plugs."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to discuss commercial showroom / retail plumbing in Chennai."
  },
  {
    id: "residential-waterline-overhaul-annanagar",
    slug: "residential-waterline-overhaul-annanagar",
    title: "Residential House Complete Water Pipeline & Tank Overhaul",
    category: "Residential Plumbing",
    location: "Anna Nagar, Chennai",
    image: "/images/projects/project-house-annanagar.webp",
    overview: "Representative residential plumbing overhaul for a 25-year-old independent residence in Anna Nagar, Chennai. Replaced severely scaled metal GI pipes with modern CPVC pipes, upgraded overhead tank headers, and installed an automatic pressure booster pump.",
    clientType: "Homeowner",
    scopeOfWork: [
      "Complete decommissioning of rusted internal galvanized iron (GI) pipelines",
      "Laying new concealed SDR 11 CPVC lines across 3 bathrooms and kitchen",
      "Replacement of twin 1000L rooftop tanks with modern UPVC balancing header",
      "Installation of compact 0.5 HP automatic water pressure booster pump",
      "Installation of modern quarter-turn brass taps and shower heads"
    ],
    materialsInstalled: [
      "Astral CPVC Pro pipe network and lead-free brass fittings",
      "Triple-layer UV-stabilized overhead water tanks with brass float valves",
      "Crompton automatic pressure booster pump set"
    ],
    keyOutcomes: [
      "Shower water pressure increased by 250%, restoring full flowing water",
      "100% elimination of rusty reddish tap water and frequent pipeline clogs",
      "Work executed systematically with minimal disruption to the occupied household"
    ],
    faqs: [
      {
        question: "Was the family able to stay in the home while the entire pipeline was being replaced?",
        answer: "Yes, our plumbers worked room-by-room and ensured a temporary water bypass was active each evening, allowing the family to remain in the home throughout the work."
      },
      {
        question: "How long did it take to replace all the plumbing pipes in this Anna Nagar house?",
        answer: "The complete pipeline replacement across 3 bathrooms, kitchen, rooftop tanks, and pump connections was completed in 5 working days."
      },
      {
        question: "What is the expected lifespan of the new CPVC pipeline installed here?",
        answer: "Quality CPVC pipes installed with proper solvent weld techniques have a design life exceeding 50 years, completely immune to corrosion and Chennai water scale."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I need a complete pipeline replacement or plumbing overhaul for my house in Chennai."
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}
