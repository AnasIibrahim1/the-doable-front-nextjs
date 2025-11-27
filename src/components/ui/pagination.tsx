'use client';

import { motion } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { PaginationProps } from '@/types';

/**
 * A pagination component with navigation controls and dot indicators
 * @param currentPage - The currently active page number
 * @param totalPages - Total number of pages available
 * @param onPageChange - Callback function when page changes
 * @param showArrows - Show previous/next arrow buttons
 * @param showDots - Show dot indicators for direct navigation
 * @param className - Additional CSS classes
 */

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showArrows = true,
  showDots = true,
  className = ''
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleDirectNavigation = (page: number): void => {
    onPageChange(page);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, page: number): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onPageChange(page);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <motion.div
      className={`flex justify-center items-center gap-4 mt-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {showArrows && (
        <button
          onClick={handlePrevious}
          onKeyDown={(e) => e.key === 'Enter' && handlePrevious()}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
          className={`p-3 rounded-lg transition-all duration-300 border ${
            currentPage === 1
              ? 'bg-[#104CBA]/10 text-[#777C90] border-[#104CBA]/20 cursor-not-allowed'
              : 'bg-[#104CBA]/20 hover:bg-[#913BFF] text-white border-[#913BFF]/30 hover:scale-105'
          }`}
        >
          <AiOutlineArrowLeft className="text-xl" aria-hidden="true" />
        </button>
      )}

      {showDots && (
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => handleDirectNavigation(page)}
                onKeyDown={(e) => handleKeyDown(e, page)}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  page === currentPage 
                    ? 'bg-[#913BFF] scale-110' 
                    : 'bg-[#104CBA] hover:bg-[#913BFF]/70'
                }`}
              />
            );
          })}
        </div>
      )}

      {showArrows && (
        <button
          onClick={handleNext}
          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className={`p-3 rounded-lg transition-all duration-300 border ${
            currentPage === totalPages
              ? 'bg-[#104CBA]/10 text-[#777C90] border-[#104CBA]/20 cursor-not-allowed'
              : 'bg-[#104CBA]/20 hover:bg-[#913BFF] text-white border-[#913BFF]/30 hover:scale-105'
          }`}
        >
          <AiOutlineArrowRight className="text-xl" aria-hidden="true" />
        </button>
      )}
    </motion.div>
  );
}