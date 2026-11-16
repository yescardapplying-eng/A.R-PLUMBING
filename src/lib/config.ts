/**
 * A.R PLUMBING - Central Business Configuration
 * Specialized Residential Plumbing Contractors in Chennai
 * Operating within 40 km radius of Royapettah, Chennai
 */

export const BUSINESS_CONFIG = {
  name: "A.R Plumbing",
  legalName: "A.R Plumbing Contractors",
  tagline: "Professional Home & Residential Plumbing Services in Chennai",
  category: "Residential & Commercial Plumbing Contractors",
  city: "Chennai",
  state: "Tamil Nadu",
  country: "India",
  postalCode: "600014",
  address: "N. No. 65 / O. No. 34, Dr. Besant Road, Royapettah, Chennai – 600014, Tamil Nadu, India",
  fullAddress: "N. No. 65 / O. No. 34, Dr. Besant Road, Royapettah, Chennai – 600014, Tamil Nadu, India",
  serviceRadius: "Within 40 km of Royapettah, Chennai",

  // Verified Indian Mobile Numbers
  // Number 1: Residential & Home Plumbing Services (90% Focus)
  phoneNumber1: "+918148423204",
  phoneNumber1Display: "+91 81484 23204",
  whatsAppNumber1: "+918148423204",
  whatsAppNumber1Display: "+91 81484 23204",
  number1Label: "Residential & Home Plumbing",

  // Number 2: Building Projects & High-Rise Contracts
  phoneNumber2: "+919820265912",
  phoneNumber2Display: "+91 98202 65912",
  whatsAppNumber2: "+919820265912",
  whatsAppNumber2Display: "+91 98202 65912",
  number2Label: "Building Projects & Contracts",

  email: "contact@arplumbingchennai.com",
  workingHours: "Monday – Saturday: 8:00 AM – 8:00 PM | Sunday On-Call",
  websiteUrl: "https://www.arplumbingchennai.com",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleMapsUrl: "https://maps.google.com/?q=Dr.+Besant+Road,+Royapettah,+Chennai+600014",

  // Verified Service Localities (Strictly within 40 km of Royapettah, Chennai)
  serviceAreas: [
    { name: "Royapettah", distance: "0 km (HQ)", zone: "Central Chennai", description: "Immediate localized plumbing service for houses, apartments, and commercial units in Royapettah." },
    { name: "Mylapore & Triplicane", distance: "2 - 3 km", zone: "Central South", description: "Heritage houses, apartment renovations, and pipe replacement around Mylapore & Triplicane." },
    { name: "T. Nagar & Alwarpet", distance: "4 - 5 km", zone: "Central Chennai", description: "Luxury home bathroom renovations, sanitary fittings, and concealed pipe installations in T. Nagar." },
    { name: "Nungambakkam", distance: "5 km", zone: "Central Chennai", description: "Apartment flats, diverter fittings, and pressure booster pump installations in Nungambakkam." },
    { name: "Adyar & Besant Nagar", distance: "7 - 9 km", zone: "South Chennai", description: "Premium villas, beachside apartment pipeline works, and sanitaryware fitting in Adyar." },
    { name: "Velachery & Guindy", distance: "11 - 13 km", zone: "South Chennai", description: "Residential societies, sump to overhead tank waterlines, and drainage in Velachery." },
    { name: "Anna Nagar & Kilpauk", distance: "10 - 12 km", zone: "North Central", description: "Complete domestic pipeline overhauls, CPVC piping, and water tank connections in Anna Nagar." },
    { name: "Porur & Ramapuram", distance: "14 - 17 km", zone: "West Chennai", description: "New apartment plumbing, bathroom leakage repairs, and sanitary fittings in Porur." },
    { name: "OMR IT Corridor", distance: "15 - 25 km", zone: "OMR Expressway", description: "Gated communities, multi-storey flats, and high-rise plumbing from Thoraipakkam to Sholinganallur." },
    { name: "Tambaram & Chromepet", distance: "24 - 28 km", zone: "South West", description: "Independent villas, residential buildings, and drainage line connections in Tambaram." },
    { name: "Ambattur & Mogappair", distance: "18 - 22 km", zone: "North West", description: "Residential layouts, kitchen plumbing, and underground water tank connections in Ambattur." },
    { name: "Medavakkam & Perumbakkam", distance: "20 - 24 km", zone: "South Suburbs", description: "New flat plumbing setups, RO purifier connections, and bathroom renovations in Medavakkam." }
  ],
};

/**
 * Clean phone string for tel: and wa.me links
 */
export function cleanPhone(phone: string): string {
  return phone.replace(/[^0-9]/g, "");
}

/**
 * Official WhatsApp Click-to-Chat URL
 */
export function getWhatsAppUrl(
  number: string = BUSINESS_CONFIG.whatsAppNumber1,
  prefilledText: string = ""
): string {
  const clean = cleanPhone(number);
  const text = prefilledText || `Hello A.R Plumbing, I would like to enquire about residential plumbing services in Chennai.`;
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

/**
 * Phone tel: link
 */
export function getPhoneUrl(number: string = BUSINESS_CONFIG.phoneNumber1): string {
  const clean = cleanPhone(number);
  return `tel:+${clean}`;
}
