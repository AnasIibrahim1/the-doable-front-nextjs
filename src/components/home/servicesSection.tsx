'use client';

import { memo } from 'react';
import { services } from '@/data/services';
import ServiceHeader from './services/serviceHeader';
import dynamic from 'next/dynamic';
import ServiceCard from './services/serviceCard';

// Lazy load background animations
const FloatingStars = dynamic(() => import('../ui/floatingStars'), {
  ssr: false,
});

const FloatingCircles = dynamic(() => import('../ui/floatingCircles'), {
  ssr: false,
});


function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingStars />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />
      
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <ServiceHeader />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
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

export default memo(ServicesSection);
