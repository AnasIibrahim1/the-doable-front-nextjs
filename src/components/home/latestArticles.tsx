'use client';

import { useState } from 'react';
import { articles } from '../../data/articles';
import ArticlesHeader from './articles/articlesHeader';
import ArticlesGrid from './articles/articlesGrid';

export default function LatestArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextArticle = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(articles.length / 3));
  };

  const prevArticle = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(articles.length / 3)) % Math.ceil(articles.length / 3));
  };

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  // Get current page articles
  const startIndex = currentIndex * 3;
  const endIndex = startIndex + 3;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Section Header with Pagination */}
        <ArticlesHeader
          onPrevious={prevArticle}
          onNext={nextArticle}
          canGoPrevious={currentIndex > 0}
          canGoNext={currentIndex < Math.ceil(articles.length / 3) - 1}
        />

        {/* Articles Grid */}
        <ArticlesGrid
          articles={currentArticles}
          hoveredIndex={hoveredIndex}
          onCardHover={handleCardHover}
          onCardLeave={handleCardLeave}
        />
      </div>
    </section>
  );
}
