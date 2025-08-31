export const vpsComparisonTableData = {
 plans: [
    { name: "Starter", price: 1999, priceUnit: "/mo", orderLink: "https://example.com/starter" },
    { name: "Plus", price: 2999, priceUnit: "/mo", orderLink: "https://example.com/plus" },
    { name: "Pro", price: 4999, priceUnit: "/mo", orderLink: "https://example.com/pro" },
    { name: "Ultimate", price: 7999, priceUnit: "/mo", orderLink: "https://example.com/ultimate" },
  ],
  sections: [
    {
      features: [
        { label: "vCPU", values: ["2 vCPU Cores", "4 vCPU Cores", "8 vCPU Cores", "16 vCPU Cores"] },
        { label: "Memory (RAM)", values: ["4 GB RAM", "8 GB RAM", "16 GB RAM", "32 GB RAM"] },
        { label: "NVMe SSD Storage", values: ["40 GB NVMe", "80 GB NVMe", "160 GB NVMe", "320 GB NVMe"] },
        { label: "Provisioning Time", values: ["30 minute", "30 minute", "30 minute", "30 minute"] },
        { label: "Bandwidth", values: ["20 TB Traffic", "20 TB Traffic", "20 TB Traffic", "20 TB Traffic"] },
        { label: "Inode Limit", values: ["No Limit", "No Limit", "No Limit", "No Limit"] },
        { label: "Dedicated IP", values: [true, true, true, true] },
        { label: "Full Root Access", values: [true, true, true, true] },
        { label: "1 Tbps+ Anti-DDoS", values: [true, true, true, true] },
        { label: "Windows & Linux Support", values: [true, true, true, true] },
        { label: "24/7/365 Support", values: [true, true, true, true] },
      ]
    }
  ]
}; 