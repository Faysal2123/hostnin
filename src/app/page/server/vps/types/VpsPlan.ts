export interface VpsFeature {
  icon: string;
  title: string;
  value: string;
}

export interface VpsPlan {
  name: string;
  price: number;
  features: VpsFeature[];
} 