"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/lib/config";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = `Hello A.R Plumbing, I would like to enquire about residential plumbing services in Chennai.`;
  const whatsappUrl = getWhatsAppUrl(BUSINESS_CONFIG.whatsAppNumber1, defaultMessage);

  return (
    <div
      className="fixed z-50 transition-all duration-300 pointer-events-auto
        bottom-6 right-5 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10"
    >
      <div className="relative flex items-center group">
        {/* Tooltip */}
        <div
          role="tooltip"
          className={`absolute right-full mr-3 px-3 py-1.5 bg-brand-navy text-white text-xs sm:text-sm font-semibold rounded-md shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat with A.R Plumbing
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-brand-navy" />
        </div>

        {/* WhatsApp Official Circular Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with A.R Plumbing on official WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulseGlow focus:outline-none focus:ring-4 focus:ring-brand-whatsapp/40"
        >
          <Image
            src="/images/whatsapp-official.png"
            alt="Official WhatsApp Chat"
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 640px) 56px, 64px"
            priority
          />
          <span className="sr-only">Chat With A.R Plumbing on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
