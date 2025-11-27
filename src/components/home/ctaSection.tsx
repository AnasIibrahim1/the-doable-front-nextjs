'use client';

import { motion } from 'framer-motion';
import StartProjectCTA from '@/components/requestProject/StartProjectCTA';
import FloatingCircles from '../ui/floatingCircles';
import FloatingStars from '../ui/floatingStars';
import AnimatedGradients from '../ui/animatedGradients';

export default function CTASection() {
  return (
    <section className="py-24 relative ">
      {/* Background gradient */}
      <div className="absolute inset-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedGradients />
        <FloatingStars />
        <FloatingCircles />
      </div>

      <div className="max-w-4xl mx-auto max-[1280px]:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main heading */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in{' '}
            <span className="bg-gradient-to-r from-[#913BFF] to-[#104CBA] bg-clip-text text-transparent">
              Mind?
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let&apos;s get to work and bring your vision to life with cutting-edge technology and innovative solutions.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <StartProjectCTA
              label="Start Your Project"
              className="px-8 py-3 rounded-2xlg bg-[#913BFF] hover:bg-[#7C2BE0] text-white font-semibold text-lg shadow-2xl shadow-[#913BFF]/30 hover:shadow-[#913BFF]/50 transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-[#913BFF]/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-[#104CBA]/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 border border-[#913BFF]/30 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
