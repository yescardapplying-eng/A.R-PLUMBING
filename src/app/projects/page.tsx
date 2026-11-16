import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, ArrowRight, Building2, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import { PROJECTS_DATA } from "@/data/projectsData";
import { PROJECTS_OVERVIEW_FAQS } from "@/data/faqData";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

export const metadata = {
  title: "Plumbing Projects & Portfolio | A.R Plumbing Chennai",
  description:
    "Explore representative plumbing projects executed by A.R Plumbing across residential apartments, commercial buildings, villas, and high-rise developments in Chennai.",
};

export default function ProjectsPage() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I visited your Projects portfolio and would like to enquire about a plumbing project in Chennai."
  );

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Projects / Portfolio" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
              Representative Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Plumbing Projects Across Chennai
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore representative scopes of work across residential apartments, IT commercial complexes, gated villas, and high-rise vertical stacks executed by A.R Plumbing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Project Highlights"
            title="Representative Contract Scopes & Executions"
            subtitle="Each project represents our structured engineering approach, pressure-tested pipe connections, and clean site management."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR PROJECTS */}
      <FAQAccordion
        faqs={PROJECTS_OVERVIEW_FAQS}
        title="Project Execution — Frequently Asked Questions"
        subtitle="Insights regarding our site handover documentation, site visits, and project timelines."
      />

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Have a Plumbing Project Coming Up in Chennai?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Share your drawings or tender schedule with our lead engineers over WhatsApp for a prompt project discussion.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>Discuss Project on WhatsApp</span>
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
