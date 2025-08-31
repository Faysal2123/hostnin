export interface PricingPlan {
  title: string;
  price: number;
  currency: string;
  billingPeriod: string;
  features: { text: string }[];
  buttonText: string;
  link?: string; 
}
