"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import QuoteModal from "@/components/modals/QuoteModal";
import { Globe2, ShieldCheck, ArrowUpRight, Anchor, Plane, Truck } from "lucide-react";

export const Hero = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <section className="relative bg-[#F4F5FB] pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-[#E5E7EB]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E86A3C] animate-ping" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#101828]">
                GLOBAL IMPORT & EXPORT ARCHITECTURE
              </span>
            </div>

            {/* Main Left-aligned Headline with ONE gradient highlighted word */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101828] leading-[1.1] tracking-tight mb-6">
              Precision Freight Solutions for International <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">Commerce</span>
            </h1>

            {/* Muted Subtext */}
            <p className="text-base sm:text-lg text-[#5B6272] leading-relaxed mb-8 max-w-2xl font-normal">
              Orchestrating end-to-end multimodal transport, customs pre-clearance, and bonded warehousing across major global trade vectors. Guaranteed vessel allocation and time-critical air freight velocity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setQuoteModalOpen(true)}
                showArrow
              >
                REQUEST RATE QUOTE
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/services"
              >
                EXPLORE SERVICES
              </Button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E86A3C] shrink-0" />
                <span className="text-xs font-bold text-[#101828] uppercase tracking-wider">AEO & C-TPAT CLEARANCE</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#E86A3C] shrink-0" />
                <span className="text-xs font-bold text-[#101828] uppercase tracking-wider">340+ GLOBAL PORTS</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-[#E86A3C] shrink-0" />
                <span className="text-xs font-bold text-[#101828] uppercase tracking-wider">99.8% ON-TIME SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column Signature Graphic Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              
              {/* Signature Inset Box Accent */}
              <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-5 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
                  LIVE TRADE LANE MONITORING
                </span>
                <p className="text-base font-bold text-[#101828] leading-tight">
                  Transpacific & Europe Corridors Operational
                </p>
                <p className="text-xs text-[#5B6272] mt-1">
                  Daily vessel departures with automated HTS pre-filing en route.
                </p>
              </div>

              {/* Interactive Quick Mode Status Widgets */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3.5 bg-[#F4F5FB] rounded-lg border border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded text-[#E86A3C] shadow-xs">
                      <Anchor className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#101828] block">OCEAN FREIGHT</span>
                      <span className="text-[11px] text-[#5B6272]">Rotterdam ↔ Shanghai FCL Express</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 rounded">ACTIVE</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#F4F5FB] rounded-lg border border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded text-[#E86A3C] shadow-xs">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#101828] block">AIR CARGO CHARTERS</span>
                      <span className="text-[11px] text-[#5B6272]">Frankfurt ↔ Singapore Block Space</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 rounded">GUARANTEED</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#F4F5FB] rounded-lg border border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded text-[#E86A3C] shadow-xs">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#101828] block">BONDED WAREHOUSING</span>
                      <span className="text-[11px] text-[#5B6272]">Houston FTZ #84 Duty Deferred</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 rounded">24/7 SECURE</span>
                </div>
              </div>

              {/* Bottom Quick Rate Estimator Link */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-xs font-bold text-[#101828]">Need instant rate calculation?</span>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="text-xs font-extrabold uppercase tracking-wider text-[#E86A3C] hover:underline cursor-pointer"
                >
                  START ESTIMATOR →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
