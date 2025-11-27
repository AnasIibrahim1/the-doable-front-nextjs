'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CaseStudy } from '@/data/caseStudies';
import HeroFloatingElements from '@/components/about/heroFloatingElements';
import ScrollIndicator from '@/components/ui/scrollIndicator';
import FloatingWord from '@/components/ui/floatingWord';
import { FaArrowLeft } from 'react-icons/fa';

interface ProjectDetailsHeroProps {
  project: CaseStudy;
}

export default function ProjectDetailsHero({ project }: ProjectDetailsHeroProps) {
  return (
    <section 
      className=" relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${project.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Advanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050D36]/95 via-[#0A1A4A]/95 to-[#1A0B4E]/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#913BFF]/20 via-transparent to-[#104CBA]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#913BFF]/30 via-transparent to-transparent" />
      
      {/* Advanced Floating Elements */}
      <HeroFloatingElements />

      {/* Floating Background Word */}
      <FloatingWord word="Projects"/>
      
      {/* Central Content */}
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Back Button */}
          <motion.div
            className="flex justify-start max-[1024px]:justify-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1F3A]/50 backdrop-blur-md border border-[#913BFF]/30 rounded-full text-white hover:bg-[#913BFF]/20 transition-all duration-300 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block px-4 py-2 bg-[#913BFF]/20] border border-[#913BFF]/50 rounded-full text-[#fff] font-medium">
              {project.category}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative z-10"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
          >
            <span className="bg-gradient-to-r from-white via-[#913BFF] to-[#104CBA] bg-clip-text text-transparent">
              {project.title}
            </span>
          </motion.h1>

          {/* Project Info & Actions */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Production Link */}
            {project.productionUrl && (
              <motion.a
                href={project.productionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#913BFF] to-[#104CBA] text-white rounded-full font-semibold shadow-2xl shadow-[#913BFF]/50 border border-[#913BFF]/30 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(145, 59, 255, 0.7)",
                  y: -8
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#104CBA] to-[#913BFF] opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  🌐 View Live Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </motion.a>
            )}

            {/* GitHub Link */}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-transparent border-2 border-[#913BFF] text-white rounded-full font-semibold hover:bg-[#913BFF]/10 transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#104CBA',
                  y: -8,
                  boxShadow: "0 15px 30px rgba(16, 76, 186, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  💻 View on GitHub
                </span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D36] to-transparent" />
    </section>
  );
}

