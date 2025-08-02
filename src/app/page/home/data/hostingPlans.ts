import { HostingPlan } from '../types/HostingPlan';

export const hostingPlans: HostingPlan[] = [
  {
    title: 'Web Hosting',
    price: 1995,
    duration: '/year',
    icon: 'https://hostnin.com/wp-content/uploads/2024/02/settings_icon.svg',
    description: 'Reliable and affordable for personal sites, blogs, and portfolios.',
    features: [],
    badge: { text: 'Most Popular', type: 'popular' },
    buttonText: 'See Plans',
  },
  {
    title: 'Cloud Hosting',
    price: 999,
    duration: '/year',
    icon: 'https://hostnin.com/wp-content/uploads/2024/02/protect_icon.svg',
    description: 'Cloud-powered hosting for speed, security, and scalability.',
    features: [],
    buttonText: 'See Plans',
  },
  {
    title: 'BDIX Hosting',
    price: 1788,
    duration: '/year',
    icon: 'https://hostnin.com/wp-content/uploads/2024/02/server_icon.svg',
    description: 'Bangladesh-based hosting with ultra-low latency and local support.',
    features: [],
    badge: { text: 'On Discount', type: 'discount' },
    buttonText: 'See Plans',
  },
  {
    title: 'Turbo Hosting',
    price: 8999,
    duration: '/year',
    icon: 'https://hostnin.com/wp-content/uploads/2022/09/controls-icon.svg',
    description: 'High-performance hosting for demanding websites and businesses.',
    features: [],
    buttonText: 'See Plans',
  },
]; 