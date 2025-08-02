export interface HostingPlan {
  title: string;
  price: number;
  duration: string;
  icon: string;
  features: string[];
  badge?: {
    text: string;
    type: 'popular' | 'discount' | 'none';
  };
  buttonText: string;
  description?: string;
} 