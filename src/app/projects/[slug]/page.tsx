import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  MapPin,
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { PROJECTS_DATA, getProjectBySlug } from "@/data/projectsData";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | A.R Plumbing Projects Chennai`,
    description: project.overview,
    openGraph: {
      title: `${project.title} - A.R Plumbing`,
      description: project.overview,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    project.whatsappMessage
  );

  return (
    <div className="w-full">
      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-brand-navy text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15">
                  <Building2 className="w-3.5 h-3.5" />
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-lightBlue text-brand-navy">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  {project.location}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {project.overview}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>Enquire About Similar Project</span>
                </a>
                <a
                  href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-white text-brand-navy font-semibold text-sm hover:bg-slate-100 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call: {BUSINESS_CONFIG.phoneNumber1Display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-card overflow-hidden shadow-2xl border-2 border-white/20 aspect-[16/11] bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
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

      {/* Main Details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Scope of Work */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  Contract Scope of Work
                </h2>
                <div className="space-y-3">
                  {project.scopeOfWork.map((scope, idx) => (
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

              {/* Materials Installed */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  Specified Piping & Fittings
                </h2>
                <div className="p-5 rounded-card bg-brand-lightBlue/30 border border-brand-blue/20 space-y-2">
                  {project.materialsInstalled.map((mat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-text">
                      <span className="text-brand-blue font-bold">•</span>
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Engineering Outcomes & Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyOutcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-card border border-emerald-200 bg-emerald-50/50"
                    >
                      <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                      <p className="text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-card bg-brand-navy text-white shadow-xl space-y-5 sticky top-24">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-orange text-white uppercase tracking-wider">
                  Contractor Execution
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Executing Projects Across Chennai
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Connect with our team to discuss project timelines, drawing coordination, and mobilization schedule.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>WhatsApp Project Lead</span>
                  </a>

                  <a
                    href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-white hover:bg-slate-100 text-brand-navy font-semibold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call: {BUSINESS_CONFIG.phoneNumber1Display}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-700 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Client Type:</span>
                    <span className="font-medium text-white">{project.clientType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-medium text-white">{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs SPECIFIC TO THIS PROJECT */}
      <FAQAccordion
        faqs={project.faqs}
        title="Project Technical FAQs"
        subtitle="Detailed hydraulic and site engineering insights from this project."
      />
    </div>
  );
}
