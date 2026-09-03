"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { CareerItem } from "@/data/careers";
import { CheckCircle2, Loader2, UploadCloud } from "lucide-react";
import confetti from "canvas-confetti";

const jobSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Valid phone number is required"),
  linkedin: z.string().url("Please provide a valid LinkedIn URL").or(z.string().length(0)),
  coverNote: z.string().min(10, "Please provide a brief introduction (min 10 characters)"),
});

type JobFormValues = z.infer<typeof jobSchema>;

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: CareerItem | null;
}

export const JobModal: React.FC<JobModalProps> = ({
  isOpen,
  onClose,
  job,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
  });

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const onSubmit = async (data: JobFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFileName(null);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={`Apply: ${job.title}`}
      subtitle={`${job.location} • ${job.type} • ${job.department}`}
      maxWidth="lg"
    >
      {isSuccess ? (
        <div className="text-center py-8 px-4">
          <div className="w-16 h-16 bg-[#FDEDE8] text-[#E86A3C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F5804B]/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C]">
            APPLICATION RECEIVED
          </span>
          <h4 className="text-2xl font-bold text-[#101828] mt-2 mb-2">
            Thank You For Applying!
          </h4>
          <p className="text-sm text-[#5B6272] max-w-md mx-auto mb-6">
            Your application for <strong className="text-[#101828]">{job.title}</strong> has been logged in our talent management database. Our global recruitment team will review your qualifications and contact you within 3 business days.
          </p>

          <Button variant="primary" onClick={handleClose}>
            RETURN TO CAREERS
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          {/* Job Overview Inset */}
          <div className="bg-[#FDEDE8] border border-[#F5804B]/20 rounded-lg p-3.5 mb-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-0.5">
              POSITION REQUIREMENT
            </span>
            <p className="text-xs text-[#101828] font-medium">
              {job.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                FULL NAME *
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                {...register("fullName")}
                className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
              />
              {errors.fullName && (
                <span className="text-xs text-red-500 mt-1 block">{errors.fullName.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                placeholder="janesmith@example.com"
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
                PHONE NUMBER *
              </label>
              <input
                type="text"
                placeholder="+31 6 1234 5678"
                {...register("phone")}
                className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
              />
              {errors.phone && (
                <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
                LINKEDIN PROFILE (OPTIONAL)
              </label>
              <input
                type="text"
                placeholder="https://linkedin.com/in/janesmith"
                {...register("linkedin")}
                className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
              />
              {errors.linkedin && (
                <span className="text-xs text-red-500 mt-1 block">{errors.linkedin.message}</span>
              )}
            </div>
          </div>

          {/* Resume Upload Simulation */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
              RESUME / CV (PDF, DOCX) *
            </label>
            <div className="border-2 border-dashed border-[#E5E7EB] bg-[#F4F5FB] rounded-lg p-4 text-center hover:border-[#E86A3C] transition-colors cursor-pointer relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <UploadCloud className="w-8 h-8 text-[#E86A3C] mx-auto mb-2" />
              <p className="text-xs font-semibold text-[#101828]">
                {fileName ? `Uploaded: ${fileName}` : "Click or drag your CV file here"}
              </p>
              <p className="text-[11px] text-[#5B6272] mt-1">Maximum file size 10MB</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#101828] mb-1">
              COVER NOTE / EXPERIENCE SUMMARY *
            </label>
            <textarea
              rows={3}
              placeholder="Briefly describe your logistics experience and why you are interested in this position..."
              {...register("coverNote")}
              className="w-full px-3.5 py-2.5 bg-[#F4F5FB] border border-[#E5E7EB] rounded-lg text-sm text-[#101828] focus:outline-none focus:border-[#E86A3C]"
            />
            {errors.coverNote && (
              <span className="text-xs text-red-500 mt-1 block">{errors.coverNote.message}</span>
            )}
          </div>

          <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#5B6272] hover:text-[#101828]"
            >
              CANCEL
            </button>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
            >
              {isSubmitting ? "SUBMITTING APPLICATION..." : "SUBMIT APPLICATION"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default JobModal;
