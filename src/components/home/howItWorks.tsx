'use client';

import HowItWorksHeader from './howItWorks/howItWorksHeader';
import HowItWorksGrid from './howItWorks/howItWorksGrid';
import FloatingStars from '../ui/floatingStars';

export default function HowItWorks() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent">
        <FloatingStars />
      </div>

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Section Header */}
        <HowItWorksHeader />

        {/* Steps Grid */}
        <HowItWorksGrid />
      </div>
    </section>
  );
}
