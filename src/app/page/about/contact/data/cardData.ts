import { CardFeature } from "../types/CardFeature";

const cardData: (Omit<CardFeature, "icon"> & { iconName: string })[] = [
  {
    iconName: "MdCall",
    title: "Hotline",
    desc: "+880 1325 875 955\n(24/7 WhatsApp Support)",
  },
  {
    iconName: "MdAttachEmail",
    title: "Email Us",
    desc: "info@hostnin.com (Management)\nTrade License ID: TRAD/CHTG/005863/2023",
  },
  {
    iconName: "FaHome",
    title: "Address",
    desc: "2nd Floor, Beside Proshanti Residential Area,\nColonelhat, Chattogram",
  },
];

export default cardData;
