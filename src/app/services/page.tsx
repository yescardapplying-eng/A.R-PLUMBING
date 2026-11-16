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

      {/* 6 Primary Service Clusters Detail Section */}
      <section className="py-16 sm:py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Categorized Services"
            title="Our 6 Core Service Clusters"
            subtitle="Explore all specialized domestic plumbing works categorized for clear navigation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICE_CLUSTERS.map((cluster, idx) => (
              <AnimateReveal key={cluster.id} animation="fade-up" delay={idx * 0.1}>
                <div className="bg-white rounded-card border border-brand-border p-6 shadow-card hover:shadow-cardHover transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4">
                      {cluster.id === "water-supply" && <Droplets className="w-6 h-6" />}
                      {cluster.id === "sanitary-bathroom" && <Bath className="w-6 h-6" />}
                      {cluster.id === "drainage-sewerage" && <Waves className="w-6 h-6" />}
                      {cluster.id === "kitchen-plumbing" && <Utensils className="w-6 h-6" />}
                      {cluster.id === "high-rise-plumbing" && <Layers className="w-6 h-6" />}
                      {cluster.id === "contracts-management" && <ClipboardCheck className="w-6 h-6" />}
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">
                      {cluster.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed mb-4">
                      {cluster.summary}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {cluster.services.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-brand-text">
                          <span className="text-brand-orange font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={getWhatsAppUrl(
                        BUSINESS_CONFIG.whatsAppNumber1,
                        `Hello A.R Plumbing, I would like to enquire about ${cluster.title} in Chennai.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-btn bg-brand-whatsapp text-white text-xs font-semibold shadow-sm hover:bg-brand-whatsappHover transition-all"
                    >
                      <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden flex-shrink-0">
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
                Drainage & Sewerage
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy mt-1 mb-2">
                SWR Ring-Fit PVC (IS 13592)
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Type B soil and waste drainage pipes with elastomeric rubber ring seals for odor-free flow.
              </p>
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
            Need a Residential Plumbing Estimate?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Share your requirements directly with A.R Plumbing on WhatsApp for prompt scheduling within 40 km of Royapettah.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all"
            >
              <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
              </div>
              <span>WhatsApp Our Team</span>
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
