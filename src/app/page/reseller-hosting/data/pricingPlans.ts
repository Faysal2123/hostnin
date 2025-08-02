import { PricingPlan } from "../../web-hosting/types/PricingPlan";

const pricingPlans: PricingPlan[] = [
  // Monthly Plans
  {
    title: "Reseller Basic",
    price: 1599,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "25GB SSD Storage" },
      { text: "30 cPanel Accounts" },
      { text: "500GB Bandwidth" },
      { text: "Free SSL" },
    ],
    icon: "basic",
    description: "Start your reseller business with essential features.",
  },
  {
    title: "Reseller Pro",
    price: 2999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "100GB SSD Storage" },
      { text: "100 cPanel Accounts" },
      { text: "2TB Bandwidth" },
      { text: "Free SSL" },
    ],
    icon: "pro",
    description: "Advanced reseller plan for growing businesses.",
    highlight: true,
  },
  // Yearly Plans
  {
    title: "Reseller Basic",
    price: 15990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "25GB SSD Storage" },
      { text: "30 cPanel Accounts" },
      { text: "500GB Bandwidth" },
      { text: "Free SSL" },
    ],
    icon: "basic",
    description: "Start your reseller business with essential features.",
    savingsText: "Save 2 months with yearly plan!",
  },
  {
    title: "Reseller Pro",
    price: 29990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "100GB SSD Storage" },
      { text: "100 cPanel Accounts" },
      { text: "2TB Bandwidth" },
      { text: "Free SSL" },
    ],
    icon: "pro",
    description: "Advanced reseller plan for growing businesses.",
    highlight: true,
    savingsText: "Save 2 months with yearly plan!",
  },
];

export default pricingPlans; 