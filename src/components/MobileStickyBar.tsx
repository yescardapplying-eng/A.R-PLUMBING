"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

export default function MobileStickyBar() {
  const callUrl = getPhoneUrl(BUSINESS_CONFIG.phoneNumber1);
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I would like to enquire about your plumbing services in Chennai."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-brand-border shadow-lg px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={callUrl}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-sm"
          aria-label="Call A.R Plumbing"
        >
          <Phone className="w-4 h-4" />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-sm"
          aria-label="WhatsApp A.R Plumbing"
        >
          <MessageCircle className="w-4 h-4 fill-current stroke-none" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
}
