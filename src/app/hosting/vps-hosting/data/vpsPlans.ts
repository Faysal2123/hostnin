import { VpsPlan } from "../types/VpsPlan";

export const vpsPlans: VpsPlan[] = [
  {
    name: "Starter",
    price: 2999,
    link: "https://my.hostnin.com/cart.php?a=confproduct",
    features: [
      { icon: "/cpu-icon.svg", title: "Shared vCPU", value: "2 vCPU Cores" },
      { icon: "/ram-icon.svg", title: "Dedicated RAM", value: "4 GB" },
      { icon: "/storage-icon.svg", title: "NVMe Storage", value: "40 GB" },
      { icon: "/speed-icon.svg", title: "Port Speed", value: "1GBit" },
    ],
  },
  {
    name: "Starter Plus",
    price: 2999,
    link: "https://my.hostnin.com/cart.php?a=confproduct&i=4",
    features: [
      { icon: "/cpu-icon.svg", title: "Shared vCPU", value: "3 vCPU Cores" },
      { icon: "/ram-icon.svg", title: "Dedicated RAM", value: "4 GB RAM" },
      { icon: "/storage-icon.svg", title: "NVMe Storage", value: "80 GB NVMe" },
      { icon: "/speed-icon.svg", title: "Port Speed", value: "1 GBit" },
    ],
  },
  {
    name: "Pro",
    price: 4999,
    link: "https://my.hostnin.com/cart.php?a=confproduct&i=7",
    features: [
      { icon: "/cpu-icon.svg", title: "Shared vCPU", value: "4 vCPU Cores" },
      { icon: "/ram-icon.svg", title: "Dedicated RAM", value: "8 GB" },
      { icon: "/storage-icon.svg", title: "NVMe Storage", value: "160 GB NVMe" },
      { icon: "/speed-icon.svg", title: "Port Speed", value: "1 GBit" },
    ],
  },
  {
    name: "Ultimate",
    price: 7999,
    link: "https://my.hostnin.com/cart.php?a=confproduct&i=8",
    features: [
      { icon: "/cpu-icon.svg", title: "Shared vCPU", value: "8 vCPU Cores" },
      { icon: "/ram-icon.svg", title: "Dedicated RAM", value: "16 GB" },
      { icon: "/storage-icon.svg", title: "NVMe Storage", value: "240 GB NVMe" },
      { icon: "/speed-icon.svg", title: "Port Speed", value: "32 TB" },
    ],
  },
];
