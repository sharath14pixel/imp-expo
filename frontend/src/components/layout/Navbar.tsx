"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe2, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";
import QuoteModal from "@/components/modals/QuoteModal";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "INDUSTRIES", href: "/industries" },
    { name: "GLOBAL NETWORK", href: "/network" },
    { name: "NEWS", href: "/news" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Banner strip */}
      <div className="bg-[#101828] text-white text-[11px] font-medium py-1.5 px-4 hidden lg:block border-b border-[#101828]/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <Globe2 className="w-3.5 h-3.5 text-[#E86A3C]" />
              Global Operational Support: 24/7 Operations Duty Officer Active
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">
              Rotterdam EMEA HQ Hub: <strong className="text-white font-semibold">+31 10 798 4400</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 bg-[#FDEDE8]/10 text-[#E86A3C] px-2 py-0.5 rounded font-extrabold tracking-wider">
              AEO & C-TPAT CERTIFIED
            </span>
            <Link href="/contact" className="hover:text-[#E86A3C] transition-colors flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#E86A3C]" />
              Support Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm py-3"
            : "bg-white border-b border-[#E5E7EB] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#101828] text-white rounded-lg flex items-center justify-center font-extrabold text-xl tracking-tighter group-hover:bg-[#E86A3C] transition-colors duration-300 shadow-sm">
              TG
            </div>
            <div>
              <span className="text-lg font-extrabold text-[#101828] tracking-tight block leading-tight">
                TENAR
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E86A3C] block">
                GLOBAL LOGISTICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                    active ? "text-[#E86A3C]" : "text-[#101828] hover:text-[#E86A3C]"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E86A3C] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden xl:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setQuoteModalOpen(true)}
            >
              GET A QUOTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setQuoteModalOpen(true)}
              className="text-[10px] px-3 py-1.5"
            >
              QUOTE
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#101828] hover:bg-[#F4F5FB] focus:outline-none"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold uppercase tracking-wider px-3 py-2 rounded-md transition-colors ${
                      active
                        ? "bg-[#FDEDE8] text-[#E86A3C]"
                        : "text-[#101828] hover:bg-[#F4F5FB]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-[#E5E7EB]">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full"
                >
                  REQUEST FREIGHT QUOTE
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
