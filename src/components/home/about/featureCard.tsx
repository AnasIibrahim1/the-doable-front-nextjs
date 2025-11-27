'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
}

export default function FeatureCard({ icon: Icon, title, description: _description, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-[#104CBA]/20 backdrop-blur-sm rounded-lg p-6 border border-[#913BFF]/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, borderColor: '#913BFF' }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-[#913BFF] p-3 rounded-lg">
          <Icon className="text-2xl text-white" />
        </div>
        <div className="max-w-xs">
          <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
