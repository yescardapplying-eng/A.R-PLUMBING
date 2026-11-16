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
import AnimateReveal from "@/components/AnimateReveal";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { ABOUT_FAQS } from "@/data/faqData";

export const metadata = {
  title: "About Us | Residential Plumbing Contractors in Chennai",
  description:
    "Learn about A.R Plumbing, Chennai's dedicated residential plumbing contractor specializing in home pipelines, flats, apartments & villas within 40 km of Royapettah.",
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I visited your About Us page and would like to discuss our plumbing requirements in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <AnimateReveal animation="fade-down" delay={0.1}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
                About A.R Plumbing
              </span>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                About A.R Plumbing
              </h1>
            </AnimateReveal>

            <AnimateReveal animation="fade-up" delay={0.3}>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Headquartered in Royapettah, Chennai, we are professional plumbing contractors with a primary <strong>90% focus on residential properties</strong>—serving homes, flats, apartments, and villas within a 40 km operational radius.
              </p>
            </AnimateReveal>
          </div>
        </div>
      </section>

      {/* Company Introduction & Capabilities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 relative">
              <AnimateReveal animation="slide-left" delay={0.2}>
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
                    Royapettah, Chennai (Within 40 km)
                  </strong>
                  Structured coordination with homeowners, site engineers, and architects.
                </div>
              </AnimateReveal>
            </div>

            {/* Story & Approach */}
            <div className="lg:col-span-7 space-y-5">
              <AnimateReveal animation="fade-up" delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Our Plumbing Standards
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy mt-1">
                  Craftsmanship Rooted in Precision
                </h2>
              </AnimateReveal>

              <AnimateReveal animation="fade-up" delay={0.2}>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  A.R Plumbing was built around a straightforward principle: plumbing must be executed with mathematical precision. In flats and individual homes alike, concealed pipeline failures lead to costly structural damage, peeling plaster, and endless headaches.
                </p>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed mt-2">
                  Our approach emphasizes proper hydraulic slope design for self-cleansing SWR drainage, certified lead-free CPVC/UPVC pipe fittings, and mandatory hydrostatic pressure testing for at least 24 hours before any wall surfaces are enclosed.
                </p>
              </AnimateReveal>

              <AnimateReveal animation="fade-up" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-brand-lightBlue/50 border border-brand-blue/20">
                    <h4 className="font-heading font-bold text-sm text-brand-navy mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-blue" />
                      90% Home Focused
                    </h4>
                    <p className="text-xs text-brand-muted">
                      Tailored specifically for homes, flats, apartments, villas, and room renovations.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-brand-lightOrange/50 border border-brand-orange/20">
                    <h4 className="font-heading font-bold text-sm text-brand-navy mb-1 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-brand-orange" />
                      Pressure-Tested Joints
                    </h4>
                    <p className="text-xs text-brand-muted">
                      Every joint is hydraulically tested under 7 to 10 bar working pressure with calibrated gauges.
                    </p>
                  </div>
                </div>
              </AnimateReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Handled */}
      <section className="py-16 sm:py-20 bg-brand-offwhite border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Versatility"
            title="Properties We Handle"
            subtitle="Expertise spanning homes, flats, and multi-storey towers in Chennai."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Homes & Duplex Villas",
                desc: "Complete concealed plumbing, pressure booster pump integration, and luxury thermostatic shower diverters.",
              },
              {
                title: "Residential Apartments",
                desc: "Plumbing for flats, bathroom rough-ins, and terrace water balancing manifolds.",
              },
              {
                title: "Pipeline Renovations",
                desc: "Decommissioning old rusted GI metal pipes in older Chennai residences and replacing them with modern CPVC.",
              },
              {
                title: "High-Rise Towers",
                desc: "Vertical riser shafts with Pressure Reducing Valves (PRVs), expansion joints, and acoustically insulated stacks.",
              },
              {
                title: "Commercial Spaces",
                desc: "Pantry waterlines, touchless sensor restrooms, and cafeteria grease interceptor drains.",
              },
              {
                title: "Housing Societies",
                desc: "Scheduled maintenance contracts for pump rooms, valve checks, and pre-monsoon storm drainage cleaning.",
              },
            ].map((p, i) => (
              <AnimateReveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="bg-white p-6 rounded-card border border-brand-border shadow-sm hover:border-brand-blue/40 transition-colors h-full">
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
              </AnimateReveal>
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
            Discuss Your Home Plumbing
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Connect directly with A.R Plumbing via WhatsApp or phone call for site inspections across Chennai.
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
