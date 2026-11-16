"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
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
    { label: "Service Areas in Chennai", href: "/service-areas" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  const topServices = SERVICES_DATA.slice(0, 7);

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-24 md:pb-12 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-700">
          {/* Column 1: Company Profile & Logo */}
          <div className="space-y-4">
            {/* White container for the logo so the 3:1 logo renders crisp and vibrant */}
            <div className="inline-block bg-white p-2.5 rounded-lg shadow-sm">
              <div className="relative w-48 h-12">
                <Image
                  src="/images/ar-plumbing-horizontal-logo.png"
                  alt="A.R Plumbing - Residential, Commercial, Projects"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Professional plumbing contracting engineering firm based in Chennai. We undertake comprehensive residential, commercial, apartment complex, and construction site plumbing contracts with precision and experienced tradesmen.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 text-xs font-medium text-orange-300 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Verified Plumbing Contractors</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold font-heading uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-1.5 group"
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
            <h3 className="text-base font-bold font-heading uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-1.5 group"
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
          <div className="space-y-4">
            <h3 className="text-base font-bold font-heading uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Contact Details
            </h3>

            {/* Phone & WhatsApp Number 1 */}
            <div className="space-y-1">
              <div className="text-xs font-semibold text-orange-400">
                Building & Commercial Projects:
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-200 hover:text-brand-orange transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{BUSINESS_CONFIG.phoneNumber1Display}</span>
                </a>
                <a
                  href={getWhatsAppUrl(
                    BUSINESS_CONFIG.whatsAppNumber1,
                    "Hello A.R Plumbing, I would like to discuss a commercial/building plumbing project in Chennai."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-brand-whatsapp text-white hover:bg-brand-whatsappHover font-medium"
                  aria-label="WhatsApp commercial number"
                >
                  <MessageCircle className="w-3 h-3 fill-current stroke-none" />
                  <span>Chat</span>
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Number 2 */}
            <div className="space-y-1 pt-1">
              <div className="text-xs font-semibold text-orange-400">
                Residential & General Plumbing:
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber2)}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-200 hover:text-brand-orange transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{BUSINESS_CONFIG.phoneNumber2Display}</span>
                </a>
                <a
                  href={getWhatsAppUrl(
                    BUSINESS_CONFIG.whatsAppNumber2,
                    "Hello A.R Plumbing, I need residential plumbing services for my home in Chennai."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-brand-whatsapp text-white hover:bg-brand-whatsappHover font-medium"
                  aria-label="WhatsApp residential number"
                >
                  <MessageCircle className="w-3 h-3 fill-current stroke-none" />
                  <span>Chat</span>
                </a>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu, India (Serving Anna Nagar, Adyar, OMR, Velachery, Porur & all Chennai areas)</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
