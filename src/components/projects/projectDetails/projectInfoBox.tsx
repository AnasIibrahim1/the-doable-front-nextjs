'use client';

import { motion } from 'framer-motion';
import { CaseStudy } from '@/data/caseStudies';

interface ProjectInfoBoxProps {
  project: CaseStudy;
}

export default function ProjectInfoBox({ project }: ProjectInfoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#1A1F3A]/80 backdrop-blur-md border border-[#913BFF]/30 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Project Information</h3>
      <div className="space-y-4">
        {project.client && (
          <div className="flex justify-between items-center pb-4 border-b border-[#913BFF]/20">
            <span className="text-[#777C90]">Client:</span>
            <span className="text-white font-medium">{project.client}</span>
          </div>
        )}
        <div className="flex justify-between items-center pb-4 border-b border-[#913BFF]/20">
          <span className="text-[#777C90]">Project Type:</span>
          <span className="text-white font-medium">{project.category}</span>
        </div>
        {project.year && (
          <div className="flex justify-between items-center pb-4 border-b border-[#913BFF]/20">
            <span className="text-[#777C90]">Year:</span>
            <span className="text-white font-medium">{project.year}</span>
          </div>
        )}
        {project.status && (
          <div className="flex justify-between items-center pb-4 border-b border-[#913BFF]/20">
            <span className="text-[#777C90]">Status:</span>
            <span className={`font-medium ${
              project.status === 'In Production' 
                ? 'text-green-400' 
                : 'text-[#913BFF]'
            }`}>
              {project.status}
            </span>
          </div>
        )}
        {project.technologies && (
          <div className="flex justify-between items-start pb-4 border-b border-[#913BFF]/20">
            <span className="text-[#777C90]">Technologies:</span>
            <div className="flex flex-wrap gap-2 justify-end max-w-[60%]">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="text-white text-sm bg-[#913BFF]/20 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="pt-4">
          <span className="text-[#777C90] block mb-2">Tags:</span>
          <div className="flex flex-wrap gap-2">
            <span className="text-white text-sm bg-[#913BFF]/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-white text-sm bg-[#913BFF]/20 px-3 py-1 rounded-full">
              Solution
            </span>
            <span className="text-white text-sm bg-[#913BFF]/20 px-3 py-1 rounded-full">
              {project.status || 'Development'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

