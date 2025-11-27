'use client';

import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ComponentType } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: ComponentType<{ className?: string }> | React.ReactNode;
  title: string;
  description: string;
  featured: boolean;
  delay: number;
  slug?: string;
}

function ServiceCard({ icon, title, description, featured, delay, slug }: ServiceCardProps) {
  // Memoize motion props
  const motionProps = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
    whileHover: { 
      scale: 1.05, 
      y: -10,
      transition: { duration: 0.3 }
    }
  }), [delay]);

  // Render icon - handle both ComponentType and ReactNode
  const renderIcon = () => {
    if (typeof icon === 'function') {
      const IconComponent = icon as ComponentType<{ className?: string }>;
      return <IconComponent className="text-3xl" />;
    }
    return icon;
  };

  return (
    <motion.div
      className={`relative p-8 group transition-all duration-300 ${
        featured
          ? 'bg-[#913BFF]'
          : 'bg-[#104CBA]/10'
      }`}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      {...motionProps}
    >
      {/* Gradient border effect at bottom */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#913BFF] to-transparent transition-all duration-300 ${
          featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Gradient border effect for top, left, right */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-100"
      >
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white" />
        
        {/* Left border */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-white via-white/50 to-transparent" />
        
        {/* Right border */}
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-white via-white/50 to-transparent" />
      </div>

      {/* Icon */}
      <div className={`mb-4 ${featured ? 'text-white' : 'text-[#913BFF]'}`}>
        {renderIcon()}
      </div>

      {/* Title */}
      <h3 className={`text-xl font-semibold mb-3 ${featured ? 'text-white' : 'text-white'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`mb-6 ${featured ? 'text-white/80' : 'text-[#777C90]'}`}>
        {description}
      </p>

      {/* Link */}
      {slug ? (
        <Link href={`/services/${slug}`} className={`flex items-center gap-2 ${featured ? 'text-white' : 'text-[#913BFF]'} hover:text-[#913BFF] transition-colors cursor-pointer`}>
          <span className="font-medium">Learn More</span>
          <AiOutlineArrowRight className="text-xl" />
        </Link>
      ) : (
        <div className={`flex items-center gap-2 ${featured ? 'text-white' : 'text-[#913BFF]'} cursor-pointer`}>
          <span className="font-medium">View Projects</span>
          <AiOutlineArrowRight className="text-xl" />
        </div>
      )}

      {/* Decorative corner element */}
      <div className={`absolute top-4 right-4 ${featured ? 'text-white/20' : 'text-[#913BFF]/20'}`}>
        <AiOutlineArrowRight className="text-3xl transform rotate-45" />
      </div>
    </motion.div>
  );
}

export default memo(ServiceCard);
