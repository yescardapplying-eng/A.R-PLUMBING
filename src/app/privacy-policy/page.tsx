import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { PRIVACY_POLICY_FAQS } from "@/data/faqData";
import { BUSINESS_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy | A.R Plumbing Contractors Chennai",
  description:
    "Privacy Policy for A.R Plumbing. Learn how we handle client privacy, WhatsApp communication, direct telephone calls, and website analytics.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
            Transparency & Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Last Updated: 2026. A.R Plumbing is committed to respecting and protecting the privacy of our visitors and clients.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base text-brand-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              1. No Form Submissions or Personal Data Collection via Forms
            </h2>
            <p>
              A.R Plumbing does NOT use contact forms, lead capture forms, newsletter sign-ups, or user registration inputs anywhere on this website. We do not store your personal details, email addresses, or phone numbers in a web database through this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              2. Direct WhatsApp and Telephone Communications
            </h2>
            <p>
              All customer communication initiated through this website takes place via external third-party communication tools:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-brand-text">
              <li>
                <strong>WhatsApp:</strong> Clicking WhatsApp buttons opens the official WhatsApp application on your device (via wa.me links). Your chat is subject to WhatsApp&apos;s end-to-end encryption and privacy policies.
              </li>
              <li>
                <strong>Telephone Calls:</strong> Clicking phone buttons initiates a standard voice telephone call through your cellular carrier or device dialer.
              </li>
            </ul>
            <p className="mt-2">
              Any information you choose to share with our team (such as site address, floor plans, or project specifications) is used strictly to provide you with plumbing consultations, estimates, and on-site contracting execution.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              3. Analytics & Technical Logs
            </h2>
            <p>
              Like most websites, our web hosting infrastructure may collect standard non-identifying technical logs such as browser type, referring URL, operating system, and general aggregated visit statistics. If Google Analytics is configured, it collects anonymous aggregated usage metrics to help us optimize website performance and user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              4. Data Sharing & Third-Party Disclosure
            </h2>
            <p>
              A.R Plumbing does not sell, trade, rent, or disclose any client phone numbers, site locations, or personal conversation logs to third-party marketing companies, advertisers, or data brokers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-brand-navy mb-3">
              5. Contact Us Regarding Privacy
            </h2>
            <p>
              If you have any questions about our privacy practices, you may reach our coordinators directly at:
            </p>
            <p className="mt-2 text-brand-navy font-semibold">
              A.R Plumbing • Chennai, Tamil Nadu • Phone: {BUSINESS_CONFIG.phoneNumber1Display} • Email: {BUSINESS_CONFIG.email}
            </p>
          </div>
        </div>
      </section>

      {/* EXACTLY THREE FAQs FOR PRIVACY POLICY */}
      <FAQAccordion
        faqs={PRIVACY_POLICY_FAQS}
        title="Privacy — Frequently Asked Questions"
        subtitle="Clarifications on our strict no-form policy and communications privacy."
      />
    </div>
  );
}
