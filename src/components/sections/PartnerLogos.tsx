"use client";

import React from "react";
import { PARTNERS_DATA } from "@/data/testimonials";
import { Anchor, ShieldCheck } from "lucide-react";

export const PartnerLogos = () => {
  return (
    <section className="py-12 bg-[#F4F5FB] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5B6272]">
            STRATEGIC CARRIER ALLIANCES & PORT OPERATORS
          </span>
        </div>

        {/* Partner Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {PARTNERS_DATA.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-lg p-3 text-center shadow-2xs hover:border-[#E86A3C]/40 transition-colors"
            >
              <div className="flex items-center justify-center gap-1.5 text-[#101828] font-bold text-xs">
                <Anchor className="w-3.5 h-3.5 text-[#E86A3C] shrink-0" />
                <span className="truncate">{partner.name}</span>
              </div>
              <span className="text-[9px] text-[#5B6272] uppercase tracking-wider block mt-0.5">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
