import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { SERVICE_AREAS_FAQS } from "@/data/faqData";

export const metadata = {
  title: "Service Areas in Chennai | A.R Plumbing Contractors",
  description:
    "A.R Plumbing provides professional residential and commercial plumbing contracting across Anna Nagar, Adyar, Velachery, Tambaram, T. Nagar, Porur, OMR, and all Chennai zones.",
};

export default function ServiceAreasPage() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I would like to check service availability for my location in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Service Areas" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
              Chennai Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Plumbing Contractors Across Chennai
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We deploy skilled plumbing tradesmen and supervisory teams across major residential hubs, IT corridors, and commercial commercial clusters in Chennai, Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Localities"
            title="Key Chennai Service Locations"
            subtitle="Explore our verified areas of operation with tailored residential and commercial plumbing solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_CONFIG.serviceAreas.map((area, idx) => (
              <div
                key={area.name}
                className="p-6 rounded-card bg-white border border-brand-border shadow-card hover:shadow-cardHover hover:border-brand-blue/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-brand-lightBlue text-brand-blue">
                      {area.zone}
                    </span>
                    <span className="text-xs text-brand-muted font-medium">
                      Area #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-blue transition-colors flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    <span>{area.name}</span>
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(
                      BUSINESS_CONFIG.whatsAppNumber1,
                      `Hello A.R Plumbing, I need plumbing services in ${area.name}, Chennai. Please contact me.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-whatsapp hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
                    <span>WhatsApp for {area.name}</span>
                  </a>

                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                  >
                    Contact →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chennai Plumbing Engineering Realities */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Local Expertise"
            title="Solving Chennai-Specific Plumbing Challenges"
            subtitle="Chennai's coastal climate, varying groundwater salinity, and high-rise developments demand specialized plumbing expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50">
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                Hard Water & Mineral Scaling
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Many Chennai areas rely on high TDS groundwater. We install non-scaling SDR 11 CPVC pipelines and brass ball valves that do not clog or seize from mineral deposits over time.
              </p>
            </div>

            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50">
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                Monsoon Storm Drainage & Flooding
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Chennai monsoons require heavy-duty rainwater harvesting downspouts and non-return backflow valves that prevent street stormwater from backing up into building ground-floor bathrooms.
              </p>
            </div>

            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50">
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                High-Rise Pressure Balancing
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Along Chennai&apos;s OMR, Porur, and Velachery apartment towers, we calibrate Pressure Reducing Valves (PRVs) to maintain a steady 2.8 bar across all floors without bursting lower-level fixtures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR SERVICE AREAS */}
      <FAQAccordion
        faqs={SERVICE_AREAS_FAQS}
        title="Chennai Service Areas — Frequently Asked Questions"
        subtitle="Common questions on our coverage radius, site visits, and team mobilization across Chennai."
      />

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Need a Plumber or Contractor at Your Chennai Site?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Connect directly with A.R Plumbing on WhatsApp or phone to confirm technician availability for your area.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WhatsApp Us for Site Visit</span>
            </a>
            <a
              href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-white text-brand-navy font-semibold text-sm hover:bg-slate-100 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call: {BUSINESS_CONFIG.phoneNumber1Display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
