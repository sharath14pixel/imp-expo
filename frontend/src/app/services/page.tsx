"use client";

import React, { useState } from "react";
import { usdToInr } from "@/utils/currency";
import SectionHeading from "@/components/ui/SectionHeading";
import HighlightCard from "@/components/ui/HighlightCard";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import QuoteModal from "@/components/modals/QuoteModal";
import Button from "@/components/ui/Button";
import { Ship, Plane, FileCheck, Warehouse, Truck, Boxes, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Ocean Freight");

  // Estimator State
  const [calcOrigin, setCalcOrigin] = useState("Shanghai Port");
  const [calcDest, setCalcDest] = useState("Rotterdam Port");
  const [calcWeight, setCalcWeight] = useState("12500");
  const [calcMode, setCalcMode] = useState("Ocean FCL");
  const [estResult, setEstResult] = useState<{ cost: string; transit: string } | null>(null);

  const categories = ["All", "Ocean", "Air", "Customs", "Warehousing", "Multimodal", "Project Cargo"];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Ocean" && service.id.includes("ocean")) return true;
    if (activeCategory === "Air" && service.id.includes("air")) return true;
    if (activeCategory === "Customs" && service.id.includes("customs")) return true;
    if (activeCategory === "Warehousing" && service.id.includes("warehousing")) return true;
    if (activeCategory === "Multimodal" && service.id.includes("multimodal")) return true;
    if (activeCategory === "Project Cargo" && service.id.includes("project")) return true;
    return false;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Ship": return <Ship className="w-6 h-6" />;
      case "Plane": return <Plane className="w-6 h-6" />;
      case "FileCheck": return <FileCheck className="w-6 h-6" />;
      case "Warehouse": return <Warehouse className="w-6 h-6" />;
      case "Truck": return <Truck className="w-6 h-6" />;
      case "Boxes": return <Boxes className="w-6 h-6" />;
      default: return <Ship className="w-6 h-6" />;
    }
  };

  const handleCalculateRate = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseFloat(calcWeight) || 5000;
    let baseCost = 2800;
    let days = "24-28 Days";

    if (calcMode === "Ocean FCL") {
      baseCost = Math.round(2400 + (weightNum / 1000) * 85);
      days = "26-30 Days";
    } else if (calcMode === "Air Express") {
      baseCost = Math.round(1200 + weightNum * 4.8);
      days = "3-5 Days";
    } else if (calcMode === "Sea-Air Hybrid") {
      baseCost = Math.round(2900 + weightNum * 2.2);
      days = "12-14 Days";
    } else if (calcMode === "Bonded Rail") {
      baseCost = Math.round(3200 + (weightNum / 1000) * 140);
      days = "16-18 Days";
    }

    setEstResult({
      cost: usdToInr(baseCost),
      transit: days,
    });
  };

  const handleOpenQuote = (title: string) => {
    setSelectedService(title);
    setQuoteModalOpen(true);
  };

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
            GLOBAL LOGISTICS CAPABILITIES
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-tight tracking-tight mb-4">
            Comprehensive Import & Export <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-base md:text-lg text-[#5B6272] max-w-3xl leading-relaxed">
            From single LCL consolidations to complex heavy-lift project charters and duty-deferred bonded warehousing, Tenar provides licensed precision across all trade vectors.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#101828] text-white shadow-sm"
                  : "bg-white text-[#5B6272] border border-[#E5E7EB] hover:bg-[#FDEDE8]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => {
            const primaryKeyFeature = service.keyFeatures[0];
            return (
              <HighlightCard
                key={service.id}
                title={service.title}
                categoryEyebrow={service.eyebrow}
                badge={service.accentBadge}
                icon={getIcon(service.iconName)}
                insetLabel={primaryKeyFeature.label}
                insetText={primaryKeyFeature.text}
                description={service.fullDesc}
                highlights={service.highlights}
                ctaText="REQUEST DETAILED QUOTE"
                onCtaClick={() => handleOpenQuote(service.title)}
              />
            );
          })}
        </div>

        {/* Interactive Freight Rate & Transit Estimator Section */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 mb-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDEDE8] text-[#E86A3C] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#F5804B]/20">
                <Calculator className="w-3.5 h-3.5" />
                INSTANT ROUTE ESTIMATOR
              </div>
              <h2 className="text-3xl font-extrabold text-[#101828] leading-tight mb-4">
                Calculate Indicative Transit Time & Freight Rates
              </h2>
              <p className="text-sm text-[#5B6272] leading-relaxed mb-6">
                Input your cargo origin, destination, and gross weight parameters to calculate instant indicative budget ranges for primary trade lanes.
              </p>

              <form onSubmit={handleCalculateRate} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      ORIGIN PORT / HUB
                    </label>
                    <input
                      type="text"
                      value={calcOrigin}
                      onChange={(e) => setCalcOrigin(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      DESTINATION PORT / HUB
                    </label>
                    <input
                      type="text"
                      value={calcDest}
                      onChange={(e) => setCalcDest(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      GROSS WEIGHT (KG)
                    </label>
                    <input
                      type="number"
                      value={calcWeight}
                      onChange={(e) => setCalcWeight(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      FREIGHT MODE
                    </label>
                    <select
                      value={calcMode}
                      onChange={(e) => setCalcMode(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] font-medium"
                    >
                      <option value="Ocean FCL">Ocean FCL Container</option>
                      <option value="Air Express">Express Air Charter</option>
                      <option value="Sea-Air Hybrid">Sea-Air Hybrid (Dubai Hub)</option>
                      <option value="Bonded Rail">Eurasia Intermodal Rail</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" variant="secondary" size="md" className="w-full">
                  CALCULATE ESTIMATE
                </Button>
              </form>
            </div>

            {/* Result Box */}
            <div className="lg:col-span-6">
              <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-2xl p-8 text-center">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
                  INDICATIVE BUDGET ESTIMATE
                </span>
                
                {estResult ? (
                  <div className="space-y-4">
                    <div className="text-4xl md:text-5xl font-extrabold text-[#101828] tracking-tight">
                      {estResult.cost}
                    </div>
                    <div className="inline-block px-4 py-1.5 bg-white border border-[#E5E7EB] rounded-full text-xs font-bold text-[#101828]">
                      Estimated Transit: <span className="text-[#E86A3C]">{estResult.transit}</span>
                    </div>
                    <p className="text-xs text-[#5B6272] max-w-sm mx-auto">
                      Includes port terminal handling & Automated EDI customs entry filing. Subject to final cargo dimensions & fuel surcharges.
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full"
                    >
                      LOCK IN THIS RATE QUOTE
                    </Button>
                  </div>
                ) : (
                  <div className="py-8">
                    <Ship className="w-12 h-12 text-[#E86A3C] mx-auto mb-3 opacity-60" />
                    <p className="text-sm font-bold text-[#101828]">
                      Click "Calculate Estimate" above to display live rate estimates.
                    </p>
                    <p className="text-xs text-[#5B6272] mt-1">
                      Calculates real-time freight metrics across 340 international port corridors.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Section: Incoterms Matrix */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 shadow-sm">
          <SectionHeading
            eyebrow="INTERNATIONAL TRADE STANDARDS"
            title="Incoterms 2026 Responsibility Reference"
            highlightWord="Incoterms"
            description="Clear allocation of transport costs, customs liabilities, and insurance risk transfer points."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101828] text-white uppercase tracking-wider font-extrabold">
                  <th className="p-3.5 rounded-tl-lg">Rule</th>
                  <th className="p-3.5">Name</th>
                  <th className="p-3.5">Transport Mode</th>
                  <th className="p-3.5">Export Customs</th>
                  <th className="p-3.5">Ocean/Air Freight</th>
                  <th className="p-3.5">Import Customs</th>
                  <th className="p-3.5 rounded-tr-lg">Risk Transfer Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-[#5B6272]">
                <tr className="hover:bg-[#F4F5FB]">
                  <td className="p-3.5 font-bold text-[#E86A3C]">EXW</td>
                  <td className="p-3.5 font-bold text-[#101828]">Ex Works</td>
                  <td className="p-3.5">Any Mode</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5">Seller's origin factory door</td>
                </tr>
                <tr className="hover:bg-[#F4F5FB]">
                  <td className="p-3.5 font-bold text-[#E86A3C]">FCA</td>
                  <td className="p-3.5 font-bold text-[#101828]">Free Carrier</td>
                  <td className="p-3.5">Any Mode</td>
                  <td className="p-3.5 font-semibold text-emerald-600">Seller</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5">Carrier terminal at origin port</td>
                </tr>
                <tr className="hover:bg-[#F4F5FB]">
                  <td className="p-3.5 font-bold text-[#E86A3C]">FOB</td>
                  <td className="p-3.5 font-bold text-[#101828]">Free On Board</td>
                  <td className="p-3.5">Ocean Maritime</td>
                  <td className="p-3.5 font-semibold text-emerald-600">Seller</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5">Vessel rail at loading seaport</td>
                </tr>
                <tr className="hover:bg-[#F4F5FB]">
                  <td className="p-3.5 font-bold text-[#E86A3C]">CIF</td>
                  <td className="p-3.5 font-bold text-[#101828]">Cost, Insurance & Freight</td>
                  <td className="p-3.5">Ocean Maritime</td>
                  <td className="p-3.5 font-semibold text-emerald-600">Seller</td>
                  <td className="p-3.5 font-semibold text-emerald-600">Seller</td>
                  <td className="p-3.5 font-semibold text-amber-600">Buyer</td>
                  <td className="p-3.5">Discharge port rail (Insurance paid)</td>
                </tr>
                <tr className="hover:bg-[#F4F5FB]">
                  <td className="p-3.5 font-bold text-[#E86A3C]">DDP</td>
                  <td className="p-3.5 font-bold text-[#101828]">Delivered Duty Paid</td>
                  <td className="p-3.5">Any Mode</td>
                  <td className="p-3.5 font-semibold text-emerald-600">Seller</td>
                  <td className="p-3.5 font-semibold text-emerald-600">Seller</td>
                  <td className="p-3.5 font-semibold text-emerald-600">Seller</td>
                  <td className="p-3.5">Buyer's destination warehouse door</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
