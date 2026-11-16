import React from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  Building2,
  House,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import AnimateReveal from "@/components/AnimateReveal";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { CONTACT_FAQS } from "@/data/faqData";

export const metadata = {
  title: "Contact Us | A.R Plumbing Royapettah Chennai",
  description:
    "Contact A.R Plumbing directly on WhatsApp or phone for residential plumbing services within 40 km of Royapettah, Chennai. Direct booking, zero form delays.",
};

export default function ContactPage() {
  const whatsappUrl1 = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I need residential plumbing assistance in Chennai."
  );

  const whatsappUrl2 = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber2,
    "Hello A.R Plumbing, I am interested in discussing a building/plumbing project in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <AnimateReveal animation="fade-down" delay={0.1}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
                Direct Communication
              </span>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Contact A.R Plumbing
              </h1>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.3}>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                We operate through direct telephone calls and official WhatsApp chat. No forms or waiting—speak directly with our plumbing coordinators in Royapettah.
              </p>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Lines"
            title="Choose Your Contact Line"
            subtitle="Connect directly with our dedicated residential or project plumbing coordinators."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Channel 1: Residential & Home Plumbing (90% Focus) */}
            <AnimateReveal animation="fade-up" delay={0.1}>
              <div className="bg-white p-8 rounded-card border-2 border-brand-orange/40 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Line 1 • Residential (Primary)
                </div>

                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-lightOrange text-brand-orange flex items-center justify-center mb-4">
                    <House className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-brand-navy">
                    Residential & Home Plumbing
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                    For individual homes, flats, apartments, bathroom leakage repairs, diverters, wash basins, and water tank connections.
                  </p>

                  <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xs text-brand-muted block">Direct Phone Number:</span>
                      <a
                        href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                        className="text-xl font-extrabold text-brand-navy hover:text-brand-orange transition-colors"
                      >
                        {BUSINESS_CONFIG.phoneNumber1Display}
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-brand-muted block">WhatsApp Number:</span>
                      <span className="text-sm font-semibold text-brand-text">
                        {BUSINESS_CONFIG.whatsAppNumber1Display}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 space-y-2.5">
                  <a
                    href={whatsappUrl1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                      <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                    </div>
                    <span>WhatsApp Residential Line</span>
                  </a>
                  <a
                    href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call: {BUSINESS_CONFIG.phoneNumber1Display}</span>
                  </a>
                </div>
              </div>
            </AnimateReveal>

            {/* Channel 2: Building Projects & Contracts */}
            <AnimateReveal animation="fade-up" delay={0.2}>
              <div className="bg-white p-8 rounded-card border-2 border-brand-blue/40 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Line 2 • Projects & Contracts
                </div>

                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-brand-navy">
                    Building Projects & Contracts
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                    For multi-storey residential towers, housing societies, architects, builders, and commercial plumbing projects in Chennai.
                  </p>

                  <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xs text-brand-muted block">Direct Phone Number:</span>
                      <a
                        href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber2)}
                        className="text-xl font-extrabold text-brand-navy hover:text-brand-orange transition-colors"
                      >
                        {BUSINESS_CONFIG.phoneNumber2Display}
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-brand-muted block">WhatsApp Number:</span>
                      <span className="text-sm font-semibold text-brand-text">
                        {BUSINESS_CONFIG.whatsAppNumber2Display}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 space-y-2.5">
                  <a
                    href={whatsappUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                      <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                    </div>
                    <span>WhatsApp Project Line</span>
                  </a>
                  <a
                    href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber2)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call: {BUSINESS_CONFIG.phoneNumber2Display}</span>
                  </a>
                </div>
              </div>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* Operating Hours & Verified Location Information */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimateReveal animation="fade-up" delay={0.1}>
              <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50 text-center h-full">
                <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                  Registered Address
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {BUSINESS_CONFIG.address}
                </p>
                <div className="mt-3 text-[11px] font-semibold text-brand-blue">
                  Coverage: Within 40 km of Royapettah
                </div>
              </div>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.2}>
              <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50 text-center h-full">
                <Clock className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                  Working Hours
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {BUSINESS_CONFIG.workingHours}
                </p>
                <div className="mt-3 text-[11px] font-semibold text-emerald-600">
                  Residential team on-call
                </div>
              </div>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.3}>
              <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50 text-center h-full">
                <Mail className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                  Email Support
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {BUSINESS_CONFIG.email}
                </p>
                <div className="mt-3 text-[11px] font-semibold text-brand-orange">
                  Drawings & project specifications
                </div>
              </div>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR CONTACT US */}
      <FAQAccordion
        faqs={CONTACT_FAQS}
        title="Contact — Frequently Asked Questions"
        subtitle="Clarifications regarding our direct communication model and response times."
      />
    </div>
  );
}
