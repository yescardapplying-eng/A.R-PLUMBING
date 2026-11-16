"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { SERVICES_DATA } from "@/data/servicesData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Projects / Portfolio", href: "/projects" },
    { label: "Our Gallery", href: "/gallery" },
    { label: "Service Areas (40 km)", href: "/service-areas" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  const topServices = SERVICES_DATA.slice(0, 7);

  return (
    <footer className="bg-brand-navy text-white pt-12 pb-10 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pb-10 border-b border-slate-700/80">
          {/* Column 1: Company Profile & Single Clean Logo */}
          <div className="space-y-4">
            {/* Perfectly sized, prominent logo with minimal tight white padding */}
            <div className="inline-flex items-center justify-center p-2 rounded-xl bg-white shadow-md border border-slate-100">
              <div className="relative w-48 sm:w-56 h-13 sm:h-15">
                <Image
                  src="/images/ar-plumbing-horizontal-logo-tight.png"
                  alt="A.R Plumbing - Residential, Commercial, Projects"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 200px, 240px"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Chennai&apos;s trusted residential plumbing contractor. We specialize in home pipeline installations, luxury bathroom fittings, drainage networks, and apartment maintenance within 40 km of Royapettah.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 text-xs font-medium text-orange-300 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>90% Residential Focus • Verified Contractors</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-white mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-1.5 group text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-white mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-1.5 group text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-brand-orange hover:underline inline-flex items-center gap-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-white mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Contact Details
            </h3>

            {/* Line 1: Residential & Home Plumbing */}
            <div className="space-y-1">
              <div className="text-xs font-semibold text-orange-400">
                Residential & Home Plumbing (Primary):
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-100 hover:text-brand-orange transition-colors font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{BUSINESS_CONFIG.phoneNumber1Display}</span>
                </a>
                <a
                  href={getWhatsAppUrl(
                    BUSINESS_CONFIG.whatsAppNumber1,
                    "Hello A.R Plumbing, I need residential plumbing assistance in Chennai."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-brand-whatsapp text-white hover:bg-brand-whatsappHover font-medium"
                  aria-label="WhatsApp residential number"
                >
                  <MessageCircle className="w-3 h-3 fill-current stroke-none" />
                  <span>Chat</span>
                </a>
              </div>
            </div>

            {/* Line 2: Building Projects & Contracts */}
            <div className="space-y-1 pt-1">
              <div className="text-xs font-semibold text-orange-400">
                Building Projects & Contracts:
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber2)}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-100 hover:text-brand-orange transition-colors font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{BUSINESS_CONFIG.phoneNumber2Display}</span>
                </a>
                <a
                  href={getWhatsAppUrl(
                    BUSINESS_CONFIG.whatsAppNumber2,
                    "Hello A.R Plumbing, I would like to discuss a plumbing project in Chennai."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-brand-whatsapp text-white hover:bg-brand-whatsappHover font-medium"
                  aria-label="WhatsApp projects number"
                >
                  <MessageCircle className="w-3 h-3 fill-current stroke-none" />
                  <span>Chat</span>
                </a>
              </div>
            </div>

            {/* Verified Address & Hours */}
            <div className="pt-1.5 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {BUSINESS_CONFIG.address}
                </span>
              </div>
              <div className="text-[11px] text-orange-300 font-medium pl-6">
                Coverage: Within 40 km radius of Royapettah
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright © {currentYear} A.R Plumbing. All Rights Reserved.
          </div>
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-orange transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-brand-orange transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-brand-orange transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
