"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="CLIENT CASE VERIFICATIONS"
          title="Trusted by Fortune 500 Freight Directors"
          highlightWord="Trusted"
          description="Read how enterprise importers and exporters rely on Vanguard for zero-detention customs clearance and critical cargo velocity."
        />

        {/* Carousel Card Outer Container */}
        <div className="bg-[#F4F5FB] border border-[#E5E7EB] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-[#E86A3C] mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-xs font-bold text-[#101828] ml-2 uppercase tracking-wider">
                  VERIFIED B2B ACCOUNT
                </span>
              </div>

              {/* Quote text */}
              <div className="relative mb-8">
                <Quote className="w-12 h-12 text-[#E86A3C]/20 absolute -top-4 -left-4 -z-0" />
                <p className="text-xl md:text-2xl text-[#101828] font-bold leading-relaxed relative z-10 italic">
                  "{current.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-[#101828]">
                  {current.author}
                </h4>
                <p className="text-xs md:text-sm text-[#5B6272]">
                  {current.role} • <strong className="text-[#101828] font-semibold">{current.company}</strong> ({current.industry})
                </p>
              </div>
            </div>

            {/* Right Column Signature Inset Metric Box */}
            <div className="lg:col-span-4">
              <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-6 text-center">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
                  VERIFIED OUTCOME
                </span>
                <div className="text-3xl md:text-4xl font-extrabold text-[#101828] tracking-tight mb-1">
                  {current.metric}
                </div>
                <p className="text-xs text-[#5B6272] font-medium leading-normal">
                  {current.metricLabel}
                </p>
              </div>
            </div>

          </div>

          {/* Controls Bar */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
            {/* Slide Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? "w-8 bg-[#E86A3C]" : "w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-white border border-[#E5E7EB] rounded-lg text-[#101828] hover:border-[#E86A3C] hover:text-[#E86A3C] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white border border-[#E5E7EB] rounded-lg text-[#101828] hover:border-[#E86A3C] hover:text-[#E86A3C] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
