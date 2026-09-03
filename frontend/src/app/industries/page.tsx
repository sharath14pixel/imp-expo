"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import HighlightCard from "@/components/ui/HighlightCard";
import { INDUSTRIES_DATA } from "@/data/industries";
import QuoteModal from "@/components/modals/QuoteModal";
import Button from "@/components/ui/Button";
import { Car, Zap, Activity, ShoppingBag, Shield, FlaskConical, CheckCircle2 } from "lucide-react";

export default function IndustriesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("Automotive");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Car": return <Car className="w-6 h-6" />;
      case "Zap": return <Zap className="w-6 h-6" />;
      case "Activity": return <Activity className="w-6 h-6" />;
      case "ShoppingBag": return <ShoppingBag className="w-6 h-6" />;
      case "Shield": return <Shield className="w-6 h-6" />;
      case "FlaskConical": return <FlaskConical className="w-6 h-6" />;
      default: return <Car className="w-6 h-6" />;
    }
  };

  const handleRequestIndustryQuote = (indName: string) => {
    setSelectedIndustry(indName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
            SPECIALIZED VERTICAL LOGISTICS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-tight tracking-tight mb-4">
            Custom Transport Protocols for High-Consequence <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">Industries</span>
          </h1>
          <p className="text-base md:text-lg text-[#5B6272] max-w-3xl leading-relaxed">
            Every sector poses unique regulatory standards and handling requirements. Vanguard engineers tailored freight lanes backed by industry-specific compliance certifications.
          </p>
        </div>

        {/* Industry Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {INDUSTRIES_DATA.map((ind) => (
            <HighlightCard
              key={ind.id}
              title={ind.name}
              categoryEyebrow={ind.eyebrow}
              icon={getIcon(ind.iconName)}
              badge={ind.complianceStandards[0]}
              insetLabel={ind.signatureNote.label}
              insetText={ind.signatureNote.text}
              description={ind.description}
              highlights={ind.keySolutions}
              ctaText="REQUEST VERTICAL SOLUTION"
              onCtaClick={() => handleRequestIndustryQuote(ind.name)}
            />
          ))}
        </div>

        {/* Section: Industry Stats & Capability Table */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <SectionHeading
            eyebrow="VERTICAL PERFORMANCE SUMMARY"
            title="Sector Capabilities & Compliance Frameworks"
            highlightWord="Capabilities"
            description="Verified regulatory certifications maintained across our global logistics hubs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="bg-[#F4F5FB] border border-[#E5E7EB] rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-white rounded text-[#E86A3C] shadow-2xs">
                    {getIcon(ind.iconName)}
                  </div>
                  <h4 className="text-base font-bold text-[#101828]">{ind.name}</h4>
                </div>

                <div className="text-2xl font-extrabold text-[#101828] my-2">
                  {ind.stats.value}
                </div>
                <p className="text-xs text-[#5B6272] mb-3">{ind.stats.label}</p>

                <div className="pt-3 border-t border-[#E5E7EB] space-y-1">
                  <span className="text-[10px] font-extrabold text-[#E86A3C] uppercase tracking-wider block">
                    COMPLIANCE STANDARDS:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ind.complianceStandards.map((std, i) => (
                      <span key={i} className="text-[10px] bg-white text-[#101828] font-bold px-2 py-0.5 rounded border border-[#E5E7EB]">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="bg-[#101828] text-white rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
              NEED CUSTOM CARGO SPECIFICATIONS?
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              Speak with a Vertical Supply Chain Engineer
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Our trade engineering teams can analyze your BOM lists, packaging specifications, and customs entry protocols.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setQuoteModalOpen(true)}
            showArrow
          >
            CONSULT VERTICAL SPECIALIST
          </Button>
        </div>

      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedIndustry}
      />
    </div>
  );
}
