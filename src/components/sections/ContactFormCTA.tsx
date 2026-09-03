"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import QuoteModal from "@/components/modals/QuoteModal";
import { PhoneCall, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export const ContactFormCTA = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <section className="py-16 bg-[#101828] text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#E86A3C]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-gray-900 to-[#101828] border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDEDE8]/10 text-[#E86A3C] text-xs font-extrabold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              DIRECT TRADE DESK ACCESS
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
              Ready to Optimize Your Global Transport Routes?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Speak directly with licensed customs brokers and trade managers. Get guaranteed block space allocations and transparent Incoterms pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setQuoteModalOpen(true)}
              className="w-full sm:w-auto"
              showArrow
            >
              REQUEST RATE QUOTE
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-[#101828]"
            >
              CONTACT OFFICES
            </Button>
          </div>

        </div>
      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </section>
  );
};

export default ContactFormCTA;
