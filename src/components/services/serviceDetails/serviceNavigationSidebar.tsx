'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Service } from '@/data/services';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceNavigationSidebarProps {
  services: Omit<Service, 'icon'>[];
  currentSlug: string;
}

export default function ServiceNavigationSidebar({ 
  services, 
  currentSlug 
}: ServiceNavigationSidebarProps) {

  return (
    <div className="space-y-3">
      {services.map((service, index) => {
        const isActive = service.slug === currentSlug;
        
        return (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <motion.button
              className={`w-full text-left px-6 py-4 mb-2 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                isActive
                  ? 'bg-[#913BFF]/20 border border-[#913BFF] text-white'
                  : 'bg-[#1A1F3A] border border-[#913BFF]/20 hover:border-[#913BFF] hover:bg-[#1A1F3A]/90 text-[#777C90] hover:text-white'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <span className="font-medium">{service.title}</span>
              <FaArrowRight 
                className={`transition-transform duration-300 ${
                  isActive ? 'text-[#913BFF]' : 'text-[#777C90] group-hover:text-[#913BFF]'
                } group-hover:translate-x-1`} 
              />
            </motion.button>
          </Link>
        );
      })}
    </div>
  );
}

