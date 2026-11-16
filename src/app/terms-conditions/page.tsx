import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { TERMS_FAQS } from "@/data/faqData";
import { BUSINESS_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Terms & Conditions | A.R Plumbing Contractors Chennai",
  description:
    "Terms and Conditions governing plumbing contracting services, site inspections, quotations, and execution by A.R Plumbing in Chennai.",
};

export default function TermsConditionsPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
            Service Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Governing plumbing contracting, site inspection visits, quotations, and milestone handovers across Chennai.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base text-brand-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              1. Contracting Scope & Quotations
            </h2>
            <p>
              All plumbing quotations provided by A.R Plumbing are based on agreed architectural drawings, physical site measurements, or itemized bill of quantities (BOQ). Scope changes requested during active site execution will be billed according to mutually agreed variation rates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              2. Site Readiness & Utilities
            </h2>
            <p>
              For new building construction and renovation sites, the client or general contractor is responsible for ensuring continuous water and single/three-phase electrical supply necessary for hydraulic pressure testing, core cutting, and fusion power tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              3. Hydrostatic Testing & Masonry Sign-Off
            </h2>
            <p>
              A.R Plumbing conducts mandatory hydrostatic pressure testing on concealed pipelines before masonry plastering or tile work begins. Once pressure clearance is signed off by the site engineer or owner, subsequent punctures or damage caused by third-party trades (such as carpenters, drillers, or electricians) are the responsibility of the respective site contractors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              4. Payment Milestones
            </h2>
            <p>
              Commercial contracts and large building projects proceed according to progressive milestone billing: mobilization advance, completion of rough-in piping, completion of vertical riser stacks, and final fixture testing and handover.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              Any disputes arising from contracting services shall be governed under the laws of the State of Tamil Nadu and subject to the exclusive jurisdiction of the competent courts in Chennai, India.
            </p>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR TERMS */}
      <FAQAccordion
        faqs={TERMS_FAQS}
        title="Terms & Conditions — Frequently Asked Questions"
        subtitle="Key legal and operational clarifications for clients and builders."
      />
    </div>
  );
}
