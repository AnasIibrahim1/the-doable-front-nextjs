'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ServiceStat } from '@/data/services';

interface ServiceStatsSectionProps {
  stats: ServiceStat[];
}

function StatCounter({ end, delay = 0 }: { end: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (!isInView) return;

    // Parse the number from string (e.g., "125+" -> 125, "99.9%" -> 99.9)
    const numericValue = parseFloat(end.replace(/[^0-9.]/g, '')) || 0;
    
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    let current = 0;

    let intervalId: NodeJS.Timeout;
    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(intervalId);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, 16);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, end, delay]);

  const suffix = end.replace(/[0-9.]/g, '');

  return (
    <motion.div
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-[#913BFF] mb-2 counter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  );
}

export default function ServiceStatsSection({ stats }: ServiceStatsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-[#1A1F3A] p-6 rounded-lg border border-[#913BFF]/20 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, borderColor: '#913BFF' }}
        >
          <StatCounter end={stat.value} delay={index * 0.1 + 0.3} />
          <p className="text-[#777C90] text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}



