"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import HighlightCard from "@/components/ui/HighlightCard";
import Button from "@/components/ui/Button";
import QuoteModal from "@/components/modals/QuoteModal";
import { ShieldCheck, Award, Globe, Users, Target, Eye, ChevronRight } from "lucide-react";

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeTimelineYear, setActiveTimelineYear] = useState(2026);

  const milestones = [
    {
      year: 2004,
      title: "Founding in Port of Rotterdam",
      description: "Established as a specialized customs declarant and ship brokerage agency catering to Dutch maritime trade."
    },
    {
      year: 2010,
      title: "APAC Expansion & Singapore Hub",
      description: "Launched our Asia-Pacific control tower in Singapore to manage expanding intra-Asia LCL consolidation corridors."
    },
    {
      year: 2015,
      title: "AEO-F & C-TPAT Tier 3 Certification",
      description: "Achieved full Authorized Economic Operator status with European Customs and C-TPAT Tier 3 validation in the USA."
    },
    {
      year: 2020,
      title: "Bonded Warehouse Network Launch",
      description: "Opened 180,000 m² of Type A customs-bonded facilities in Houston, Dubai JAFZA, and Rotterdam Waalhaven."
    },
    {
      year: 2024,
      title: "Customs EDI & CBAM Automated Gateway",
      description: "Deployed automated API software for EU Carbon Border Adjustment Mechanism calculations and instant tariff audits."
    },
    {
      year: 2026,
      title: "Global Multimodal Ecosystem",
      description: "Surpassed 2.8M TEUs annual cargo volume with continuous IoT thermal & location telemetry across 150+ countries."
    }
  ];

  const leadershipTeam = [
    {
      name: "Marcus Vance",
      role: "Chief Executive Officer & Founder",
      bio: "Over 28 years in maritime freight forwarding and ocean carrier executive management across Rotterdam and London.",
      location: "Rotterdam HQ"
    },
    {
      name: "Elena Rostova",
      role: "Director of Customs & Trade Compliance",
      bio: "Licensed European customs attorney and former Dutch Revenue Authority consultant specializing in HTS tariff engineering.",
      location: "Rotterdam HQ"
    },
    {
      name: "David K. Chen",
      role: "VP of Global Air Freight Operations",
      bio: "Former APAC Air Cargo Logistics Lead with extensive block space charter experience at Singapore Changi and Hong Kong.",
      location: "Singapore Hub"
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Americas Supply Chain Solutions",
      bio: "Industrial engineer with 18 years experience optimizing heavy-lift energy transport and FTZ bonded facilities across Texas.",
      location: "Houston Hub"
    }
  ];

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
            CORPORATE HERITAGE & MISSION
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-tight tracking-tight mb-4">
            Building the World's Most <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">Reliable</span> Import & Export Corridor
          </h1>
          <p className="text-base md:text-lg text-[#5B6272] max-w-3xl leading-relaxed">
            Tenar Global Logistics orchestrates complex international supply chains through regulatory precision, contracted vessel capacity, and specialized customs-bonded facilities.
          </p>
        </div>

        {/* Section 1: Story & Mission Cards using Signature HighlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <HighlightCard
            title="Our Mission & Purpose"
            categoryEyebrow="CORE MISSION"
            icon={<Target className="w-6 h-6" />}
            badge="Strategic Imperative"
            insetLabel="OUR COMMITMENT"
            insetText="To eliminate administrative friction and cargo detention across cross-border trade corridors."
            description="We empower multinational corporations to import and export seamlessly by integrating licensed customs expertise with guaranteed ocean and air carrier allocations."
            highlights={[
              "Zero-detention customs entry filings",
              "Transparent Incoterms risk allocation",
              "ISO 14064 Scope 3 decarbonization reporting"
            ]}
          />

          <HighlightCard
            title="Our Vision for Global Trade"
            categoryEyebrow="FUTURE OUTLOOK"
            icon={<Eye className="w-6 h-6" />}
            badge="Digital Integration"
            insetLabel="WHY IT MATTERS"
            insetText="Predictable trade velocity creates working capital liquidity for enterprise supply chains."
            description="We envision an international trade architecture where container telemetry, tariff duty drawbacks, and port terminal clearance occur in automated real-time harmony."
            highlights={[
              "API-first container location telemetry",
              "Automated EU CBAM carbon reporting",
              "Duty-deferred bonded buffer warehousing"
            ]}
          />
        </div>

        {/* Section 2: Interactive Milestones Timeline */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <SectionHeading
            eyebrow="MILESTONES OF EXCELLENCE"
            title="Two Decades of International Logistics Growth"
            highlightWord="Logistics"
            description="Key operational expansion milestones that built our global network."
          />

          {/* Timeline Nav Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
            {milestones.map((m) => (
              <button
                key={m.year}
                onClick={() => setActiveTimelineYear(m.year)}
                className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                  activeTimelineYear === m.year
                    ? "bg-[#101828] text-white shadow-md"
                    : "bg-[#F4F5FB] text-[#5B6272] hover:bg-[#E5E7EB]"
                }`}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          {(() => {
            const activeM = milestones.find((m) => m.year === activeTimelineYear) || milestones[0];
            return (
              <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
                    MILESTONE YEAR {activeM.year}
                  </span>
                  <h3 className="text-2xl font-bold text-[#101828] mb-2">
                    {activeM.title}
                  </h3>
                  <p className="text-sm text-[#5B6272] max-w-2xl leading-relaxed">
                    {activeM.description}
                  </p>
                </div>
                <div className="shrink-0 bg-white p-4 rounded-xl border border-[#E5E7EB] text-center min-w-[140px]">
                  <span className="text-3xl font-extrabold text-[#101828] block">{activeM.year}</span>
                  <span className="text-[10px] font-bold text-[#E86A3C] uppercase tracking-wider">VERIFIED RECORD</span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Section 3: Executive Leadership Team */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="EXECUTIVE GOVERNANCE"
            title="Global Trade Leadership Team"
            highlightWord="Leadership"
            description="Veterans of international maritime law, air cargo charter operations, and customs regulation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 bg-[#FDEDE8] text-[#E86A3C] rounded-lg flex items-center justify-center font-bold text-lg mb-4 border border-[#F5804B]/20">
                    {leader.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-bold text-[#101828] mb-0.5">{leader.name}</h3>
                  <p className="text-xs font-extrabold text-[#E86A3C] uppercase tracking-wider mb-3">{leader.role}</p>
                  <p className="text-xs text-[#5B6272] leading-relaxed mb-4">{leader.bio}</p>
                </div>
                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] text-[#101828] font-bold">
                  <span>{leader.location}</span>
                  <Users className="w-3.5 h-3.5 text-[#E86A3C]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Certifications CTA Band */}
        <div className="bg-[#101828] text-white rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
              REGULATORY AUTHORIZATION STATUS
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              Ready to Audit Your Customs Tariff & Import Costs?
            </h3>
            <p className="text-sm text-gray-300 max-w-2xl">
              Consult with our Rotterdam or Houston customs declarant desks for a complimentary HTS tariff classification audit.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setQuoteModalOpen(true)}
            showArrow
          >
            BOOK COMPLIANCE AUDIT
          </Button>
        </div>

      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
