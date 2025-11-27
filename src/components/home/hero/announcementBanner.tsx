'use client';

import { motion } from 'framer-motion';

export default function AnnouncementBanner() {
  return (
    <div className="absolute bottom-20 left-0 right-0 rotate-[-4deg] w-[105%] translate-x-[-2.5%] z-1 overflow-hidden">
      {/* Full width paper-style banner */}
      <motion.div
        className="bg-[#913BFF] text-white py-4 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-4 overflow-hidden w-full">
          {/* Scrolling Announcement text */}
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <span className="text-xs md:text-xl font-bold uppercase tracking-wide">
              Technology to elevate our human experience. Your Next It Solution Agency & Explore More
            </span>
            <span className="text-xs md:text-xl font-bold uppercase tracking-wide">
              Technology to elevate our human experience. Your Next It Solution Agency & Explore More
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative paper tears */}
    </div>
  );
}
