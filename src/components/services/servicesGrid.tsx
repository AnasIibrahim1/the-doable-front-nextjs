'use client';

import { memo } from 'react';
// import { motion } from 'framer-motion';
import { services } from '@/data/services';
// Switched from dynamic imports to static to avoid chunk desync during dev
import { useInView } from 'react-intersection-observer';
import ServiceCard from './serviceCard';
import SectionHeader from '../ui/sectionHeader';

import FloatingStars from '../ui/floatingStars';

function ServicesGrid() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />
      
      {inView && (
        <>
          <div className="absolute inset-0 pointer-events-none">
            <FloatingStars />
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Our Services"
          description="Comprehensive IT solutions designed to empower your business and drive digital transformation."
          alignment="left"
          className="mb-16"
        />

        {/* Services Grid - 2 columns layout as in image */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              featured={service.featured}
              delay={index * 0.1}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesGrid);

