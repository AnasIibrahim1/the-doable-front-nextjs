import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ProjectsHeroSection from '@/components/projects/projectsHeroSection';

// Lazy load components for better performance
const ProjectsGrid = dynamic(() => import('@/components/projects/projectsGrid'), {
  loading: () => <div className="h-96 animate-pulse bg-[#050D36]/50" />
});

const ServicesCTA = dynamic(() => import('@/components/services/servicesCTA'), {
  loading: () => <div className="h-64 animate-pulse bg-[#050D36]/50" />
});

export const metadata = {
  title: 'Our Projects - TheDoable',
  description: 'Explore our portfolio of innovative solutions and successful case studies across various industries.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeroSection />
      <Suspense fallback={<div className="h-96 animate-pulse bg-[#050D36]/50" />}>
        <ProjectsGrid />
      </Suspense>
      <ServicesCTA />
    </>
  );
}

