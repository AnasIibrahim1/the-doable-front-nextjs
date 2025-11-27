'use client';

import { Article } from '@/types';
import ArticleCard from './articleCard';

interface ArticlesGridProps {
  articles: Article[];
  hoveredIndex: number | null;
  onCardHover: (index: number) => void;
  onCardLeave: () => void;
}

export default function ArticlesGrid({ 
  articles, 
  hoveredIndex, 
  onCardHover, 
  onCardLeave 
}: ArticlesGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          author={article.author}
          date={article.date}
          description={article.description}
          featured={article.featured || hoveredIndex === index}
          delay={index * 0.1}
          backgroundImage={article.backgroundImage}
          onHover={() => onCardHover(index)}
          onLeave={onCardLeave}
        />
      ))}
    </div>
  );
}
