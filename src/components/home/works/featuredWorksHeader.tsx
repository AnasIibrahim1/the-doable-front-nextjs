'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../../ui/sectionHeader';

export default function FeaturedWorksHeader() {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <SectionHeader
        title="Featured Works"
        description="Discover our latest projects and see how we can help your business, Locally and Globally"
        alignment="left"
        className="mb-0"
      />
    </motion.div>
  );
}
