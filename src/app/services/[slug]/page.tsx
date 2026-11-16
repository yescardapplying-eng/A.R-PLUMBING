import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Wrench,
  Layers,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES_DATA, getServiceBySlug } from "@/data/servicesData";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Chennai | A.R Plumbing Contractors`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} in Chennai | A.R Plumbing`,
      description: service.shortDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const contactNumber =
    service.contactNumberType === "number2"
      ? BUSINESS_CONFIG.phoneNumber2
      : BUSINESS_CONFIG.phoneNumber1;
  const contactDisplay =
    service.contactNumberType === "number2"
      ? BUSINESS_CONFIG.phoneNumber2Display
      : BUSINESS_CONFIG.phoneNumber1Display;
  const whatsAppNumber =
    service.contactNumberType === "number2"
      ? BUSINESS_CONFIG.whatsAppNumber2
      : BUSINESS_CONFIG.whatsAppNumber1;

  const whatsappUrl = getWhatsAppUrl(whatsAppNumber, service.whatsappMessage);
  const phoneUrl = getPhoneUrl(contactNumber);

  // Related services (exclude current)
  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(
    0,
    3
  );

  return (
    <div className="w-full">
      <Breadcrumbs
        items={[
          { label: "Our Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-brand-navy text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Title & Summary */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15">
                {service.category.toUpperCase()} PLUMBING SERVICE • CHENNAI
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {service.title} in Chennai
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <a
                  href={phoneUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-white text-brand-navy font-semibold text-sm hover:bg-slate-100 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call: {contactDisplay}</span>
                </a>
              </div>
            </div>

            {/* Primary Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-card overflow-hidden shadow-2xl border-2 border-white/20 aspect-[16/11] bg-slate-800">
                <Image
                  src={service.heroImage}
                  alt={`${service.title} - A.R Plumbing installation in Chennai`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Technical Details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Introduction */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy mb-4">
                  Overview & Technical Scope
                </h2>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Work Scope */}
              <div>
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  Scope of Work Handled by Our Plumbing Crew
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.workScope.map((scope, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-brand-offwhite border border-brand-border flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                        {scope}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Photograph & Realistic Materials */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  Site Execution & Material Specifications
                </h3>

                <div className="relative rounded-card overflow-hidden shadow-card border border-brand-border aspect-[16/9] bg-slate-100">
                  <Image
                    src={service.secondaryImage}
                    alt={`${service.title} on-site installation work in Chennai`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 rounded shadow text-xs font-semibold text-brand-navy">
                    Real Site Installation • Indian Plumbing Code Compliant
                  </div>
                </div>

                <div className="p-5 rounded-card bg-brand-lightBlue/40 border border-brand-blue/20 space-y-2">
                  <h4 className="font-heading font-bold text-sm text-brand-navy">
                    Specified Certified Materials:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-brand-text">
                    {service.materialsUsed.map((mat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-blue font-bold">•</span>
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Applications & Where it is Used */}
              <div>
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  Where This Service Is Applied
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-brand-border bg-white shadow-sm flex items-center gap-2.5"
                    >
                      <Building2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-brand-navy font-semibold">
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Execution Process */}
              <div>
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  Our On-Site Execution Process
                </h3>
                <div className="space-y-4">
                  {service.executionProcess.map((proc, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-card border border-brand-border bg-brand-offwhite flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-orange font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {proc.step}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                          {proc.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                          {proc.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Direct Action Card & Related Services */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Booking Card */}
              <div className="p-6 rounded-card bg-brand-navy text-white shadow-xl space-y-5 sticky top-24">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-orange text-white uppercase tracking-wider">
                  Direct Enquiry
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Book Inspection for {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Discuss site measurements, material brands, or schedule an on-site visit in Chennai with our plumbing supervisors.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href={phoneUrl}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-white hover:bg-slate-100 text-brand-navy font-semibold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call: {contactDisplay}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-700 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                    <span>Zero Leak Hydrostatic Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-brand-orange" />
                    <span>Experienced Chennai Plumbing Tradesmen</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="p-5 rounded-card bg-brand-offwhite border border-brand-border">
                <h4 className="font-heading font-bold text-sm text-brand-navy mb-3 uppercase tracking-wider">
                  Related Plumbing Services
                </h4>
                <div className="space-y-2.5">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="block p-3 rounded bg-white border border-brand-border hover:border-brand-blue hover:bg-brand-lightBlue/30 transition-all group"
                    >
                      <div className="text-xs font-bold text-brand-navy group-hover:text-brand-blue flex items-center justify-between">
                        <span>{rel.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-[11px] text-brand-muted line-clamp-1 mt-0.5">
                        {rel.shortDescription}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs SPECIFIC TO THIS SERVICE */}
      <FAQAccordion
        faqs={service.faqs}
        title={`${service.title} — Frequently Asked Questions`}
        subtitle="Common technical questions answered directly by A.R Plumbing engineers."
      />

      {/* Bottom Service CTA */}
      <section className="py-14 sm:py-16 bg-brand-offwhite border-t border-brand-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
            Ready to Begin Your {service.title} in Chennai?
          </h2>
          <p className="text-sm sm:text-base text-brand-muted">
            Send us a message on WhatsApp or call directly for quick scheduling and technical advice.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WhatsApp Direct Enquiry</span>
            </a>
            <a
              href={phoneUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navyDark transition-all"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call: {contactDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
