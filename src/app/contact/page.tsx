import React from "react";
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
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { CONTACT_FAQS } from "@/data/faqData";

export const metadata = {
  title: "Contact Us | A.R Plumbing Contractors Chennai",
  description:
    "Contact A.R Plumbing directly via WhatsApp or telephone for residential plumbing services and commercial building plumbing contracts in Chennai. Direct booking, zero form delays.",
};

export default function ContactPage() {
  const whatsappUrl1 = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I am interested in discussing a commercial/building plumbing project in Chennai."
  );

  const whatsappUrl2 = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber2,
    "Hello A.R Plumbing, I need residential plumbing services for my home in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
              Direct Communication
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Connect Directly with A.R Plumbing
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We operate exclusively through direct telephone calls and official WhatsApp chat. No automated forms or waiting for email callbacks—speak directly with our plumbing coordinators.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Options (No Form Requirement Strictly Followed) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Fastest Response"
            title="Choose Your Direct Contact Channel"
            subtitle="To provide the most relevant assistance, we have dedicated phone and WhatsApp lines for commercial contracts and residential services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Channel 1: Commercial & Building Projects */}
            <div className="bg-white p-8 rounded-card border-2 border-brand-blue/30 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-blue text-white text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Line 1 • Contracts
              </div>

              <div>
                <div className="w-12 h-12 rounded-lg bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-navy">
                  Building & Commercial Projects
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                  For builders, architects, real estate developers, commercial office fit-outs, and multi-storey apartment contracts in Chennai.
                </p>

                <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-brand-muted block">Direct Phone Number:</span>
                    <a
                      href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                      className="text-lg font-bold text-brand-navy hover:text-brand-orange transition-colors"
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
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>WhatsApp Project Line</span>
                </a>
                <a
                  href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call Project Lead</span>
                </a>
              </div>
            </div>

            {/* Channel 2: Residential & General Plumbing */}
            <div className="bg-white p-8 rounded-card border-2 border-brand-orange/30 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Line 2 • Residential
              </div>

              <div>
                <div className="w-12 h-12 rounded-lg bg-brand-lightOrange text-brand-orange flex items-center justify-center mb-4">
                  <House className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-navy">
                  Residential & General Plumbing
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                  For individual homeowners, villa residents, apartment flat plumbing overhauls, leakage repairs, and sanitary ware fittings.
                </p>

                <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-brand-muted block">Direct Phone Number:</span>
                    <a
                      href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber2)}
                      className="text-lg font-bold text-brand-navy hover:text-brand-orange transition-colors"
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
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>WhatsApp Residential Line</span>
                </a>
                <a
                  href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber2)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call Residential Line</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours & Location Information */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50 text-center">
              <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                Chennai Headquarters
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {BUSINESS_CONFIG.fullAddress}
              </p>
              <div className="mt-3 text-[11px] font-semibold text-brand-blue">
                Serving all Chennai metropolitan zones
              </div>
            </div>

            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50 text-center">
              <Clock className="w-8 h-8 text-brand-orange mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                Working Hours
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {BUSINESS_CONFIG.workingHours}
              </p>
              <div className="mt-3 text-[11px] font-semibold text-emerald-600">
                Active site attendance 6 days a week
              </div>
            </div>

            <div className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50 text-center">
              <Mail className="w-8 h-8 text-brand-orange mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                Direct Inquiries
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {BUSINESS_CONFIG.email}
              </p>
              <div className="mt-3 text-[11px] font-semibold text-brand-orange">
                Send drawings & site specifications
              </div>
            </div>
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
