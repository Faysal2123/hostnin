export interface DedicatedServerPlan {
  title: string;
  description: string;
  specs: { icon: string; text: string }[];
  price: number;
  currency: string;
  priceNote?: string;
  buttonText?: string;
  highlight?: boolean;
} 