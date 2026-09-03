"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import HighlightCard from "@/components/ui/HighlightCard";
import { ShieldAlert, Cpu, Globe, Scale } from "lucide-react";

export const WhyChooseUs = () => {
  const whyUsData = [
    {
      id: "regulatory-precision",
      title: "Zero-Detention Customs Pre-Clearance",
      eyebrow: "COMPLIANCE EXCELLENCE",
      icon: <Scale className="w-6 h-6" />,
      badge: "AEO & C-TPAT Tier 3",
      insetLabel: "WHY IT MATTERS",
      insetText: "Submitting customs documentation 48 hours prior to vessel arrival eliminates demurrage & storage penalties.",
      description: "Our in-house licensed declarant team handles HTS classification, tariff engineering, and EU CBAM carbon reporting with a 99.8% first-time clearance rate.",
      highlights: [
        "Direct EDI integration with European, Asian & US customs authorities",
        "Automated tariff duty drawback recovery programs",
        "Full binding tariff information (BTI) legal support"
      ]
    },
    {
      id: "carrier-capacity",
      title: "Guaranteed Vessel & Flight Allocations",
      eyebrow: "CAPACITY GUARANTEE",
      icon: <Globe className="w-6 h-6" />,
      badge: "340+ Global Ports",
      insetLabel: "OUR APPROACH",
      insetText: "Fixed-tier carrier block space agreements (BSAs) ensure cargo moves even during peak surge windows.",
      description: "Direct long-term agreements with top-tier ocean alliances and maindeck air cargo operators protect your supply chain against freight market volatility.",
      highlights: [
        "Weekly dedicated charter space on transpacific & Asia-Europe corridors",
        "Neutral LCL consolidation networks with zero rolling container risk",
        "24/7 AOG aircraft emergency charter response team"
      ]
    },
    {
      id: "supply-chain-telemetry",
      title: "Real-Time Container & Thermal Telemetry",
      eyebrow: "DIGITAL VISIBILITY",
      icon: <Cpu className="w-6 h-6" />,
      badge: "IoT Telemetry",
      insetLabel: "KEY ADVANTAGE",
      insetText: "Live satellite vessel tracking combined with sensor-level temperature & humidity telemetry.",
      description: "Access a single unified dashboard monitoring container coordinates, port terminal ETA changes, and cold-chain thermal integrity across every leg.",
      highlights: [
        "API data feeds directly into client ERP (SAP, Oracle, Microsoft Dynamics)",
        "Automated delay alert triggers with alternate intermodal routing",
        "ISO 14064 Scope 3 GHG carbon emissions reporting per shipment"
      ]
    },
    {
      id: "duty-deferred-warehousing",
      title: "Customs-Bonded Duty Deferred Hubs",
      eyebrow: "CAPITAL OPTIMIZATION",
      icon: <ShieldAlert className="w-6 h-6" />,
      badge: "Tax Deferred",
      insetLabel: "FINANCIAL IMPACT",
      insetText: "Defer tariff payments until goods enter domestic distribution, unlocking significant working capital.",
      description: "Type A bonded facilities adjacent to primary deepwater ports in Rotterdam, Houston, Dubai, and Singapore allow duty-free re-exporting and inventory buffering.",
      highlights: [
        "Pick & pack, kitting, and specialized packaging in bonded zones",
        "Serially tracked WMS inventory with 99.9% audit compliance",
        "Climate-controlled GDP vaults for biologics & luxury goods"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="THE VANGUARD ADVANTAGE"
          title="Engineered for High-Consequence Freight Reliability"
          highlightWord="Reliability"
          description="Combining deep regulatory trade expertise with global carrier allocations and real-time cargo telemetry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyUsData.map((item) => (
            <HighlightCard
              key={item.id}
              title={item.title}
              categoryEyebrow={item.eyebrow}
              badge={item.badge}
              icon={item.icon}
              insetLabel={item.insetLabel}
              insetText={item.insetText}
              description={item.description}
              highlights={item.highlights}
              ctaText="LEARN MORE ABOUT CAPABILITIES"
              ctaHref="/about"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
