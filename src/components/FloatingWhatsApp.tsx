"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/lib/config";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = `Hello A.R Plumbing, I visited your website and would like to enquire about your plumbing services in Chennai.`;
  const whatsappUrl = getWhatsAppUrl(BUSINESS_CONFIG.whatsAppNumber1, defaultMessage);

  return (
    <div
      className="fixed z-50 transition-all duration-300 pointer-events-auto
        bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-28 md:right-8 lg:bottom-[170px] lg:right-[150px]"
    >
      <div className="relative flex items-center group">
        {/* Tooltip */}
        <div
          role="tooltip"
          className={`absolute right-full mr-3 px-3 py-1.5 bg-brand-navy text-white text-xs sm:text-sm font-medium rounded-md shadow-lg whitespace-nowrap transition-all duration-200 pointer-events-none ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat With A.R Plumbing
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-brand-navy" />
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat With A.R Plumbing on WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-whatsapp text-white shadow-whatsapp hover:shadow-whatsappHover hover:scale-105 active:scale-95 transition-all duration-300 animate-pulseGlow focus:outline-none focus:ring-4 focus:ring-brand-whatsapp/40"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current stroke-none" />
          <span className="sr-only">Chat With A.R Plumbing on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
