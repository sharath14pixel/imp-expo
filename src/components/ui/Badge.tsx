"use client";

import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "neutral" | "tint" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "tint",
  className = "",
}) => {
  const styles = {
    accent: "bg-[#E86A3C] text-white",
    neutral: "bg-[#101828] text-white",
    tint: "bg-[#FDEDE8] text-[#E86A3C] border border-[#F5804B]/20",
    outline: "bg-transparent text-[#5B6272] border border-[#E5E7EB]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
