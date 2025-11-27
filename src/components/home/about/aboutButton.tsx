'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
export default function AboutButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-fit"
    >
    <Button 
      href="/about" 
      variant="primary" 
      size="lg" 
      className="mt-8"
      icon="✨"
      floating={true}
    >
      View Details
    </Button>
    </motion.div>
  );
}
