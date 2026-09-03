"use client";

import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string; // Word in title to apply gradient highlight (#F5804B → #B4A7F0)
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWord,
  description,
  centered = false,
  className = "",
}) => {
  // Process title to split and highlight the specific word if provided
  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span
          key={index}
          className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent underline decoration-[#E86A3C]/30 decoration-wavy underline-offset-4"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#E86A3C]"></span>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101828] leading-[1.15] tracking-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#5B6272] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
