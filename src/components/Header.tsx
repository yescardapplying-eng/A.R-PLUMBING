"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Building2,
  House,
  Briefcase,
  Layers,
  Droplets,
  Waves,
  Bath,
  Wrench,
} from "lucide-react";
import { BUSINESS_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { SERVICES_DATA } from "@/data/servicesData";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  // Main navigation without "Service Areas" as per user instruction
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Our Services",
      href: "/services",
      hasDropdown: true,
    },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const featuredServices = SERVICES_DATA.slice(0, 8);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-4 h-4" />;
      case "House":
        return <House className="w-4 h-4" />;
      case "Briefcase":
        return <Briefcase className="w-4 h-4" />;
      case "Layers":
        return <Layers className="w-4 h-4" />;
      case "Droplets":
        return <Droplets className="w-4 h-4" />;
      case "Waves":
        return <Waves className="w-4 h-4" />;
      case "Bath":
        return <Bath className="w-4 h-4" />;
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Sleek, compact top header bar */}
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-250 border-b ${
          isScrolled
            ? "shadow-sm border-brand-border py-1"
            : "border-brand-border/70 py-1.5 sm:py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12">
            {/* Sleek Logo */}
            <Link
              href="/"
              className="flex-shrink-0 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              aria-label="A.R Plumbing Home"
            >
              <div className="relative w-36 sm:w-44 md:w-48 h-8 sm:h-9 md:h-10">
                <Image
                  src="/images/ar-plumbing-horizontal-logo-tight.png"
                  alt="A.R Plumbing - Residential, Commercial, Projects"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 150px, 200px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative group"
                      onMouseEnter={() => setDesktopServicesOpen(true)}
                      onMouseLeave={() => setDesktopServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium font-body transition-colors relative duration-200 group ${
                          isActive
                            ? "text-brand-blue font-semibold"
                            : "text-brand-text hover:text-brand-orange"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-200 ease-out ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-card shadow-2xl border border-brand-border p-4 transition-all duration-200 ease-out z-50 ${
                          desktopServicesOpen
                            ? "opacity-100 translate-y-1 visible pointer-events-auto"
                            : "opacity-0 translate-y-2 invisible pointer-events-none"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {featuredServices.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-brand-lightBlue/60 transition-colors group/item"
                            >
                              <div className="p-1.5 rounded bg-brand-lightBlue text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                                {getServiceIcon(service.icon)}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-brand-navy group-hover/item:text-brand-blue transition-colors">
                                  {service.title}
                                </div>
                                <div className="text-[11px] text-brand-muted line-clamp-1 mt-0.5">
                                  {service.shortDescription}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-brand-border flex items-center justify-between text-xs">
                          <span className="text-brand-muted">
                            Explore all 16 specialized plumbing services
                          </span>
                          <Link
                            href="/services"
                            className="font-semibold text-brand-blue hover:text-brand-orange transition-colors"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium font-body transition-colors duration-200 group ${
                      isActive
                        ? "text-brand-blue font-semibold"
                        : "text-brand-text hover:text-brand-orange"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-200 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons (Call Now & WhatsApp) */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-2.5">
              <a
                href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-btn bg-brand-navy hover:bg-brand-navyDark text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                aria-label={`Call A.R Plumbing at ${BUSINESS_CONFIG.phoneNumber1Display}`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppUrl(
                  BUSINESS_CONFIG.whatsAppNumber1,
                  "Hello A.R Plumbing, I would like to enquire about residential plumbing services in Chennai."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-btn bg-brand-whatsapp hover:bg-brand-whatsappHover text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Chat with A.R Plumbing on official WhatsApp"
              >
                <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions: Phone Icon & Hamburger Button (Sleek & Compact) */}
            <div className="flex items-center gap-1 lg:hidden">
              <a
                href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
                className="p-1.5 rounded-md text-brand-navy hover:bg-slate-100 transition-colors"
                aria-label="Call A.R Plumbing"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-md text-brand-navy hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-brand-orange" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-250 ${
          mobileMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-250 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Slide-out Menu Panel */}
        <div
          className={`fixed top-0 right-0 w-[82%] max-w-sm h-full bg-white shadow-2xl flex flex-col z-50 transform transition-transform duration-250 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="p-3.5 border-b border-brand-border flex items-center justify-between bg-brand-offwhite">
            <div className="relative w-36 h-9">
              <Image
                src="/images/ar-plumbing-horizontal-logo-tight.png"
                alt="A.R Plumbing Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-200 text-brand-navy focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-slate-100 pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 py-2.5 text-sm font-semibold ${
                          isActive ? "text-brand-blue" : "text-brand-navy"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-2 text-brand-muted hover:text-brand-orange"
                        aria-label="Toggle services list"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="pl-3 pr-1 py-1.5 space-y-1.5 bg-brand-offwhite/80 rounded-lg my-1">
                        {SERVICES_DATA.slice(0, 8).map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs font-medium text-brand-text hover:text-brand-blue transition-colors"
                          >
                            • {s.title}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block pt-1.5 text-xs font-bold text-brand-orange"
                        >
                          View All 16 Services →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 text-sm font-semibold border-b border-slate-100 transition-colors ${
                    isActive ? "text-brand-blue" : "text-brand-navy hover:text-brand-orange"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Action CTAs */}
          <div className="p-3.5 border-t border-brand-border bg-brand-offwhite space-y-2">
            <a
              href={getPhoneUrl(BUSINESS_CONFIG.phoneNumber1)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-btn bg-brand-navy text-white text-xs sm:text-sm font-semibold shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call Us: {BUSINESS_CONFIG.phoneNumber1Display}</span>
            </a>
            <a
              href={getWhatsAppUrl(
                BUSINESS_CONFIG.whatsAppNumber1,
                "Hello A.R Plumbing, I would like to enquire about residential plumbing services in Chennai."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-btn bg-brand-whatsapp text-white text-xs sm:text-sm font-semibold shadow-sm"
            >
              <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/whatsapp-official.png" alt="WhatsApp" fill className="object-cover" />
              </div>
              <span>WhatsApp Us</span>
            </a>
            <p className="text-center text-[10px] text-brand-muted pt-0.5">
              Royapettah, Chennai • Within 40 km Radius
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
