export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metric: string;
  metricLabel: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "auto-parts-corp",
    quote: "Vanguard transformed our European component supply pipeline. Their pre-clearance customs filing eliminated our port dwell time completely, keeping our assembly lines operating at peak velocity.",
    author: "Dietmar Weber",
    role: "VP of Global Supply Chain",
    company: "Continental Auto Components",
    industry: "Automotive OEM",
    metric: "0 Line-Stops",
    metricLabel: "Across 4,200 JIT Container Deliveries",
    rating: 5
  },
  {
    id: "biopharma-intl",
    quote: "Shipping temperature-sensitive biological therapeutics requires absolute precision. Vanguard's GDP-certified air charter network achieved 100% thermal compliance across all transpacific lanes.",
    author: "Dr. Aris Thorne",
    role: "Director of Cold Chain Logistics",
    company: "Nexus BioPharma Global",
    industry: "Pharmaceuticals",
    metric: "100% Integrity",
    metricLabel: "GDP Cold Chain Conformance Rate",
    rating: 5
  },
  {
    id: "solartech-energy",
    quote: "Handling 48,000 tons of oversized photovoltaic infrastructure across remote South American desert sites was seamlessly executed by Vanguard's Heavy Lift Project Cargo team.",
    author: "Camila Morales",
    role: "Head of Infrastructure Procurement",
    company: "Andes Solar Energy Ltd",
    industry: "Renewable Energy",
    metric: "14 Days Ahead",
    metricLabel: "Of Project Commissioning Schedule",
    rating: 5
  },
  {
    id: "transcontinental-machinery",
    quote: "Utilizing Vanguard's Type A customs-bonded warehousing in Rotterdam allowed us to defer $3.8M in import duties during a volatile market shift, drastically boosting liquidity.",
    author: "Jan-Willem Smits",
    role: "Chief Financial Officer",
    company: "Hollands Heavy Machinery BV",
    industry: "Industrial Machinery",
    metric: "$3.8M Deferral",
    metricLabel: "In Import Duties Reinvested in Capital",
    rating: 5
  },
  {
    id: "apex-electronics",
    quote: "During peak season air cargo congestion, Vanguard's dedicated space block allocations were the only reason our new semiconductor launch reached retail shelves on time.",
    author: "Sarah Lin",
    role: "Global Procurement Director",
    company: "Apex Micro Systems",
    industry: "Semiconductors & High Tech",
    metric: "99.8% On-Time",
    metricLabel: "Express Air Charter Delivery Rate",
    rating: 5
  }
];

export const PARTNERS_DATA = [
  { name: "Maersk Line", category: "Maritime Carrier" },
  { name: "MSC Ocean Cargo", category: "Maritime Carrier" },
  { name: "Hapag-Lloyd", category: "Container Transport" },
  { name: "Lufthansa Cargo", category: "Air Cargo Charter" },
  { name: "DP World Terminals", category: "Port Infrastructure" },
  { name: "CMA CGM Group", category: "Ocean Freight" },
  { name: "Cathay Cargo", category: "Air Transport" },
  { name: "Port of Rotterdam", category: "Strategic Gateway" }
];
