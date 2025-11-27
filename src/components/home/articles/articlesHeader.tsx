'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../../ui/sectionHeader';
import Button from '../../ui/button';

interface ArticlesHeaderProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export default function ArticlesHeader({ 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext 
}: ArticlesHeaderProps) {
  return (
    <motion.div
      className="flex justify-between items-center mb-16 max-[650px]:flex-col max-[650px]:items-center max-[650px]:gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <SectionHeader
        title="Latest Articles"
        description="Stay updated with the latest trends and insights in technology."
        alignment="left"
        className="mb-0"
      />
      
      {/* Pagination Controls */}
      <div className="flex items-center gap-3">
        <Button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          variant="secondary"
          size="sm"
          className="min-w-[100px]"
        >
          Previous
        </Button>
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          variant="secondary"
          size="sm"
          className="min-w-[100px]"
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
}
