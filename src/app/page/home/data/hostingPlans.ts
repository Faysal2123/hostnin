import { HostingPlan } from '../types/HostingPlan';

export const hostingPlans: HostingPlan[] = [
  {
    title: 'Web Hosting',
    price: 1995,
    duration: '/year',
    icon: 'https://hostnin.com/wp-content/uploads/2024/02/settings_icon.svg',
    description: 'Best choice for personal websites, portfolios, and small projects with flexible resources.',
    features: [],
    badge: { text: 'Most Popular', type: 'popular' },
    buttonText: 'See Plans',
  },
  {
    title: 'Cloud Hosting',
    price: 999,
    duration: '/year',
    icon: 'https://hostnin.com/wp-content/uploads/2024/02/protect_icon.svg',
    description: 'Perfect for landing pages, e-commerce stores with reliable speed and strong security.',
    features: [],
    buttonText: 'See Plans',
  },
  
  {
    title: 'Turbo Hosting',
    price: 8999,
    duration: '/year',
    icon: 'https://hostnin.com/wp-content/uploads/2022/09/controls-icon.svg',
    description: 'Built for high-traffic online stores and demanding applications that need extra power.',
    features: [],
    buttonText: 'See Plans',
  },
]; 