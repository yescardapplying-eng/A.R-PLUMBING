"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface Review {
  id: number;
  name: string;
  initials: string;
  avatarBg: string;
  location: string;
  timeAgo: string;
  rating: number;
  serviceType: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Dr. K. Narayanan",
    initials: "KN",
    avatarBg: "bg-blue-600",
    location: "Anna Nagar, Chennai",
    timeAgo: "2 weeks ago",
    rating: 5,
    serviceType: "Full Flat CPVC Repiping",
    text: "Replaced all corroded GI pipelines in our 25-year-old flat with Astral CPVC without damaging extra floor tiles. Water pressure in our showers has doubled and reddish rust water is completely gone. Extremely professional team.",
  },
  {
    id: 2,
    name: "R. Suresh Kumar",
    initials: "SK",
    avatarBg: "bg-emerald-600",
    location: "Mylapore, Chennai",
    timeAgo: "3 weeks ago",
    rating: 5,
    serviceType: "Concealed Diverters & Wall-Hung WC",
    text: "Installed concealed single-lever diverters and wall-hung commodes for our duplex home. Aligned with laser precision and tested under full 8 bar hydraulic pressure before tiling. Zero leakage.",
  },
  {
    id: 3,
    name: "Mrs. Meenakshi Raman",
    initials: "MR",
    avatarBg: "bg-amber-600",
    location: "T. Nagar, Chennai",
    timeAgo: "1 month ago",
    rating: 5,
    serviceType: "Concealed Leakage Rectification",
    text: "A.R Plumbing fixed a difficult concealed leakage behind our bathroom tiles in T. Nagar. They isolated the exact joint, repaired it neatly, and saved us thousands in unnecessary demolition costs.",
  },
  {
    id: 4,
    name: "Vignesh Balaji",
    initials: "VB",
    avatarBg: "bg-purple-600",
    location: "Adyar, Chennai",
    timeAgo: "5 days ago",
    rating: 5,
    serviceType: "Booster Pump & Tank Distribution",
    text: "Installed a booster pump and new terrace distribution manifold. Even with 3 bathrooms running simultaneously on the 3rd floor, pressure remains steady and strong. Excellent plumbing coordination.",
  },
  {
    id: 5,
    name: "Anandhi Rajendran",
    initials: "AR",
    avatarBg: "bg-rose-600",
    location: "Velachery, Chennai",
    timeAgo: "2 weeks ago",
    rating: 5,
    serviceType: "Modular Kitchen & Drain Line",
    text: "Neat sink plumbing, RO purifier setup, and dishwasher drain line installation. Plumbers arrived on time, cleaned the workplace thoroughly, and charged very fair rates. Highly recommend!",
  },
  {
    id: 6,
    name: "G. Venkatesh",
    initials: "GV",
    avatarBg: "bg-teal-600",
    location: "Royapettah, Chennai",
    timeAgo: "1 week ago",
    rating: 5,
    serviceType: "Residential Building Plumbing",
    text: "Contracted A.R Plumbing for our 3-floor residential building in Royapettah. Prompt daily supervision, certified pipe materials, and complete pressure clearance certificate. Outstanding work.",
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-swiping / cycling every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  // Visible items: on desktop 3 items sliding, on mobile 1 item
  const getVisibleReviews = () => {
    const list: Review[] = [];
    for (let i = 0; i < 3; i++) {
      list.push(REVIEWS[(currentIndex + i) % REVIEWS.length]);
    }
    return list;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Google My Business Trust Header Pill */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-semibold text-brand-navy">
          {/* Google G SVG */}
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className="font-bold text-slate-800">Google Reviews</span>
          <div className="flex items-center text-amber-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
            ))}
          </div>
          <span className="font-extrabold text-brand-navy">5.0 / 5.0</span>
          <span className="text-slate-400 text-xs hidden sm:inline">• 100% Genuine Verified</span>
        </div>

        <div className="text-xs text-brand-muted font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Auto-cycling every 3 seconds</span>
        </div>
      </div>

      {/* Responsive Reviews Grid / Slider */}
      {/* Desktop view: 3 cards side by side */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 transition-all duration-500">
        {visibleReviews.map((review, idx) => (
          <div
            key={`${review.id}-${idx}`}
            className="p-6 rounded-card border border-brand-border bg-white shadow-card hover:shadow-cardHover hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group h-full"
          >
            <div>
              {/* Header: User avatar, Name, Time, Verified */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-brand-navy leading-snug flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <ShieldCheck className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    </div>
                    <div className="text-[11px] text-brand-muted">{review.location}</div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                  {review.timeAgo}
                </div>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                ))}
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded ml-1.5 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Homeowner
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-brand-text/90 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            {/* Service Type Tag */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="font-semibold text-brand-blue">{review.serviceType}</span>
              <span className="text-slate-400">Chennai</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view: 1 active card with smooth slide */}
      <div className="block md:hidden">
        {REVIEWS.map((review, idx) => {
          if (idx !== currentIndex) return null;
          return (
            <div
              key={review.id}
              className="p-5 rounded-card border border-brand-border bg-white shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: User avatar, Name, Time, Verified */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-brand-navy leading-snug flex items-center gap-1">
                        <span>{review.name}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                      </div>
                      <div className="text-[11px] text-brand-muted">{review.location}</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium">
                    {review.timeAgo}
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                  ))}
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded ml-1 inline-flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Verified
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-brand-text/90 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Service Type Tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-brand-blue">{review.serviceType}</span>
                <span className="text-slate-400">Chennai</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: Prev, Next & Dots */}
      <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
        <button
          type="button"
          onClick={handlePrev}
          className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-brand-navy shadow-sm transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-1.5">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 bg-brand-orange"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-brand-navy shadow-sm transition-colors"
          aria-label="Next review"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
