export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
}

export const STATS_DATA: StatItem[] = [
  {
    id: "countries",
    value: 154,
    prefix: "",
    suffix: "+",
    label: "Countries Served",
    description: "Global customs clearing presence across primary maritime & air corridors"
  },
  {
    id: "cargo-volume",
    value: 2.8,
    prefix: "",
    suffix: "M",
    decimals: 1,
    label: "TEUs Moved Annually",
    description: "Combined ocean FCL/LCL and intermodal container shipments handled"
  },
  {
    id: "customs-clearance",
    value: 0,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: "Administrative Fines",
    description: "First-time entry clearance without administrative detention or fines"
  },
  {
    id: "ports-hubs",
    value: 340,
    prefix: "",
    suffix: "+",
    label: "Port & Airport Hubs",
    description: "Strategic carrier block space agreements and bonded terminal access"
  }
];
