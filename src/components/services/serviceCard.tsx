'use client';

import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ComponentType } from 'react';
import Link from 'next/link';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: ServiceFeature[];
  featured: boolean;
  delay: number;
  slug?: string;
}

function ServiceCard({ icon: Icon, title, description, features, featured, delay, slug }: ServiceCardProps) {
  // Memoize motion props for better performance
  const motionProps = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
    whileHover: { 
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3 }
    }
  }), [delay]);

  return (
    <motion.div
      className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[500px] ${
        featured
          ? 'bg-gradient-to-br from-[#913BFF] to-[#7C2BE0] border-[#913BFF] shadow-2xl shadow-[#913BFF]/50'
          : 'bg-[#1A1F3A] border-[#913BFF]/20 hover:border-[#913BFF] hover:bg-[#1A1F3A]/90'
      }`}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      {...motionProps}
    >
      {/* Top Section */}
      <div className="flex-1 flex flex-col">
        {/* Icon */}
        <div className={`mb-6 ${featured ? 'text-white' : 'text-[#913BFF]'}`}>
          <Icon className="text-4xl" />
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-3 ${featured ? 'text-white' : 'text-white'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`mb-6 leading-relaxed ${featured ? 'text-white/90' : 'text-[#777C90]'}`}>
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-3 flex-grow">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
            >
              <FaCheck className={`text-sm flex-shrink-0 mt-1 ${
                featured ? 'text-white' : 'text-[#913BFF]'
              }`} />
              <span className={`counter text-sm ${featured ? 'text-white/90' : 'text-[#777C90]'}`}>
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section - CTA Button */}
      <div className="mt-8">
        {slug ? (
          <Link href={`/services/${slug}`}>
            <motion.button
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                featured
                  ? 'bg-white text-[#913BFF] hover:bg-gray-100'
                  : 'bg-[#913BFF] text-white hover:bg-[#7C2BE0]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        ) : (
          <motion.button
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
              featured
                ? 'bg-white text-[#913BFF] hover:bg-gray-100'
                : 'bg-[#913BFF] text-white hover:bg-[#7C2BE0]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        )}
      </div>

      {/* Decorative gradient overlay on hover */}
      {!featured && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#913BFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.div>
  );
}

export default memo(ServiceCard);

