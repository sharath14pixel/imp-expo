export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  iconName: string;
  complianceStandards: string[];
  keySolutions: string[];
  signatureNote: { label: string; text: string };
  stats: { value: string; label: string };
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "automotive",
    slug: "automotive",
    name: "Automotive & OEM Supply Chain",
    eyebrow: "JUST-IN-TIME DELIVERY",
    tagline: "Synchronized component logistics feeding assembly plants worldwide.",
    description: "Automotive supply chains require zero-downtime component deliveries. We manage inbound tier-1 assembly supply lines with emergency hot-shot couriers, returnable container logistics, and CKD/SKD kit shipments.",
    iconName: "Car",
    complianceStandards: ["IATF 16949 Compliant", "VDA 6.3 Standards", "C-TPAT Tier 3"],
    keySolutions: [
      "Sequenced Just-In-Time (JIT) delivery to assembly line side",
      "Consolidated inbound logistics from over 500 tier suppliers",
      "Reverse logistics for returnable racks and stillages",
      "Emergency AOG/Critical part charters with sub-4-hour dispatch"
    ],
    signatureNote: {
      label: "INDUSTRY REQUIREMENT",
      text: "Eliminates factory line-stop costs which average $22,000 per minute in automotive assembly."
    },
    stats: { value: "1.4M+", label: "Finished Vehicles & Components Shipped Annually" }
  },
  {
    id: "energy-mining",
    slug: "energy-mining",
    name: "Energy, Mining & Heavy Industry",
    eyebrow: "REMOTE OPERATIONS",
    tagline: "Rigging, heavy-lift transportation, and dangerous goods management for remote site deployments.",
    description: "Extracting resources and generating power requires transporting bulky infrastructure into demanding environments. Vanguard manages supply bases, offshore vessel charters, and hazardous chemical transport across South America, Africa, and Australia.",
    iconName: "Zap",
    complianceStandards: ["IMDG Hazardous Code", "API Spec Q1 Compliant", "ISO 14001 Environmental"],
    keySolutions: [
      "Rig-mobilization transport logistics for onshore/offshore sites",
      "Dangerous Goods (HAZMAT) Class 1 through 9 certified handling",
      "Supply base management at coastal ports near mining basins",
      "Chartering barge and heavy-lift vessels for turbine & transformer transport"
    ],
    signatureNote: {
      label: "OPERATIONAL HIGHLIGHT",
      text: "Turnkey logistics management for 800MW wind farm installations in northern Europe."
    },
    stats: { value: "480k", label: "Tons of Industrial Machinery Lifted" }
  },
  {
    id: "pharma-healthcare",
    slug: "pharma-healthcare",
    name: "Pharmaceuticals & Cold Chain",
    eyebrow: "GDP-CERTIFIED COLD CHAIN",
    tagline: "End-to-end temperature validation for biologics, vaccines, and API ingredients.",
    description: "Maintaining therapeutic integrity is critical. Our dedicated Life Sciences division operates temperature-monitored hubs (-80°C ultra-low, +2°C to +8°C, and +15°C to +25°C) with continuous IoT thermal logging and active re-icing services.",
    iconName: "Activity",
    complianceStandards: ["EU GDP Certified", "WHO Annex 5 Guidelines", "FDA 21 CFR Part 11"],
    keySolutions: [
      "Active thermo-controlled air freight containers (Envirotainer/CSafe)",
      "Real-time GPS + thermal sensor telemetry with automated alert protocols",
      "Dedicated pharma customs clearing lanes at international hubs",
      "Validated cold-chain packing with phase change material (PCM) technology"
    ],
    signatureNote: {
      label: "QUALITY CONTROL",
      text: "Zero excursion tolerance protocols with dual backup cooling systems on ocean and air routes."
    },
    stats: { value: "99.94%", label: "Thermal Conformance Rate Across 85,000 Shipments" }
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    name: "Retail, Consumer & E-Commerce",
    eyebrow: "OMNICHANNEL SPEED",
    tagline: "Peak-season scalable fulfillment, fast fashion air express, and cross-border customs clearance.",
    description: "Consumer retail demands seasonal agility. We manage high-volume sea-air legs, origin-country consolidation, barcoded garment-on-hanger (GOH) shipments, and direct-to-distribution-center delivery schedules.",
    iconName: "ShoppingBag",
    complianceStandards: ["C-TPAT Validated", "AEO Logistics Partner", "Intertek Quality Certified"],
    keySolutions: [
      "Origin purchase order (PO) line-item management & vendor compliance",
      "Cross-docking and de-consolidation hubs at destination seaports",
      "Garment-on-Hanger (GOH) ocean container setups",
      "Cross-border e-commerce customs entry (Section 321 & de minimis clearance)"
    ],
    signatureNote: {
      label: "PEAK SEASON CAPACITY",
      text: "Secured weekly charter block capacity during Q3/Q4 retail surge windows."
    },
    stats: { value: "32M", label: "Retail Standard Cartons Dispatched" }
  },
  {
    id: "aerospace-defense",
    slug: "aerospace-defense",
    name: "Aerospace & High-Tech Components",
    eyebrow: "HIGH-VALUE LOGISTICS",
    tagline: "24/7 Aircraft on Ground (AOG) rapid movement and ESD-controlled electronics handling.",
    description: "Aerospace engines and semiconductor equipment require precision care. We provide shock-monitored transportation, cleanroom-ready warehousing, and white-glove delivery directly to cleanroom bays.",
    iconName: "Shield",
    complianceStandards: ["AS9120 Aerospace Quality", "ITAR Compliant", "TAPA FSR Level A"],
    keySolutions: [
      "Dedicated 24/7/365 AOG desk with 30-minute reaction times",
      "Shock, tilt, and humidity logging during jet engine transports",
      "Electrostatic discharge (ESD) safe storage and packing",
      "Secure armored transport escorts for classified technology cargo"
    ],
    signatureNote: {
      label: "SPECIALIZED CARE",
      text: "Cleanroom uncrating and positioning using air-caster heavy equipment."
    },
    stats: { value: "100%", label: "Traceability & Chain of Custody Audit Trail" }
  },
  {
    id: "chemicals-hazmat",
    slug: "chemicals-hazmat",
    name: "Chemicals & Dangerous Goods",
    eyebrow: "HAZMAT CERTIFIED",
    tagline: "ISO tank container fleet management, hazardous material storage, and safety compliance.",
    description: "Handling chemical trade requires specialized equipment and regulatory precision. Vanguard operates ISO tank logistics fleets with safety-inspected valves, heating elements, and certified Hazmat documentation officers.",
    iconName: "FlaskConical",
    complianceStandards: ["SQAS Assessed", "ADR / RID Trained", "Responsible Care® Member"],
    keySolutions: [
      "ISO Tank container fleet management and steam heating services",
      "Hazardous waste transport permits and environmental clearance",
      "Emergency response spill kit equipped tractor units",
      "SDS-compliant chemical labelling and UN packaging inspection"
    ],
    signatureNote: {
      label: "SAFETY PROTOCOL",
      text: "Comprehensive SQAS safety assessment with zero reportable incidents across 5 years."
    },
    stats: { value: "12,000+", label: "ISO Tank Movements Performed Annually" }
  }
];
