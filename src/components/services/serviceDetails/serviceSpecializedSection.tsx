'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Service } from '@/data/services';

interface ServiceSpecializedSectionProps {
  service: Omit<Service, 'icon'>;
}

function PercentageCounter({ end, delay = 0 }: { end: number; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const increment = end / (duration / 16);
    let current = 0;

    let intervalId: NodeJS.Timeout;
    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(intervalId);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, end, delay]);

  return (
    <span ref={ref} className="counter text-2xl font-bold text-white">
      {count}%
    </span>
  );
}

export default function ServiceSpecializedSection({ service }: ServiceSpecializedSectionProps) {
  if (!service.specializedDescription || !service.skills) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1A1F3A] p-8 rounded-lg border border-[#913BFF]/20"
    >
      <h3 className="text-3xl font-bold text-white mb-4">Our Specialized</h3>
      <p className="text-[#777C90] mb-8 leading-relaxed">
        {service.specializedDescription}
      </p>
      
      {/* Circular Progress Bars */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {service.skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative w-32 h-32 mb-4">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#1A1F3A"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#913BFF"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                  animate={{ 
                    strokeDashoffset: 2 * Math.PI * 56 * (1 - skill.percentage / 100)
                  }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <PercentageCounter end={skill.percentage} delay={index * 0.1 + 0.3} />
              </div>
            </div>
            <p className="text-white text-sm text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

