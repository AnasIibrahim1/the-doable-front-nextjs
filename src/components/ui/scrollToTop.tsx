'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopProps {
  className?: string;
}

export default function ScrollToTop({ className = "" }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after hydration
    setIsMounted(true);

    const toggleVisibility = () => {
      // Show button when user scrolls down past first viewport
      const scrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      if (scrollY > viewportHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position immediately after mount
    toggleVisibility();

    // Double check after a small delay to ensure accuracy
    const initialCheck = setTimeout(() => {
      toggleVisibility();
    }, 100);

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className={`fixed right-8 bottom-8 z-50 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <motion.button
        onClick={scrollToTop}
        className="group bg-gradient-to-r from-[#913BFF] to-[#104CBA] text-white p-4 rounded-full shadow-2xl shadow-[#913BFF]/50 border border-[#913BFF]/30 hover:shadow-[#913BFF]/70"
        whileHover={{ 
          scale: 1.1,
          y: -5,
          boxShadow: "0 20px 40px rgba(145, 59, 255, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="flex items-center justify-center"
        >
          <FaArrowUp className="text-xl group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
        
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#913BFF]/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#104CBA]/30"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </div>
      </motion.button>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-[#050D36]/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium border border-[#913BFF]/30 whitespace-nowrap">
          Back to Top
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-[#050D36]/90" />
        </div>
      </div>
    </motion.div>
  );
}
