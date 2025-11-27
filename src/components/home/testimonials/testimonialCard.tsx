'use client';

import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    rating: number;
    author: string;
    role: string;
  };
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <motion.div
      className="h-96 flex flex-col justify-center items-center text-center px-8"
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >


      {/* Stars Rating */}
      <div className="flex items-center justify-center gap-1 mb-6">
        {renderStars(testimonial.rating)}
      </div>

      {/* Opinion/Quote */}
      <p className="text-xl text-white mb-20 leading-relaxed max-w-3xl">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#104CBA] to-[#913BFF] flex items-center justify-center flex-shrink-0">
          <span className="text-2xl text-white font-bold">
            {testimonial.author[0]}
          </span>
        </div>
        <div>
          <div className="font-semibold text-white text-lg text-left">
            {testimonial.author}
          </div>
          <div className="text-[#777C90] text-left">
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
