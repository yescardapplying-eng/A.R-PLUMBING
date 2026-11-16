import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  HardHat,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Wrench,
  Clock,
  MapPin,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { ABOUT_FAQS } from "@/data/faqData";

export const metadata = {
  title: "About Us | Professional Plumbing Contractors in Chennai",
  description:
    "Learn about A.R Plumbing, a trusted plumbing contracting engineering firm in Chennai delivering residential, commercial, and building plumbing execution.",
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I visited your About Us page and would like to discuss our plumbing contracting requirements in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
              About A.R Plumbing
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Engineering Reliability into Chennai&apos;s Plumbing Infrastructure
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We are professional plumbing contractors delivering dependable water supply, drainage, sanitary ware, and pumping systems for residential homes, commercial complexes, and construction projects across Chennai.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction & Capabilities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-card overflow-hidden shadow-card border border-brand-border aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/hero-plumbing-site.jpg"
                  alt="A.R Plumbing technicians on site in Chennai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
              <div className="mt-4 p-4 rounded-lg bg-brand-offwhite border border-brand-border text-xs text-brand-muted">
                <strong className="text-brand-navy block mb-1">
                  On-Site Execution in Chennai
                </strong>
                Structured coordination with site engineers, architects, and civil masons.
              </div>
            </div>

            {/* Story & Approach */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Our Operational Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
                Craftsmanship Rooted in Real Construction Knowledge
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                A.R Plumbing was built around a straightforward principle: plumbing must be executed with mathematical precision. In multi-storey apartments and individual homes alike, concealed pipeline failures lead to costly structural damage, peeling plaster, and endless headaches.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Our approach emphasizes proper hydraulic slope design for self-cleansing SWR drainage, certified lead-free CPVC/UPVC pipe fittings, and mandatory hydrostatic pressure testing for at least 24 hours before any brick chasing or plastering is closed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-brand-lightBlue/50 border border-brand-blue/20">
                  <h4 className="font-heading font-bold text-sm text-brand-navy mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    Turnkey Material & Labor
                  </h4>
                  <p className="text-xs text-brand-muted">
                    We undertake contracts with certified branded pipes or labor-only scopes tailored to client preferences.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-brand-lightOrange/50 border border-brand-orange/20">
                  <h4 className="font-heading font-bold text-sm text-brand-navy mb-1 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-brand-orange" />
                    Pressure-Tested Safety
                  </h4>
                  <p className="text-xs text-brand-muted">
                    Every joint is hydraulically tested under 7 to 10 bar working pressure with calibrated gauges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Handled */}
      <section className="py-16 sm:py-20 bg-brand-offwhite border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Versatility"
            title="Projects Handled Across Chennai"
            subtitle="From individual villa plumbing overhauls to multi-floor apartment vertical shafts."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Apartments",
                desc: "Turnkey plumbing for new apartment developments, bathroom rough-ins, and terrace water balancing manifolds.",
              },
              {
                title: "Villas & Independent Houses",
                desc: "Complete concealed plumbing, pressure booster pump integration, and luxury thermostatic shower diverters.",
              },
              {
                title: "Commercial Offices & IT Parks",
                desc: "High-capacity touchless sensor restrooms, pantry waterlines, and cafeteria grease interceptor drains.",
              },
              {
                title: "High-Rise Multi-Storey Towers",
                desc: "Vertical riser shafts with Pressure Reducing Valves (PRVs), expansion joints, and acoustically insulated stacks.",
              },
              {
                title: "Pipeline Renovations",
                desc: "Decommissioning old rusted GI metal pipes in older Chennai residences and replacing them with modern CPVC.",
              },
              {
                title: "Societies & Facility AMCs",
                desc: "Scheduled maintenance contracts for pump rooms, valve checks, and pre-monsoon storm drainage cleaning.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-card border border-brand-border shadow-sm hover:border-brand-blue/40 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-brand-lightBlue text-brand-blue flex items-center justify-center font-bold text-xs mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-base text-brand-navy mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Approach / Standards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Quality Standards"
            title="Our Non-Negotiable Standards"
            subtitle="How we ensure every pipeline installed by A.R Plumbing stands the test of time."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Authentic Materials",
                desc: "We work strictly with certified brands (Ashirvad, Astral, Supreme, Prince) and genuine brass fittings.",
              },
              {
                title: "Gradient Calculations",
                desc: "Drainage lines are laid with accurate spirit-level gradients (1:40 to 1:60) ensuring rapid self-cleansing flow.",
              },
              {
                title: "Structural Safety",
                desc: "Chasing is kept within safe structural masonry limits, avoiding damage to structural RCC columns and beams.",
              },
              {
                title: "Client Transparency",
                desc: "Clear scope descriptions and itemized quotes without hidden surcharges or surprise billing.",
              },
            ].map((std, idx) => (
              <div
                key={idx}
                className="p-5 rounded-card border border-brand-border bg-brand-offwhite/40 text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <h3 className="font-heading font-bold text-sm sm:text-base text-brand-navy mb-1.5">
                  {std.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR ABOUT US */}
      <FAQAccordion
        faqs={ABOUT_FAQS}
        title="About Us — Frequently Asked Questions"
        subtitle="Common questions regarding our contracting approach, team, and site coordination."
      />

      {/* WhatsApp CTA */}
      <section className="py-14 sm:py-16 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Discuss Your Plumbing Project with Our Team
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Connect directly with A.R Plumbing via WhatsApp or direct phone call for site inspections and quotations across Chennai.
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
              <span>Call: {BUSINESS_CONFIG.phoneNumber1Display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
