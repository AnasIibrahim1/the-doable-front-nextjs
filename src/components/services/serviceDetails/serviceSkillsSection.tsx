'use client';

import { motion } from 'framer-motion';
import { ServiceSkill, ServiceTech } from '@/data/services';

interface ServiceSkillsSectionProps {
  skills?: ServiceSkill[];
  technologies?: ServiceTech[];
}

export default function ServiceSkillsSection({ 
  skills: _skills, 
  technologies 
}: ServiceSkillsSectionProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1A1F3A] p-8 rounded-lg border border-[#913BFF]/20"
    >
      <h3 className="text-3xl font-bold text-white mb-4">Our Skills</h3>
      <p className="text-[#777C90] mb-8 leading-relaxed">
        We leverage cutting-edge technologies and tools to deliver exceptional results for our clients.
      </p>
      
      {/* Technology Icons Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-[#050D36] rounded-lg border border-[#913BFF]/20 hover:border-[#913BFF] hover:bg-[#050D36]/90 transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 bg-[#913BFF]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#913BFF]/20 transition-colors">
              <span className="text-2xl font-bold text-[#913BFF]">
                {tech.icon || tech.name.charAt(0)}
              </span>
            </div>
            <p className="text-white text-xs text-center font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}



