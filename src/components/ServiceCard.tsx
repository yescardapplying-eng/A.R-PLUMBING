"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Building2,
  House,
  Briefcase,
  Layers,
  Droplets,
  Waves,
  Bath,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Utensils,
  Wrench,
  AlertCircle,
  Container,
  Gauge,
  ClipboardCheck,
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/lib/config";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-brand-blue" };
    switch (iconName) {
      case "Building2":
        return <Building2 {...props} />;
      case "House":
        return <House {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "Droplets":
        return <Droplets {...props} />;
      case "Waves":
        return <Waves {...props} />;
      case "Bath":
        return <Bath {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "CheckCircle":
        return <CheckCircle {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "Utensils":
        return <Utensils {...props} />;
      case "AlertCircle":
        return <AlertCircle {...props} />;
      case "Container":
        return <Container {...props} />;
      case "Gauge":
        return <Gauge {...props} />;
      case "ClipboardCheck":
        return <ClipboardCheck {...props} />;
      default:
        return <Wrench {...props} />;
    }
  };

  const whatsappNumber =
    service.contactNumberType === "number2"
      ? BUSINESS_CONFIG.whatsAppNumber2
      : BUSINESS_CONFIG.whatsAppNumber1;

  const whatsappLink = getWhatsAppUrl(whatsappNumber, service.whatsappMessage);

  return (
    <div className="group bg-white rounded-card border border-brand-border overflow-hidden shadow-card hover:shadow-cardHover hover:border-brand-blue/40 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Service Card Image */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
        <Image
          src={service.heroImage}
          alt={`${service.title} - A.R Plumbing Chennai`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-navy text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          {getIcon(service.icon)}
          <span>{service.category}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-1">
            {service.title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Scope Preview */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
            {service.workScope.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-brand-text/90">
                <span className="text-brand-orange font-bold mt-0.5">•</span>
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-1 py-2 px-3 text-xs font-semibold rounded-btn border border-brand-border text-brand-navy hover:bg-brand-lightBlue hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white shadow-sm transition-all duration-200"
            aria-label={`Enquire on WhatsApp about ${service.title}`}
          >
            <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
            </div>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
