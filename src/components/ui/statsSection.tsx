'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { stats } from '../../data/stats';

function Counter({ end, label }: { end: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (!isInView) return;

    // Parse the number from string (e.g., "276K" -> 276)
    const numericValue = parseInt(end.replace(/[^0-9]/g, ''));
    
    
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      className="text-center group/counter cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 counter group-hover/counter:text-yellow-200 transition-colors duration-300">
        {count.toLocaleString()}{end.replace(/[0-9]/g, '')}
      </div>
      <div className="text-[#fff] text-lg  transition-colors duration-300">{label}</div>
      
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover/counter:opacity-100 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
}

export default function StatsSection() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Interactive Background */}
      <div 
        className="relative bg-gradient-to-r from-[#913BFF] to-[#104CBA] py-16 group cursor-pointer"
        onClick={handleClick}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles with custom animations */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-drift"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/15 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-white/25 rounded-full animate-drift"></div>
          <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white/30 rounded-full animate-float"></div>
          
          {/* Animated gradient orbs with glow effects */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-glow group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/15 rounded-full blur-lg animate-float group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full blur-md animate-ping group-hover:scale-200 transition-transform duration-1000"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/8 rounded-full blur-lg animate-drift group-hover:scale-110 transition-transform duration-1000"></div>
        </div>

        {/* Hover effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Click effect */}
        {clicked && (
          <div className="absolute inset-0 bg-white/10 animate-ping"></div>
        )}
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            {stats.map((stat, index) => (
              <Counter key={index} end={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
