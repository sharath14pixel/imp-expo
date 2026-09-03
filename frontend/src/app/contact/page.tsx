"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { OFFICES_DATA, OfficeItem } from "@/data/offices";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ShieldCheck, HelpCircle, ChevronDown, Loader2, Send } from "lucide-react";
import confetti from "canvas-confetti";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid corporate email"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(6, "Valid phone number is required"),
  inquiryType: z.string().min(1, "Please select an inquiry topic"),
  preferredHub: z.string().min(1, "Please select a regional office hub"),
  message: z.string().min(15, "Please enter your detailed inquiry (minimum 15 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [selectedOffice, setSelectedOffice] = useState<OfficeItem>(OFFICES_DATA[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "General Freight Inquiry",
      preferredHub: "Rotterdam EMEA HQ",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const generatedTicket = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setIsSubmitting(false);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    reset();
  };

  const faqs = [
    {
      q: "What documentation is required for customs pre-clearance?",
      a: "For ocean or air pre-clearance, we require the Commercial Invoice, Packing List, Bill of Lading (or Air Waybill), Certificate of Origin, and applicable export license / EU CBAM emissions declarations at least 48 hours prior to port arrival."
    },
    {
      q: "How does Type A Bonded Warehousing defer import duties?",
      a: "Type A customs-bonded storage allows goods to enter destination facilities without immediate duty or VAT payment. Customs liabilities are deferred until inventory is officially withdrawn for domestic sale, or completely waived if re-exported."
    },
    {
      q: "What is your typical SLA response time for urgent rate quotes?",
      a: "Our operational trade desks in Rotterdam, Singapore, and Houston process rate requests within 120 minutes during local operating hours. Time-critical air charter requests are handled 24/7 within 30 minutes."
    },
    {
      q: "Do you handle dangerous goods (HAZMAT) and pharma cold-chain?",
      a: "Yes. Tenar maintains certified IATA DG Category 6 specialists, IMDG hazardous tank fleets, and GDP-certified temperature-monitored hubs (-80°C to +25°C) with live IoT thermal telemetry."
    }
  ];

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
            GLOBAL CONTACT & SUPPORT DESKS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-tight tracking-tight mb-4">
            Connect with Our Trade <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">Specialists</span>
          </h1>
          <p className="text-base md:text-lg text-[#5B6272] max-w-3xl leading-relaxed">
            Reach our regional control towers in Rotterdam, Singapore, Houston, Dubai, or Shanghai. Our licensed customs brokers and freight analysts operate 24/7.
          </p>
        </div>

        {/* Section 1: Main Contact Form & Office Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-10 shadow-sm">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
              OFFICIAL TRADE INQUIRY FORM
            </span>
            <h2 className="text-2xl font-bold text-[#101828] mb-6">
              Send a Verified Message to Our Logistics Desk
            </h2>

            {isSuccess ? (
              <div className="text-center py-8 px-4 bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl">
                <div className="w-14 h-14 bg-white text-[#E86A3C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F5804B]/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C]">
                  INQUIRY LOGGED
                </span>
                <h3 className="text-2xl font-bold text-[#101828] mt-1 mb-2">
                  Support Ticket #: {ticketId}
                </h3>
                <p className="text-xs text-[#5B6272] max-w-md mx-auto mb-6 leading-relaxed">
                  Your message has been assigned to the duty manager at <strong className="text-[#101828]">{selectedOffice.name}</strong>. A trade coordinator will respond to your corporate email within 2 hours.
                </p>

                <Button variant="primary" onClick={handleResetForm}>
                  SEND ANOTHER INQUIRY
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="Alexander Wright"
                      {...register("fullName")}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.fullName.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      placeholder="a.wright@enterprise.com"
                      {...register("email")}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      COMPANY NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="Wright International Energy"
                      {...register("company")}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
                    />
                    {errors.company && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.company.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      CONTACT PHONE *
                    </label>
                    <input
                      type="text"
                      placeholder="+1 (713) 555-0199"
                      {...register("phone")}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      INQUIRY TOPIC *
                    </label>
                    <select
                      {...register("inquiryType")}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] font-medium focus:outline-none focus:border-[#E86A3C]"
                    >
                      <option value="General Freight Inquiry">General Freight Inquiry</option>
                      <option value="Customs Pre-Clearance & CBAM">Customs Pre-Clearance & CBAM</option>
                      <option value="Type A Bonded Warehousing">Type A Bonded Warehousing</option>
                      <option value="Project Cargo Charter">Project Cargo Charter</option>
                      <option value="Career & HR Opportunity">Career & HR Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                      PREFERRED OFFICE HUB *
                    </label>
                    <select
                      {...register("preferredHub")}
                      className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] font-medium focus:outline-none focus:border-[#E86A3C]"
                    >
                      {OFFICES_DATA.map((off) => (
                        <option key={off.id} value={off.name}>
                          {off.city} ({off.country})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                    YOUR DETAILED MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details regarding cargo origin, destination ports, gross weights, Incoterms terms..."
                    {...register("message")}
                    className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>
                  )}
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-xs text-[#5B6272]">🔒 Encrypted 256-bit submission</span>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? "SENDING MESSAGE..." : "TRANSMIT MESSAGE"}
                  </Button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Office Selector Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hub Tabs */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-3">
                SELECT REGIONAL HUB DETAILS
              </span>

              <div className="flex flex-wrap gap-2 mb-6">
                {OFFICES_DATA.map((off) => (
                  <button
                    key={off.id}
                    onClick={() => setSelectedOffice(off)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      selectedOffice.id === off.id
                        ? "bg-[#101828] text-white"
                        : "bg-[#F4F5FB] text-[#5B6272] hover:bg-[#E5E7EB]"
                    }`}
                  >
                    {off.city}
                  </button>
                ))}
              </div>

              {/* Selected Office Details */}
              <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-5 mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
                  {selectedOffice.region}
                </span>
                <h4 className="text-xl font-bold text-[#101828]">{selectedOffice.name}</h4>
                <p className="text-xs text-[#5B6272] mt-0.5">{selectedOffice.role}</p>
              </div>

              <div className="space-y-3 text-xs text-[#5B6272] mb-6">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                  <span>{selectedOffice.address}, {selectedOffice.city}, {selectedOffice.country}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E86A3C] shrink-0" />
                  <span>{selectedOffice.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E86A3C] shrink-0" />
                  <span>{selectedOffice.email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E86A3C] shrink-0" />
                  <span>Local Timezone: {selectedOffice.timezone}</span>
                </div>
              </div>

              <div className="p-3 bg-[#F4F5FB] rounded-lg border border-[#E5E7EB] text-[11px] text-[#101828] font-bold text-center">
                {selectedOffice.keyStats}
              </div>
            </div>

          </div>

        </div>

        {/* Section 2: FAQ Accordion */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 shadow-sm">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Customs & Freight Clearance FAQs"
            highlightWord="Customs"
            description="Clear answers regarding HTS codes, bonded warehousing, Incoterms, and SLA turnarounds."
          />

          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#E5E7EB] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left font-bold text-sm text-[#101828] bg-white flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F4F5FB]"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#E86A3C] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#5B6272] transition-transform duration-200 ${isOpen ? "rotate-180 text-[#E86A3C]" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 py-4 bg-[#F4F5FB] border-t border-[#E5E7EB] text-xs text-[#5B6272] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
