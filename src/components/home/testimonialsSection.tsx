'use client';

import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import TestimonialsHeader from './testimonials/testimonialsHeader';
import TestimonialCard from './testimonials/testimonialCard';
import TestimonialsNavigation from './testimonials/testimonialsNavigation';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDirectNavigation = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Section Header */}
        <TestimonialsHeader />
      {/* Horizontal Line */}
      <hr className="w-full border-[#104CBA]/50" />

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <TestimonialCard 
            testimonial={testimonials[currentIndex]} 
            index={currentIndex}
          />
        </div>

        {/* Navigation */}
        <TestimonialsNavigation
          onPrevious={prevTestimonial}
          onNext={nextTestimonial}
          onDirectNavigation={handleDirectNavigation}
          currentIndex={currentIndex}
          totalCount={testimonials.length}
        />
      </div>
    </section>
  );
}
