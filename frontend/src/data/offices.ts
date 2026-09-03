export interface OfficeItem {
  id: string;
  name: string;
  region: string;
  role: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  timezone: string;
  keyStats: string;
  facilities: string[];
}

export const OFFICES_DATA: OfficeItem[] = [
  {
    id: "rotterdam",
    name: "EMEA Operational Headquarters",
    region: "Europe & Middle East",
    role: "Global Maritime & Customs Hub",
    address: "Waalthaven Z.Z. 42, Port Area 2210",
    city: "Rotterdam",
    country: "Netherlands",
    phone: "+31 10 798 4400",
    email: "rotterdam.hq@tenar-logistics.com",
    coordinates: { lat: 51.8860, lng: 4.4410 },
    timezone: "Europe/Amsterdam",
    keyStats: "420,000 m² Bonded Terminal Facility | Direct Barge Access",
    facilities: [
      "Type A Customs Bonded Storage",
      "Perishable Cold Storage (-25°C)",
      "Automated Container Freight Station (CFS)",
      "Heavy Lift Quay (up to 450T)"
    ]
  },
  {
    id: "singapore",
    name: "APAC Regional Control Tower",
    region: "Asia Pacific",
    role: "Intra-Asia Freight Consolidation",
    address: "10 Pasir Panjang Road, Mapletree Business City #14-02",
    city: "Singapore",
    country: "Singapore",
    phone: "+65 6832 9100",
    email: "singapore.hub@tenar-logistics.com",
    coordinates: { lat: 1.2760, lng: 103.8000 },
    timezone: "Asia/Singapore",
    keyStats: "Transshipment Hub Connecting 120 Asian Seaports",
    facilities: [
      "24/7 Air Cargo Logistics Center (Changi Airport)",
      "AEO-F Certified Trade Hub",
      "Pharma Cold Chain GDP Hub",
      "Regional Control Tower Dashboard"
    ]
  },
  {
    id: "houston",
    name: "Americas Logistics Hub",
    region: "North & South America",
    role: "Energy & Breakbulk Logistics",
    address: "12300 Port Houston Pkwy, Suite 400",
    city: "Houston, TX",
    country: "United States",
    phone: "+1 713 580 8800",
    email: "americas@tenar-logistics.com",
    coordinates: { lat: 29.7604, lng: -95.3698 },
    timezone: "America/Chicago",
    keyStats: "Direct Access to Port Houston & Heavy Rail Network",
    facilities: [
      "FTZ Zone #84 Bonded Facility",
      "Hazmat Class 1-9 Storage",
      "Heavy Rigging Staging Yard",
      "Cross-Border Mexico Fast-Track Clearance"
    ]
  },
  {
    id: "dubai",
    name: "Middle East & Africa Hub",
    region: "Middle East & Africa",
    role: "Sea-Air Multimodal Hub",
    address: "Jebel Ali Free Zone (JAFZA) South, Plot S201",
    city: "Dubai",
    country: "United Arab Emirates",
    phone: "+971 4 886 3300",
    email: "dubai.mea@tenar-logistics.com",
    coordinates: { lat: 24.9857, lng: 55.0273 },
    timezone: "Asia/Dubai",
    keyStats: "Sea-to-Air Transit Time < 4 Hours from Jebel Ali to DWC Airport",
    facilities: [
      "Tax-Free JAFZA Logistics Depot",
      "GDP Temperature-Controlled Warehouse",
      "Project Cargo staging yards",
      "Express Sea-Air Transfer Desk"
    ]
  },
  {
    id: "shanghai",
    name: "Greater China Gateway",
    region: "Asia Pacific",
    role: "Manufacturing Export Logistics",
    address: "Level 28, Pudong International Logistics Center, 88 Century Ave",
    city: "Shanghai",
    country: "China",
    phone: "+86 21 6100 9900",
    email: "china.export@tenar-logistics.com",
    coordinates: { lat: 31.2304, lng: 121.4737 },
    timezone: "Asia/Shanghai",
    keyStats: "Largest Export Volume Consolidation Center in East Asia",
    facilities: [
      "Yangshan Deepwater Port CFS",
      "Pudong Airport Cargo Direct Terminal",
      "Supplier Quality Audit Facility",
      "China-Europe Railway Freight Hub"
    ]
  }
];
