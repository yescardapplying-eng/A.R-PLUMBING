"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle, Building2 } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/lib/config";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    project.whatsappMessage
  );

  return (
    <div className="group bg-white rounded-card border border-brand-border overflow-hidden shadow-card hover:shadow-cardHover hover:border-brand-blue/40 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.title} - A.R Plumbing Chennai`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-brand-orange" />
          <span>{project.category}</span>
        </div>

        {/* Location Tag */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-brand-navy text-xs font-semibold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-brand-orange" />
          <span>{project.location}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
            {project.overview}
          </p>

          {/* Scope Highlight */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
              Key Work Highlights:
            </span>
            {project.scopeOfWork.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-brand-text/90">
                <span className="text-brand-blue font-bold mt-0.5">•</span>
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-1 py-2 px-3 text-xs font-semibold rounded-btn border border-brand-border text-brand-navy hover:bg-brand-lightBlue hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 py-2 px-3 text-xs font-semibold rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white shadow-sm transition-all duration-200"
            aria-label={`Enquire about ${project.title} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
