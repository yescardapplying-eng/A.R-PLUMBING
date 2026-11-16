export interface GalleryItem {
  id: string;
  title: string;
  category: "building" | "watersupply" | "drainage" | "bathroom" | "toilet" | "pumps";
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Building Water Supply Pipeline Installation",
    category: "watersupply",
    categoryLabel: "Water Supply Pipelines",
    image: "/images/hero-plumbing-site.jpg",
    alt: "Plumbers installing CPVC water supply pipelines on an exposed brick construction wall in Chennai",
    description: "Concealed CPVC piping network with brass valves mounted to an internal construction brick wall."
  },
  {
    id: "g2",
    title: "Concealed Bathroom Diverter & Shower Rough-In",
    category: "bathroom",
    categoryLabel: "Bathroom & Sanitary",
    image: "/images/services/bathroom-plumbing-1.webp",
    alt: "Concealed brass shower diverter and CPVC water lines in an Indian bathroom under construction",
    description: "Precision alignment of hot and cold water feeds for single lever diverter before bathroom wall tiling."
  },
  {
    id: "g3",
    title: "SWR Drainage Stack & Inspection Trap System",
    category: "drainage",
    categoryLabel: "Drainage & Sewerage",
    image: "/images/services/drainage-sewerage-1.webp",
    alt: "Heavy duty SWR drainage pipe stack with elastomeric ring seals and nahani floor trap in Chennai",
    description: "Multi-floor vertical soil and waste drainage stack with self-cleansing slopes and acoustic seals."
  },
  {
    id: "g4",
    title: "Wall-Hung Western Toilet & Concealed Cistern Frame",
    category: "toilet",
    categoryLabel: "Toilet & Basin Installation",
    image: "/images/services/toilet-installation-1.webp",
    alt: "Modern white ceramic wall-hung toilet commode installed on tiled wall in an Indian home",
    description: "Wall-mounted European water closet (EWC) mounted on rigid structural steel chair bracket."
  },
  {
    id: "g5",
    title: "Indian Squat Toilet Pan (Orissa Pan) Setting",
    category: "toilet",
    categoryLabel: "Toilet & Basin Installation",
    image: "/images/services/toilet-installation-2.webp",
    alt: "Glazed ceramic Indian squatting toilet pan installed in sunken floor slab with P-trap connection",
    description: "Airtight P-trap connection bedded in sand-cement mortar for robust long-term durability."
  },
  {
    id: "g6",
    title: "Designer Pedestal Wash Basin with Chrome Tap",
    category: "toilet",
    categoryLabel: "Toilet & Basin Installation",
    image: "/images/services/wash-basin-1.webp",
    alt: "Full pedestal white ceramic wash basin with chrome pillar tap in a dining area hand wash",
    description: "Ergonomically positioned hand wash basin with concealed waste coupling and angle stops."
  },
  {
    id: "g7",
    title: "Terrace Multi-Tank Water Distribution Header",
    category: "building",
    categoryLabel: "Building Plumbing",
    image: "/images/services/water-tank-1.webp",
    alt: "Rooftop water storage tanks with UPVC balancing manifold, isolation ball valves, and overflow pipes",
    description: "Equally balanced storage manifold with air relief vents to prevent airlocks in lower flats."
  },
  {
    id: "g8",
    title: "Automatic Hydro-Pneumatic Pressure Booster Pump",
    category: "pumps",
    categoryLabel: "Pumps & Pressure Systems",
    image: "/images/services/water-pump-1.webp",
    alt: "Automatic water pressure booster pump with pressure tank and check valve installed on vibration pads",
    description: "Maintains constant 3.0 bar water pressure across upper-floor showerheads and luxury faucets."
  },
  {
    id: "g9",
    title: "Underground Sewer Inspection Chamber & Gully Trap",
    category: "drainage",
    categoryLabel: "Drainage & Sewerage",
    image: "/images/services/drainage-sewerage-2.webp",
    alt: "Plastered brick masonry sewer inspection chamber manhole with smooth benching in Chennai",
    description: "Constructed boundary manhole connecting building drainage directly to municipal sewer line."
  },
  {
    id: "g10",
    title: "Vertical Utility Shaft Riser Stack & Valves",
    category: "building",
    categoryLabel: "Building Plumbing",
    image: "/images/services/building-plumbing-2.webp",
    alt: "Plumbing technicians installing vertical water riser pipes in a high-rise building shaft in India",
    description: "Vertical high-pressure UPVC riser stacks anchored every floor with heavy-duty galvanized clamps."
  },
  {
    id: "g11",
    title: "Commercial Restroom Touchless Sensor Battery",
    category: "bathroom",
    categoryLabel: "Bathroom & Sanitary",
    image: "/images/services/commercial-plumbing-1.webp",
    alt: "Commercial office washroom with automatic sensor faucets and concealed urinal flush valves",
    description: "Water-conserving touchless fixtures engineered for high daily footfall in IT and corporate offices."
  },
  {
    id: "g12",
    title: "Finished Luxury Bathroom Sanitary & Shower Fitout",
    category: "bathroom",
    categoryLabel: "Bathroom & Sanitary",
    image: "/images/services/bathroom-plumbing-2.webp",
    alt: "Finished modern Indian apartment bathroom with rain shower, single-lever diverter, and wall vanity",
    description: "Flawlessly aligned chrome bath fittings, rain shower head, and tempered glass partition drainage."
  }
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "building", label: "Building Plumbing" },
  { id: "watersupply", label: "Water Supply Pipelines" },
  { id: "drainage", label: "Drainage & Sewerage" },
  { id: "bathroom", label: "Bathroom & Sanitary" },
  { id: "toilet", label: "Toilets & Wash Basins" },
  { id: "pumps", label: "Pumps & Tanks" },
];
