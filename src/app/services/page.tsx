import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Bath,
  Waves,
  Utensils,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import AnimateReveal from "@/components/AnimateReveal";
import { SERVICES_DATA, SERVICE_CLUSTERS } from "@/data/servicesData";
import { SERVICES_OVERVIEW_FAQS } from "@/data/faqData";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

export const metadata = {
  title: "Residential Plumbing Services in Chennai | A.R Plumbing",
  description:
    "Explore our complete range of residential plumbing services: water pipelines, luxury bathroom fittings, drainage systems & kitchen plumbing within 40 km of Royapettah, Chennai.",
};

export default function ServicesPage() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I would like to enquire about residential plumbing services in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Our Services" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <AnimateReveal animation="fade-down" delay={0.1}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
                90% Residential Services
              </span>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Residential Plumbing Services
              </h1>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.3}>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Specialized home plumbing services across flats, apartments, and residential buildings within 40 km of Royapettah, Chennai. Executed with precision, genuine materials, and leak-tested procedures.
              </p>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* 6 Primary Service Clusters Detail Section (Image + Short Intro + Key Points + WhatsApp CTA) */}
      <section className="py-16 sm:py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Categorized Services"
            title="Our 6 Core Service Clusters"
            subtitle="Explore our specialized residential plumbing works categorized for clear navigation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICE_CLUSTERS.map((cluster, idx) => (
              <AnimateReveal key={cluster.id} animation="fade-up" delay={idx * 0.1}>
                <div className="bg-white rounded-card border border-brand-border overflow-hidden shadow-card hover:shadow-[0_8px_30px_rgba(23,105,170,0.12)] hover:border-brand-blue/50 transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  <div>
                    {/* Realistic Service Image */}
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
                      <Image
                        src={cluster.image}
                        alt={`${cluster.title} - A.R Plumbing Chennai`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Floating Category Badge with Icon */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-navy text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1.5 border border-slate-100 group-hover:border-brand-blue/30 transition-colors">
                        {cluster.id === "water-supply" && <Droplets className="w-3.5 h-3.5 text-brand-blue" />}
                        {cluster.id === "sanitary-bathroom" && <Bath className="w-3.5 h-3.5 text-brand-blue" />}
                        {cluster.id === "drainage-sewerage" && <Waves className="w-3.5 h-3.5 text-brand-blue" />}
                        {cluster.id === "kitchen-plumbing" && <Utensils className="w-3.5 h-3.5 text-brand-blue" />}
                        {cluster.id === "high-rise-plumbing" && <Layers className="w-3.5 h-3.5 text-brand-blue" />}
                        {cluster.id === "contracts-management" && <ClipboardCheck className="w-3.5 h-3.5 text-brand-blue" />}
                        <span>Verified Category</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-heading font-bold text-xl text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                        {cluster.title}
                      </h3>

                      {/* Short 10-12 word intro */}
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                        {cluster.shortIntro}
                      </p>

                      {/* 2-3 Word Key Point Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {cluster.keyPoints.map((point, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-lightBlue/70 text-brand-blue text-[11px] font-semibold"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: View Services + WhatsApp */}
                  <div className="p-5 sm:p-6 pt-0">
                    <a
                      href={getWhatsAppUrl(
                        BUSINESS_CONFIG.whatsAppNumber1,
                        `Hello A.R Plumbing, I would like to enquire about ${cluster.title} in Chennai.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-btn bg-brand-whatsapp text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-brand-whatsappHover transition-all active:scale-95"
                    >
                      <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                      </div>
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </AnimateReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All 16 Dedicated Service Pages */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Dedicated Service Pages"
            title="Detailed Service Catalog"
            subtitle="Click on any service card to view complete work scopes, materials, photos, and dedicated FAQs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <AnimateReveal key={service.slug} animation="fade-up" delay={idx * 0.05}>
                <ServiceCard service={service} />
              </AnimateReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="py-16 sm:py-20 bg-brand-offwhite border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Material Quality"
            title="Certified Plumbing Materials"
            subtitle="Specified for Chennai water chemistry and durability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-card border border-brand-border bg-white shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Internal Water Lines
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy mt-1 mb-2">
                CPVC Pressure Piping (IS 15778)
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Hot and cold water supply rated up to 93°C. Lead-free, scale-resistant under Chennai hard water.
              </p>
            </div>

            <div className="p-6 rounded-card border border-brand-border bg-white shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Cold Water & Mains
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy mt-1 mb-2">
                UPVC Schedule 40/80 (ASTM D1785)
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                UV-stabilized outdoor pipes for terrace distribution headers and borewell discharge networks.
              </p>
            </div>

            <div className="p-6 rounded-card border border-brand-border bg-white shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Drainage Stacks
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy mt-1 mb-2">
                Ring-Fit SWR Soil & Waste (IS 13592)
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Leak-proof rubber ring jointed pipes that absorb building vibration and prevent odor leakage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={SERVICES_OVERVIEW_FAQS}
        title="Services — Frequently Asked Questions"
        subtitle="Common questions regarding contracts, material procurement, and pricing."
      />
    </div>
  );
}
