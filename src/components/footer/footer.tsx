'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

// Define links array outside component to ensure stability across server/client renders
const QUICK_LINKS = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
] as const;

// Define social links outside component to ensure stability
const SOCIAL_LINKS = [
  { icon: FaFacebook, href: '#' },
  { icon: FaTwitter, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaLinkedin, href: '#' },
] as const;

export default function Footer() {
  // Memoize the mapped links to prevent hydration mismatches
  const quickLinks = useMemo(() => QUICK_LINKS, []);
  const socialLinks = useMemo(() => SOCIAL_LINKS, []);
  

  return (
    <footer className="border-t border-[#104CBA]/30 bg-[#050D36]" suppressHydrationWarning>
      <div className="max-w-7xl max-[1280px]:px-8 mx-auto pt-16 pb-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand and Description */}
          <motion.div
            suppressHydrationWarning
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">TheDoable.</h3>
            <p className="text-[#777C90] mb-6">
              Leading IT solutions agency providing cutting-edge technology services for businesses worldwide.
            </p>
            {/* Let's Chat link */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white hover:text-[#913BFF] transition-colors"
            >
              Let&apos;s Chat <FaArrowRight />
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            suppressHydrationWarning
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2" suppressHydrationWarning>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#777C90] hover:text-[#913BFF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            suppressHydrationWarning
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-[#777C90]">
              <p>TheDoable@example.com</p>
              <p className='counter'>4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            suppressHydrationWarning
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="bg-[#104CBA]/20 hover:bg-[#913BFF] text-white p-3 rounded-lg transition-colors border border-[#913BFF]/30"
                  >
                    <IconComponent />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          suppressHydrationWarning
          className="border-t border-[#104CBA]/30 mt-12 pt-8 text-center text-[#777C90]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Copyright <span className='counter'> © </span> <span className='counter'> 2025</span> TheDoable. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
