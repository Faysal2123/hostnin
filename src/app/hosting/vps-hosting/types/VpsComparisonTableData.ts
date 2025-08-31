export interface VpsPlanColumn {
  name: string;
  price: number;
  priceUnit: string;
  orderLink: string; 
}

export interface VpsFeatureRow {
  label: string;
  values: string[];
}

export interface VpsComparisonSection {
  features: VpsFeatureRow[];
}

export interface VpsComparisonTableData {
  plans: VpsPlanColumn[];
  sections: VpsComparisonSection[];
} 