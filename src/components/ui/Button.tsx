"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  showArrow = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 rounded-lg cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-xs md:text-sm gap-2",
    lg: "px-8 py-4 text-sm md:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#E86A3C] text-white hover:bg-[#d4592b] shadow-sm hover:shadow-md active:scale-[0.98]",
    secondary:
      "bg-[#101828] text-white hover:bg-[#1d2939] shadow-sm hover:shadow-md active:scale-[0.98]",
    outline:
      "bg-transparent text-[#101828] border-2 border-[#101828] hover:bg-[#101828] hover:text-white active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#101828] hover:text-[#E86A3C] hover:bg-[#FDEDE8]/50",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
};

export default Button;
