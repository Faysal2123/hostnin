import { FeatureHighlight } from '../types/FeatureHighlight';
import cloudLinuxImg from '../../../assets/server-protection.png';
import firewallSecurityImg from '../../../assets/firewall-security.webp';
import successImg from '../../../assets/successfully-done.png';

export const featureHighlights: FeatureHighlight[] = [
  {
    title: 'Litespeed Server with LS Cache',
    description: `We offer advanced technology with the latest CloudLinux server, making your website more secure and faster.\n\nThis kernel-level technology isolates each tenant into their own environment and provides them with the appropriate amount of resources (CPU, IO, memory, processes, etc) based on their needs.`,
    image: cloudLinuxImg,
  },
  {
    title: 'Advanced Firewall',
    description: `Our latest server technology will make your site more secure and resistant to theft. Worried about hackers? You don’t have to be.\n\nYour website will always be protected by our automatic malware detection and cleanup system. Additionally, every website and hosted domain comes with SSL encryption security as a standard feature.`,
    image: firewallSecurityImg,
  },
  {
    title: 'Built For Your Success',
    description: `We have a variety of features that will make your web space more user friendly and helpful to you, whether you’re a start-up or a big business. Our advanced server features will aid you in your growth and eventually help you to succeed.\n\nWe offer high quality hosting with an on-call support system, so you don’t have to spend time fixing system issues. Our main goal is to help you succeed in business.`,
    image: successImg,
  },
]; 