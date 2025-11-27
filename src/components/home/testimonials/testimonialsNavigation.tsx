'use client';

import { motion } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface TestimonialsNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  onDirectNavigation: (index: number) => void;
  currentIndex: number;
  totalCount: number;
}

export default function TestimonialsNavigation({
  onPrevious,
  onNext,
  onDirectNavigation,
  currentIndex,
  totalCount
}: TestimonialsNavigationProps) {
  return (
    <motion.div
      className="flex justify-center items-center gap-4 mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <button
        onClick={onPrevious}
        className="bg-[#104CBA]/20 hover:bg-[#913BFF] text-white p-3 rounded-lg transition-colors border border-[#913BFF]/30"
      >
        <AiOutlineArrowLeft className="text-xl" />
      </button>

      {/* Dots indicator */}
      <div className="flex gap-2">
        {Array.from({ length: totalCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDirectNavigation(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#913BFF]' : 'bg-[#104CBA]'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="bg-[#104CBA]/20 hover:bg-[#913BFF] text-white p-3 rounded-lg transition-colors border border-[#913BFF]/30"
      >
        <AiOutlineArrowRight className="text-xl" />
      </button>
    </motion.div>
  );
}
