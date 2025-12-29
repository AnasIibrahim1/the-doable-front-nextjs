'use client';

import { motion, useInView } from 'framer-motion';
import { CaseStudy, caseStudies } from '@/data/caseStudies';
import { FaCheck, FaPlay, FaExternalLinkAlt, FaGithub, FaFilePdf, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { useInView as useInViewObserver } from 'react-intersection-observer';
import { memo, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ProjectInfoBox from './projectInfoBox';

// Counter component for animated numbers
function NumberCounter({ end, delay = 0 }: { end: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (!isInView) return;

    // Parse the number from string (e.g., "125+" -> 125, "99.9%" -> 99.9)
    const numericValue = parseFloat(end.replace(/[^0-9.]/g, '')) || 0;
    
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    let current = 0;

    let intervalId: NodeJS.Timeout;
    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(intervalId);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, 16);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, end, delay]);

  const suffix = end.replace(/[0-9.]/g, '');

  return (
    <div ref={ref} className="counter">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

// Lazy load background animations


const FloatingStars = dynamic(() => import('../../ui/floatingStars'), {
  ssr: false,
});

interface ProjectDetailsContentProps {
  project: CaseStudy;
}

function ProjectDetailsContent({ project }: ProjectDetailsContentProps) {
  const { ref, inView } = useInViewObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Default challenge, goals, and solutions
  const challenge = project.challenge || 'Developing this project presented unique challenges that required innovative solutions and careful planning.';
  const goals = project.goals || [
    { value: '125+', label: 'We Develop Over 125+ Software' },
    { value: '64+', label: 'Global Clients & Trusted Us' },
    { value: '32+', label: 'Local & Global Award Wins' },
    { value: '122+', label: 'Clients Reviews Our Software' },
  ];

  // Get related projects (same category, exclude current project)
  const relatedProjects = caseStudies.filter(
    p => p.slug !== project.slug && p.category === project.category
  );

  // Pagination for related projects
  // Use project slug as part of state to reset pagination when project changes
  const [pageState, setPageState] = useState(() => ({
    projectSlug: project.slug,
    page: 1
  }));

  // Update page state when project changes
  if (pageState.projectSlug !== project.slug) {
    setPageState({ projectSlug: project.slug, page: 1 });
  }

  const currentPage = pageState.page;
  const setCurrentPage = (updater: number | ((prev: number) => number)) => {
    setPageState(prev => ({
      projectSlug: prev.projectSlug,
      page: typeof updater === 'function' ? updater(prev.page) : updater
    }));
  };

  const projectsPerPage = 3;
  const totalPages = Math.ceil(relatedProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = relatedProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0" />
      
      {inView && (
        <div className="absolute inset-0 pointer-events-none">
          <FloatingStars />
        </div>
      )}

      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
              <p className="text-[#777C90] text-lg leading-relaxed mb-6">
                {project.detailedDescription || project.description}
              </p>
              <p className="text-[#777C90] text-lg leading-relaxed">
                Collaboratively engineer prospective imperatives with transparent technology. We integrate client-centered users, interactive expertise, and transparent technology to deliver solutions that drive results.
              </p>
            </motion.div>

            {/* Project Info Box - Inline on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:hidden"
            >
              <ProjectInfoBox project={project} />
            </motion.div>

            {/* Challenge Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Challenge</h2>
              <p className="text-[#777C90] text-lg leading-relaxed mb-6">{challenge}</p>
              <div className="space-y-3">
                {project.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheck className="text-[#913BFF] mt-1 flex-shrink-0" />
                    <p className="text-[#777C90]">{feature.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Video Section */}
            {project.videoUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative aspect-video rounded-2xl overflow-hidden bg-[#1A1F3A] border border-[#913BFF]/20"
              >
                <iframe
                  src={project.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="Project Video"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative aspect-video rounded-2xl overflow-hidden bg-[#1A1F3A] border border-[#913BFF]/20 flex items-center justify-center"
              >
                <motion.button
                  className="w-20 h-20 bg-gradient-to-br from-[#913BFF] to-[#104CBA] rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaPlay className="text-white text-2xl ml-1" />
                </motion.button>
              </motion.div>
            )}

            {/* Project Goals Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Project Goals</h2>
              <p className="text-[#777C90] text-lg leading-relaxed mb-8">
                Our primary objectives were to deliver exceptional value, exceed client expectations, and create a solution that stands the test of time.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#913BFF] to-[#104CBA] mb-2">
                      <NumberCounter end={goal.value} delay={index * 0.1 + 0.8} />
                    </div>
                    <p className="text-[#777C90] text-sm">{goal.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Solutions</h2>
              <p className="text-[#777C90] text-lg leading-relaxed mb-8">
                Through innovative thinking and cutting-edge technology, we delivered comprehensive solutions that address all project requirements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.solutionImages && project.solutionImages.length > 0 ? (
                  project.solutionImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      className="aspect-square rounded-xl overflow-hidden bg-[#1A1F3A] border border-[#913BFF]/20 hover:border-[#913BFF] transition-colors duration-300"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={`${project.title} Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))
                ) : (
                  // Fallback: Show project background image as previews
                  Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      className="aspect-square rounded-xl overflow-hidden bg-[#1A1F3A] border border-[#913BFF]/20 group hover:border-[#913BFF] transition-colors duration-300"
                      style={{
                        backgroundImage: `url(${project.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 ">
              {/* Project Navigation */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1F3A]/50 backdrop-blur-md border border-[#913BFF]/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
                <div className="space-y-2">
                  {caseStudies.slice(0, 6).map((proj) => (
                    <Link
                      key={proj.slug}
                      href={`/projects/${proj.slug}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        proj.slug === project.slug
                          ? 'bg-[#913BFF]/20 text-white'
                          : 'text-[#777C90] hover:bg-[#913BFF]/10 hover:text-white'
                      }`}
                    >
                      <span>{proj.title}</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Project Info Box - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:block"
              >
                <ProjectInfoBox project={project} />
              </motion.div>

              {/* Download PDF */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#1A1F3A]/50 backdrop-blur-md border border-[#913BFF]/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Downloads</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-[#913BFF]/20 hover:bg-[#913BFF]/30 rounded-lg text-white transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <FaFilePdf className="text-[#913BFF]" />
                      <span>Download PDF 01</span>
                    </div>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-[#913BFF]/20 hover:bg-[#913BFF]/30 rounded-lg text-white transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <FaFilePdf className="text-[#913BFF]" />
                      <span>Download PDF 02</span>
                    </div>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-[#1A1F3A]/50 backdrop-blur-md border border-[#913BFF]/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
                <p className="text-[#777C90] text-sm mb-6">
                  Have a question about this project? Get in touch with us.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A1F3A] border border-[#913BFF]/30 rounded-lg text-white placeholder-[#777C90] focus:outline-none focus:border-[#913BFF] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A1F3A] border border-[#913BFF]/30 rounded-lg text-white placeholder-[#777C90] focus:outline-none focus:border-[#913BFF] transition-colors"
                  />
                  <textarea
                    placeholder="Write Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1A1F3A] border border-[#913BFF]/30 rounded-lg text-white placeholder-[#777C90] focus:outline-none focus:border-[#913BFF] transition-colors resize-none"
                  />
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#913BFF] to-[#104CBA] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#913BFF]/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Now
                  </motion.button>
                </form>
              </motion.div>

              {/* Production Link - Prominent in Sidebar */}
              {project.productionUrl && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-3"
                >
                  <motion.a
                    href={project.productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-gradient-to-br from-[#913BFF] to-[#104CBA] rounded-2xl text-white text-center hover:shadow-2xl hover:shadow-[#913BFF]/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <FaExternalLinkAlt className="text-3xl mx-auto mb-3 group-hover:rotate-12 transition-transform" />
                    <h3 className="font-bold text-lg mb-2">View Live Project</h3>
                    <p className="text-sm text-white/80">Experience it in production</p>
                  </motion.a>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-[#1A1F3A]/50 border border-[#913BFF]/30 rounded-xl text-white text-center hover:bg-[#913BFF]/20 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <FaGithub />
                      <span>View Source Code</span>
                    </motion.a>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-white">Related Projects</h2>
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      currentPage === 1
                        ? 'border-[#913BFF]/20 text-[#777C90] cursor-not-allowed'
                        : 'border-[#913BFF]/50 text-white hover:bg-[#913BFF]/20 hover:border-[#913BFF]'
                    }`}
                    whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                    whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
                  >
                    <FaChevronLeft />
                  </motion.button>
                  <span className="text-white px-4">
                    Page {currentPage} of {totalPages}
                  </span>
                  <motion.button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      currentPage === totalPages
                        ? 'border-[#913BFF]/20 text-[#777C90] cursor-not-allowed'
                        : 'border-[#913BFF]/50 text-white hover:bg-[#913BFF]/20 hover:border-[#913BFF]'
                    }`}
                    whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                    whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
                  >
                    <FaChevronRight />
                  </motion.button>
                </div>
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {paginatedProjects.map((proj, index) => (
                <Link
                  key={proj.slug}
                  href={`/projects/${proj.slug}`}
                  className="group"
                >
                  <motion.div
                    key={`${proj.slug}-${currentPage}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative rounded-2xl overflow-hidden bg-[#1A1F3A] border border-[#913BFF]/20 hover:border-[#913BFF] transition-all duration-300"
                  >
                    <div
                      className="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${proj.backgroundImage})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F3A] via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-[#fff] bg-[#913BFF]/20 px-2 py-1 rounded-full">
                        {proj.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-3 group-hover:text-[#913BFF] transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(ProjectDetailsContent);
