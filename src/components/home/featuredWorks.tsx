'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { caseStudies } from '../../data/caseStudies';
import { starPositions } from '../../data/starPositions';
import FeaturedWorksHeader from './works/featuredWorksHeader';
import FeaturedWorksGrid from './works/featuredWorksGrid';
import Button from '../ui/button';

export default function FeaturedWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Limit to maximum 6 projects
  const displayedProjects = caseStudies.slice(0, 6);

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2E] via-[#1A1F3A] to-[#0A0F2E]" />
      
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large stars */}
        {starPositions.large.map((star) => (
          <div
            key={`large-${star.id}`}
            className="absolute w-2 h-2 bg-white rounded-full star-large"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
        
        {/* Medium stars */}
        {starPositions.medium.map((star) => (
          <div
            key={`medium-${star.id}`}
            className="absolute w-1 h-1 bg-white rounded-full star-medium"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
        
        {/* Small stars */}
        {starPositions.small.map((star) => (
          <div
            key={`small-${star.id}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full star-small"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Section Header */}
        <FeaturedWorksHeader />

        {/* Case Study Cards */}
        <FeaturedWorksGrid
          caseStudies={displayedProjects}
          hoveredIndex={hoveredIndex}
          onCardHover={handleCardHover}
          onCardLeave={handleCardLeave}
        />

        {/* See More Projects Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button href="/projects" variant="primary" size="lg">
            See More Projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
