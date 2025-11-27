'use client';

import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

export default function VideoSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient with darker theme to match design */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F3A] via-[#2A2F4A] to-[#1A1F3A]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-drift" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#913BFF]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#104CBA]/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Video Play Button */}
          <motion.div
            className="relative inline-flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            {/* Pulse rings */}
            <div className="absolute w-32 h-32 bg-[#913BFF]/20 rounded-full animate-ping" />
            <div className="absolute w-24 h-24 bg-[#913BFF]/30 rounded-full animate-ping animation-delay-1000" />
            
            {/* Play button */}
            <motion.button
              className="relative w-20 h-20 bg-[#913BFF] hover:bg-[#7C2BE0] rounded-full flex items-center justify-center shadow-2xl shadow-[#913BFF]/50 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Handle video play logic here
                console.log('Play video');
              }}
            >
              <FaPlay className="text-white text-2xl ml-1 group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Watch Videos Text */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            WATCH VIDEOS
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[#777C90] text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Get an inside look at our innovative processes, cutting-edge technology, 
            and the passionate team behind our successful projects.
          </motion.p>

          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-16 h-16 border border-[#913BFF]/20 rounded-full animate-spin-slow" />
          <div className="absolute bottom-20 right-20 w-12 h-12 border border-[#104CBA]/20 rounded-full animate-spin-slow animation-reverse" />
        </motion.div>
      </div>
    </section>
  );
}
