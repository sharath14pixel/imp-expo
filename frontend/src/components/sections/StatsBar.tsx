"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import { STATS_DATA } from "@/data/stats";

export const StatsBar = () => {
  return (
    <section className="py-20 bg-[#F4F5FB] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="GLOBAL PERFORMANCE METRICS"
          title="Scale & Operational Velocity in Numbers"
          highlightWord="Operational"
          description="Audited metrics reflecting our global maritime and air freight volumes across primary international trade corridors."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsBar;
