import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/heroSection';

// Lazy load components that aren't in the initial viewport
const AboutSection = dynamic(() => import('@/components/home/aboutSection'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const ServicesSection = dynamic(() => import('@/components/home/servicesSection'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const FeaturedWorks = dynamic(() => import('@/components/home/featuredWorks'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const HowItWorks = dynamic(() => import('@/components/home/howItWorks'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const StatsSection = dynamic(() => import('@/components/ui/statsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const TestimonialsSection = dynamic(() => import('@/components/home/testimonialsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const LatestArticles = dynamic(() => import('@/components/home/latestArticles'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const CTASection = dynamic(() => import('@/components/home/ctaSection'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-96 animate-pulse bg-[#050D36]/50" />}>
        <AboutSection />
      </Suspense>
      <ServicesSection />
      <FeaturedWorks />
      <HowItWorks />
      <StatsSection />
      <TestimonialsSection />
      <LatestArticles />
      <CTASection />
    </>
  );
}
