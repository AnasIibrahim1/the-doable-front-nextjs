'use client';

import { memo, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './projectCard';
import SectionHeader from '../ui/sectionHeader';

// Lazy load background animations


const FloatingStars = dynamic(() => import('../ui/floatingStars'), {
  ssr: false,
});

const FloatingCircles = dynamic(() => import('../ui/floatingCircles'), {
  ssr: false,
});

function ProjectsGrid() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(caseStudies.map(project => project.category)));
    return ['All', ...uniqueCategories];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return caseStudies;
    }
    return caseStudies.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section ref={ref} className="py-12 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />
      
      {inView && (
        <>
          <div className="absolute inset-0 pointer-events-none">
            <FloatingStars />
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Featured Projects"
          description="Explore our portfolio of innovative solutions and successful case studies that demonstrate our expertise across various industries and technologies."
          alignment="center"
          className="mb-8 md:mb-16"
        />

        {/* Category Filter */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-2 bg-[#1A1F3A]/50 rounded-2xl border border-[#913BFF]/20 backdrop-blur-sm max-w-full overflow-x-auto">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#913BFF] text-white shadow-lg shadow-[#913BFF]/30'
                    : 'bg-transparent text-[#777C90] hover:text-white hover:bg-[#913BFF]/20 border border-transparent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Responsive layout */}
        <div key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-[#777C90] text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(ProjectsGrid);

