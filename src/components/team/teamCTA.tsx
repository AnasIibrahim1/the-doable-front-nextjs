'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import FloatingStars from '../ui/floatingStars';
import StartApplyCTA from '@/components/applyJob/StartApplyCTA';

function TeamCTA() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 " />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingStars />
9      </div>

      <div className="max-w-4xl mx-auto max-[1280px]:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Wanna join our{' '}
            <span className="bg-gradient-to-r from-[#913BFF] to-[#104CBA] bg-clip-text text-transparent">team?</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tell us about your experience and aspirations. We’re always looking for passionate people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <StartApplyCTA label="Apply for a Job" className="text-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(TeamCTA);


