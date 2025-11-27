'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServiceContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      className="bg-[#1A1F3A] p-6 rounded-lg border border-[#913BFF]/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-white mb-3">Contact Us</h3>
      <p className="text-[#777C90] text-sm mb-6">
        Have questions? Get in touch with us for more information about our services.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#050D36] border border-[#913BFF]/20 rounded-lg text-white placeholder-[#777C90] focus:outline-none focus:border-[#913BFF] transition-colors"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#050D36] border border-[#913BFF]/20 rounded-lg text-white placeholder-[#777C90] focus:outline-none focus:border-[#913BFF] transition-colors"
            required
          />
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Write Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-[#050D36] border border-[#913BFF]/20 rounded-lg text-white placeholder-[#777C90] focus:outline-none focus:border-[#913BFF] transition-colors resize-none"
            required
          />
        </div>
        
        <motion.button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#913BFF] to-[#104CBA] text-white rounded-lg font-semibold hover:from-[#7C2BE0] hover:to-[#0D3FA8] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Now
        </motion.button>
      </form>
    </motion.div>
  );
}



