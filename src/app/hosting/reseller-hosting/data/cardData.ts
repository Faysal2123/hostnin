// app/data/cardData.ts
import { PricingPlan } from "../type/card";

const resellerPricingPlans: PricingPlan[] = [
  {
    title: "Reseller Starter",
    price: 2999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "50 GB NVMe SSD Storage" },
      { text: "1000 GB Bandwidth" },
      { text: "50 cPanel Account" },
      { text: "1 GB RAM Per cPanel" },
      { text: "1 Core CPU Per cPanel" },
      { text: "20 Entry Process Per cPanel" },
      { text: "Whitelabel Reseller" },
      { text: "Private Name Servers" }
    ],
    buttonText: "Buy Now",
    link: "https://my.hostnin.com/index.php/store/reseller/starter"
  },
  {
    title: "Reseller Standard",
    price: 4999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "100 GB NVMe Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "100 cPanel Account" },
      { text: "1 GB RAM Per cPanel" },
      { text: "1 Core CPU Per cPanel" },
      { text: "20 Entry Process Per cPanel" },
      { text: "Whitelabel Reseller" },
      { text: "Private Name Servers" }
    ],
    buttonText: "Buy Now",
    link: "https://my.hostnin.com/index.php/store/reseller/standard" 
  },
  {
    title: "Reseller Ultimate",
    price: 9999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "250 GB SSD Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "200 cPanel Account" },
      { text: "2 GB RAM Per cPanel" },
      { text: "2 Core CPU Per cPanel" },
      { text: "30 Entry Process Per cPanel" },
      { text: "Whitelabel Reseller" },
      { text: "Private Name Servers" }
    ],
    buttonText: "Buy Now",
    link: "https://my.hostnin.com/index.php/store/reseller/ultimate"
  }
];

export default resellerPricingPlans;
