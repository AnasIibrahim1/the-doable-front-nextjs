'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function AnimatedGradients() {
  // Memoize animations to prevent recalculation on every render
  const purpleAnimation = useMemo(() => ({
    animate: {
      x: [0, 100, 0],
      y: [0, 50, 0],
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  }), []);

  const purpleStyle = useMemo(() => ({
    willChange: 'transform' as const,
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden' as const,
  }), []);

  const blueAnimation = useMemo(() => ({
    animate: {
      x: [0, -100, 0],
      y: [0, -50, 0],
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  }), []);

  const blueStyle = useMemo(() => ({
    willChange: 'transform' as const,
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden' as const,
  }), []);

  return (
    <div className="absolute inset-0">
      {/* Bottom left purple gradient - GPU Optimized */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#913BFF]/30 rounded-full blur-3xl"
        style={purpleStyle}
        animate={purpleAnimation.animate}
        transition={purpleAnimation.transition}
      />
      
      {/* Top right blue gradient - GPU Optimized */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#104CBA]/30 rounded-full blur-3xl"
        style={blueStyle}
        animate={blueAnimation.animate}
        transition={blueAnimation.transition}
      />
    </div>
  );
}
