'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/sectionHeader';

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: 'How quickly can you start on a new project?',
    answer:
      'We can typically begin within 3–5 business days after the initial consultation and scope alignment.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes. We offer flexible support plans including monitoring, security updates, and feature iterations.',
  },
  {
    question: 'Can you work with our existing stack and infrastructure?',
    answer:
      'Absolutely. We frequently integrate with existing systems and follow best practices to ensure smooth rollouts.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We partner with clients across SaaS, e-commerce, healthcare, fintech, and enterprise internal tools.',
  },
];

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />

      {/* Soft animated accents */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl bg-[#913BFF]/15"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full blur-3xl bg-[#104CBA]/15"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Answers to common questions about timelines, support, and collaboration."
          alignment="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="rounded-2xl border border-[#913BFF]/30 bg-white/5 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-white font-semibold">{item.question}</span>
                  <motion.span
                    className="text-[#913BFF] text-xl"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6"
                      id={`faq-panel-${index}`}
                    >
                      <div className="pb-6 text-[#C5C9DA] leading-relaxed border-t border-[#913BFF]/20">
                        <motion.p
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


