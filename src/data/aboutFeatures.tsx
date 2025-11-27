import { FaMobile, FaDollarSign, FaHeadset } from 'react-icons/fa';

export interface AboutFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    icon: <FaMobile className="text-3xl" />,
    title: 'Hybrid Apps',
    description: 'Cross-platform mobile applications that work seamlessly on all devices',
  },
  {
    icon: <FaDollarSign className="text-3xl" />,
    title: 'Simple Pricing',
    description: 'Transparent and affordable pricing with no hidden costs',
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    title: '24/7 Support',
    description: 'Round-the-clock support to ensure your business never stops',
  },
];
