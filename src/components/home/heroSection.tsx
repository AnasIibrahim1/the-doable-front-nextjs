'use client';

import { memo, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import HeroContent from './hero/heroContent';
import AnnouncementBanner from './hero/announcementBanner';
import ScrollIndicator from '../ui/scrollIndicator';

// Lazy load heavy animation components - SSR disabled to avoid hydration issues


const FloatingStars = dynamic(() => import('../ui/floatingStars'), {
  ssr: false,
});

const AnimatedWavyLines = dynamic(() => import('../ui/animatedWavyLines'), {
  ssr: false,
});

const FloatingWord = dynamic(() => import('../ui/floatingWord'), {
  ssr: false,
});

function HeroSection() {
  // Intersection Observer for performance - only load animations when section is in view
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Memoize section classes
  const sectionClasses = useMemo(() => 
    "relative min-h-screen flex items-center justify-center overflow-hidden pt-24",
    []
  );

  return (
    <section ref={ref} className={sectionClasses}>
      <AnnouncementBanner />

      {/* Load animations only when section is visible for better performance */}
      {inView && (
        <>
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingStars />
            <AnimatedWavyLines />
          </div>

          <FloatingWord word="TheDoable" />
        </>
      )}

      <div className="max-w-7xl mx-auto max-[1280px]:px-8">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default memo(HeroSection);
