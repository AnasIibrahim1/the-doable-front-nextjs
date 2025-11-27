'use client';

import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricingPlans';
import Button from '@/components/ui/button';
import { FaCheck } from 'react-icons/fa';
import SectionHeader from '../ui/sectionHeader';
import AnimatedWavyLines from '../ui/animatedWavyLines';
import AnimatedGradients from '../ui/animatedGradients';
import FloatingCircles from '../ui/floatingCircles';
import FloatingStars from '../ui/floatingStars';

interface PricingCardProps {
  plan: {
    name: string;
    price: number;
    currency: string;
    period: string;
    features: string[];
    popular?: boolean;
    buttonText: string;
    description: string;
  };
  delay: number;
}

function PricingCard({ plan, delay }: PricingCardProps) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 flex flex-col justify-between min-h-[600px] ${
        plan.popular
          ? 'bg-[#913BFF] border-[#913BFF] shadow-2xl shadow-[#913BFF]/50'
          : 'bg-[#1A1F3A] border-[#913BFF]/20 hover:border-[#913BFF]'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#104CBA] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}

      {/* Top Section - Header & Price */}
      <div className="flex-1 flex flex-col">
        {/* Plan name */}
        <div className="text-center mb-6">
          <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
            {plan.name}
          </h3>
          <p className={`${plan.popular ? 'text-white/80' : 'text-[#777C90]'}`}>
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-1">
            <span className={`counter text-3xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
              {plan.currency}{plan.price}
            </span>
            <span className={`${plan.popular ? 'text-white/60' : 'text-[#777C90]'}`}>
              /{plan.period}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 flex-grow">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheck className={`text-sm flex-shrink-0 ${plan.popular ? 'text-white' : 'text-[#913BFF]'}`} />
              <span className={`counter ${plan.popular ? 'text-white/90' : 'text-[#777C90]'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - CTA Button routes to Contact */}
      <div className="mt-8">
        <Button
          href="/contact"
          variant={plan.popular ? 'outline' : 'primary'}
          size="md"
          className="w-full rounded-lg"
        >
          {plan.buttonText}
        </Button>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />
      <AnimatedGradients />
      <FloatingCircles />
      <FloatingStars />
      <AnimatedWavyLines /> 
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Our Simple & Easy Pricing"
          description="Choose the perfect plan for your business needs. All plans include our core features with varying levels of support and customization."
          alignment="center"
          className="mb-16"
        />

        {/* Pricing Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#1A1F3A] p-1 rounded-lg border border-[#913BFF]/20">
            <div className="flex">
              <button className="px-6 py-3 bg-[#913BFF] text-white rounded-lg font-semibold">
                MONTHLY
              </button>
              <button className="px-6 py-3 text-[#777C90] hover:text-white transition-colors">
                YEARLY
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
