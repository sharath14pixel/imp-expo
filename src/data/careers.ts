export interface CareerItem {
  id: string;
  title: string;
  department: "Logistics Operations" | "Compliance & Legal" | "Supply Chain Tech" | "Commercial & Sales";
  location: string;
  type: "Full-Time" | "Hybrid" | "Remote";
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const CAREERS_DATA: CareerItem[] = [
  {
    id: "snr-customs-compliance-mgr",
    title: "Senior Customs Compliance Manager",
    department: "Compliance & Legal",
    location: "Rotterdam, Netherlands (Hybrid)",
    type: "Full-Time",
    experience: "7+ Years",
    summary: "Lead complex HTS tariff classifications, EU customs entry filings, and AEO audit maintenance for global trade clients across Europe.",
    responsibilities: [
      "Oversee HTS classification accuracy and duty drawback filings for EMEA import channels.",
      "Conduct internal trade compliance audits and represent clients during national customs authority reviews.",
      "Manage relationship with Dutch Customs Authority (Belastingdienst) and Port of Rotterdam EDI systems.",
      "Train regional logistics coordinators on new CBAM carbon reporting standards."
    ],
    requirements: [
      "Licensed Customs Broker or Dutch Declarant Certification (VAD/MBO).",
      "7+ years experience in international trade compliance and tariff engineering.",
      "Fluency in English and Dutch; German is an asset.",
      "Proficiency with CargoWise / WMS & Customs EDI platforms."
    ]
  },
  {
    id: "air-freight-trade-spec",
    title: "Air Freight Trade Operations Specialist",
    department: "Logistics Operations",
    location: "Singapore / Changi Air Hub",
    type: "Full-Time",
    experience: "4+ Years",
    summary: "Manage block space allocations (BSAs), charter flight scheduling, and time-critical AOG air cargo operations across APAC corridors.",
    responsibilities: [
      "Coordinate daily air freight consolidations and maindeck cargo bookings with airline partners.",
      "Manage 24/7 AOG emergency response hotline and arrange tarmac express transfers.",
      "Optimize air freight yield margins and negotiate spot space block allocations.",
      "Ensure GDP cold-chain compliance for pharmaceutical shipments departing Changi."
    ],
    requirements: [
      "Minimum 4 years air cargo freight forwarding experience.",
      "IATA Dangerous Goods (DGR) Category 6 certification.",
      "Proven track record in charter booking and cargo space yield management.",
      "Ability to work in fast-paced 24/7 operational dispatch environments."
    ]
  },
  {
    id: "supply-chain-analytics-lead",
    title: "Supply Chain Solutions Architect",
    department: "Supply Chain Tech",
    location: "Houston, TX / Remote USA",
    type: "Hybrid",
    experience: "5+ Years",
    summary: "Design intermodal routing models, dynamic port congestion bypass systems, and carbon emissions reporting tools for Fortune 500 accounts.",
    responsibilities: [
      "Analyze client global supply chain networks and propose multimodal cost optimization strategies.",
      "Build predictive transit models utilizing vessel telemetry and port terminal AIS feeds.",
      "Integrate client ERPs (SAP/Oracle) with Vanguard's API supply chain visibility engine.",
      "Present quarterly supply chain optimization reviews to enterprise executive teams."
    ],
    requirements: [
      "Bachelor's or Master's degree in Supply Chain Management, Industrial Engineering, or Analytics.",
      "Strong proficiency in SQL, Python, and logistics network simulation software.",
      "Deep knowledge of ocean container shipping lanes, rail intermodal, and drayage economics.",
      "APICS CSCP or CLTD certification preferred."
    ]
  },
  {
    id: "bonded-warehouse-super",
    title: "Bonded Warehouse Operations Supervisor",
    department: "Logistics Operations",
    location: "Dubai (JAFZA Free Zone)",
    type: "Full-Time",
    experience: "5+ Years",
    summary: "Direct daily high-velocity picking, packing, cross-docking, and customs-bonded inventory audits across a 60,000 m² facility.",
    responsibilities: [
      "Supervise warehouse operational staff across receiving, bonded storage, and outbound dispatch.",
      "Maintain 99.9% inventory accuracy within RF-scanned WMS system.",
      "Coordinate with UAE Customs officers for regular bonded stock audits and re-export releases.",
      "Enforce strict HSE safety standards and ISO 9001 quality management procedures."
    ],
    requirements: [
      "5+ years warehouse management experience in a licensed free zone / bonded environment.",
      "Hands-on expertise with WMS platforms (Manhattan, SAP EWM, or CargoWise).",
      "Valid forklift operator train-the-trainer certification.",
      "Strong leadership and multicultural team management skills."
    ]
  },
  {
    id: "regional-sales-exec-americas",
    title: "Regional Logistics Sales Director (Americas)",
    department: "Commercial & Sales",
    location: "Houston, TX (Hybrid)",
    type: "Full-Time",
    experience: "8+ Years",
    summary: "Drive enterprise contract growth for international ocean/air freight forwarding, customs brokerage, and project cargo across North America.",
    responsibilities: [
      "Target and secure multi-million dollar annual freight forwarding agreements with industrial importers.",
      "Lead cross-functional RFP bids combining ocean freight, customs clearance, and bonded storage.",
      "Build strategic relationships with C-level procurement and supply chain executives.",
      "Achieve quarterly regional revenue targets and margin expansion goals."
    ],
    requirements: [
      "Demonstrated track record selling 3PL/4PL freight forwarding solutions to enterprise accounts.",
      "Established network within Automotive, Energy, or Chemical import sectors.",
      "Exceptional contract negotiation and consultative presentation skills.",
      "Willingness to travel up to 35% across the Americas region."
    ]
  }
];
