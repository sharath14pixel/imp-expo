import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsBar from "@/components/sections/StatsBar";
import Testimonials from "@/components/sections/Testimonials";
import PartnerLogos from "@/components/sections/PartnerLogos";
import LatestNews from "@/components/sections/LatestNews";
import ContactFormCTA from "@/components/sections/ContactFormCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Banner */}
      <Hero />

      {/* Section 2: Partner Carrier Logos */}
      <PartnerLogos />

      {/* Section 3: Company Overview */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="GLOBAL TRADE INFRASTRUCTURE"
                title="Over Two Decades of Maritime & Air Freight Excellence"
                highlightWord="Excellence"
                description="Founded in 2004, Tenar Global Logistics has grown from a regional Rotterdam ship declarant into an international multimodal supply chain power. We manage over 2.8 million TEUs annually across 150+ countries with licensed customs accuracy."
                className="mb-8"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[#F4F5FB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#E86A3C]" />
                    <h4 className="text-sm font-bold text-[#101828]">AEO-F Accredited Operator</h4>
                  </div>
                  <p className="text-xs text-[#5B6272]">
                    Highest European customs authorization status guaranteeing fast-track entry processing.
                  </p>
                </div>

                <div className="p-4 bg-[#F4F5FB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-[#E86A3C]" />
                    <h4 className="text-sm font-bold text-[#101828]">340+ Gateway Seaports</h4>
                  </div>
                  <p className="text-xs text-[#5B6272]">
                    Direct port terminal operating integration across transpacific & transatlantic lanes.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="primary" href="/about" showArrow>
                  READ OUR STORY
                </Button>
                <Button variant="ghost" href="/network">
                  VIEW GLOBAL HUBS
                </Button>
              </div>
            </div>

            {/* Right Column Signature Card Pattern */}
            <div className="lg:col-span-5">
              <div className="bg-[#F4F5FB] border border-[#E5E7EB] rounded-2xl p-6 md:p-8 space-y-6">
                
                {/* Signature Inset Box #1 */}
                <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
                    OUR GOVERNING PRINCIPLE
                  </span>
                  <p className="text-base font-bold text-[#101828] leading-snug">
                    "Cargo velocity must never compromise regulatory compliance."
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-xs text-[#5B6272]">
                    <CheckCircle2 className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                    <span><strong>100% Licensed Customs Brokers:</strong> In-house declarants in Rotterdam, Singapore, Houston & Dubai.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-[#5B6272]">
                    <CheckCircle2 className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                    <span><strong>Contracted Carrier Capacity:</strong> Long-term block space allocations with top 10 ocean liner alliances.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-[#5B6272]">
                    <CheckCircle2 className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                    <span><strong>Duty-Deferred Storage:</strong> Type A bonded warehouses preserving client working capital.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#101828] font-bold">
                  <span>ISO 9001:2015 & GDP Certified</span>
                  <Award className="w-5 h-5 text-[#E86A3C]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Our Services (Highlight Cards) */}
      <ServicesGrid />

      {/* Section 5: Why Choose Us (Highlight Cards) */}
      <WhyChooseUs />

      {/* Section 6: Statistics/Achievements (Count up on scroll once) */}
      <StatsBar />

      {/* Section 7: Testimonials (Carousel) */}
      <Testimonials />

      {/* Section 8: Latest News */}
      <LatestNews />

      {/* Section 9: Contact CTA Band */}
      <ContactFormCTA />
    </>
  );
}
