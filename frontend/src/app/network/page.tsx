"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { OFFICES_DATA, OfficeItem } from "@/data/offices";
import QuoteModal from "@/components/modals/QuoteModal";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, Anchor, ShieldCheck, ArrowRight, Globe } from "lucide-react";

export default function GlobalNetworkPage() {
  const [selectedHub, setSelectedHub] = useState<OfficeItem>(OFFICES_DATA[0]);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Route Lookup Widget State
  const [laneOrigin, setLaneOrigin] = useState("Rotterdam");
  const [laneDest, setLaneDest] = useState("Singapore");

  const tradeLanesMap: Record<string, { days: string; frequency: string; carriers: string; mode: string }> = {
    "Rotterdam-Singapore": { days: "22-25 Days", frequency: "Daily Sailings", carriers: "Maersk, MSC, Hapag-Lloyd", mode: "Ocean FCL / Air Express" },
    "Shanghai-Rotterdam": { days: "26-30 Days", frequency: "Daily Sailings", carriers: "CMA CGM, ONE, Evergreen", mode: "Ocean FCL / Eurasia Rail" },
    "Houston-Rotterdam": { days: "14-16 Days", frequency: "3x Weekly", carriers: "Hapag-Lloyd, Maersk", mode: "Ocean FCL / Direct Charter" },
    "Singapore-Dubai": { days: "9-11 Days", frequency: "Daily Sailings", carriers: "Emirates SkyCargo, MSC", mode: "Air Express / Sea-Air" },
    "Shanghai-Houston": { days: "24-28 Days", frequency: "Daily Sailings", carriers: "COSCO, Ocean Alliance", mode: "Ocean FCL Direct Panama" },
  };

  const currentLaneKey = `${laneOrigin}-${laneDest}`;
  const currentLaneInfo = tradeLanesMap[currentLaneKey] || {
    days: "18-22 Days",
    frequency: "4x Weekly",
    carriers: "Tenar Global Freight Network",
    mode: "Multimodal Ocean / Air",
  };

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
            GLOBAL OFFICE PRESENCE & PORTS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-tight tracking-tight mb-4">
            Strategic Gateway Hubs Across <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">340+ Ports</span>
          </h1>
          <p className="text-base md:text-lg text-[#5B6272] max-w-3xl leading-relaxed">
            Our strategic control towers in Rotterdam, Singapore, Houston, Dubai, and Shanghai operate 24/7 customs-bonded clearance terminals and direct carrier vessel allocations.
          </p>
        </div>

        {/* Section 1: Clean On-Brand Static Map & Hub Selector */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <SectionHeading
            eyebrow="HUB NETWORK SELECTOR"
            title="Explore Regional Operational Towers"
            highlightWord="Operational"
            description="Select a global hub to inspect local facility specs, bonded storage square footage, and direct phone contact."
          />

          {/* Hub Selector Tab Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
            {OFFICES_DATA.map((office) => (
              <button
                key={office.id}
                onClick={() => setSelectedHub(office)}
                className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                  selectedHub.id === office.id
                    ? "bg-[#101828] text-white shadow-sm"
                    : "bg-[#F4F5FB] text-[#5B6272] hover:bg-[#E5E7EB]"
                }`}
              >
                {office.city} ({office.country})
              </button>
            ))}
          </div>

          {/* Hub Detail Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hub Spec Card */}
            <div className="lg:col-span-7 bg-[#F4F5FB] border border-[#E5E7EB] rounded-xl p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E86A3C]">
                    {selectedHub.region}
                  </span>
                  <h3 className="text-2xl font-bold text-[#101828]">{selectedHub.name}</h3>
                  <p className="text-xs text-[#5B6272]">{selectedHub.role}</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg border border-[#E5E7EB] flex items-center justify-center text-[#E86A3C] font-bold text-lg">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              {/* Signature Inset Box */}
              <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-lg p-4 mb-6">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
                  FACILITY HIGHLIGHT
                </span>
                <p className="text-sm font-bold text-[#101828]">
                  {selectedHub.keyStats}
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs text-[#5B6272]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#101828] block">Physical Address:</strong>
                    <span>{selectedHub.address}, {selectedHub.city}, {selectedHub.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#101828] block">Direct Support Hotline:</strong>
                    <span>{selectedHub.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#101828] block">Corporate Email:</strong>
                    <span>{selectedHub.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#101828] block">Operational Timezone:</strong>
                    <span>{selectedHub.timezone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-xs font-bold text-[#101828]">24/7 Shift Supervisor On Duty</span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  CONTACT THIS HUB
                </Button>
              </div>
            </div>

            {/* Right Facilities List */}
            <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] mb-4">
                ON-SITE HUB TERMINAL CAPABILITIES
              </h4>
              <ul className="space-y-3">
                {selectedHub.facilities.map((fac, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#5B6272]">
                    <ShieldCheck className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-[#F4F5FB] rounded-lg border border-[#E5E7EB] text-center">
                <Globe className="w-8 h-8 text-[#E86A3C] mx-auto mb-2" />
                <span className="text-xs font-bold text-[#101828] block">
                  AEO & C-TPAT Certified Terminal
                </span>
                <span className="text-[10px] text-[#5B6272] block mt-0.5">
                  Direct EDI linkage with local revenue authorities.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Interactive Trade Lane Route Search */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <SectionHeading
            eyebrow="TRADE CORRIDOR LOOKUP"
            title="Direct Trade Lane Operating Schedules"
            highlightWord="Schedules"
            description="Select origin and destination hubs to inspect active sailing frequencies and average maritime transit times."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                  ORIGIN REGIONAL HUB
                </label>
                <select
                  value={laneOrigin}
                  onChange={(e) => setLaneOrigin(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] font-bold"
                >
                  <option value="Rotterdam">Rotterdam EMEA HQ (Netherlands)</option>
                  <option value="Shanghai">Shanghai Greater China Hub (China)</option>
                  <option value="Houston">Houston Americas Hub (USA)</option>
                  <option value="Singapore">Singapore APAC Control Tower</option>
                  <option value="Dubai">Dubai MEA Hub (UAE)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                  DESTINATION REGIONAL HUB
                </label>
                <select
                  value={laneDest}
                  onChange={(e) => setLaneDest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] font-bold"
                >
                  <option value="Singapore">Singapore APAC Control Tower</option>
                  <option value="Rotterdam">Rotterdam EMEA HQ (Netherlands)</option>
                  <option value="Houston">Houston Americas Hub (USA)</option>
                  <option value="Dubai">Dubai MEA Hub (UAE)</option>
                  <option value="Shanghai">Shanghai Greater China Hub (China)</option>
                </select>
              </div>
            </div>

            {/* Results Inset Display */}
            <div className="lg:col-span-7">
              <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-6 md:p-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
                  CORRIDOR PERFORMANCE SPECIFICATIONS
                </span>
                <h4 className="text-xl font-bold text-[#101828] mb-4">
                  {laneOrigin} ↔ {laneDest} Corridor
                </h4>

                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-[#E5E7EB]">
                    <span className="text-[10px] text-[#5B6272] uppercase font-bold block">Average Transit Time</span>
                    <span className="text-lg font-extrabold text-[#101828]">{currentLaneInfo.days}</span>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-[#E5E7EB]">
                    <span className="text-[10px] text-[#5B6272] uppercase font-bold block">Sailing Frequency</span>
                    <span className="text-lg font-extrabold text-[#101828]">{currentLaneInfo.frequency}</span>
                  </div>
                </div>

                <div className="text-xs text-[#5B6272] space-y-1 mb-6">
                  <p><strong className="text-[#101828]">Contracted Carrier Partners:</strong> {currentLaneInfo.carriers}</p>
                  <p><strong className="text-[#101828]">Primary Modes Available:</strong> {currentLaneInfo.mode}</p>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full"
                >
                  BOOK CARGO SPACE ON THIS LANE
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
