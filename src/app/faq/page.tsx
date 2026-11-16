import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import { HOMEPAGE_FAQS, ABOUT_FAQS, SERVICES_OVERVIEW_FAQS } from "@/data/faqData";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

export const metadata = {
  title: "Frequently Asked Questions | A.R Plumbing Contractors Chennai",
  description:
    "Find clear answers to common questions about A.R Plumbing contracting services, residential appointments, commercial project execution, and Chennai service areas.",
};

export default function FAQPage() {
  const whatsappUrl = getWhatsAppUrl(
    BUSINESS_CONFIG.whatsAppNumber1,
    "Hello A.R Plumbing, I have a question regarding your plumbing services in Chennai."
  );

  const combinedFaqs = [
    ...HOMEPAGE_FAQS,
    ...SERVICES_OVERVIEW_FAQS,
  ];

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-orange-400 border border-white/15 mb-3">
              Knowledge & Support
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Find transparent answers about our plumbing contracting terms, residential home services, materials installed, and site execution process across Chennai.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <section className="py-16 sm:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Common Enquiries"
            title="Everything You Need to Know About Our Services"
            subtitle="Straightforward answers regarding our contracts, rates, inspection visits, and technical practices."
          />

          <FAQAccordion faqs={combinedFaqs} title="" subtitle="" className="py-0 bg-transparent" />
        </div>
      </section>

      {/* Dedicated Three FAQs for this Page */}
      <FAQAccordion
        faqs={ABOUT_FAQS}
        title="Still Have Questions About Our Capabilities?"
        subtitle="Here are three key insights about how our team mobilizes and works with builders."
      />

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Have a Specific Question Not Listed Here?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Reach out directly via WhatsApp or phone call. Our team will be glad to assist with your specific plumbing query.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-brand-whatsapp text-white font-semibold text-sm shadow-whatsapp hover:bg-brand-whatsappHover transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-white text-brand-navy font-semibold text-sm hover:bg-slate-100 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call Us: {BUSINESS_CONFIG.phoneNumber1Display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
