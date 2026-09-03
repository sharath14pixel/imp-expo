import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tenar Logistics | Global Import & Export Solutions",
  description: "Premier international import and export logistics, air and ocean freight forwarding, bonded warehousing, and customs compliance services worldwide.",
  keywords: ["import export", "freight forwarding", "customs clearance", "global logistics", "bonded warehousing", "supply chain solutions", "air freight", "ocean freight"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F4F5FB] text-[#5B6272] font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
