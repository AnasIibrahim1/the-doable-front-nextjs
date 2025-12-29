'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Fixed positions for stars to avoid hydration mismatch
const starPositions = [
  { x: 10, y: 20 },
  { x: 30, y: 60 },
  { x: 70, y: 30 },
  { x: 50, y: 80 },
  { x: 90, y: 50 },
  { x: 20, y: 70 },
];

export default function FloatingStars() {
  // Memoize animation configs per star
  const getStarAnimation = useMemo(() => {
    return starPositions.map((_, i) => ({
      initial: {
        opacity: 0,
      },
      animate: {
        x: [0, 20, 0],
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 180, 360],
      },
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
      gpuStyle: {
        willChange: 'transform' as const,
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden' as const,
      }
    }));
  }, []);

  return (
    <>

    </>
  );
}
