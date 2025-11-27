'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  className?: string;
  text?: string;
}

export default function ScrollIndicator({ 
  className = "", 
  text = "SCROLL DOWN" 
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasInitiallyAppeared, setHasInitiallyAppeared] = useState(false);

  useEffect(() => {
    // Check initial scroll position on mount
    const checkInitialPosition = () => {
      const scrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      // If already scrolled, hide immediately
      if (scrollY > viewportHeight * 0.3) {
        setIsVisible(false);
        setHasInitiallyAppeared(true); // Still mark as appeared to handle state
      } else {
        // Show after delay only if at top
        setTimeout(() => {
          setHasInitiallyAppeared(true);
          setIsVisible(true);
        }, 2000);
      }
    };

    // Check immediately
    checkInitialPosition();

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      // Hide when scrolled down more than 30% of viewport
      // Show when back at top (less than 20% of viewport)
      if (scrollY > viewportHeight * 0.3) {
        setIsVisible(false);
      } else if (scrollY < viewportHeight * 0.2) {
        // Only show if we've initially appeared (to prevent flicker on page load)
            if (hasInitiallyAppeared) {
              setIsVisible(true);
            }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInitiallyAppeared]);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: hasInitiallyAppeared && isVisible ? 1 : 0, 
        y: hasInitiallyAppeared && isVisible ? 0 : 20,
        scale: hasInitiallyAppeared && isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ pointerEvents: (hasInitiallyAppeared && isVisible) ? 'auto' : 'none' }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 text-[#fff] hover:text-white transition-colors cursor-pointer"
        animate={{ 
          y: isVisible ? [0, 10, 0] : [0, 0, 0] 
        }}
        transition={{ 
          duration: 2, 
          repeat: isVisible ? Infinity : 0, 
          ease: 'easeInOut' 
        }}
        onClick={handleClick}
      >
        <motion.span 
          className="text-sm font-medium tracking-wider text-[#fff]"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{

          }}
        >
          {text}
        </motion.span>
        
        <motion.div
          className="relative w-6 h-10 border-2 border-[#913BFF]/40 rounded-full flex justify-center pt-2"
          whileHover={{ 
            borderColor: '#913BFF',
            scale: 1.1,
            boxShadow: "0 0 20px rgba(145, 59, 255, 0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-1 h-2 bg-[#913BFF] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 border-2 border-[#913BFF]/20 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
