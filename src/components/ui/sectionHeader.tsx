'use client';

import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
  alignment?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
  animationDirection?: 'y' | 'x';
  animationDelay?: number;
}

function SectionHeader({
  title,
  description,
  alignment = 'center',
  className = '',
  children,
  animationDirection = 'y',
  animationDelay = 0
}: SectionHeaderProps) {
  const alignmentClasses = alignment === 'left' ? 'text-left' : 'text-center';
  const descriptionClasses = alignment === 'left' ? 'max-w-2xl' : 'max-w-2xl mx-auto';
  
  const initialAnimation = animationDirection === 'y' 
    ? { opacity: 0, y: 50 } 
    : { opacity: 0, x: -50 };
  const animateTo = animationDirection === 'y' 
    ? { opacity: 1, y: 0 } 
    : { opacity: 1, x: 0 };

  return (
    <motion.div
      className={`${alignmentClasses} mb-16 ${className}`}
      initial={initialAnimation}
      whileInView={animateTo}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: animationDelay }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        {title}
      </h2>
      <p className={`text-[#777C90] text-lg ${descriptionClasses}`}>
        {description}
      </p>
      {children}
    </motion.div>
  );
}

export default memo(SectionHeader);
