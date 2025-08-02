import { StaticImageData } from 'next/image';
export interface Review {
  name: string;
  image: string | StaticImageData;
  review: string;
  rating: number;
} 