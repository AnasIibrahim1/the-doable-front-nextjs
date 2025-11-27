'use client';

import { motion } from 'framer-motion';
import { FaMoneyCheckAlt, FaHeadset } from 'react-icons/fa';
import AnimatedShapes from './about/animatedShapes';
import AboutHeader from './about/aboutHeader';
import FeatureCard from './about/featureCard';
import AboutButton from './about/aboutButton';

export default function AboutSection() {
  return (
    <section className="py-24 relative max-w-7xl mx-auto max-[1280px]:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />

      <div className=" relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AboutHeader />

            {/* Feature Cards */}
            <div className="flex gap-4 max-[650px]:flex-col">
              <FeatureCard
                icon={FaMoneyCheckAlt}
                title="Money-back Guarantee"
                description="satisfaction guaranteed"
                delay={0.2}
              />
              <FeatureCard
                icon={FaHeadset}
                title="Online Support"
                description="Always here to help you"
                delay={0.4}
              />
            </div>

            <AboutButton />
          </motion.div>

          {/* Right side - Animated Shapes */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedShapes />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
