import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { DISCLAIMER_FAQS } from "@/data/faqData";

export const metadata = {
  title: "Disclaimer | A.R Plumbing Contractors Chennai",
  description:
    "Disclaimer regarding website illustrations, representative project portfolios, and technical estimates provided by A.R Plumbing.",
};

export default function DisclaimerPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
            Important Notice
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Website Disclaimer
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Important information regarding representative visual media, quotations, and third-party plumbing product warranties.
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base text-brand-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              1. Representative Visual Imagery
            </h2>
            <p>
              Photographs, diagrams, and illustrations displayed on this website are intended to showcase standard Indian plumbing practices, commonly installed CPVC/UPVC materials, SWR drainage configurations, and sanitaryware styles. Unless explicitly identified as a certified case study, visuals serve representative illustrative purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              2. Preliminary Budgetary Estimates
            </h2>
            <p>
              Any informal budgetary ballparks discussed via WhatsApp or phone are preliminary approximations based on client descriptions. Formal, binding project pricing is issued solely following physical site inspection, core measurement verification, or complete review of structural MEP drawings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              3. Manufacturer Product Warranties
            </h2>
            <p>
              A.R Plumbing is an independent plumbing contractor and installation service provider. We do not manufacture plumbing pipes, valves, pumps, or ceramic sanitary fixtures. Material warranties (such as CPVC pipe longevity, diverter cartridge warranties, or pump motor warranties) are governed directly by the respective manufacturing brand.
            </p>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR DISCLAIMER */}
      <FAQAccordion
        faqs={DISCLAIMER_FAQS}
        title="Disclaimer — Frequently Asked Questions"
        subtitle="Clarifications regarding website information, visual representations, and contractor obligations."
      />
    </div>
  );
}
