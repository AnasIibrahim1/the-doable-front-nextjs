'use client';

import { motion } from 'framer-motion';

export default function TechyBackgroundText() {
  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 text-[120px] font-bold text-white/50 pointer-events-none origin-center
                 top-40 lg:left-[-10%] lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90 lg:-translate-x-0 max-[650px]:text-[50px]"
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{
        duration: 4,
        delay: 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      TheDoable
    </motion.div>
  );
}
