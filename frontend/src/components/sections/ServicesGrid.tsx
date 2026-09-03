"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import HighlightCard from "@/components/ui/HighlightCard";
import { SERVICES_DATA } from "@/data/services";
import QuoteModal from "@/components/modals/QuoteModal";
import { Ship, Plane, FileCheck, Warehouse, Truck, Boxes } from "lucide-react";

export const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

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

  const handleQuoteForService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setQuoteModalOpen(true);
  };

  return (
    <section className="py-20 bg-[#F4F5FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CORE LOGISTICS CAPABILITIES"
          title="End-to-End Transport & Trade Architecture"
          highlightWord="Architecture"
          description="Integrated multimodal freight forwarding, licensed customs brokerage, and customs-bonded warehousing engineered for international supply chain reliability."
        />

        {/* Services Highlight Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
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
                description={service.shortDesc}
                highlights={service.highlights.slice(0, 3)}
                ctaText="REQUEST SERVICE QUOTE"
                onCtaClick={() => handleQuoteForService(service.title)}
              />
            );
          })}
        </div>

      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService || "Ocean Freight"}
      />
    </section>
  );
};

export default ServicesGrid;
