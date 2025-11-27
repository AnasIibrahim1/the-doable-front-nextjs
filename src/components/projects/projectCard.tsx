'use client';

import { motion } from 'framer-motion';
import { memo, useMemo, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { CaseStudy } from '@/data/caseStudies';

interface ProjectCardProps {
  project: CaseStudy;
  delay: number;
}

function ProjectCard({ project, delay }: ProjectCardProps) {
  const { category, title, description, slug, backgroundImage, features } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);

  // Memoize motion props for better performance
  const motionProps = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  }), [delay]);

  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl border border-[#913BFF]/20 transition-all duration-300 cursor-pointer"
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      {...motionProps}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsMobileActive(!isMobileActive)}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { duration: 0.4, ease: 'easeOut' }
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: (isHovered || isMobileActive) ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-[#1A1F3A] via-[#1A1F3A]/80 to-[#1A1F3A]/60"
          animate={{
            opacity: (isHovered || isMobileActive) ? 0.85 : 0.95,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[400px] md:min-h-[500px] p-6 md:p-8">
        {/* Top Section - Always Visible */}
        <div className="flex flex-col">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="text-xs md:text-sm font-medium px-3 py-1.5 rounded-full bg-[#913BFF]/20 text-[#fff] border border-[#913BFF]/30 inline-block">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Bottom Section - Details that show on hover */}
        <div className="flex flex-col justify-end">
          {/* Description - Hidden by default, shows on hover/tap */}
          <motion.div
            initial={false}
            animate={{
              height: (isHovered || isMobileActive) ? 'auto' : 0,
              opacity: (isHovered || isMobileActive) ? 1 : 0,
              marginBottom: (isHovered || isMobileActive) ? '1.5rem' : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base leading-relaxed text-[#fff] mb-4">
              {description}
            </p>

            {/* Features List - Hidden by default, shows on hover */}
            <div className="space-y-2.5 mb-6">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: (isHovered || isMobileActive) ? 1 : 0,
                    x: (isHovered || isMobileActive) ? 0 : -10,
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (isHovered || isMobileActive) ? index * 0.1 : 0 
                  }}
                >
                  <FaCheck className="text-xs md:text-sm flex-shrink-0 mt-1 text-[#913BFF]" />
                  <span className="text-xs md:text-sm text-[#fff]">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button - Hidden by default, shows on hover */}
          {slug && (
            <motion.div
              initial={false}
              animate={{
                height: (isHovered || isMobileActive) ? 'auto' : 0,
                opacity: (isHovered || isMobileActive) ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: (isHovered || isMobileActive) ? 0.2 : 0 }}
              className="overflow-hidden"
            >
              <Link href={`/projects/${slug}`}>
                <motion.button
                  className="w-full py-3 rounded-lg font-semibold bg-[#913BFF] text-white hover:bg-[#7C2BE0] transition-all duration-300 text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative gradient overlay on hover */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#913BFF]/20 to-transparent pointer-events-none"
        animate={{
          opacity: (isHovered || isMobileActive) ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-[#913BFF] pointer-events-none"
        animate={{
          opacity: (isHovered || isMobileActive) ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default memo(ProjectCard);

