"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import confetti from "canvas-confetti";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid corporate email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(6, "Valid contact phone is required"),
  serviceType: z.string().min(1, "Please select a logistics service"),
  origin: z.string().min(2, "Origin port or city is required"),
  destination: z.string().min(2, "Destination port or city is required"),
  cargoDetails: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Ocean Freight",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceNo, setReferenceNo] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceType: defaultService,
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    // Simulate API network request
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    const randomRef = `TGL-Q${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNo(randomRef);
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

  const handleClose = () => {
    setIsSuccess(false);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Request Freight Rate Quote"
      subtitle="Receive precise rate estimates & transport lane options within 2 hours."
      maxWidth="xl"
    >
      {isSuccess ? (
        <div className="text-center py-8 px-4">
          <div className="w-16 h-16 bg-[#FDEDE8] text-[#E86A3C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F5804B]/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C]">
            QUOTE SUBMITTED SUCCESSFULLY
          </span>
          <h4 className="text-2xl font-bold text-[#101828] mt-2 mb-1">
            Reference #: {referenceNo}
          </h4>
          <p className="text-sm text-[#5B6272] max-w-md mx-auto mb-6">
            Our trade desk analysts are processing your transport parameters. A detailed quotation with Incoterms options will be sent to your corporate email shortly.
          </p>

          <div className="bg-[#F4F5FB] p-4 rounded-xl text-left text-xs text-[#5B6272] space-y-1.5 mb-6 max-w-md mx-auto border border-[#E5E7EB]">
            <p><strong className="text-[#101828]">Status:</strong> Assigned to Regional Trade Manager</p>
            <p><strong className="text-[#101828]">SLA Response Time:</strong> Under 120 Minutes</p>
            <p><strong className="text-[#101828]">Support Hotline:</strong> +31 10 798 4400 (Rotterdam Desk)</p>
          </div>

          <Button variant="primary" onClick={handleClose}>
            CLOSE WINDOW
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
              LOGISTICS SERVICE REQUIRED *
            </label>
            <select
              {...register("serviceType")}
              className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] font-medium focus:outline-none focus:border-[#E86A3C]"
            >
              <option value="Ocean Freight">Global Ocean Freight (FCL / LCL)</option>
              <option value="Air Freight">Air Freight Forwarding & Charters</option>
              <option value="Customs Clearance">Customs Clearance & Compliance</option>
              <option value="Bonded Warehousing">Contract & Bonded Warehousing</option>
              <option value="Multimodal Logistics">Multimodal Supply Chain (Sea-Rail-Road)</option>
              <option value="Project Cargo">Project Cargo & Heavy Lift</option>
            </select>
            {errors.serviceType && (
              <span className="text-xs text-red-500 mt-1 block">{errors.serviceType.message}</span>
            )}
          </div>

          {/* Origin & Destination Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                ORIGIN PORT / CITY *
              </label>
              <input
                type="text"
                placeholder="e.g. Shanghai Port, China"
                {...register("origin")}
                className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
              />
              {errors.origin && (
                <span className="text-xs text-red-500 mt-1 block">{errors.origin.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                DESTINATION PORT / CITY *
              </label>
              <input
                type="text"
                placeholder="e.g. Rotterdam Port, Netherlands"
                {...register("destination")}
                className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
              />
              {errors.destination && (
                <span className="text-xs text-red-500 mt-1 block">{errors.destination.message}</span>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                FULL NAME *
              </label>
              <input
                type="text"
                placeholder="John Doe"
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
                placeholder="johndoe@company.com"
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
                placeholder="Global Logistics Ltd"
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
                placeholder="+1 (555) 019-2834"
                {...register("phone")}
                className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
              />
              {errors.phone && (
                <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
              )}
            </div>
          </div>

          {/* Cargo Details */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
              CARGO SPECIFICATIONS / INCOTERMS (OPTIONAL)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. 2x40ft HC containers, FOB terms, estimated gross weight 38,000 kg, target pickup date..."
              {...register("cargoDetails")}
              className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
            />
          </div>

          <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
            <span className="text-xs text-[#5B6272]">
              🔒 Encrypted 256-bit secure trade portal
            </span>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            >
              {isSubmitting ? "CALCULATING RATE..." : "SUBMIT RATE REQUEST"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default QuoteModal;
