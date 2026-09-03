"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CAREERS_DATA, CareerItem } from "@/data/careers";
import JobModal from "@/components/modals/JobModal";
import Button from "@/components/ui/Button";
import { MapPin, Briefcase, Clock, Award, ShieldCheck, ArrowRight, CheckCircle2, Globe } from "lucide-react";

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);
  const [jobModalOpen, setJobModalOpen] = useState(false);

  const departments = ["All", "Compliance & Legal", "Logistics Operations", "Supply Chain Tech", "Commercial & Sales"];

  const filteredCareers = CAREERS_DATA.filter((job) => {
    if (selectedDept === "All") return true;
    return job.department === selectedDept;
  });

  const handleApply = (job: CareerItem) => {
    setSelectedJob(job);
    setJobModalOpen(true);
  };

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
            JOIN VANGUARD GLOBAL LOGISTICS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-tight tracking-tight mb-4">
            Shape the Future of International <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">Commerce</span>
          </h1>
          <p className="text-base md:text-lg text-[#5B6272] max-w-3xl leading-relaxed">
            We are hiring licensed customs brokers, air freight trade specialists, intermodal architects, and supply chain analysts across Rotterdam, Singapore, Houston, and Dubai.
          </p>
        </div>

        {/* Benefits & Culture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-xs">
            <div className="w-10 h-10 bg-[#FDEDE8] text-[#E86A3C] rounded-lg flex items-center justify-center mb-4 border border-[#F5804B]/20 font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#101828] mb-2">Global Mobility & Rotation</h3>
            <p className="text-xs text-[#5B6272] leading-relaxed">
              Opportunities for operational rotations between our Rotterdam EMEA HQ, Singapore APAC Hub, and Houston Americas control tower.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-xs">
            <div className="w-10 h-10 bg-[#FDEDE8] text-[#E86A3C] rounded-lg flex items-center justify-center mb-4 border border-[#F5804B]/20 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#101828] mb-2">Customs Certification Support</h3>
            <p className="text-xs text-[#5B6272] leading-relaxed">
              100% corporate sponsorship for Licensed Customs Broker (LCB), IATA DG, and APICS CSCP professional credentials.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-xs">
            <div className="w-10 h-10 bg-[#FDEDE8] text-[#E86A3C] rounded-lg flex items-center justify-center mb-4 border border-[#F5804B]/20 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#101828] mb-2">Performance Incentives</h3>
            <p className="text-xs text-[#5B6272] leading-relaxed">
              Competitive base salaries, profit-sharing bonuses, healthcare coverage, and pension contribution schemes.
            </p>
          </div>
        </div>

        {/* Section: Open Roles List */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="CURRENT OPEN POSITIONS"
            title="Explore Active Opportunities"
            highlightWord="Opportunities"
            description="Select a role below to review responsibilities and submit an instant online application."
          />

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                  selectedDept === dept
                    ? "bg-[#101828] text-white shadow-sm"
                    : "bg-white text-[#5B6272] border border-[#E5E7EB] hover:bg-[#FDEDE8]/50"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredCareers.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E5E7EB]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase bg-[#FDEDE8] text-[#E86A3C] px-2.5 py-0.5 rounded border border-[#F5804B]/20">
                        {job.department}
                      </span>
                      <span className="text-xs text-[#5B6272] font-semibold">
                        {job.experience} Experience Required
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#101828]">{job.title}</h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#5B6272] shrink-0">
                    <span className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-4 h-4 text-[#E86A3C]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-4 h-4 text-[#E86A3C]" />
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Summary & Inset */}
                <p className="text-sm text-[#5B6272] leading-relaxed mb-4">
                  {job.summary}
                </p>

                {/* Signature Inset Box */}
                <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-4 mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
                    PRIMARY OBJECTIVE
                  </span>
                  <p className="text-xs font-medium text-[#101828]">
                    {job.responsibilities[0]}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#101828]">Immediate Start Date Available</span>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleApply(job)}
                    showArrow
                  >
                    APPLY FOR THIS ROLE
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <JobModal
        isOpen={jobModalOpen}
        onClose={() => setJobModalOpen(false)}
        job={selectedJob}
      />
    </div>
  );
}
