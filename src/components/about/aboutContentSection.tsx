'use client';

import { motion } from 'framer-motion';
import AnimatedShapes from '../home/about/animatedShapes';
import Button from '@/components/ui/button';

export default function AboutContentSection() {
  return (
    <section id="about-content" className="py-24 relative scroll-mt-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <motion.div
              className="text-left mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                About Our Techy{' '}
                <span className="bg-gradient-to-r from-[#913BFF] to-[#104CBA] bg-clip-text text-transparent">
                  Innovative IT Agency
                </span>{' '}
                & Solutions
              </h2>
              <p className="text-[#777C90] text-lg leading-relaxed max-w-2xl">
                We are a leading IT solutions agency dedicated to providing cutting-edge technology services. 
                Our team of experts ensures that your business stays ahead in the digital landscape with 
                innovative solutions tailored to your needs.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#913BFF] rounded-full flex-shrink-0" />
                <p className="text-white">Expert team with years of experience</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#913BFF] rounded-full flex-shrink-0" />
                <p className="text-white">Cutting-edge technology solutions</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#913BFF] rounded-full flex-shrink-0" />
                <p className="text-white"><span className='counter'>24/7</span> customer support</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#913BFF] rounded-full flex-shrink-0" />
                <p className="text-white">Customized business solutions</p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                icon="✨"
                floating={true}
              >
                View Details
              </Button>
            </motion.div>
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
