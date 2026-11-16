import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_CONFIG } from "@/lib/config";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_CONFIG.websiteUrl),
  title: {
    default: "A.R Plumbing | Reliable Plumbing Contractors in Chennai",
    template: "%s | A.R Plumbing Chennai",
  },
  description:
    "A.R Plumbing is Chennai's leading professional plumbing contracting firm for residential buildings, commercial properties, apartments, and construction projects. Expert water supply, SWR drainage, sanitaryware, and booster pump installations.",
  keywords: [
    "Plumbing Contractors in Chennai",
    "Plumbing Services in Chennai",
    "Building Plumbing Contractors Chennai",
    "Commercial Plumbing Contractors Chennai",
    "Residential Plumbing Services Chennai",
    "Water Supply Pipeline Installation Chennai",
    "Drainage Contractors Chennai",
    "High-Rise Building Plumbing Works Chennai",
    "Sanitary Installation Chennai",
    "Plumbers in Anna Nagar",
    "Plumbers in OMR Chennai",
    "Plumbers in Adyar Chennai",
  ],
  authors: [{ name: "A.R Plumbing" }],
  creator: "A.R Plumbing",
  publisher: "A.R Plumbing",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS_CONFIG.websiteUrl,
    title: "A.R Plumbing | Reliable Plumbing Contractors in Chennai",
    description:
      "Expert plumbing contracting for residential buildings, commercial properties, and construction projects in Chennai. Quality CPVC water pipelines, SWR drainage, and sanitaryware fitting.",
    siteName: "A.R Plumbing",
    images: [
      {
        url: "/images/hero-plumbing-site.jpg",
        width: 1200,
        height: 630,
        alt: "A.R Plumbing Contractors Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.R Plumbing | Reliable Plumbing Contractors in Chennai",
    description:
      "Professional plumbing contractors in Chennai for residential, commercial, and high-rise building projects.",
    images: ["/images/hero-plumbing-site.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    name: BUSINESS_CONFIG.name,
    legalName: BUSINESS_CONFIG.legalName,
    image: `${BUSINESS_CONFIG.websiteUrl}/images/ar-plumbing-square-logo.png`,
    logo: `${BUSINESS_CONFIG.websiteUrl}/images/ar-plumbing-horizontal-logo.png`,
    description:
      "Professional plumbing contractors in Chennai for residential buildings, commercial properties, apartments, and construction projects.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_CONFIG.address,
      addressLocality: BUSINESS_CONFIG.city,
      addressRegion: BUSINESS_CONFIG.state,
      postalCode: BUSINESS_CONFIG.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    url: BUSINESS_CONFIG.websiteUrl,
    telephone: BUSINESS_CONFIG.phoneNumber1,
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: BUSINESS_CONFIG.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area.name}, Chennai`,
    })),
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
