import { FeatureBenefit } from '../types/FeatureBenefit';
import { FaRegHdd, FaArrowCircleDown, FaServer, FaExpeditedssl } from 'react-icons/fa';

export const featureDifferenceData: FeatureBenefit[] = [
  {
    title: 'Fastest NVMe SSD Server',
    description: 'We use enterprise-grade servers located across multiple locations around the globe. Tune your website with us and take it to the next level.',
    icon: FaRegHdd,
  },
  {
    title: 'Daily Multistep Backup',
    description: 'We use a 3-layer backup system to keep your data secure. By generating hundreds of snapshots each month, we ensure that no element is missed.',
    icon: FaArrowCircleDown,
  },
  {
    title: 'LightSpeed Web Server',
    description: 'Website performance is enhanced by combining the LiteSpeed web server with the latest PHP version, making your website faster and more efficient.',
    icon: FaServer,
  },
  {
    title: 'Lifetime FREE SSL',
    description: 'Your website will be more secure with an easy-to-install, auto-renewing Let’s Encrypt SSL certificate. This ensures that your site remains protected.',
    icon: FaExpeditedssl,
  },
]; 