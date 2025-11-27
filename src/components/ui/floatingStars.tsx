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
      {starPositions.map((pos, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            ...getStarAnimation[i].gpuStyle,
          }}
          initial={getStarAnimation[i].initial}
          animate={getStarAnimation[i].animate}
          transition={getStarAnimation[i].transition}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#913BFF">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}
