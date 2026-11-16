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
  HardHat,
  Wrench,
  CheckCircle2,
  Clock,
  MapPin,
  ClipboardList,
  Flame,
  ChevronRight,
  Droplets,
  Layers,
  Sparkles,
  Bath,
  Hotel,
  Factory,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { SERVICES_DATA } from "@/data/servicesData";
import { PROJECTS_DATA } from "@/data/projectsData";
import { GALLERY_ITEMS } from "@/data/galleryData";
import { HOMEPAGE_FAQS } from "@/data/faqData";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "A.R Plumbing | Reliable Plumbing Contractors in Chennai",
  description:
    "A.R Plumbing delivers professional plumbing solutions for residential buildings, commercial properties, apartments and construction projects in Chennai. Direct WhatsApp and phone bookings.",
};

export default function HomePage() {
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);

  const heroWhatsApp = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I visited your website and would like to enquire about plumbing contracting services for our project in Chennai."
  );

  const heroCall = getPhoneUrl(BUSINESS_CONFIG.phoneNumber1);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-br from-brand-navyDark via-brand-navy to-[#16385C] text-white py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-brand-border/20">
        {/* Subtle geometric background accents */}
        <div className="absolute inset-0 bg-[radial-gradient(#1769AA_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Description & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs sm:text-sm font-semibold tracking-wide border border-white/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                <span>Professional Plumbing Contractors • Chennai, Tamil Nadu</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-extrabold font-heading text-white tracking-tight leading-[1.18]">
                Reliable Plumbing Contractors in Chennai for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-orange to-yellow-400">
                  Residential & Commercial Projects
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                A.R Plumbing delivers professional plumbing solutions for residential buildings, commercial properties, apartments and construction projects. From plumbing installation to complete site execution, connect with our team for your plumbing requirements.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href={heroWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm sm:text-base shadow-whatsapp hover:shadow-whatsappHover transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={heroCall}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-btn bg-white hover:bg-slate-100 text-brand-navy font-semibold text-sm sm:text-base shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                >
                  <Phone className="w-5 h-5 text-brand-orange" />
                  <span>Call Our Team</span>
                </a>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-btn border border-white/25 hover:bg-white/10 text-white font-medium text-sm sm:text-base transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Key Badges */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left text-xs sm:text-sm text-slate-300">
                <div className="flex flex-col lg:flex-row items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Pressure Tested Joints</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Turnkey & Labor Work</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>All Across Chennai</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image (Realistic Indian Plumbing Site Photo) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Frame */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand-orange/40 via-brand-blue/30 to-white/10 blur-md transform rotate-1" />

                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/hero-plumbing-site.jpg"
                    alt="A.R Plumbing technicians installing CPVC water supply pipelines on an Indian construction site in Chennai"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 550px"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-lg shadow-lg text-brand-navy flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold font-heading">
                        Site Execution in Chennai
                      </div>
                      <div className="text-[11px] text-brand-muted">
                        CPVC / UPVC water lines & SWR drainage
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-blue bg-brand-lightBlue px-2 py-1 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Active Sites
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — BUSINESS TRUST HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-brand-offwhite border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-card border border-brand-border shadow-card hover:shadow-cardHover transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy mb-2">
                Residential & Commercial Work
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Plumbing contracting tailored for individual villas, high-density apartment blocks, corporate offices, and retail facilities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-card border border-brand-border shadow-card hover:shadow-cardHover transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-brand-lightOrange text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy mb-2">
                Skilled Plumbing Workforce
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Hands-on plumbing tradesmen trained in solvent-weld fusion, shaft bracketing, and sanitary fixture alignment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-card border border-brand-border shadow-card hover:shadow-cardHover transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy mb-2">
                Building Project Execution
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Structured phased execution from structural slab sleeve coordination to rooftop distribution manifold commissioning.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-card border border-brand-border shadow-card hover:shadow-cardHover transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-brand-lightOrange text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy mb-2">
                Installation & Maintenance
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Complete installation of CPVC/UPVC pipes, SWR drains, booster pumps, storage tanks, and preventative maintenance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — ABOUT A.R PLUMBING */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Realistic Site Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-card overflow-hidden shadow-card border border-brand-border bg-slate-100 aspect-[4/3] sm:aspect-square">
                <Image
                  src="/images/services/building-plumbing-1.webp"
                  alt="A.R Plumbing contractor team at building construction site in Chennai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/95 backdrop-blur-sm shadow-md">
                  <div className="text-xs font-bold text-brand-navy font-heading">
                    Engineering Discipline on Every Site
                  </div>
                  <div className="text-[11px] text-brand-muted mt-0.5">
                    Coordinated with architects, builders, and structural drawings.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Company Introduction */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-lightBlue text-brand-blue border border-brand-blue/20">
                Company Introduction
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight">
                Engineered Plumbing Solutions for Modern Chennai Properties
              </h2>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                A.R Plumbing is a specialized plumbing contracting firm operating in Chennai, Tamil Nadu. We plan, execute, and maintain reliable plumbing systems for newly constructed residential buildings, apartment complexes, commercial business centers, and renovation projects.
              </p>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Rather than treating plumbing as an afterthought, our team approaches every pipeline with engineering rigor: calculating hydraulic slopes for self-cleansing drainage, sizing supply headers to eliminate pressure drops, and testing rough-in joints under hydrostatic load before wall surfaces are enclosed.
              </p>

              {/* Working Approach Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-brand-text">
                    Zero-leakage hydrostatic pressure testing
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-brand-text">
                    Strict adherence to Indian plumbing standards
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-brand-text">
                    Coordinated rough-ins with civil masons
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-brand-text">
                    Direct communication with project owners
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all duration-200 shadow-sm"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(
                    BUSINESS_CONFIG.whatsAppNumber1,
                    "Hello A.R Plumbing, I would like to discuss our plumbing requirements in Chennai."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all duration-200 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — OUR PLUMBING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Core Capabilities"
            title="Professional Plumbing Services in Chennai"
            subtitle="From multi-storey building rough-ins to residential pipeline upgrades and sanitary fittings, explore our verified plumbing capabilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              <span>Explore All 16 Plumbing Services</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — PROJECT TYPES WE SERVE */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sectors & Facilities"
            title="Project Types We Serve Across Chennai"
            subtitle="Our plumbing teams are equipped with appropriate tools, pipe materials, and safety protocols for each building category."
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Residential Buildings", desc: "Independent villas, bungalows, and duplex homes.", icon: "House" },
              { title: "Apartment Complexes", desc: "Multi-family residential gated communities.", icon: "Building2" },
              { title: "High-Rise Towers", desc: "10+ floor residential and commercial towers.", icon: "Layers" },
              { title: "Commercial Buildings", desc: "Offices, retail complexes, and IT parks.", icon: "Briefcase" },
              { title: "Construction Sites", desc: "Turnkey plumbing rough-in for new civil sites.", icon: "HardHat" },
              { title: "Industrial Facilities", desc: "Workshops, warehouses, and factories.", icon: "Factory" },
              { title: "Hospitals & Clinics", desc: "Hygienic sanitary and drainage installations.", icon: "ShieldCheck" },
              { title: "Hotels & Hospitality", desc: "High-volume guest bathrooms and kitchens.", icon: "Hotel" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-card border border-brand-border bg-brand-offwhite/50 hover:bg-white hover:border-brand-blue/40 shadow-sm hover:shadow-card transition-all duration-200 group text-center flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-brand-navy group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — WHY CHOOSE A.R PLUMBING */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1769AA_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Engineering Standards"
            title="Why Choose A.R Plumbing"
            subtitle="Built on technical integrity, experienced tradesmen, and reliable execution for Chennai property owners and builders."
            lightMode
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Professional Plumbing Workforce",
                desc: "Experienced plumbers who specialize in fusion jointing, wall-hung sanitary brackets, and complex drainage stacks.",
                icon: Users,
              },
              {
                title: "Residential & Commercial Expertise",
                desc: "Capable of handling both delicate luxury bathroom fittings and heavy-duty multi-floor riser manifold networks.",
                icon: Building2,
              },
              {
                title: "Site-Based Project Execution",
                desc: "Direct daily supervision on your construction site to coordinate seamlessly with civil, electrical, and tile masons.",
                icon: HardHat,
              },
              {
                title: "Organized Work Process",
                desc: "Clear milestones: drawing review, rough-in, hydraulic testing, stack routing, and final fixture commissioning.",
                icon: ClipboardList,
              },
              {
                title: "Quality-Focused Workmanship",
                desc: "Strict adherence to pipe gradient standards, genuine branded solvent cements, and mandatory 24-hr pressure tests.",
                icon: ShieldCheck,
              },
              {
                title: "Direct Customer Communication",
                desc: "Direct WhatsApp and phone access to our lead coordinators. No middlemen or unresponsive call centers.",
                icon: MessageCircle,
              },
            ].map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-card bg-white/5 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — OUR WORKING PROCESS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Structured Workflow"
            title="Our Five-Step Working Process"
            subtitle="From your initial WhatsApp message to final pressure-tested handover, experience transparent plumbing project management."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
            {[
              {
                step: "01",
                title: "Initial Enquiry",
                desc: "Connect directly via WhatsApp or phone call to outline your plumbing needs.",
              },
              {
                step: "02",
                title: "Requirement Discussion",
                desc: "Review of architectural drawings, fixture counts, or residential issues.",
              },
              {
                step: "03",
                title: "Site Inspection & Quotation",
                desc: "On-site physical inspection in Chennai and transparent itemized quote.",
              },
              {
                step: "04",
                title: "Plumbing Execution",
                desc: "Systematic rough-in, pipeline laying, and bracketing by skilled plumbers.",
              },
              {
                step: "05",
                title: "Quality Check & Handover",
                desc: "Hydrostatic leak testing, flow verification, and client sign-off.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-card border border-brand-border shadow-sm flex flex-col justify-between relative group hover:border-brand-blue/50 transition-colors"
              >
                <div>
                  <div className="text-3xl font-extrabold font-heading text-brand-orange mb-2">
                    {p.step}
                  </div>
                  <h3 className="text-base font-bold font-heading text-brand-navy mb-2">
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
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — FEATURED PROJECTS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Representative Portfolio"
            title="Featured Plumbing Projects in Chennai"
            subtitle="Explore representative scopes of work across residential apartments, commercial buildings, and villas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all duration-200 shadow-md"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — OUR WORK GALLERY */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Visual Gallery"
            title="Real Plumbing Work in Progress"
            subtitle="Take a look at authentic building pipeline installations, concealed diverters, Indian toilets, and drainage stacks."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPreview.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-card overflow-hidden bg-white border border-brand-border shadow-card hover:shadow-cardHover transition-all duration-300"
              >
                <div className="relative w-full h-60 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {item.categoryLabel}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-heading font-bold text-sm leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold text-sm transition-all duration-200"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — INDUSTRIES WE SERVE */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Target Sectors"
            title="Industries & Sectors We Serve"
            subtitle="Providing compliant, durable plumbing infrastructure tailored to regulatory codes and industry needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real Estate Builders",
                desc: "Turnkey plumbing contractor execution for multi-storey residential projects.",
                icon: Building2,
              },
              {
                title: "Architects & Contractors",
                desc: "Precision coordination with structural, interior, and MEP engineering drawings.",
                icon: HardHat,
              },
              {
                title: "Corporate & Tech Parks",
                desc: "High-traffic touchless restroom plumbing and scheduled maintenance contracts.",
                icon: Briefcase,
              },
              {
                title: "Homeowners & Societies",
                desc: "Overhead tank connections, pipe renewals, and apartment leak troubleshooting.",
                icon: Users,
              },
            ].map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-card border border-brand-border bg-brand-offwhite/50 hover:bg-white transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 rounded bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-brand-navy mb-1.5">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11 — SERVICE AREAS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-brand-offwhite border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Chennai Coverage"
            title="Service Areas Across Chennai"
            subtitle="A.R Plumbing deploys technicians and supervisors across key residential and commercial localities in Chennai."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {BUSINESS_CONFIG.serviceAreas.map((area) => (
              <div
                key={area.name}
                className="p-4 rounded-card bg-white border border-brand-border shadow-sm hover:border-brand-blue/40 transition-colors text-center"
              >
                <MapPin className="w-5 h-5 text-brand-orange mx-auto mb-2" />
                <div className="font-heading font-bold text-sm text-brand-navy">
                  {area.name}
                </div>
                <div className="text-[11px] text-brand-muted mt-0.5">
                  {area.zone}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="text-xs font-semibold text-brand-blue hover:text-brand-orange transition-colors inline-flex items-center gap-1"
            >
              <span>View full Chennai service area details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12 — CUSTOMER TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Feedback"
            title="Verified Client Feedback"
            subtitle="Direct feedback from site contractors, villa developers, and homeowners who trust A.R Plumbing in Chennai."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "A.R Plumbing executed the complete rough-in and vertical riser stacks for our 12-flat apartment project on OMR. Their team conducted 24-hr pressure testing before plastering, giving us complete confidence against concealed leaks.",
                author: "R. Subramanian",
                role: "Residential Site Contractor, OMR Chennai",
              },
              {
                quote:
                  "Replaced all corroded GI pipes in our 25-year-old Anna Nagar home with CPVC without damaging extra floor tiles. Water pressure in our showers has doubled and reddish rust water is completely gone.",
                author: "Dr. K. Narayanan",
                role: "Homeowner, Anna Nagar Chennai",
              },
              {
                quote:
                  "Installed touchless sensor faucets, urinal batteries, and commercial kitchen grease traps for our office fitout in Perungudi. Delivered on time over weekend shifts with zero disruption to office operations.",
                author: "M. Venkatesh",
                role: "Facilities Manager, Perungudi Tech Park",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-card border border-brand-border bg-brand-offwhite/40 shadow-card flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-brand-text/90 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="font-heading font-bold text-sm text-brand-navy">
                    {t.author}
                  </div>
                  <div className="text-xs text-brand-muted mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 13 — HOMEPAGE FAQs (EXACTLY SIX FAQs) */}
      {/* ========================================================================= */}
      <FAQAccordion
        faqs={HOMEPAGE_FAQS}
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our plumbing contracting capabilities in Chennai."
      />

      {/* ========================================================================= */}
      {/* SECTION 14 — FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-navy via-brand-navyDark to-[#0E2841] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
            Get In Touch
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Looking for Reliable Plumbing Services in Chennai?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need residential plumbing assistance or professional plumbing work for a building project, connect with A.R Plumbing today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={heroWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-base shadow-whatsapp transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current stroke-none" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={heroCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-btn bg-white hover:bg-slate-100 text-brand-navy font-semibold text-base shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-5 h-5 text-brand-orange" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
