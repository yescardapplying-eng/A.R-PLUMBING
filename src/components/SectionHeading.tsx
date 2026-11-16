import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  lightMode?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  lightMode = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            lightMode
              ? "bg-white/10 text-orange-400 border border-white/20"
              : "bg-brand-lightOrange text-brand-orange border border-brand-orange/20"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-tight leading-tight ${
          lightMode ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            lightMode ? "text-slate-300" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-16 h-1 bg-brand-orange rounded-full mt-4 ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
