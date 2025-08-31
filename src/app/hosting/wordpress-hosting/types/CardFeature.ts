import { StaticImageData } from "next/image";

export interface CardFeature {
  icon: StaticImageData | string;
  fadedIcon?: StaticImageData | string;
  title: string;
  desc: string;
} 