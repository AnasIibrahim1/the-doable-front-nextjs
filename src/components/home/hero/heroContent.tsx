'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function HeroContent() {
  return (
    <div className="relative z-10 text-center">
      {/* Spectacular Main Title */}
      <motion.div className="relative mb-8">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 relative z-10"
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
        >
          <span className="bg-gradient-to-r from-white via-[#913BFF] to-[#104CBA] bg-clip-text text-transparent bg-300% animate-gradient-x">
            We&apos;re a
          </span>{' '}
          <br />
          <motion.span
            className="bg-gradient-to-l from-[#104CBA] via-white to-[#913BFF] bg-clip-text text-transparent bg-300% animate-gradient-x-reverse"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            innovative
          </motion.span>{' '}
          <motion.span
            className="bg-gradient-to-r from-[#913BFF] via-white to-[#104CBA] bg-clip-text text-transparent bg-300% animate-gradient-x"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            IT Solutions
          </motion.span>
        </motion.h1>
        
        {/* Floating text shadow */}
        <motion.div
          className="absolute inset-0 text-6xl md:text-8xl lg:text-8xl font-bold text-[#913BFF]/10 blur-sm"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          We&apos;re a innovative IT Solutions
        </motion.div>
      </motion.div>

      {/* Enhanced Call-to-Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <Button 
          href="/about" 
          variant="primary" 
          size="lg" 
          icon="✨"
          floating={true}
        >
          Get Started
        </Button>
        
        <Button 
          href="/contact" 
          variant="custom" 
          size="lg" 
          icon="💬"
          floating={true}
        >
          Let&apos;s Talk
        </Button>
      </motion.div>
    </div>
  );
}
