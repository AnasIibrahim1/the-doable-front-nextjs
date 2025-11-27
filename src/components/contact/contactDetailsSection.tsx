'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SectionHeader from '@/components/ui/sectionHeader';
import ServiceContactForm from '@/components/services/serviceDetails/serviceContactForm';

export default function ContactDetailsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <SectionHeader
          title="Contact Us"
          description="Reach out via the form or use our contact details below."
        />

        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              className="p-6 rounded-xl border border-[#913BFF]/30 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#913BFF] mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-[#777C90]">TheDoable@example.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl border border-[#913BFF]/30 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start gap-4">
                <FaPhone className="text-[#104CBA] mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-[#777C90]">(+1) 555-123-4567</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl border border-[#913BFF]/30 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#913BFF] mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-[#777C90]">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ServiceContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}


