"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#101828] text-white border-t border-[#101828] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Company Brand Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-[#E86A3C] text-white rounded-lg flex items-center justify-center font-extrabold text-xl tracking-tighter shadow-sm">
                VG
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block leading-tight">
                  VANGUARD
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E86A3C] block">
                  GLOBAL LOGISTICS
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premier international import and export logistics provider. Orchestrating ocean freight forwarding, time-critical air cargo, bonded warehousing, and trade compliance across 150+ countries worldwide.
            </p>

            {/* Accreditations Badge Box */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-3.5 flex items-center gap-3 max-w-md">
              <ShieldCheck className="w-8 h-8 text-[#E86A3C] shrink-0" />
              <div className="text-xs text-gray-300">
                <span className="font-bold text-white block uppercase tracking-wider">AEO-F & C-TPAT Tier 3 Validated</span>
                Certified global trade security & automated customs authority integration.
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  LOGISTICS SERVICES
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  INDUSTRIES WE SERVE
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  GLOBAL NETWORK
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  INSIGHTS & NEWS
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  CAREERS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#E86A3C] transition-colors">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/services#ocean-freight" className="hover:text-[#E86A3C] transition-colors">
                  Global Ocean Freight (FCL/LCL)
                </Link>
              </li>
              <li>
                <Link href="/services#air-freight" className="hover:text-[#E86A3C] transition-colors">
                  Express Air Freight Charters
                </Link>
              </li>
              <li>
                <Link href="/services#customs-brokerage" className="hover:text-[#E86A3C] transition-colors">
                  Customs Clearance & Trade EDI
                </Link>
              </li>
              <li>
                <Link href="/services#bonded-warehousing" className="hover:text-[#E86A3C] transition-colors">
                  Type A Bonded Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services#multimodal-supply-chain" className="hover:text-[#E86A3C] transition-colors">
                  Multimodal Sea-Rail Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#project-cargo" className="hover:text-[#E86A3C] transition-colors">
                  Project Cargo & Heavy Lift
                </Link>
              </li>
            </ul>
          </div>

          {/* Global HQ Contact & Newsletter */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] mb-4">
              EMEA HQ ROTTERDAM
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                <span>Waalthaven Z.Z. 42, Port Area 2210, Rotterdam, Netherlands</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E86A3C] shrink-0" />
                <span>+31 10 798 4400</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E86A3C] shrink-0" />
                <span>rotterdam.hq@vanguard-logistics.com</span>
              </li>
            </ul>

            {/* Trade Bulletin Newsletter */}
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block mb-2">
                SUBSCRIBE TO TRADE INTELLIGENCE
              </span>
              {newsletterSubmitted ? (
                <div className="bg-gray-900 border border-[#E86A3C]/40 text-xs text-[#E86A3C] p-2.5 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed to Global Freight Bulletin!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Corporate email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E86A3C]"
                  />
                  <button
                    type="submit"
                    className="bg-[#E86A3C] text-white p-2 rounded-lg hover:bg-[#d4592b] transition-colors cursor-pointer shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Vanguard Global Logistics B.V. All Rights Reserved. International Freight Forwarding Standards Compliant.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Carriage</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy & GDPR</span>
            <span className="hover:text-white transition-colors cursor-pointer">AEO Certification Status</span>
            <span className="hover:text-white transition-colors cursor-pointer">Anti-Bribery Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
