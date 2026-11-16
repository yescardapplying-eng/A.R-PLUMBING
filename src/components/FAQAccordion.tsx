"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear, straightforward answers about our plumbing contracting services in Chennai.",
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-12 sm:py-16 md:py-20 bg-brand-offwhite ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-lightBlue text-brand-blue border border-brand-blue/20 mb-3">
              Helpful Insights
            </span>
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-sm sm:text-base text-brand-muted max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-16 h-1 bg-brand-orange rounded-full mx-auto mt-4" />
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-brand-border rounded-card overflow-hidden transition-all duration-200 shadow-sm hover:border-brand-blue/40"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors hover:bg-slate-50/70"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-brand-navy pr-2 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-brand-orange text-white rotate-180"
                        : "bg-brand-lightBlue text-brand-blue hover:bg-brand-blue hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-brand-muted leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
