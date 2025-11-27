'use client';

import { motion } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Image from 'next/image';
import { memo, useMemo, useState } from 'react';
import Link from 'next/link';
import { Article } from '@/types';

interface ArticleCardProps extends Pick<Article, 'title' | 'author' | 'date' | 'description' | 'featured' | 'backgroundImage'> {
  delay: number;
  onHover?: () => void;
  onLeave?: () => void;
}

/**
 * A card component for displaying article information with hover effects
 * @param title - Article title
 * @param author - Article author name
 * @param date - Publication date
 * @param description - Article description
 * @param featured - Whether the article is featured
 * @param delay - Animation delay in seconds
 * @param backgroundImage - Background image URL
 * @param onHover - Hover event handler
 * @param onLeave - Mouse leave event handler
 */

function ArticleCard({ 
  title, 
  author, 
  date, 
  description, 
  featured, 
  delay,
  backgroundImage,
  onHover,
  onLeave 
}: ArticleCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Generate slug for navigation
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  
  // Memoize motion props for better performance
  const motionProps = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
    whileHover: {
      y: -10,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    ...(onHover ? { onHoverStart: onHover as any } : {}),
    ...(onLeave ? { onHoverEnd: onLeave as any } : {}),
  }), [delay, onHover, onLeave]);

  return (
    <Link href={`/blog/${slug}`}>
      <motion.div
        className="relative group cursor-pointer"
        {...motionProps}
      >
      <div
        className={`
          relative p-8 min-h-[400px] flex flex-col justify-between rounded-2xl overflow-hidden
          transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105
          ${featured
            ? 'bg-gradient-to-b from-[#4A1A6B] to-[#7B2CBF]'
            : 'bg-gradient-to-b from-[#1A1F3A] to-[#2A2F4A] group-hover:from-[#2A2F4A] group-hover:to-[#3A3F5A]'
          }
        `}
      >
        {/* Optimized background image using Next.js Image */}
        <div className="absolute inset-0 z-0">
          {!imageError ? (
            <Image
              src={backgroundImage}
              alt={`${title} - Article background image`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={featured}
              quality={75}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#913BFF]/20 via-[#104CBA]/20 to-[#913BFF]/30 flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="text-4xl mb-2">📝</div>
                <div className="text-sm font-medium">Article Image</div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Background overlay */}
        <div className={`absolute inset-0 z-10 ${
          featured
            ? 'bg-gradient-to-t from-[#7B2CBF]/80 to-[#1A1F3A]'
            : 'bg-gradient-to-b from-[#1A1F3A]/80 to-[#2A2F4A]/80 group-hover:from-[#2A2F4A]/60 group-hover:to-[#3A3F5A]/60'
        }`} />

        {/* Gradient borders */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-20">

        </div>

        {/* Content - positioned at bottom with hover animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-30 p-8"
          animate={{
            y: featured ? -20 : 0
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          {/* Title and Author - always visible at bottom */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              {title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{author}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>

          {/* Description - hidden by default, shows below title on hover */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: featured ? 'auto' : 0,
              opacity: featured ? 1 : 0
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
        </motion.div>

        {/* Action Button - positioned at bottom right */}
        <motion.div
          className="absolute bottom-6 right-6 z-30"
          initial={{ opacity: featured ? 1 : 0, scale: 0.8 }}
          animate={{
            opacity: featured ? 1 : 0,
            scale: featured ? 1 : 0.8
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 150,
            damping: 18
          }}
        >
          <motion.button
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#7B2CBF] hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 200,
              damping: 12
            }}
          >
            <AiOutlineArrowUp className="text-xl" />
          </motion.button>
        </motion.div>

        {/* Hover overlay for non-featured cards */}
        {!featured && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#4A1A6B]/20 to-[#7B2CBF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-15"
            initial={{ opacity: 0 }}
          />
        )}
      </div>
    </motion.div>
    </Link>
  );
}

export default memo(ArticleCard);
