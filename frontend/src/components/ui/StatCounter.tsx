"use client";

import React, { useEffect, useState, useRef } from "react";

export interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  description,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, value]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = value * easeOutProgress;

      setCount(currentValue);

      if (currentStep >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepTime);
  };

  const formattedValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <div
      ref={elementRef}
      className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[#E86A3C]/40 transition-colors duration-300"
    >
      <div>
        <div className="text-4xl md:text-5xl font-extrabold text-[#101828] tracking-tight mb-2 flex items-baseline">
          <span>{prefix}</span>
          <span className="tabular-nums">{hasAnimated ? formattedValue : "0"}</span>
          <span className="text-[#E86A3C]">{suffix}</span>
        </div>
        <h4 className="text-base md:text-lg font-bold text-[#101828] mb-1 uppercase tracking-wide">
          {label}
        </h4>
        <p className="text-xs md:text-sm text-[#5B6272] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative inset indicator */}
      <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
        <span className="text-[10px] font-extrabold text-[#E86A3C] uppercase tracking-widest">
          VERIFIED METRIC
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E86A3C] animate-pulse"></span>
      </div>
    </div>
  );
};

export default StatCounter;
