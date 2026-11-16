import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Wrench,
  CheckCircle2,
  MapPin,
  Droplets,
  Bath,
  Utensils,
  ChevronRight,
} from "lucide-react";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { SERVICES_DATA, SERVICE_CLUSTERS } from "@/data/servicesData";
import { HOMEPAGE_FAQS } from "@/data/faqData";
import ServiceCard from "@/components/ServiceCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import AnimateReveal from "@/components/AnimateReveal";

export const metadata = {
  title: "Expert Residential Plumbing in Chennai | A.R Plumbing",
  description:
    "A.R Plumbing delivers reliable residential plumbing services for homes, flats, apartments & buildings within 40 km of Royapettah, Chennai. Direct WhatsApp & phone booking.",
};

export default function HomePage() {
  // Verified Offerings: Only 3 clusters requested on Homepage
  const verifiedClusters = SERVICE_CLUSTERS.filter((c) =>
    ["water-supply", "sanitary-bathroom", "kitchen-plumbing"].includes(c.id)
  );

  // Top Home Services: Only 3 requested services on Homepage
  const topServices = SERVICES_DATA.filter((s) =>
    [
      "building-plumbing-works",
      "residential-plumbing-services",
      "water-supply-pipeline",
    ].includes(s.slug)
  );

  const heroWhatsApp = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I need residential plumbing services for my home in Chennai."
  );

  const heroCall = getPhoneUrl(BUSINESS_CONFIG.phoneNumber1);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO BANNER (Residential 90% Focus, Short Punchy Title) */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-br from-brand-navyDark via-brand-navy to-[#16385C] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-brand-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(#1769AA_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Description & CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              {/* Badge */}
              <AnimateReveal animation="fade-down" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs sm:text-sm font-semibold tracking-wide border border-white/15 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                  <span>90% Residential Focus • Royapettah & Within 40 km</span>
                </div>
              </AnimateReveal>

              {/* H1 Heading */}
              <AnimateReveal animation="fade-up" delay={0.2}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                  Expert Residential Plumbing in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-yellow-400">
                    Chennai
                  </span>
                </h1>
              </AnimateReveal>

              {/* Supporting Description */}
              <AnimateReveal animation="fade-up" delay={0.3}>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  A.R Plumbing delivers reliable plumbing solutions for homes, flats, apartments, and residential buildings within 40 km of Royapettah, Chennai. From bathroom renovations to CPVC pipelines and leak repairs, connect directly with our expert team.
                </p>
              </AnimateReveal>

              {/* CTA Action Buttons */}
              <AnimateReveal animation="fade-up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
                  <a
                    href={heroWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm sm:text-base shadow-whatsapp hover:shadow-whatsappHover transition-all duration-200 active:scale-95"
                  >
                    <div className="relative w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                      <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                    </div>
                    <span>WhatsApp Enquiry</span>
                  </a>

                  <a
                    href={heroCall}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-btn bg-white hover:bg-slate-100 text-brand-navy font-semibold text-sm sm:text-base shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call: {BUSINESS_CONFIG.phoneNumber1Display}</span>
                  </a>

                  <Link
                    href="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn border border-white/25 hover:bg-white/10 text-white font-medium text-sm sm:text-base transition-colors"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateReveal>

              {/* Quick Key Badges */}
              <AnimateReveal animation="fade-up" delay={0.5}>
                <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left text-xs sm:text-sm text-slate-300">
                  <div className="flex flex-col lg:flex-row items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>90% Home Focused</span>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>Within 40 km Radius</span>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>Tested Leak-Free</span>
                  </div>
                </div>
              </AnimateReveal>
            </div>

            {/* Right Column: Hero Visual with Newly Uploaded Image & Captions */}
            <div className="lg:col-span-5 relative">
              <AnimateReveal animation="scale-up" delay={0.3}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand-orange/40 via-brand-blue/30 to-white/10 blur-md transform rotate-1" />

                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                    <Image
                      src="/images/hero-plumber-new.jpg"
                      alt="A.R Plumbing expert residential technician working under washbasin in Chennai"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 550px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

                    {/* Bottom Caption Badge Layer */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-lg shadow-lg text-brand-navy flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold font-heading">
                          Royapettah & 40 km Radius
                        </div>
                        <div className="text-[11px] text-brand-muted">
                          Flats, Villas & Residential Buildings
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-blue bg-brand-lightBlue px-2 py-1 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Active Service
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — BUSINESS TRUST HIGHLIGHTS (ANIMATED ICONS & HOVER GLOW) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-brand-offwhite border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Home & Flat Plumbing",
                desc: "Specialized in individual houses, flats, apartments, and room renovations.",
                icon: Building2,
                color: "blue",
              },
              {
                title: "Skilled Tradesmen",
                desc: "Experienced plumbers for luxury diverters, washbasins, and CPVC piping.",
                icon: Users,
                color: "orange",
              },
              {
                title: "Within 40 km Radius",
                desc: "Rapid response across Royapettah, Mylapore, T. Nagar, Adyar, and suburbs.",
                icon: MapPin,
                color: "blue",
              },
              {
                title: "Leakage & Pressure Solutions",
                desc: "Concealed leak repair, booster pump fitting, and overhead tank setups.",
                icon: Wrench,
                color: "orange",
              },
            ].map((f, i) => (
              <AnimateReveal key={i} animation="fade-up" delay={i * 0.1}>
                {/* Interactive Card with circular/box border glow and animated icon on hover/touch */}
                <div className="bg-white p-6 rounded-card border border-brand-border shadow-card hover:shadow-[0_0_25px_rgba(23,105,170,0.18)] hover:border-brand-blue/60 transition-all duration-300 group hover:-translate-y-1 h-full cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      f.color === "blue"
                        ? "bg-brand-lightBlue text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                        : "bg-brand-lightOrange text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                    } flex items-center justify-center mb-4 transition-all duration-300 shadow-sm`}
                  >
                    <f.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </AnimateReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — ABOUT A.R PLUMBING */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <AnimateReveal animation="slide-left" delay={0.2}>
                <div className="relative rounded-card overflow-hidden shadow-card border border-brand-border bg-slate-100 aspect-[4/3] group">
                  <Image
                    src="/images/services/building-plumbing-1.webp"
                    alt="A.R Plumbing residential technician installing CPVC pipelines"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/95 backdrop-blur-sm shadow-md">
                    <div className="text-xs font-bold text-brand-navy font-heading">
                      90% Dedicated to Residential Work
                    </div>
                    <div className="text-[11px] text-brand-muted mt-0.5">
                      Royapettah, Chennai • Covering homes within 40 km
                    </div>
                  </div>
                </div>
              </AnimateReveal>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <AnimateReveal animation="fade-up" delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Residential Plumbing Specialists
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy mt-1">
                  Trusted Home Plumbing in Chennai
                </h2>
              </AnimateReveal>

              <AnimateReveal animation="fade-up" delay={0.2}>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  A.R Plumbing is based on Dr. Besant Road, Royapettah, Chennai. We operate with a primary <strong>90% focus on residential plumbing</strong>—catering to individual homeowners, duplex villas, residential flats, apartments, and room renovations across Chennai.
                </p>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed mt-3">
                  We also undertake building and commercial plumbing contracts, but our core strength is residential care: treating your home with utmost respect, ensuring zero damage to surrounding tiles, and testing every joint under hydraulic pressure.
                </p>
              </AnimateReveal>

              <AnimateReveal animation="fade-up" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-brand-text">
                      Flats, apartments, and individual homes
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-brand-text">
                      Within 40 km of Royapettah, Chennai
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-brand-text">
                      Concealed pipe leakage detection
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-brand-text">
                      Direct WhatsApp & phone booking
                    </span>
                  </div>
                </div>
              </AnimateReveal>

              <AnimateReveal animation="fade-up" delay={0.4}>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <span>About Our Company</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={heroWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                      <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                    </div>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </AnimateReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — VERIFIED OFFERINGS (SHOWCASING EXACTLY 3 CLUSTERS) */}
      {/* 1: Water Supply System, 2: Sanitary & Bathroom, 3: Kitchen Plumbing */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Offerings"
            title="Complete Plumbing Service Categories"
            subtitle="Explore our core residential plumbing specializations covering every home requirement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {verifiedClusters.map((cluster, idx) => (
              <AnimateReveal key={cluster.id} animation="fade-up" delay={idx * 0.1}>
                {/* Visual Card with image, short intro, key points, and WhatsApp */}
                <div className="bg-white rounded-card border border-brand-border overflow-hidden shadow-card hover:shadow-[0_8px_30px_rgba(23,105,170,0.14)] hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                  <div>
                    {/* Realistic Service Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={cluster.image}
                        alt={`${cluster.title} - A.R Plumbing Chennai`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Floating Category Badge with Icon */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-navy text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1.5 border border-slate-100 group-hover:border-brand-blue/30 transition-colors">
                        {cluster.id === "water-supply" && <Droplets className="w-3.5 h-3.5 text-brand-blue" />}
                        {cluster.id === "sanitary-bathroom" && <Bath className="w-3.5 h-3.5 text-brand-blue" />}
                        {cluster.id === "kitchen-plumbing" && <Utensils className="w-3.5 h-3.5 text-brand-blue" />}
                        <span>Verified Offering</span>
                      </div>
                    </div>

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

                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(
                        BUSINESS_CONFIG.whatsAppNumber1,
                        `Hello A.R Plumbing, I would like to enquire about ${cluster.title} in Chennai.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-whatsapp hover:underline inline-flex items-center gap-1"
                    >
                      <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                      </div>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </AnimateReveal>
            ))}
          </div>

          {/* Shortened Clean Call to Action Button */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — TOP HOME SERVICES (SHOWCASING ONLY 3 SERVICES) */}
      {/* 1: Building Plumbing Works, 2: Residential Plumbing, 3: Water Supply Pipeline */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Top Home Services"
            title="Popular Residential Plumbing Works"
            subtitle="Our most requested services by homeowners and apartment residents in Chennai."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {topServices.map((service, idx) => (
              <AnimateReveal key={service.slug} animation="fade-up" delay={idx * 0.1}>
                <ServiceCard service={service} />
              </AnimateReveal>
            ))}
          </div>

          {/* CTA: Explore Services */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — WHY CHOOSE A.R PLUMBING (WITH INTERACTIVE HOVER GLOW) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Trust & Quality"
            title="Why Homeowners Choose Us"
            subtitle="Built on technical integrity, respectful tradesmen, and reliable execution within 40 km of Royapettah."
            lightMode
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "90% Residential Dedication",
                desc: "We understand home environments, family schedules, and the importance of clean, quiet workmanship.",
                icon: Building2,
              },
              {
                title: "Local to Royapettah (40 km)",
                desc: "Rapid mobilization from central Chennai across Mylapore, T. Nagar, Adyar, Velachery, and OMR.",
                icon: MapPin,
              },
              {
                title: "Zero Concealed Leaks",
                desc: "Mandatory 24-hour hydrostatic pressure testing on rough-in waterlines before masonry closure.",
                icon: ShieldCheck,
              },
              {
                title: "Modern Fixture Expertise",
                desc: "Specialized in luxury thermostatic diverters, wall-hung EWCs, and modular kitchen plumbing.",
                icon: Bath,
              },
              {
                title: "Genuine Branded Fittings",
                desc: "Strictly certified lead-free CPVC/UPVC pipes (Ashirvad/Astral) and brass valves.",
                icon: Wrench,
              },
              {
                title: "Direct WhatsApp Line",
                desc: "Direct communication with lead plumbing coordinators. No third-party call centers.",
                icon: MessageCircle,
              },
            ].map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <AnimateReveal key={idx} animation="fade-up" delay={idx * 0.1}>
                  <div className="p-6 rounded-card bg-white/5 border border-white/10 hover:border-brand-orange/60 hover:shadow-[0_0_20px_rgba(235,94,40,0.22)] transition-all duration-300 group hover:-translate-y-1 h-full cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-brand-orange transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </AnimateReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — OUR 5-STEP WORKING PROCESS (INTERACTIVE NUMBERS & CARDS) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Structured Workflow"
            title="Our 5-Step Work Process"
            subtitle="Transparent and hassle-free plumbing project execution for Chennai property owners."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4">
            {[
              { step: "01", title: "Initial Enquiry", desc: "Connect on WhatsApp or call to discuss your home requirement." },
              { step: "02", title: "Requirement Review", desc: "Review of site photos, floor plans, or issue details." },
              { step: "03", title: "Site Inspection", desc: "Physical on-site measurement audit within 40 km of Royapettah." },
              { step: "04", title: "Plumbing Execution", desc: "Neat, clean pipe laying and fixture installation by plumbers." },
              { step: "05", title: "Pressure Testing", desc: "Full hydraulic leak testing and final handover to homeowner." },
            ].map((p, idx) => (
              <AnimateReveal key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="bg-white p-5 rounded-card border border-brand-border shadow-sm flex flex-col justify-between h-full group hover:border-brand-blue/60 hover:shadow-[0_0_20px_rgba(23,105,170,0.16)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div>
                    <div className="text-3xl font-extrabold font-heading text-brand-orange mb-2 group-hover:scale-110 group-hover:text-brand-blue transition-all duration-300 inline-block">
                      {p.step}
                    </div>
                    <h3 className="text-base font-bold font-heading text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-brand-blue">
                    <span>Step {idx + 1} of 5</span>
                  </div>
                </div>
              </AnimateReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — CHENNAI SERVICE AREAS (STRICTLY WITHIN 40 KM) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Local Coverage"
            title="Service Areas (Within 40 km)"
            subtitle="Based in Royapettah, Chennai, we serve residential homes and apartments across all key localities."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {BUSINESS_CONFIG.serviceAreas.map((area, idx) => (
              <AnimateReveal key={area.name} animation="fade-up" delay={idx * 0.05}>
                <div className="p-4 rounded-card bg-brand-offwhite border border-brand-border shadow-sm hover:border-brand-blue/50 hover:shadow-[0_0_15px_rgba(23,105,170,0.15)] hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col justify-between group cursor-pointer">
                  <div>
                    <MapPin className="w-5 h-5 text-brand-orange mx-auto mb-2 transition-transform duration-300 group-hover:scale-120 group-hover:-translate-y-0.5" />
                    <div className="font-heading font-bold text-sm text-brand-navy group-hover:text-brand-blue transition-colors">
                      {area.name}
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold text-brand-blue mt-1">
                    {area.distance}
                  </div>
                </div>
              </AnimateReveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="text-xs font-semibold text-brand-blue hover:text-brand-orange transition-colors inline-flex items-center gap-1"
            >
              <span>View full 40 km area coverage details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — GOOGLE MY BUSINESS 5-STAR REVIEWS AUTO-CAROUSEL (3 SECONDS) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-brand-offwhite border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Feedback"
            title="Verified Google Reviews"
            subtitle="Authentic feedback from homeowners across Chennai who trust A.R Plumbing for their home plumbing."
          />

          {/* Auto-cycling Review Carousel transitioning every 3 seconds */}
          <ReviewCarousel />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — HOMEPAGE FAQs (EXACTLY SIX FAQs, ANSWERS <= 18 WORDS) */}
      {/* ========================================================================= */}
      <FAQAccordion
        faqs={HOMEPAGE_FAQS}
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our residential plumbing services in Chennai."
      />
    </div>
  );
}
