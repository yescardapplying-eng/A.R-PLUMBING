import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES_DATA } from "@/data/servicesData";
import { SERVICES_OVERVIEW_FAQS } from "@/data/faqData";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

export const metadata = {
  title: "Our Plumbing Services in Chennai | Residential & Commercial Contracting",
  description:
    "Explore A.R Plumbing's comprehensive range of 16 professional plumbing services in Chennai, from building rough-ins and water pipelines to drainage and sanitary installations.",
};

export default function ServicesPage() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I visited your Services page and would like to enquire about plumbing contracting services in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Our Services" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
              Comprehensive Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Professional Plumbing Services in Chennai
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our complete range of specialized plumbing contracting solutions. Every service is executed by skilled plumbing tradesmen using certified materials and leak-tested procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (All 16 Services) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Offerings"
            title="Complete Plumbing Contract & Service Catalog"
            subtitle="Click on any service to view full technical work scopes, materials installed, process steps, and dedicated FAQs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Material Science"
            title="Certified Plumbing Materials We Install"
            subtitle="We specify and install certified piping systems engineered for Chennai's water chemistry and weather conditions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* CPVC */}
            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Internal Water Lines
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy mt-1 mb-2">
                CPVC Pressure Piping (IS 15778)
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Chlorinated Polyvinyl Chloride pipes rated up to 93°C for hot and cold potable domestic water. Immune to corrosion, scaling, and electrolytic decomposition under Chennai hard water.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-brand-navy">
                Ashirvad / Astral SDR 11 & SDR 13.5
              </div>
            </div>

            {/* UPVC */}
            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Cold Water & Risers
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy mt-1 mb-2">
                UPVC Schedule 40/80 (ASTM D1785)
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Lead-free rigid pressure pipes ideal for external vertical distribution risers, borewell lines, and pump manifolds. UV-stabilized to withstand rooftop Chennai sunlight.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-brand-navy">
                Heavy-Duty ASTM High Pressure Standards
              </div>
            </div>

            {/* SWR */}
            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Drainage & Sewerage
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy mt-1 mb-2">
                SWR Ring-Fit PVC (IS 13592)
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Type B heavy-duty soil and waste pipes with elastomeric rubber ring seal joints. Accommodates thermal expansion without joint cracking, keeping drainage completely odor-free.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-brand-navy">
                Supreme / Prince Ring-Fit SWR Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR SERVICES OVERVIEW */}
      <FAQAccordion
        faqs={SERVICES_OVERVIEW_FAQS}
        title="Plumbing Services — Frequently Asked Questions"
        subtitle="Important information regarding contracts, materials, and emergency response in Chennai."
      />

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Need a Customized Plumbing Contract Quotation?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Share your site drawings or requirements directly with A.R Plumbing over WhatsApp for rapid assessment.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WhatsApp Our Team</span>
            </a>
            <a
              href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-white text-brand-navy font-semibold text-sm hover:bg-slate-100 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call Our Coordinators</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
