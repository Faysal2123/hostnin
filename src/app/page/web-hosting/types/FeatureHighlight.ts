import { StaticImageData } from 'next/image';

export interface FeatureHighlight {
  title: string;
  description: string;
  image: string | StaticImageData;
} 