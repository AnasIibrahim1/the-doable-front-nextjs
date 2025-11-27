'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Service } from '@/data/services';
import { FaCheck } from 'react-icons/fa';

interface ServiceFeaturesSectionProps {
  service: Omit<Service, 'icon'>;
}

export default function ServiceFeaturesSection({ service }: ServiceFeaturesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-bold text-white mb-4">
        We Provide Services that You can Rely on
      </h3>
      <p className="text-[#777C90] mb-8 leading-relaxed">
        {service.detailedDescription}
      </p>
      
      {/* Sub Images Grid */}
      {service.subImages && service.subImages.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 mb-8">
          {service.subImages.map((image, index) => (
            <motion.div
              key={index}
              className="h-48 rounded-lg border border-[#913BFF]/20 overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#913BFF' }}
            >
              <Image
                src={image}
                alt={`${service.title} - Image ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D36]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="h-48 bg-[#1A1F3A] rounded-lg border border-[#913BFF]/20 flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-[#913BFF] rounded-full"></div>
            </div>
          ))}
        </div>
      )}
      
      {/* Features List */}
      <div className="space-y-4">
        {service.features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <FaCheck className="text-[#913BFF] text-xl flex-shrink-0 mt-1" />
            <p className="text-[#777C90] text-lg leading-relaxed">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

