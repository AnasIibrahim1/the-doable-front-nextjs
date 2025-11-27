'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Fixed positions for circles to avoid hydration mismatch
const circlePositions = [
  { x: 15, y: 25, size: 30 },
  { x: 75, y: 15, size: 50 },
  { x: 25, y: 75, size: 70 },
  { x: 85, y: 80, size: 90 },
];

export default function FloatingCircles() {
  // Memoize animation configs per circle
  const getCircleAnimation = useMemo(() => {
    return circlePositions.map((_, i) => ({
      initial: {
        scale: 1,
        opacity: 0.2,
      },
      animate: {
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, 10, 0],
        y: [0, -10, 0],
      },
      transition: {
        duration: 15 + i * 2,
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
      {circlePositions.map((pos, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            border: '2px solid rgba(145, 59, 255, 0.2)',
            borderRadius: '50%',
            ...getCircleAnimation[i].gpuStyle,
          }}
          initial={getCircleAnimation[i].initial}
          animate={getCircleAnimation[i].animate}
          transition={getCircleAnimation[i].transition}
        />
      ))}
    </>
  );
}
