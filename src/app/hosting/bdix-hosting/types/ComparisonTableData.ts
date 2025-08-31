export interface Feature {
  label: string;
  values: string[];
}

export interface Section {
  title: string;
  features: Feature[];
}

export interface Plan {
  name: string;
  price: number;
  priceUnit: string;
   orderLink: string;
}

export interface ComparisonTableData {
  plans: Plan[];
  sections: Section[];
}
