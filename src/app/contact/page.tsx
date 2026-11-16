import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
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
    "Get in touch with A.R Plumbing in Royapettah, Chennai. Direct WhatsApp chat, phone calls, interactive Google map, and coverage across 40 km radius.",
};

export default function ContactPage() {
  const whatsappUrl1 = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I need residential plumbing assistance in Chennai."
  );

  const whatsappUrl2 = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber2,
    "Hello A.R Plumbing, I would like to discuss a plumbing project/contract in Chennai."
  );

  // Top 12 key service localities
  const mainLocations = [
    { name: "Royapettah", distance: "Central HQ" },
    { name: "Mylapore", distance: "2 km" },
    { name: "Alwarpet", distance: "3 km" },
    { name: "Nungambakkam", distance: "4 km" },
    { name: "T. Nagar", distance: "5 km" },
    { name: "Kilpauk", distance: "6 km" },
    { name: "Adyar", distance: "7 km" },
    { name: "Anna Nagar", distance: "9 km" },
    { name: "Velachery", distance: "12 km" },
    { name: "OMR IT Corridor", distance: "14 km" },
    { name: "Porur", distance: "15 km" },
    { name: "Tambaram", distance: "24 km" },
  ];

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-navy text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <AnimateReveal animation="fade-down" delay={0.1}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
                Direct Communication • Royapettah, Chennai
              </span>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Contact A.R Plumbing
              </h1>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.3}>
              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                Connect directly with our plumbing coordinators. Quick WhatsApp enquiry, immediate phone calls, and on-site visits across Chennai within 40 km of Royapettah.
              </p>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Contact Details & Integrated Google Map */}
      <section className="py-14 sm:py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Direct Contact Info (7 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <AnimateReveal animation="fade-up" delay={0.1}>
                <div className="bg-white p-6 sm:p-8 rounded-card border border-brand-border shadow-card space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      Instant Communication
                    </span>
                    <h2 className="text-2xl font-extrabold font-heading text-brand-navy mt-1">
                      Direct Touchpoints
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                      We operate with direct phone and WhatsApp lines for instant coordination without contact form delays.
                    </p>
                  </div>

                  {/* Quick Action CTAs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href={whatsappUrl1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white text-sm font-semibold shadow-sm transition-all active:scale-95"
                    >
                      <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                      </div>
                      <span>WhatsApp Us</span>
                    </a>

                    <a
                      href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4 text-brand-orange" />
                      <span>Call Now</span>
                    </a>
                  </div>

                  {/* Structured Details Cards */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    {/* Address */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-brand-offwhite border border-slate-200/80">
                      <div className="p-2 rounded-md bg-white text-brand-orange shadow-sm flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Registered Office Address
                        </div>
                        <p className="text-xs sm:text-sm text-brand-text font-medium mt-0.5 leading-snug">
                          {BUSINESS_CONFIG.address}
                        </p>
                        <div className="text-[11px] font-semibold text-brand-blue mt-1">
                          Coverage: Within 40 km radius of Royapettah
                        </div>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-brand-offwhite border border-slate-200/80">
                      <div className="p-2 rounded-md bg-white text-brand-blue shadow-sm flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div>
                          <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                            Residential & Home Plumbing
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <a
                              href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                              className="text-sm sm:text-base font-extrabold text-brand-navy hover:text-brand-orange transition-colors"
                            >
                              {BUSINESS_CONFIG.phoneNumber1Display}
                            </a>
                            <span className="text-[10px] bg-brand-lightBlue text-brand-blue px-2 py-0.5 rounded font-bold">
                              Primary
                            </span>
                          </div>
                        </div>

                        <div className="pt-1.5 border-t border-slate-200/70">
                          <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                            Building Projects & Contracts
                          </div>
                          <a
                            href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber2)}
                            className="text-sm sm:text-base font-extrabold text-brand-navy hover:text-brand-orange transition-colors block mt-0.5"
                          >
                            {BUSINESS_CONFIG.phoneNumber2Display}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-brand-offwhite border border-slate-200/80">
                      <div className="p-2 rounded-md bg-white text-emerald-600 shadow-sm flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Working Hours
                        </div>
                        <p className="text-xs sm:text-sm text-brand-text font-medium mt-0.5">
                          {BUSINESS_CONFIG.workingHours}
                        </p>
                        <div className="text-[11px] font-semibold text-emerald-600 mt-0.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Residential team available on-call</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateReveal>
            </div>

            {/* Right Column: Integrated Google Map (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <AnimateReveal animation="fade-up" delay={0.2} className="h-full">
                <div className="bg-white p-4 sm:p-5 rounded-card border border-brand-border shadow-card h-full flex flex-col justify-between">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-brand-orange" />
                        <span>Interactive Location Map</span>
                      </h3>
                      <p className="text-xs text-brand-muted">
                        Dr. Besant Road, Royapettah, Chennai – 600014
                      </p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Dr+Besant+Road+Royapettah+Chennai+600014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      <span>Open Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Embedded Google Map iframe */}
                  <div className="relative w-full h-[360px] sm:h-[400px] lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-slate-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.472718165675!2d80.2520!3d13.0520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526639591461f3%3A0x6b30f04771e72e2!2sDr%20Besant%20Rd%2C%20Royapettah%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="A.R Plumbing Location Royapettah Chennai"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Location Pin Badge */}
                  <div className="mt-3 p-2.5 rounded-lg bg-brand-lightBlue/60 border border-brand-blue/20 flex items-center justify-between text-xs text-brand-navy">
                    <span className="font-semibold">
                      📍 Royapettah Central Location
                    </span>
                    <span className="text-brand-blue font-bold">
                      Coverage: 40 km Radius
                    </span>
                  </div>
                </div>
              </AnimateReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Locations Preview (Top 10+ Key Localities) */}
      <section className="py-14 sm:py-18 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Local Service Reach"
            title="Primary Service Localities in Chennai"
            subtitle="Rapid on-site plumbing deployment within a 40 km radius of Royapettah."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {mainLocations.map((loc, idx) => (
              <AnimateReveal key={loc.name} animation="fade-up" delay={idx * 0.04}>
                <div className="p-3.5 rounded-card bg-brand-offwhite border border-brand-border hover:border-brand-blue/50 hover:shadow-sm transition-all text-center group cursor-pointer">
                  <MapPin className="w-4 h-4 text-brand-orange mx-auto mb-1.5 transition-transform duration-200 group-hover:scale-120" />
                  <div className="font-heading font-bold text-xs sm:text-sm text-brand-navy group-hover:text-brand-blue transition-colors">
                    {loc.name}
                  </div>
                  <div className="text-[11px] font-semibold text-brand-blue mt-0.5">
                    {loc.distance}
                  </div>
                </div>
              </AnimateReveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:-translate-y-0.5"
            >
              <span>Explore All 20+ Service Areas</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={CONTACT_FAQS}
        title="Contact — Frequently Asked Questions"
        subtitle="Clarifications regarding our direct communication model and response times."
      />
    </div>
  );
}
