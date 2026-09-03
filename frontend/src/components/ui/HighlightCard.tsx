"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface HighlightCardProps {
  title: string;
  categoryEyebrow?: string; // Small eyebrow above title if needed
  insetLabel: string; // e.g. "OUR APPROACH" or "WHY IT MATTERS"
  insetText: string; // One short explanatory line in the #FDEDE8 box
  description?: string;
  icon?: React.ReactNode;
  highlights?: string[];
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  categoryEyebrow,
  insetLabel,
  insetText,
  description,
  icon,
  highlights,
  badge,
  ctaText,
  ctaHref,
  onCtaClick,
  className = "",
}) => {
  return (
    <div
      className={`bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group ${className}`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            {categoryEyebrow && (
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E86A3C] block mb-1">
                {categoryEyebrow}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-[#101828] group-hover:text-[#E86A3C] transition-colors duration-200">
              {title}
            </h3>
          </div>
          {icon && (
            <div className="p-3 bg-[#F4F5FB] rounded-lg text-[#E86A3C] shrink-0 group-hover:scale-105 transition-transform duration-200">
              {icon}
            </div>
          )}
        </div>

        {/* Badge if available */}
        {badge && (
          <div className="mb-4">
            <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#F4F5FB] text-[#101828] border border-[#E5E7EB] rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* SIGNATURE INSET BOX (#FDEDE8 background) */}
        <div className="bg-[#FDEDE8] border border-[#F5804B]/20 rounded-lg p-4 my-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
            {insetLabel}
          </span>
          <p className="text-sm font-medium text-[#101828] leading-relaxed">
            {insetText}
          </p>
        </div>

        {/* Description text */}
        {description && (
          <p className="text-sm text-[#5B6272] leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Highlight Bullets if provided */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-2 mb-6">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5B6272]">
                <CheckCircle2 className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA Footer Action */}
      {(ctaText || ctaHref) && (
        <div className="pt-4 border-t border-[#E5E7EB] mt-2 flex items-center justify-between">
          {ctaHref ? (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E86A3C] uppercase tracking-wider hover:gap-3 transition-all duration-200"
            >
              <span>{ctaText || "LEARN MORE"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              onClick={onCtaClick}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E86A3C] uppercase tracking-wider hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              <span>{ctaText || "LEARN MORE"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HighlightCard;
