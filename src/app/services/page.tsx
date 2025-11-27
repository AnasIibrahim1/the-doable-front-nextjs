import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ServicesHeroSection from '@/components/services/servicesHeroSection';

// Lazy load components for better performance
const ServicesGrid = dynamic(() => import('@/components/services/servicesGrid'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const ServicesCTA = dynamic(() => import('@/components/services/servicesCTA'), {
  loading: () => <div className="h-64 animate-pulse bg-[#050D36]/50" />
});

export const metadata = {
  title: 'Our Services - TheDoable',
  description: 'Empower your business to thrive in the digital age with our comprehensive IT services.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <Suspense fallback={<div className="h-96 animate-pulse bg-[#050D36]/50" />}>
        <ServicesGrid />
      </Suspense>
      <ServicesCTA />
    </>
  );
}

