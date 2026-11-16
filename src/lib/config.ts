/**
 * A.R PLUMBING - Central Business Configuration
 * Professional Plumbing Contractors in Chennai, Tamil Nadu
 */

export const BUSINESS_CONFIG = {
  name: "A.R Plumbing",
  legalName: "A.R Plumbing Contractors",
  tagline: "Reliable Plumbing Contractors in Chennai for Residential & Commercial Projects",
  category: "Professional Plumbing Contractors & Engineering Services",
  city: "Chennai",
  state: "Tamil Nadu",
  country: "India",
  postalCode: "600001",
  address: "Chennai, Tamil Nadu, India", // Configurable verified address
  fullAddress: "Anna Salai / OMR Corridor, Chennai, Tamil Nadu, India",
  
  // Primary Contact Numbers (Configurable placeholders pending client-verified numbers)
  // Number 1: Commercial & Building Projects
  phoneNumber1: "+919840123456",
  phoneNumber1Display: "+91 98401 23456",
  whatsAppNumber1: "+919840123456",
  whatsAppNumber1Display: "+91 98401 23456",
  number1Label: "Commercial & Building Projects",

  // Number 2: Residential Plumbing & Maintenance
  phoneNumber2: "+919840654321",
  phoneNumber2Display: "+91 98406 54321",
  whatsAppNumber2: "+919840654321",
  whatsAppNumber2Display: "+91 98406 54321",
  number2Label: "Residential & General Plumbing",

  email: "contact@arplumbingchennai.com",
  workingHours: "Monday – Saturday: 8:00 AM – 8:00 PM | Emergency Response on Request",
  websiteUrl: "https://www.arplumbingchennai.com",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleMapsUrl: "https://maps.google.com/?q=Chennai,+Tamil+Nadu",

  // Service Areas in Chennai
  serviceAreas: [
    { name: "Anna Nagar", zone: "Central Chennai", description: "Comprehensive residential and commercial plumbing contracting for villas, apartments, and retail spaces in Anna Nagar." },
    { name: "Adyar", zone: "South Chennai", description: "Premium apartment plumbing, pipeline overhauls, and sanitary fixture installations across Adyar and Besant Nagar." },
    { name: "Velachery", zone: "South Chennai", description: "High-density residential society plumbing, drainage solutions, and sump-to-tank water pipeline installations in Velachery." },
    { name: "Tambaram", zone: "South West Chennai", description: "Independent houses, new building construction plumbing, and water supply pipeline installations in Tambaram & Chromepet." },
    { name: "T. Nagar", zone: "Central Chennai", description: "Commercial establishment plumbing, restaurant drainage lines, and high-footfall facility plumbing in T. Nagar." },
    { name: "Porur", zone: "West Chennai", description: "Apartment complex plumbing maintenance, high-rise water distribution networks, and leak detection in Porur & DLF IT belt." },
    { name: "OMR (Old Mahabalipuram Road)", zone: "IT Corridor", description: "Gated communities, multi-storey apartment towers, and commercial tech park plumbing works across OMR." },
    { name: "Sholinganallur", zone: "South OMR", description: "New construction plumbing projects, CPVC/UPVC pipeline distribution, and SWR drainage systems in Sholinganallur." },
    { name: "Perungudi", zone: "South Chennai", description: "Commercial building plumbing, overhead tank connections, and hydro-pneumatic pump installations in Perungudi." },
    { name: "Ambattur", zone: "North West Chennai", description: "Industrial unit plumbing, worker facility sanitary installations, and heavy-duty drainage in Ambattur Industrial Estate." },
    { name: "Kilpauk", zone: "Central Chennai", description: "Hospitals, clinics, educational institutions, and heritage residence plumbing overhauls in Kilpauk." },
    { name: "Nungambakkam", zone: "Central Chennai", description: "Commercial offices, boutique spaces, and luxury apartment sanitary fittings in Nungambakkam." }
  ],
};

/**
 * Format phone string to clean digits for URLs
 */
export function cleanPhone(phone: string): string {
  return phone.replace(/[^0-9]/g, "");
}

/**
 * Generate official WhatsApp Click-to-Chat URL
 */
export function getWhatsAppUrl(
  number: string = BUSINESS_CONFIG.whatsAppNumber1,
  prefilledText: string = ""
): string {
  const clean = cleanPhone(number);
  const text = prefilledText || `Hello A.R Plumbing, I visited your website and would like to enquire about your plumbing services in Chennai.`;
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate Phone Tel: link
 */
export function getPhoneUrl(number: string = BUSINESS_CONFIG.phoneNumber1): string {
  const clean = cleanPhone(number);
  return `tel:+${clean}`;
}
