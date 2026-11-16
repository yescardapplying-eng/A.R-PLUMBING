export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: "building" | "residential" | "commercial" | "sanitary";
  icon: string;
  heroImage: string;
  secondaryImage: string;
  fullDescription: string;
  workScope: string[];
  materialsUsed: string[];
  applications: string[];
  executionProcess: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[]; // EXACTLY 3 FAQS
  whatsappMessage: string;
  contactNumberType: "number1" | "number2"; // number1 = commercial/projects, number2 = residential
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "building-plumbing-works",
    slug: "building-plumbing-works",
    title: "Building Plumbing Works",
    shortDescription: "Complete end-to-end plumbing contracting for newly constructed residential and commercial buildings across Chennai.",
    category: "building",
    icon: "Building2",
    heroImage: "/images/services/building-plumbing-1.webp",
    secondaryImage: "/images/services/building-plumbing-2.webp",
    fullDescription: "A.R Plumbing provides turnkey plumbing contract execution for multi-storey residential complexes, commercial buildings, and villa developments in Chennai. From underground sump piping to vertical riser shafts and rooftop overhead tank networks, our experienced plumbers deliver leak-tested installations following Indian standard plumbing codes.",
    workScope: [
      "Rough-in concealed plumbing during civil brickwork and RCC staging",
      "Vertical water supply riser stacks and pressure loop systems",
      "Underground sump pump suction and delivery manifold piping",
      "Terrace overhead tank distribution headers with isolation ball valves",
      "Hydrostatic pressure testing at 7-10 bar before wall plastering"
    ],
    materialsUsed: [
      "SDR 11 CPVC pipes for hot & cold internal supply",
      "Class 3/4 UPVC pressure pipes for main distribution risers",
      "Heavy-duty brass ball valves and union couplings",
      "Rubber lined GI clamp pipe brackets for vertical shafts"
    ],
    applications: [
      "Multi-storey residential apartment blocks",
      "Commercial office buildings & IT spaces",
      "Gated community villa developments",
      "Mixed-use residential & retail properties"
    ],
    executionProcess: [
      { step: "01", title: "Drawing Review & Site Measurement", desc: "Detailed study of architectural plumbing layouts, shaft coordinates, and pipe sizing calculations." },
      { step: "02", title: "Concealed Rough-In & Chasing", desc: "Precise wall chasing, pipeline routing, and solid clamping to structural brick and concrete." },
      { step: "03", title: "Hydrostatic Pressure Testing", desc: "Rigorous hydraulic leak-testing under working pressure with calibrated gauges to ensure zero leaks." },
      { step: "04", title: "Shaft Routing & Handover", desc: "Vertical stack plumbing, terrace header connection, and formal milestone handover to site engineers." }
    ],
    faqs: [
      {
        question: "Does A.R Plumbing undertake building plumbing contracts on a turnkey labor and material basis in Chennai?",
        answer: "Yes, we undertake both labor-only contracts and turnkey material-inclusive contracts based on architectural specifications and developer preferences."
      },
      {
        question: "At what construction stage should the building plumbing team be mobilized?",
        answer: "We recommend engaging our plumbing team during the structural slab and brick masonry phase so that core cuts, sleeve placements, and wall chasing proceed in coordination with civil works."
      },
      {
        question: "How do you guarantee leak-free joints before wall plastering and tile laying?",
        answer: "We conduct hydrostatic pressure testing on all rough-in lines for a minimum of 24 hours using hydraulic pressure test pumps and calibrated pressure gauges before approving masonry closure."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I visited your website and would like to enquire about Building Plumbing Works for our project in Chennai. Please contact me to discuss.",
    contactNumberType: "number1"
  },
  {
    id: "residential-plumbing-services",
    slug: "residential-plumbing-services",
    title: "Residential Plumbing Services",
    shortDescription: "Dependable, neat plumbing solutions for individual houses, duplex villas, and residential apartments in Chennai.",
    category: "residential",
    icon: "House",
    heroImage: "/images/services/residential-plumbing-1.webp",
    secondaryImage: "/images/services/residential-plumbing-2.webp",
    fullDescription: "From solving low water pressure in upper floors to fixing stubborn pipe concealed leakages, A.R Plumbing provides skilled residential plumbing services across Chennai. Our technicians work cleanly, respect your home environment, and use high-grade fittings that deliver long-lasting peace of mind.",
    workScope: [
      "Apartment bathroom pipeline replacement and pressure rectification",
      "Overhead water tank pipeline cleaning, bypass line and valve replacements",
      "Kitchen sink waterline, drain trap, and water purifier connection setup",
      "Concealed pipeline leakage detection and localized tile-safe repair",
      "Bathroom fixture upgrades including diverters, taps, and geyser inlets"
    ],
    materialsUsed: [
      "Certified CPVC pipes & solvent cements (Ashirvad / Astral standard)",
      "Brass threaded transition elbows and brass long nipples",
      "Flexible SS 304 braided connection hoses for geysers and health faucets",
      "Teflon sealing tapes and silicone sanitary sealant"
    ],
    applications: [
      "Individual bungalows & independent houses",
      "Residential apartment flats",
      "Duplex villas and gated residential layouts",
      "Rental property plumbing renovations"
    ],
    executionProcess: [
      { step: "01", title: "Diagnostic Site Visit", desc: "Physical inspection of your plumbing issue, water pressure, and pipe layout condition." },
      { step: "02", title: "Clear Scope & Estimate", desc: "Transparent explanation of the required rectification with estimated material and labor costs." },
      { step: "03", title: "Neat & Clean Execution", desc: "Carrying out plumbing repairs with minimal disruption to tiles and surrounding home areas." },
      { step: "04", title: "Pressure Check & Verification", desc: "Final flow testing and joint inspection in front of the homeowner before sign-off." }
    ],
    faqs: [
      {
        question: "How quickly can your residential plumbers attend to an urgent plumbing issue in Chennai?",
        answer: "For residential plumbing calls, we coordinate same-day or next-morning site visits depending on your area in Chennai and technician availability."
      },
      {
        question: "Can you replace old rusted GI metal pipes in an older Chennai apartment with modern CPVC pipes?",
        answer: "Yes, we specialize in replacing corroded, choked GI pipelines with durable, food-grade CPVC pipes, significantly improving water flow and water quality."
      },
      {
        question: "Do you supply the required plumbing materials or can the homeowner provide them?",
        answer: "Both options are flexible. We can source genuine branded materials at competitive rates, or homeowners are welcome to supply their preferred brand fittings."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I need residential plumbing services for my home in Chennai. I would like to discuss the service and appointment availability.",
    contactNumberType: "number2"
  },
  {
    id: "commercial-plumbing-services",
    slug: "commercial-plumbing-services",
    title: "Commercial Plumbing Services",
    shortDescription: "Robust, heavy-duty plumbing installations and maintenance for offices, IT parks, retail showrooms, and restaurants.",
    category: "commercial",
    icon: "Briefcase",
    heroImage: "/images/services/commercial-plumbing-1.webp",
    secondaryImage: "/images/services/commercial-plumbing-2.webp",
    fullDescription: "Commercial properties demand high-reliability plumbing engineered for continuous daily usage. A.R Plumbing handles complete water distribution, sensor urinal batteries, commercial kitchen grease traps, and multi-cubicle restroom installations for commercial establishments throughout Chennai.",
    workScope: [
      "Multi-occupancy commercial washroom plumbing and drainage layout",
      "Sensor-operated auto flush valves and touchless faucet waterline installation",
      "Commercial kitchen water supply and high-temperature grease trap drain lines",
      "Fire safety line coordination and auxiliary utility water piping",
      "Preventive scheduled plumbing maintenance contracts for corporate premises"
    ],
    materialsUsed: [
      "Heavy gauge Schedule 40/80 UPVC and CPVC industrial pipes",
      "Cast iron / SWR heavy drainage stacks with cleanout plugs",
      "Industrial grade brass and bronze gate/check valves",
      "Commercial grade chrome-plated brass sensor fittings"
    ],
    applications: [
      "Corporate IT offices and business parks",
      "Commercial retail showrooms and shopping complexes",
      "Restaurants, food courts, and cloud commercial kitchens",
      "Clinics, diagnostic centers, and educational institutes"
    ],
    executionProcess: [
      { step: "01", title: "Commercial Requirement Analysis", desc: "Evaluating peak water demand, fixture count, and regulatory drainage guidelines." },
      { step: "02", title: "Project Schedule & Shift Planning", desc: "Scheduling work during off-hours or coordinated site shifts to prevent business downtime." },
      { step: "03", title: "Heavy-Duty Pipeline Execution", desc: "Rigid installation of high-capacity risers, drainage slopes, and manifold valves." },
      { step: "04", title: "Flow Balancing & Handover", desc: "Balancing line pressure across all floors and providing maintenance documentation." }
    ],
    faqs: [
      {
        question: "Can A.R Plumbing work during night hours or weekends for commercial office fit-outs in Chennai?",
        answer: "Yes, we regularly execute commercial plumbing projects during non-business hours, weekends, or designated building fit-out shifts to comply with IT park management protocols."
      },
      {
        question: "Do you install sensor taps and commercial auto-flush systems for office restrooms?",
        answer: "Yes, our team is proficient with electrical and battery-operated sensor taps, concealed urinal flush valves, and multi-user commercial sanitary systems."
      },
      {
        question: "Can you provide GST invoices and formal contracting agreements for corporate clients?",
        answer: "Yes, we provide official GST-compliant tax invoicing, project work orders, and formal contractor documentation for corporate and commercial entities."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I am interested in discussing commercial plumbing services for our facility in Chennai. Please contact me regarding requirements.",
    contactNumberType: "number1"
  },
  {
    id: "high-rise-building-plumbing",
    slug: "high-rise-building-plumbing",
    title: "High-Rise Building Plumbing Works",
    shortDescription: "Specialized pressure-balanced vertical plumbing, PRV zones, and heavy drainage stacks for multi-storey towers.",
    category: "building",
    icon: "Layers",
    heroImage: "/images/services/high-rise-plumbing-1.webp",
    secondaryImage: "/images/services/high-rise-plumbing-2.webp",
    fullDescription: "High-rise towers present unique hydraulic challenges such as extreme hydrostatic pressure at lower levels, thermal expansion in vertical risers, and drainage siphonage. A.R Plumbing implements pressure-reducing valve (PRV) stations, expansion loops, and anti-siphonage air admittance stacks for multi-storey buildings in Chennai.",
    workScope: [
      "Zoned vertical water supply distribution with Pressure Reducing Valves (PRVs)",
      "High-velocity vertical soil and waste stacks with acoustic insulation",
      "Expansion loop fabrication and heavy-duty riser shaft bracket anchoring",
      "Hydro-pneumatic booster pump manifold installation and testing",
      "Rainwater vertical harvesting leaders and terrace storm drain lines"
    ],
    materialsUsed: [
      "High-pressure Schedule 80 UPVC and ASTM F441 CPVC piping",
      "Type B SWR PVC pipes with elastomeric rubber ring seal joints",
      "Calibrated industrial pressure reducing valves and pressure gauges",
      "Epoxy coated steel cantilever clamps and vibration isolators"
    ],
    applications: [
      "10+ floor residential apartment towers",
      "Commercial IT skyscraper buildings",
      "Hospitality hotel towers and hospital multi-tier wings",
      "Mixed-use high-rise developments across Chennai OMR & Porur"
    ],
    executionProcess: [
      { step: "01", title: "Hydraulic Zone Calculation", desc: "Zoning vertical risers into low, mid, and high pressure bands to protect sanitary fixtures." },
      { step: "02", title: "Shaft Structural Bracketing", desc: "Installing heavy-duty anchor supports every floor with thermal expansion allowance." },
      { step: "03", title: "Stack Jointing & Ring Sealing", desc: "Precision assembly of ring-fit SWR drainage and solvent-welded pressure lines." },
      { step: "04", title: "Commissioning & Pressure Balancing", desc: "Floor-by-floor dynamic pressure calibration to deliver uniform flow from penthouse to ground floor." }
    ],
    faqs: [
      {
        question: "How do you manage high water pressure on the lower floors of a 15-storey building?",
        answer: "We divide the building into vertical hydraulic zones and install calibrated Pressure Reducing Valves (PRVs) so that lower floors receive a safe, comfortable 2.5 to 3.0 bar pressure."
      },
      {
        question: "How do you prevent gurgling sounds and odor backup in tall building drainage shafts?",
        answer: "We install dedicated parallel vent stacks (two-pipe system) or engineered aerator fittings that balance atmospheric air pressure and prevent trap seal siphonage."
      },
      {
        question: "Can your team work with high-rise construction safety standards in Chennai?",
        answer: "Yes, our plumbers are trained in site PPE, shaft safety harnesses, tool tethering, and work-at-height safety protocols mandated on major construction sites."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I visited your website and would like to discuss High-Rise Building Plumbing Works in Chennai. Please contact me.",
    contactNumberType: "number1"
  },
  {
    id: "water-supply-pipeline",
    slug: "water-supply-pipeline",
    title: "Water Supply Pipeline Installation",
    shortDescription: "Certified CPVC and UPVC drinking water and domestic supply pipeline networks engineered for optimal flow.",
    category: "building",
    icon: "Droplets",
    heroImage: "/images/services/water-supply-1.webp",
    secondaryImage: "/images/services/water-supply-2.webp",
    fullDescription: "A reliable water supply network requires correct pipe sizing, minimal friction losses, and leak-proof jointing. A.R Plumbing specializes in installing underground municipal incoming lines, overhead tank supply networks, and internal hot and cold potable water piping throughout Chennai properties.",
    workScope: [
      "Underground metro water / municipal inlet pipeline installation",
      "Borewell and submersible pump discharge line connection to overhead tank",
      "Dual piping systems for domestic water and treated STP flush water",
      "Terrace water distribution manifold headers with dedicated cut-off valves",
      "Solar water heater and central heat pump hot water circulation loops"
    ],
    materialsUsed: [
      "Lead-free CPVC (Chlorinated Polyvinyl Chloride) conforming to IS 15778",
      "Lead-free UPVC pressure pipes conforming to ASTM D1785",
      "Brass threaded fittings (elbows, tees, female thread adaptors)",
      "UV-resistant outdoor insulated pipe coatings for terrace sun exposure"
    ],
    applications: [
      "Newly constructed residential houses and villas",
      "Apartment complex terrace distribution overhauls",
      "Hospital water networks and laboratory pure water piping",
      "Hotels and commercial catering water supply infrastructure"
    ],
    executionProcess: [
      { step: "01", title: "Flow Rate & Diameter Planning", desc: "Calculating required flow velocities and sizing supply headers to eliminate pressure drops." },
      { step: "02", title: "Solvent Cement Fusion Jointing", desc: "Chamfering pipe edges, applying certified primer, and heavy-duty solvent cementing." },
      { step: "03", title: "Clamping & Gradient Alignment", desc: "Securing runs at proper intervals to prevent pipe sagging and air locks in the system." },
      { step: "04", title: "Flushing & Flow Commissioning", desc: "Thorough system flushing to remove debris followed by pressure verification." }
    ],
    faqs: [
      {
        question: "What is the difference between CPVC and UPVC pipes for Chennai water lines?",
        answer: "CPVC withstands high temperatures up to 93°C, making it ideal for hot and cold internal domestic water. UPVC is rigid and cost-effective for cold water main distribution and borewell lines."
      },
      {
        question: "How do you protect exposed terrace water supply pipes from Chennai's harsh sun heat?",
        answer: "We use UV-stabilized pipes, recommend protective external painting, or apply specialized elastomeric thermal insulation that keeps water cooler during peak summer months."
      },
      {
        question: "Why do some bathrooms experience sudden pressure drops when someone opens a tap elsewhere?",
        answer: "This is caused by undersized supply headers or series branching. We install looped distribution manifolds with correctly sized pipe diameters to ensure constant multi-point water pressure."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to enquire about Water Supply Pipeline Installation in Chennai. Please contact me.",
    contactNumberType: "number1"
  },
  {
    id: "drainage-sewerage-systems",
    slug: "drainage-sewerage-systems",
    title: "Drainage & Sewerage Systems",
    shortDescription: "Odor-free, self-cleansing SWR drainage, chamber building, and municipal sewer connectivity across Chennai.",
    category: "building",
    icon: "Waves",
    heroImage: "/images/services/drainage-sewerage-1.webp",
    secondaryImage: "/images/services/drainage-sewerage-2.webp",
    fullDescription: "A well-engineered drainage system is invisible and odorless. A.R Plumbing installs gravity-fed soil, waste, and rainwater (SWR) systems, inspection chambers, grease interceptors, and sewer line interconnections that keep Chennai residences and commercial properties clean and hygienic.",
    workScope: [
      "Soil and waste SWR vertical stack installation with access cleanout doors",
      "P-trap and multi-floor trap installation with deep water seals to prevent sewer odor",
      "External brick masonry and precast RCC sewer inspection chambers (manholes)",
      "Connection from building boundary chamber to Chennai CMWSSB municipal sewer mains",
      "Stormwater drainage channels and rainwater recharge pit connectivity"
    ],
    materialsUsed: [
      "SWR PVC pipes (Type A for rainwater, Type B for soil & waste) IS 13592",
      "Elastomeric rubber ring joints for leak-proof expansion flexibility",
      "Heavy cast iron chamber covers and FRP lightweight covers",
      "UPVC nahani traps and multi-inlet floor traps with SS anti-cockroach jalis"
    ],
    applications: [
      "Residential houses and gated layouts",
      "Apartment community central drainage shafts",
      "Commercial kitchens, bakeries, and restaurant grease lines",
      "Industrial storm water and greywater routing"
    ],
    executionProcess: [
      { step: "01", title: "Invert Level & Gradient Survey", desc: "Setting precise 1:40 to 1:60 gravity slopes with spirit levels to guarantee self-cleansing velocity." },
      { step: "02", title: "Trenching & Chamber Construction", desc: "Excavation, brickwork, cement plastering, and smooth benching inside inspection manholes." },
      { step: "03", title: "Stack Assembly & Venting", desc: "Connecting vertical soil lines with vent cowls terminating above terrace parapet level." },
      { step: "04", title: "Smoke / Water Gravity Test", desc: "Water flow and air tightness checks to ensure rapid discharge and zero underground seepage." }
    ],
    faqs: [
      {
        question: "How do you permanently eliminate foul sewer smells coming from bathroom floor traps?",
        answer: "We replace shallow or dry traps with deep-seal (50mm minimum water seal) anti-foul traps and ensure proper rooftop vent stack ventilation to prevent siphonage."
      },
      {
        question: "Can A.R Plumbing connect our private building drainage to Chennai Metro Water (CMWSSB) street sewer lines?",
        answer: "Yes, we construct the terminal boundary inspection chamber and lay the connecting slope line up to the authorized municipal road sewer manhole."
      },
      {
        question: "What is the advantage of rubber ring joint SWR pipes over solvent cemented drainage pipes?",
        answer: "Ring-fit SWR joints allow for natural thermal expansion and building settlement without cracking, ensuring long-term leak-free drainage in multi-storey buildings."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I need Drainage & Sewerage System work in Chennai. Please contact me regarding site inspection.",
    contactNumberType: "number1"
  },
  {
    id: "bathroom-plumbing-works",
    slug: "bathroom-plumbing-works",
    title: "Bathroom Plumbing Works",
    shortDescription: "Complete modern bathroom plumbing renovation, diverter installation, and concealed pipeline modernization.",
    category: "residential",
    icon: "Bath",
    heroImage: "/images/services/bathroom-plumbing-1.webp",
    secondaryImage: "/images/services/bathroom-plumbing-2.webp",
    fullDescription: "From luxury multi-function diverters to complete bathroom plumbing overhauls, A.R Plumbing delivers precision plumbing alignment. We ensure hot and cold water mixer lines are perfectly centered, drain slopes prevent water pooling, and tile cutouts match fixture escutcheon plates seamlessly.",
    workScope: [
      "Concealed hot and cold water plumbing for single-lever diverters and thermostatic mixers",
      "Overhead rain shower arm and hand shower wall outlet piping",
      "Wall-hung toilet concealed cistern (flush tank) framing and inlet/outlet connections",
      "Shower partition linear channel drain and floor trap installation",
      "Health faucet, geyser inlet/outlet, and vanity counter basin plumbing"
    ],
    materialsUsed: [
      "SDR 11 CPVC pipes and solid brass concealed diverter bodies (Jaquar, Kohler, Grohe)",
      "High-density polyethylene (HDPE) or PVC concealed cistern framing units",
      "Grade 304 stainless steel linear shower drains with removable hair catchers",
      "Thread lock compound and heavy brass hex extensions"
    ],
    applications: [
      "New luxury villa and apartment bathrooms",
      "Older bathroom renovation and remodel projects",
      "Hotel guest room bathrooms and executive suites",
      "Master bedroom en-suite plumbing upgrades"
    ],
    executionProcess: [
      { step: "01", title: "Tile Layout & Fixture Marking", desc: "Collaborating with tile masons to establish exact finished floor levels (FFL) and centerlines." },
      { step: "02", title: "Concealed Chasing & Rough-In", desc: "Embedding pipes firmly into walls with proper protective covers on diverter cartridges." },
      { step: "03", title: "Pressure Testing Before Tiling", desc: "Keeping pipelines pressurized during masonry work so any accidental puncture is instantly spotted." },
      { step: "04", title: "Trim Kit & Final Fixture Fitting", desc: "Installing chrome trim plates, handles, shower heads, and testing optimal spray flow." }
    ],
    faqs: [
      {
        question: "Can you install concealed diverters from premium brands like Jaquar, Kohler, and Grohe?",
        answer: "Yes, our plumbers are trained in installing concealed diverter bodies, thermostatic controllers, and multi-outlet shower valves from all leading Indian and international brands."
      },
      {
        question: "How do you coordinate bathroom plumbing with tile contractors in Chennai?",
        answer: "We mark exact Finished Floor Levels (FFL) and tile thickness lines beforehand, ensuring faucet spouts and flush plates sit completely flush with the finished tile surface."
      },
      {
        question: "Can an old bathroom with external metal pipes be converted into concealed modern plumbing?",
        answer: "Yes, we regularly convert exposed legacy piping into sleek concealed wall piping during bathroom renovations, giving older Chennai homes a contemporary look."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to enquire about Bathroom Plumbing Works in Chennai. Please contact me.",
    contactNumberType: "number2"
  },
  {
    id: "sanitary-ware-installation",
    slug: "sanitary-ware-installation",
    title: "Sanitary Ware Installation",
    shortDescription: "Precision installation of premium ceramic sanitary ware, wall-hung WCs, and vanity consoles.",
    category: "sanitary",
    icon: "Sparkles",
    heroImage: "/images/services/sanitary-ware-1.webp",
    secondaryImage: "/images/services/sanitary-ware-2.webp",
    fullDescription: "Ceramic sanitary ware requires delicate handling, rigid bracket mounting, and leak-proof gasket seals. A.R Plumbing installs all categories of sanitary ware—from wall-hung commodes with concealed frames to designer pedestal basins—ensuring zero wobble, airtight seals, and flawless flushing performance.",
    workScope: [
      "Wall-hung WC mounting on heavy structural chair brackets with vibration pads",
      "Floor-mounted single-piece and coupled European water closets (EWC)",
      "Concealed pneumatic and mechanical dual-flush push plate assembly",
      "Pedestal, semi-recessed, and under-counter wash basin fitting",
      "Urinal partitions and flush spreader installation for commercial spaces"
    ],
    materialsUsed: [
      "Vitreous china ceramic fixtures (Parryware, Hindware, Jaquar, Cera)",
      "High-grade wax gasket rings and rubber pan connectors",
      "High-tensile zinc plated anchor bolts and nylon spacer washers",
      "Anti-fungal sanitary grade RTV silicone sealants"
    ],
    applications: [
      "Residential apartments and villas",
      "Commercial restrooms and executive washrooms",
      "Hospital patient rooms and accessibility toilets",
      "Restaurants, gyms, and retail restrooms"
    ],
    executionProcess: [
      { step: "01", title: "Surface & Center Inspection", desc: "Checking wall plumbness, floor level, and waste outlet alignment before unpacking ceramics." },
      { step: "02", title: "Bracket Anchoring & Leveling", desc: "Securing mounting bolts with spirit-level precision to ensure zero rocking motion." },
      { step: "03", title: "Airtight Waste & Inlet Jointing", desc: "Sealing the waste spud with wax rings or rubber connectors to prevent foul odors." },
      { step: "04", title: "Flushing & Silicone Beading", desc: "Full volume flush test followed by clean, mold-resistant silicone perimeter beading." }
    ],
    faqs: [
      {
        question: "Can you install wall-hung commodes on lightweight partition or hollow brick walls?",
        answer: "Yes, we install heavy-duty floor-anchored steel chair brackets (support frames) that transfer all user weight directly to the structural RCC floor slab."
      },
      {
        question: "Why does my toilet commode have water leaking around its base on the floor?",
        answer: "This is usually caused by a deteriorated wax ring or misaligned pan connector seal. We reseat the toilet, install a fresh seal, and secure the mounting bolts."
      },
      {
        question: "Do you supply the sanitary ware ceramics or only provide installation services?",
        answer: "We primarily provide expert installation services. You can purchase your preferred brand ceramics, or we can assist in procuring them from authorized Chennai dealers."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I visited your website and would like to enquire about Sanitary Ware Installation in Chennai.",
    contactNumberType: "number2"
  },
  {
    id: "toilet-installation",
    slug: "toilet-installation",
    title: "Toilet & Indian Toilet Seat Installation",
    shortDescription: "Expert installation of Western EWCs, Indian Orissa Pan squatting seats, and dual-flush mechanisms.",
    category: "sanitary",
    icon: "CheckCircle",
    heroImage: "/images/services/toilet-installation-1.webp",
    secondaryImage: "/images/services/toilet-installation-2.webp",
    fullDescription: "Proper toilet installation is essential for hygiene and odor prevention. A.R Plumbing specializes in installing both contemporary Western commodes and traditional Indian squatting toilet pans (Orissa Pan / Asian Pan) with sunken slab waterproofing coordination and deep P-trap drainage across Chennai.",
    workScope: [
      "Indian Orissa Pan / squat toilet seat setting in sunken slabs with sand filling",
      "Deep P-trap and S-trap connection with airtight cement mortar seals",
      "Western European Water Closet (EWC) one-piece and two-piece installation",
      "Dual-flush cistern valve replacement and water level float calibration",
      "Slow-close toilet seat cover and high-pressure jet spray attachment"
    ],
    materialsUsed: [
      "Stain-resistant glazed vitreous china toilet pans and commodes",
      "Heavy cast iron or PVC P-traps with minimum 50mm liquid seal",
      "Corrosion-resistant brass inlet ball valves and braided connection tubes",
      "Waterproof cementitious admixtures for sunken slab pan bedding"
    ],
    applications: [
      "Apartments requiring both Western and Indian style bathrooms",
      "Individual houses and worker quarters",
      "Commercial common washrooms and public utility restrooms",
      "Replacement of damaged or stained toilet pans"
    ],
    executionProcess: [
      { step: "01", title: "Drain Center & Trap Positioning", desc: "Verifying the trap outlet distance (100mm to 300mm rough-in) from the rear wall." },
      { step: "02", title: "Base Bedding & Leveling", desc: "Setting the pan on a solid sand-cement cushion to prevent hollow cracking under foot pressure." },
      { step: "03", title: "Flushing Rim Connection", desc: "Connecting the flush water inlet to ensure uniform water sweep around the entire pan rim." },
      { step: "04", title: "Discharge & Seal Verification", desc: "Testing water swirl, full evacuation, and complete trap seal retention." }
    ],
    faqs: [
      {
        question: "Can an old Indian squatting pan be converted into a modern Western toilet commode in Chennai?",
        answer: "Yes, we handle Indian pan to Western commode conversions, modifying the sunken slab drainage outlet and rebuilding the floor tile section cleanly."
      },
      {
        question: "How do you prevent cracked tiles or hollow sounds under an Indian squat toilet seat?",
        answer: "We bed the entire perimeter of the ceramic pan in a dense, void-free sand-cement mortar mix, ensuring solid structural support across all footrest areas."
      },
      {
        question: "What should I do if my flush tank is constantly running water into the toilet bowl?",
        answer: "This is usually caused by a worn-out flapper valve or faulty inlet float mechanism. Our technicians replace the internal siphon kit with durable, water-saving components."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to enquire about Toilet and Indian Toilet Seat Installation in Chennai. Please contact me.",
    contactNumberType: "number2"
  },
  {
    id: "wash-basin-installation",
    slug: "wash-basin-installation",
    title: "Wash Basin Installation",
    shortDescription: "Installation of wall-hung basins, full pedestal basins, and luxury countertop dining sinks.",
    category: "sanitary",
    icon: "ShieldCheck",
    heroImage: "/images/services/wash-basin-1.webp",
    secondaryImage: "/images/services/wash-basin-2.webp",
    fullDescription: "A well-installed wash basin combines sturdy mounting with leak-proof drainage. A.R Plumbing installs dining area hand-wash sinks, bathroom vanity countertop basins, and space-saving corner basins in Chennai homes and restaurants with concealed bottle traps and smooth faucet operation.",
    workScope: [
      "Wall-mounted ceramic basin installation with heavy lag bolt fixings",
      "Full pedestal and semi-pedestal wash basin leveling and waste concealment",
      "Tabletop / counter-mount vanity basin cutout sealing and faucet alignment",
      "Brass and chrome-plated bottle trap installation with wall rosette covers",
      "Pop-up drain waste coupling and braided inlet angle cock connections"
    ],
    materialsUsed: [
      "Designer vitreous china ceramic and quartz stone basins",
      "Solid brass chrome-plated bottle traps and waste couplings",
      "Heavy duty quarter-turn angle stop cocks with ceramic cartridges",
      "Clear mildew-resistant silicone sealant for countertop perimeter"
    ],
    applications: [
      "Dining room hand wash counters",
      "Master and guest bathroom vanity counters",
      "Commercial restaurant and banquet dining wash areas",
      "Office restroom wash stations"
    ],
    executionProcess: [
      { step: "01", title: "Ergonomic Height Marking", desc: "Setting basin rim at the standard comfortable height (800mm to 850mm above finished floor)." },
      { step: "02", title: "Wall Anchoring & Leveling", desc: "Drilling with ceramic tile bits to prevent cracking and anchoring heavy steel bolts." },
      { step: "03", title: "Tap & Waste Coupling Assembly", desc: "Fitting the pillar tap, pop-up waste, and bottle trap with watertight rubber washers." },
      { step: "04", title: "Flow Test & Perimeter Sealing", desc: "Full volume drain testing followed by clean silicone beading along the rear edge." }
    ],
    faqs: [
      {
        question: "What is the recommended standard height for installing a wash basin in an Indian home?",
        answer: "The standard ergonomic height from finished floor to the top rim of the basin is 800mm to 850mm (32 to 34 inches), accommodating comfortable daily use."
      },
      {
        question: "Why does water drain very slowly or bubble up in my wash basin?",
        answer: "Slow drainage is commonly caused by hair buildup in the bottle trap or an unvented drain arm. We clear the trap and adjust the waste arm slope for rapid swirl drainage."
      },
      {
        question: "Can you install luxury marble countertop wash basins with tall boy pillar taps?",
        answer: "Yes, we install under-counter, semi-recessed, and tabletop vanity basins with matching tall pillar taps, ensuring watertight countertop seals."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to enquire about Wash Basin Installation in Chennai. Please contact me.",
    contactNumberType: "number2"
  },
  {
    id: "kitchen-plumbing",
    slug: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    shortDescription: "Under-sink drainage, RO water purifier inlets, sink mixer taps, and dishwasher line connections.",
    category: "residential",
    icon: "Utensils",
    heroImage: "/images/services/kitchen-plumbing-1.webp",
    secondaryImage: "/images/services/kitchen-plumbing-2.webp",
    fullDescription: "Kitchen plumbing must handle greasy wash water, high temperatures, and multiple appliance hookups. A.R Plumbing installs stainless steel and granite composite kitchen sinks, twin-handle sink mixers, reverse osmosis (RO) purifier taps, and dishwasher water and drain lines across Chennai kitchens.",
    workScope: [
      "Single and double bowl stainless steel / granite sink waste fitting",
      "Deck-mounted 360° swivel spout sink mixer and pull-out spray tap plumbing",
      "RO water purifier dedicated inlet angle cock and waste reject line routing",
      "Automatic dishwasher water supply inlet and high-loop drain connection",
      "Under-sink anti-clog drain piping with grease-resistant PVC traps"
    ],
    materialsUsed: [
      "Grade 304 stainless steel sink waste couplings with removable food baskets",
      "Heavy brass kitchen sink bib cocks and swivel mixer taps",
      "Reinforced heat-resistant PVC flexible drain hoses",
      "Food-grade quick-connect fittings for RO water filtration lines"
    ],
    applications: [
      "Modular kitchen renovations in Chennai apartments",
      "New independent home kitchen setups",
      "Commercial cloud kitchens and restaurant wash areas",
      "Utility room washing machine and sink combinations"
    ],
    executionProcess: [
      { step: "01", title: "Countertop Cutout Alignment", desc: "Checking sink drop-in position, backsplash clearance, and faucet swing radius." },
      { step: "02", title: "Under-Sink Piping Organization", desc: "Neatly grouping hot, cold, RO, and appliance valves to maximize cabinet storage space." },
      { step: "03", title: "Waste & Trap Assembly", desc: "Installing large-bore sink waste couplings with airtight odor traps leading to drain lines." },
      { step: "04", title: "Full Load Leakage Inspection", desc: "Filling sink bowls to capacity and releasing simultaneously to verify drain handling under heavy flow." }
    ],
    faqs: [
      {
        question: "Can you add a dedicated connection for a new dishwasher in an existing modular kitchen?",
        answer: "Yes, we can tap into your existing under-sink cold water line with a dual angle valve and route the dishwasher discharge hose safely into the sink drain trap."
      },
      {
        question: "How do you prevent food waste and grease from choking kitchen drain pipes in Chennai?",
        answer: "We install wide-bore drain lines with smooth bends, deep basket waste couplings, and recommend cleanable bottle traps designed for easy maintenance."
      },
      {
        question: "Do you install hot and cold sink mixer taps for washing greasy utensils?",
        answer: "Yes, we install both wall-mounted and table-mounted kitchen sink mixers connected to your kitchen instant geyser or solar hot water line."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to enquire about Kitchen Plumbing services in Chennai. Please contact me.",
    contactNumberType: "number2"
  },
  {
    id: "pipe-installation-replacement",
    slug: "pipe-installation-replacement",
    title: "Pipe Installation & Replacement",
    shortDescription: "Complete replacement of old corroded GI pipes with modern CPVC/UPVC lines without unnecessary tile damage.",
    category: "building",
    icon: "Wrench",
    heroImage: "/images/services/pipe-replacement-1.webp",
    secondaryImage: "/images/services/pipe-replacement-2.webp",
    fullDescription: "Many older buildings in Chennai suffer from low water pressure and rusty brown water due to internal mineral scaling and rust in old GI (galvanized iron) pipes. A.R Plumbing replaces aging pipe networks with modern, lead-free CPVC and UPVC pipes, restoring crystal-clear water flow throughout your property.",
    workScope: [
      "Bypassing and replacing old rusted GI pipes with NSF-certified CPVC pipes",
      "Rooftop external distribution header replacement with UV-resistant UPVC",
      "Trenching and laying new underground water supply from road to sump",
      "Concealed pipe rerouting with localized tile cutting and neat finishing",
      "Full pressure testing and removal of obsolete plumbing lines"
    ],
    materialsUsed: [
      "SDR 11 & SDR 13.5 CPVC pipes from trusted brands (Ashirvad / Astral)",
      "High-pressure UPVC Schedule 40/80 pipe and heavy brass fittings",
      "GI pipe cutter tools, heavy threading dyes, and union connectors",
      "Anti-vibration wall saddles and galvanized pipe clamps"
    ],
    applications: [
      "Older apartments in Chennai experiencing rusty water or low pressure",
      "Independent houses with deteriorating underground supply lines",
      "Commercial properties upgrading plumbing infrastructure",
      "Residential societies replacing entire vertical shaft risers"
    ],
    executionProcess: [
      { step: "01", title: "Pipeline Route Mapping", desc: "Identifying the path of old pipes, isolation valves, and planning the shortest new route." },
      { step: "02", title: "External or Chased Laying", desc: "Laying new durable lines either neatly along external duct shafts or through minimal wall cuts." },
      { step: "03", title: "Branch-by-Branch Cutover", desc: "Connecting bathrooms and kitchen one by one to ensure you are never without running water." },
      { step: "04", title: "Pressure Check & Clean Up", desc: "Testing all new connections at full supply pressure and clearing away old debris." }
    ],
    faqs: [
      {
        question: "Can we replace apartment bathroom pipes without completely demolishing all the tiles?",
        answer: "Yes, where full retiling is not planned, we can either route slim external lines through bathroom ducts or perform surgical single-tile cutouts to replace damaged pipe sections."
      },
      {
        question: "How long does a modern CPVC water supply pipeline last compared to old GI pipes?",
        answer: "Quality CPVC pipes have an expected operational lifespan of 50+ years because they never rust, scale, or corrode under Chennai's hard water conditions."
      },
      {
        question: "Will replacing our old supply pipes improve our shower and tap water pressure?",
        answer: "Significantly. Old metal pipes often lose up to 70% of their internal diameter due to mineral scaling; new smooth-bore CPVC pipes restore full design flow rate."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I visited your website and would like to enquire about Pipe Installation & Replacement in Chennai.",
    contactNumberType: "number2"
  },
  {
    id: "plumbing-leakage-repair",
    slug: "plumbing-leakage-repair",
    title: "Plumbing Leakage Repair",
    shortDescription: "Pinpoint detection and permanent repair of concealed wall dampness, slab seepages, and leaking pipe joints.",
    category: "residential",
    icon: "AlertCircle",
    heroImage: "/images/services/leakage-repair-1.webp",
    secondaryImage: "/images/services/leakage-repair-2.webp",
    fullDescription: "Undetected plumbing leaks can cause structural dampness, peeling paint, high water bills, and mold growth. A.R Plumbing uses methodical isolation testing to identify the exact origin of concealed water leaks in Chennai homes and buildings, repairing joints permanently with minimal structural disturbance.",
    workScope: [
      "Acoustic and pressure drop isolation testing for concealed wall pipelines",
      "Ceiling seepage and bathroom sunken slab drainage leak identification",
      "Replacing cracked elbows, sheared nipples, and dried solvent joints",
      "Overhead water tank ball valve overflow and outlet leak rectification",
      "Underground sump inlet and suction pipeline leakage repair"
    ],
    materialsUsed: [
      "Precision pressure testing gauges and isolation test plugs",
      "Heavy brass repair unions, transition couplings, and repair slip sockets",
      "Fast-setting high-strength PVC / CPVC solvent cements",
      "Waterproofing sealants and rapid-hardening repair mortars"
    ],
    applications: [
      "Apartments experiencing damp patches on bedroom or living room walls",
      "Ceiling water dripping onto lower floor apartments",
      "Commercial washrooms with continuous water loss",
      "Underground pipelines causing unexplained water meter spinning"
    ],
    executionProcess: [
      { step: "01", title: "Pressure Drop Isolation", desc: "Isolating individual bathroom lines to determine whether supply or drainage is leaking." },
      { step: "02", title: "Targeted Micro-Chasing", desc: "Opening only the exact tile area over the compromised joint rather than damaging entire walls." },
      { step: "03", title: "Permanent Coupling Repair", desc: "Replacing the cracked section with heavy-duty transition couplings and pressure-tested fittings." },
      { step: "04", title: "24-Hour Observation", desc: "Verifying zero pressure drop under full load before plastering and tile re-placement." }
    ],
    faqs: [
      {
        question: "How do you identify whether wall dampness is caused by plumbing or rainwater seepage?",
        answer: "We perform hydrostatic pressure isolation tests on the plumbing lines; if pressure holds steady for 24 hours without drop, plumbing is ruled out and structural waterproofing is inspected."
      },
      {
        question: "My downstairs neighbor reports water dripping from their bathroom ceiling. Can you fix this?",
        answer: "Yes, this is very common in Chennai apartments and is typically caused by failed floor trap seals, sunken slab joints, or concealed pipe leaks. We locate and repair the exact fault."
      },
      {
        question: "Do you offer emergency leakage repair services in Chennai?",
        answer: "Yes, for urgent burst pipes, uncontrollable overhead tank overflows, or main line leaks, we prioritize rapid response to isolate and repair the fault."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I have an urgent Plumbing Leakage issue in Chennai. Please contact me to arrange an inspection.",
    contactNumberType: "number2"
  },
  {
    id: "water-tank-connections",
    slug: "water-tank-connections",
    title: "Water Tank Connections",
    shortDescription: "Complete underground sump to rooftop overhead tank pipeline networks, overflow lines, and float valves.",
    category: "building",
    icon: "Container",
    heroImage: "/images/services/water-tank-1.webp",
    secondaryImage: "/images/services/water-tank-2.webp",
    fullDescription: "Your water storage infrastructure is the heart of your building's water supply. A.R Plumbing designs and executes complete tank plumbing—including multi-tank balancing headers, automatic float switches, wash-out valves, and air vents—preventing overflows, airlocks, and water contamination across Chennai properties.",
    workScope: [
      "Rooftop multi-tank interconnection and water balancing manifold lines",
      "Underground RCC sump delivery and foot valve suction line installation",
      "Heavy brass mechanical float ball valves and automatic electrical float switches",
      "Anti-vacuum air relief vents and mosquito-proof overflow discharge lines",
      "Overhead tank bypass plumbing for direct municipal water feeding"
    ],
    materialsUsed: [
      "UV-stabilized UPVC & CPVC pipes with brass tank connectors",
      "Heavy duty brass and stainless steel ball valves with full bore flow",
      "Spring-loaded non-return check valves (NRVs) to prevent backflow",
      "Stainless steel mesh insect screens for overflow and vent pipes"
    ],
    applications: [
      "Residential houses and apartment building rooftops",
      "Commercial office buildings and hospital water storage",
      "Industrial overhead reserve tanks and process water storage",
      "Replacement of cracked, leaking plastic tank fittings"
    ],
    executionProcess: [
      { step: "01", title: "Tank Capacity & Height Survey", desc: "Calculating static head pressure and determining optimal pipe sizes for distribution headers." },
      { step: "02", title: "Tank Flange & Connector Fitting", desc: "Installing heavy-duty threaded tank connectors with rubber washers to prevent tank wall leaks." },
      { step: "03", title: "Manifold & Valve Assembly", desc: "Assembling individual line isolation valves, non-return valves, and wash-out drain ports." },
      { step: "04", title: "Filling & Overflow Testing", desc: "Testing automatic float valve shut-off and verifying rapid drain performance through overflow lines." }
    ],
    faqs: [
      {
        question: "How do you prevent airlocks in the water distribution lines originating from rooftop tanks?",
        answer: "We install dedicated vertical air relief vent pipes higher than the tank top level at the outlet header, preventing air pockets from restricting gravity water flow."
      },
      {
        question: "Can two or more overhead water tanks be interconnected to maintain an equal water level?",
        answer: "Yes, we install bottom balancing equalizer manifolds with isolation valves that keep water levels perfectly equalized across multiple storage tanks."
      },
      {
        question: "Why does my overhead tank continually overflow even when the pump is turned off?",
        answer: "This is usually caused by a faulty non-return valve (NRV) on a booster line allowing back-siphonage, or a degraded mechanical float ball valve. We replace and tune these valves."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I visited your website and would like to enquire about Water Tank Connections in Chennai.",
    contactNumberType: "number1"
  },
  {
    id: "water-pump-installation",
    slug: "water-pump-installation",
    title: "Water Pump Installation",
    shortDescription: "Installation of pressure booster pumps, sump monoblocs, and submersible borewell pumps.",
    category: "building",
    icon: "Gauge",
    heroImage: "/images/services/water-pump-1.webp",
    secondaryImage: "/images/services/water-pump-2.webp",
    fullDescription: "Consistent water pressure requires correctly sized pumping equipment and vibration-free plumbing connections. A.R Plumbing installs automatic pressure booster pumps, underground sump monobloc pumps, and borewell submersible lines with proper non-return valves and electrical coordination across Chennai.",
    workScope: [
      "Automatic hydro-pneumatic pressure booster pump installation with pressure tank",
      "Underground sump monobloc motor setup with priming chambers and NRVs",
      "Borewell submersible pump delivery line and safety rope anchoring",
      "Anti-vibration flexible braided metal couplings to isolate motor vibrations",
      "Dry-run protection sensors and automated water level controller wiring setup"
    ],
    materialsUsed: [
      "High-pressure UPVC and GI delivery pipes rated for pump discharge head",
      "Heavy brass spring-type check valves (NRV) and full-bore union couplings",
      "Liquid-filled calibrated pressure gauges (0-10 bar)",
      "Vibration dampening rubber mounting pads for motor base plates"
    ],
    applications: [
      "Apartments experiencing low shower pressure on top floors",
      "Independent houses with sump-to-overhead tank pumping requirements",
      "Commercial buildings requiring constant pressurized water supply",
      "Landscape irrigation and car wash high-pressure supply systems"
    ],
    executionProcess: [
      { step: "01", title: "Pump Sizing & Head Calculation", desc: "Calculating total dynamic head (TDH) and required flow rate (LPM) for your building height." },
      { step: "02", title: "Mounting & Anti-Vibration Base", desc: "Anchoring the pump securely onto vibration pads to prevent acoustic noise in living spaces." },
      { step: "03", title: "Manifold & Bypass Plumbing", desc: "Installing a 3-valve bypass loop allowing continuous gravity water flow during pump maintenance." },
      { step: "04", title: "Cut-In / Cut-Out Calibration", desc: "Adjusting pressure switch settings to ensure smooth on/off cycling without water hammer." }
    ],
    faqs: [
      {
        question: "How does a pressure booster pump improve shower experience on top floor apartments?",
        answer: "Top floor apartments close to rooftop tanks lack natural gravity head pressure. An automatic booster pump maintains a constant 2.5 to 3.5 bar pressure, delivering powerful hotel-like shower streams."
      },
      {
        question: "What is a pump bypass line and why is it essential?",
        answer: "A bypass line allows water to continue flowing by gravity into your home if the pump is switched off or undergoing servicing, ensuring you are never left without water."
      },
      {
        question: "Can your team install automatic water level controllers that turn the motor off when tanks fill?",
        answer: "Yes, we install both magnetic float sensor switches and electronic water level controllers that automate motor operation and prevent water waste."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I would like to enquire about Water Pump Installation in Chennai. Please contact me.",
    contactNumberType: "number1"
  },
  {
    id: "plumbing-maintenance-repair",
    slug: "plumbing-maintenance-repair",
    title: "Plumbing Maintenance & Repair",
    shortDescription: "Annual maintenance contracts (AMC) and on-demand maintenance for apartment societies and commercial buildings.",
    category: "commercial",
    icon: "ClipboardCheck",
    heroImage: "/images/services/plumbing-maintenance-1.webp",
    secondaryImage: "/images/services/plumbing-maintenance-2.webp",
    fullDescription: "Preventive maintenance prevents catastrophic pipe bursts, motor burnout, and sewage backups. A.R Plumbing offers structured plumbing maintenance services and annual maintenance contracts (AMC) for residential housing societies, IT parks, commercial complexes, and institutions across Chennai.",
    workScope: [
      "Quarterly inspection of vertical plumbing shafts, valves, and water meters",
      "Overhead and underground storage tank float valve and overflow testing",
      "Pressure booster pump and sump motor mechanical seal and pressure check",
      "Stormwater drain channel desilting and chamber cleaning before monsoon",
      "Priority on-call technician dispatch for urgent plumbing breakdowns"
    ],
    materialsUsed: [
      "Branded replacement ceramic valve cartridges, gaskets, and O-rings",
      "Industrial drain augers and pressure jetting rods for desilting",
      "Pipe lubrication grease and thread sealing components",
      "Comprehensive inspection log sheets and maintenance audit reports"
    ],
    applications: [
      "Residential apartment welfare associations (RWAs) and societies",
      "Commercial office complexes and IT tech parks",
      "Hospitals, nursing homes, and educational institutions",
      "Hotels, serviced apartments, and dining establishments"
    ],
    executionProcess: [
      { step: "01", title: "Comprehensive Facility Audit", desc: "Mapping all isolation valves, riser shafts, pump rooms, and drainage chambers." },
      { step: "02", title: "Preventive Maintenance Schedule", desc: "Setting up scheduled quarterly checks for pumps, valves, and drainage pathways." },
      { step: "03", title: "Proactive Component Replacement", desc: "Servicing worn gaskets and lubricating stiff isolation valves before they seize." },
      { step: "04", title: "Emergency Priority Support", desc: "Dedicated emergency response protocol for society management and facility managers." }
    ],
    faqs: [
      {
        question: "Do you offer Annual Maintenance Contracts (AMC) for residential apartment societies in Chennai?",
        answer: "Yes, we provide customized AMC packages for apartment associations covering periodic pump room checks, shaft valve servicing, pre-monsoon drain cleaning, and priority emergency attendance."
      },
      {
        question: "How do you prepare commercial and apartment drainage networks before the Chennai monsoon?",
        answer: "Before the monsoon, we clear all terrace storm drains, desilt ground-level inspection chambers, verify non-return valves, and ensure rainwater harvesting recharge pits are free of blockage."
      },
      {
        question: "Can you provide a dedicated on-site plumber for large commercial campuses in Chennai?",
        answer: "Yes, for large commercial facilities, IT parks, and institutions, we provide trained on-site plumbing personnel for continuous daily operation and prompt maintenance."
      }
    ],
    whatsappMessage: "Hello A.R Plumbing, I visited your website and would like to discuss Plumbing Maintenance & AMC services in Chennai.",
    contactNumberType: "number1"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
