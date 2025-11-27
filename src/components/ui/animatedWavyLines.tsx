'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function AnimatedWavyLines() {
  // Memoize animation config
  const pathAnimation = useMemo(() => ({
    animate: {
      d: [
        'M0,50 Q250,20 500,50 T1000,50',
        'M0,50 Q250,80 500,50 T1000,50',
        'M0,50 Q250,20 500,50 T1000,50',
      ],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  }), []);

  return (
    <motion.svg
      className="absolute top-0 left-0 w-full h-full opacity-50"
      viewBox="0 0 1000 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      <motion.path
        d="M0,50 Q250,20 500,50 T1000,50"
        stroke="#913BFF"
        strokeWidth="2"
        strokeOpacity="0.3"
        fill="none"
        {...pathAnimation}
      />
    </motion.svg>
  );
}
