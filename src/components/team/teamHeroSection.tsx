'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import Link from 'next/link';
import HeroFloatingElements from '../about/heroFloatingElements';
import ScrollIndicator from '../ui/scrollIndicator';
import FloatingWord from '../ui/floatingWord';

function TeamHeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Advanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050D36] via-[#0A1A4A] to-[#1A0B4E]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#913BFF]/10 via-transparent to-[#104CBA]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#913BFF]/20 via-transparent to-transparent" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#913BFF]/30 to-[#104CBA]/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-[#104CBA]/25 to-[#913BFF]/25 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Advanced Floating Elements */}
      <HeroFloatingElements />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-32 h-32 border-2 border-[#913BFF]/20 rounded-2xl"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-[#104CBA]/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-[#913BFF]/20 to-[#104CBA]/20 rounded-lg"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      </div>
      
      {/* Floating Background Word */}
      <FloatingWord word="Our Team" />
      
      {/* Central Content */}
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Enhanced Breadcrumb */}
          <motion.div
            className="flex items-center justify-center gap-3 text-sm mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <Link 
              href="/" 
              className="text-[#777C90] hover:text-[#913BFF] transition-all duration-300 hover:scale-110 relative"
            >
              <span className="relative z-10">HOME</span>
              <motion.div
                className="absolute inset-0 bg-[#913BFF]/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.span 
              className="text-[#913BFF] text-lg"
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              •
            </motion.span>
            <Link 
              href="/about" 
              className="text-[#777C90] hover:text-[#913BFF] transition-all duration-300 hover:scale-110 relative"
            >
              <span className="relative z-10">PAGES</span>
              <motion.div
                className="absolute inset-0 bg-[#913BFF]/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.span 
              className="text-[#913BFF] text-lg"
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              •
            </motion.span>
            <motion.span 
              className="text-white font-semibold px-3 py-1 bg-[#913BFF]/20 rounded-full border border-[#913BFF]/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
            >
              TEAM
            </motion.span>
          </motion.div>

          {/* Spectacular Main Title */}
          <motion.div className="relative mb-8">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 relative z-10"
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
                Our
              </span>{' '}
              <motion.span
                className="bg-gradient-to-l from-[#104CBA] via-white to-[#913BFF] bg-clip-text text-transparent bg-300% animate-gradient-x-reverse"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Team
              </motion.span>
            </motion.h1>
            
            {/* Floating text shadow */}
            <motion.div
              className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-[#913BFF]/10 blur-sm"
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
              Our Team
            </motion.div>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[#777C90] max-w-3xl mx-auto leading-relaxed mb-12 relative"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: 'linear-gradient(90deg, #777C90, #913BFF, #777C90)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Meet the talented individuals who make our success possible.
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D36] to-transparent" />
    </section>
  );
}

export default memo(TeamHeroSection);

