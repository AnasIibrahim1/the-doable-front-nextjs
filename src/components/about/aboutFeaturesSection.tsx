'use client';

import { motion } from 'framer-motion';
import { aboutFeatures } from '@/data/aboutFeatures';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-[#104CBA]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#913BFF]/20 hover:border-[#913BFF] transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="bg-[#913BFF] p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#913BFF] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#777C90] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutFeaturesSection() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {aboutFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
