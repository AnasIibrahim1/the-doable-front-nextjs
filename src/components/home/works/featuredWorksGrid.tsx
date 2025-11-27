'use client';

import { CaseStudy } from '../../../data/caseStudies';
import FeaturedWorkCard from './featuredWorkCard';

interface FeaturedWorksGridProps {
  caseStudies: CaseStudy[];
  hoveredIndex: number | null;
  onCardHover: (index: number) => void;
  onCardLeave: () => void;
}

export default function FeaturedWorksGrid({ 
  caseStudies, 
  hoveredIndex, 
  onCardHover, 
  onCardLeave 
}: FeaturedWorksGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {caseStudies.map((project, index) => (
        <FeaturedWorkCard
          key={project.slug}
          slug={project.slug}
          category={project.category}
          title={project.title}
          description={project.description}
          featured={project.featured || hoveredIndex === index}
          delay={index * 0.1}
          backgroundImage={project.backgroundImage}
          onHover={() => onCardHover(index)}
          onLeave={onCardLeave}
        />
      ))}
    </div>
  );
}
