'use client';

import { motion } from 'framer-motion';
import { HowItWorksStep as StepType } from '../../../data/howItWorks';

interface HowItWorksStepProps {
  step: StepType;
  index: number;
}

export default function HowItWorksStep({ step, index }: HowItWorksStepProps) {
  return (
    <motion.div
      className="bg-[#050D36] border border-[#104CBA]/30 rounded-2xl p-8 hover:border-[#913BFF] transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      {/* Icon */}
      <div className="bg-[#913BFF] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-6">
        {step.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>

      {/* Description */}
      <p className="text-[#777C90]">{step.description}</p>
    </motion.div>
  );
}
