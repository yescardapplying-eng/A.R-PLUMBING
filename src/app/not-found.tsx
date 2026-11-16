import React from "react";
import Link from "next/link";
import { MessageCircle, Home, Wrench, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/lib/config";

export const metadata = {
  title: "Page Not Found | A.R Plumbing Chennai",
  description: "Oops! This page could not be found. Return to A.R Plumbing homepage or contact our team on WhatsApp.",
};

export default function NotFound() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I reached a 404 page on your website and would like assistance."
  );

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-offwhite py-16 px-4 sm:px-6">
      <div className="max-w-xl w-full text-center bg-white p-8 sm:p-12 rounded-card border border-brand-border shadow-card space-y-6">
        {/* Badge & Icon */}
        <div className="w-16 h-16 rounded-full bg-brand-lightOrange text-brand-orange mx-auto flex items-center justify-center">
          <Wrench className="w-8 h-8 animate-bounce" />
        </div>

        <div>
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy mt-1">
            Oops! This Page Could Not Be Found.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
            The page you are looking for may have moved, been renamed, or no longer exists on the A.R Plumbing website.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn border border-brand-border hover:bg-slate-50 text-brand-navy font-semibold text-sm transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-brand-orange" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-semibold text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current stroke-none" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
