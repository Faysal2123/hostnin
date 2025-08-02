import type { StaticImageData } from "next/image";

export interface FeatureTab {
  key: string; // Unique identifier for the tab
  title: string; // Tab label
  description: string; // Description text for the tab
  features: string[]; // List of feature bullet points
  imageSrc?: string | StaticImageData; // Optional image path or static import for the tab
  iconSrc?: string; // Optional icon path for the tab
} 