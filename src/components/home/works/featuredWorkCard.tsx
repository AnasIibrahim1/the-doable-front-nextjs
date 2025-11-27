'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineArrowUp } from 'react-icons/ai';

interface WorkCardProps {
  slug: string;
  category: string;
  title: string;
  description?: string;
  featured: boolean;
  delay: number;
  backgroundImage?: string;
  onHover?: () => void;
  onLeave?: () => void;
}

export default function WorkCard({ 
  slug,
  category, 
  title, 
  description, 
  featured, 
  delay,
  backgroundImage,
  onHover,
  onLeave 
}: WorkCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.6, ease: "easeOut" }
        }}
        {...(onHover ? { onHoverStart: onHover as any } : {})}
        {...(onLeave ? { onHoverEnd: onLeave as any } : {})}
      >
        <div
         className={`
           relative p-8 min-h-[500px] flex flex-col justify-between rounded-2xl overflow-hidden
           transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105
           ${featured 
             ? 'bg-gradient-to-b from-[#4A1A6B] to-[#7B2CBF]' 
             : 'bg-gradient-to-b from-[#1A1F3A] to-[#2A2F4A] group-hover:from-[#2A2F4A] group-hover:to-[#3A3F5A]'
           }
         `}
         style={{
           backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}
       >
         {/* Background overlay */}
         <div className={`absolute inset-0 z-0 ${
           featured 
             ? 'bg-gradient-to-t from-[#7B2CBF]/80 to-[#1A1F3A]' 
             : 'bg-gradient-to-b from-[#1A1F3A]/80 to-[#2A2F4A]/80 group-hover:from-[#2A2F4A]/60 group-hover:to-[#3A3F5A]/60'
         }`} />
        {/* Gradient borders */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-10">

        </div>

        {/* Content - positioned at bottom with hover animation */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 z-20 p-8"
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
          {/* Category and Title - always visible at bottom */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2 font-medium">
              {category}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>
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
          className="absolute bottom-6 right-6 z-20"
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
            className="absolute inset-0 bg-gradient-to-b from-[#4A1A6B]/20 to-[#7B2CBF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-5"
            initial={{ opacity: 0 }}
          />
        )}
      </div>
      </motion.div>
    </Link>
  );
}
