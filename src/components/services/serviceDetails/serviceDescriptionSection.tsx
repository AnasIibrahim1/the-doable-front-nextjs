'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Service } from '@/data/services';

interface ServiceDescriptionSectionProps {
  service: Omit<Service, 'icon'>;
}

export default function ServiceDescriptionSection({ service }: ServiceDescriptionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-white mb-6">{service.title}</h2>
      <p className="text-[#777C90] text-lg leading-relaxed mb-8">
        {service.detailedDescription}
      </p>
      
      {/* Main Service Image */}
      {service.mainImage ? (
        <motion.div
          className="w-full h-96 rounded-lg border border-[#913BFF]/20 overflow-hidden mb-8 relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={service.mainImage}
            alt={service.title}
            width={1200}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050D36]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ) : (
        <div className="w-full h-96 bg-[#1A1F3A] rounded-lg border border-[#913BFF]/20 flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#913BFF]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-[#913BFF]">📷</span>
            </div>
            <p className="text-[#777C90] text-sm">Service Image</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

