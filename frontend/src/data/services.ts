export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  incoterms: string[];
  keyFeatures: { label: string; text: string }[];
  accentBadge: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ocean-freight",
    slug: "ocean-freight",
    title: "Global Ocean Freight",
    eyebrow: "MARITIME LOGISTICS",
    shortDesc: "Full Container Load (FCL) and Less than Container Load (LCL) consolidation across 340+ international ports.",
    fullDesc: "Our ocean freight solutions integrate direct ocean carrier contracts with automated container tracking and port-side priority handling. We operate daily departures across transpacific, transatlantic, and intra-Asia trade corridors with guaranteed equipment availability.",
    iconName: "Ship",
    highlights: [
      "Dedicated FCL vessel space allocations on primary liner routes",
      "Neutral LCL consolidation networks with bi-weekly departures",
      "Reefer cold-chain monitoring (-25°C to +15°C)",
      "Out-of-gauge (OOG) and breakbulk project cargo handling"
    ],
    incoterms: ["FOB", "CIF", "CFR", "DDP", "EXW"],
    keyFeatures: [
      { label: "OUR APPROACH", text: "Optimized vessel routing algorithms that minimize dwell times at transshipment ports." },
      { label: "WHY IT MATTERS", text: "Reduces transit inventory cost by up to 18% while guaranteeing equipment access during peak shipping seasons." },
      { label: "COMPLIANCE NOTE", text: "Automated SOLAS Verified Gross Mass (VGM) reporting integrated directly with port terminal operating systems." }
    ],
    accentBadge: "Core Capability"
  },
  {
    id: "air-freight",
    slug: "air-freight",
    title: "Air Freight Forwarding",
    eyebrow: "TIME-CRITICAL TRANSIT",
    shortDesc: "Express charter and scheduled maindeck cargo handling for high-value and temperature-sensitive shipments.",
    fullDesc: "When speed is paramount, Vanguard provides direct airline block space agreements (BSAs) on major cargo carriers. From Next Flight Out (NFO) express service to full aircraft charters, we ensure critical cargo moves without transit delays.",
    iconName: "Plane",
    highlights: [
      "Fixed allocations on scheduled cargo flight routes",
      "AOG (Aircraft on Ground) 24/7 priority dispatch",
      "Temperature-controlled GDP-compliant pharma handling",
      "Customs pre-clearance while cargo is en route"
    ],
    incoterms: ["FCA", "CPT", "CIP", "DDP"],
    keyFeatures: [
      { label: "OUR APPROACH", text: "Airport-to-airport express lanes backed by tarmac priority loading passes." },
      { label: "WHY IT MATTERS", text: "Guarantees transit windows for high-value electronics and emergency replacement parts." },
      { label: "SECURITY LEVEL", text: "TAPA FSR-A certified air cargo handling facilities across major gateway hubs." }
    ],
    accentBadge: "Priority Transport"
  },
  {
    id: "customs-brokerage",
    slug: "customs-brokerage",
    title: "Customs Clearance & Trade Compliance",
    eyebrow: "REGULATORY PRECISION",
    shortDesc: "Licensed customs brokers executing HTS classification, duty drawback, and AEO/CTPAT regulatory compliance.",
    fullDesc: "Navigating international tariffs, embargoes, and customs regulations requires local expertise. Vanguard's licensed in-house customs brokers manage complex entry documentation, tariff classifications, and valuation compliance to keep your cargo moving legally and efficiently.",
    iconName: "FileCheck",
    highlights: [
      "Automated EDI customs filing directly with national revenue agencies",
      "Duty drawback recovery and tariff engineering audits",
      "Free Trade Agreement (FTA) qualification and Certificate of Origin validation",
      "AEO-F and C-TPAT Tier 3 validated compliance framework"
    ],
    incoterms: ["DDP", "DAP", "DPU"],
    keyFeatures: [
      { label: "OUR APPROACH", text: "Pre-arrival entry submission 48 hours prior to vessel arrival at origin port." },
      { label: "WHY IT MATTERS", text: "Eliminates demurrage and storage penalties caused by administrative customs holds." },
      { label: "AUDIT GUARANTEE", text: "100% verified HTS codes backed by legal tariff specialists and binding rulings." }
    ],
    accentBadge: "Regulatory Standard"
  },
  {
    id: "bonded-warehousing",
    slug: "bonded-warehousing",
    title: "Contract & Bonded Warehousing",
    eyebrow: "SECURED STORAGE",
    shortDesc: "Type A customs-bonded warehouse facilities offering cross-docking, pick & pack, and duty-deferred storage.",
    fullDesc: "Optimize cash flow by deferring customs duties until goods enter destination commercial markets. Our modern distribution centers feature WMS climate zones, automated inventory reporting, and value-added fulfillment services.",
    iconName: "Warehouse",
    highlights: [
      "Customs-bonded storage allowing duty-deferred inventory hold",
      "RF-scanned WMS inventory with real-time API client dashboard",
      "Kitting, specialized repacking, and Amazon FBA preparation",
      "High-security vaults for precious minerals and luxury goods"
    ],
    incoterms: ["DAP", "DPU", "EXW"],
    keyFeatures: [
      { label: "OUR APPROACH", text: "Strategic port-adjacent warehousing with direct rail siding connections." },
      { label: "WHY IT MATTERS", text: "Defers tax liabilities until sales are finalized, improving working capital." },
      { label: "WMS CAPABILITY", text: "Serial number and batch lot tracking with automated FIFO/FEFO rules." }
    ],
    accentBadge: "Duty Deferred"
  },
  {
    id: "multimodal-supply-chain",
    slug: "multimodal-supply-chain",
    title: "Multimodal Supply Chain Integration",
    eyebrow: "END-TO-END ORCHESTRATION",
    shortDesc: "Seamless intermodal sea-rail-road connectivity optimizing transit time, carbon footprint, and freight costs.",
    fullDesc: "Combining the cost efficiencies of ocean transport with the speed of air and rail freight, our multimodal routing designs customized door-to-door supply chains. Managed through a single unified Bill of Lading.",
    iconName: "Truck",
    highlights: [
      "Single-carrier responsibility via Ocean-Rail-Road multimodal BOL",
      "China-Europe block train rail express services",
      "CO2 emissions reporting and green route optimization",
      "Dedicated drayage fleets at primary maritime terminals"
    ],
    incoterms: ["DDP", "DAP", "FCA"],
    keyFeatures: [
      { label: "OUR APPROACH", text: "Dynamic route switching based on live port congestion and weather metrics." },
      { label: "WHY IT MATTERS", text: "Provides 30% faster transit than pure ocean freight at half the cost of air freight." },
      { label: "SUSTAINABILITY", text: "Integrated carbon offset program reporting Scope 3 GHG emissions per TEU." }
    ],
    accentBadge: "Hybrid Logistics"
  },
  {
    id: "project-cargo",
    slug: "project-cargo",
    title: "Project Cargo & Heavy Lift",
    eyebrow: "INDUSTRIAL INFRASTRUCTURE",
    shortDesc: "Specialized movement of oversized machinery, energy equipment, and industrial infrastructure components.",
    fullDesc: "From wind turbine blades to oil refinery modules, Vanguard's Project Logistics division handles high-complexity cargo movements requiring route surveys, heavy-haul permits, tug and barge chartering, and on-site engineering supervision.",
    iconName: "Boxes",
    highlights: [
      "On-site route feasibility surveys and bridge load analyses",
      "Heavy-lift crane operations and barge chartering",
      "Customs clearances for temporary imports and equipment return",
      "Dedicated marine cargo superintendents at loading and discharge ports"
    ],
    incoterms: ["EXW", "FOB", "DAP"],
    keyFeatures: [
      { label: "OUR APPROACH", text: "Precision engineering models created prior to physical cargo lifting." },
      { label: "WHY IT MATTERS", text: "Mitigates operational risk during multi-million dollar plant expansions." },
      { label: "FIELD EXECUTIVE", text: "On-site master mariner overseeing every heavy lift loading sequence." }
    ],
    accentBadge: "Specialized Engineering"
  }
];
