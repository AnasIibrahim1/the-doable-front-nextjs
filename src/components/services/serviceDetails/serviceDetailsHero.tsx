'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Service } from '@/data/services';
import HeroFloatingElements from '@/components/about/heroFloatingElements';
import ScrollIndicator from '@/components/ui/scrollIndicator';
import FloatingWord from '@/components/ui/floatingWord';

interface ServiceDetailsHeroProps {
  service: Omit<Service, 'icon'>;
}

export default function ServiceDetailsHero({ service }: ServiceDetailsHeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Advanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050D36] via-[#0A1A4A] to-[#1A0B4E]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#913BFF]/10 via-transparent to-[#104CBA]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#913BFF]/20 via-transparent to-transparent" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#913BFF]/30 to-[#104CBA]/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-[#104CBA]/25 to-[#913BFF]/25 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Advanced Floating Elements */}
      <HeroFloatingElements />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-32 h-32 border-2 border-[#913BFF]/20 rounded-2xl"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-[#104CBA]/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-[#913BFF]/20 to-[#104CBA]/20 rounded-lg"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Floating Particles System */}
        {Array.from({ length: 18 }).map((_, i) => {
          const particleData = [
            { left: 15, top: 25, x: 5, duration: 9.2, delay: 0.3 },

            { left: 45, top: 75, x: 3, duration: 8.8, delay: 0.8 },
            { left: 25, top: 45, x: -5, duration: 11.1, delay: 1.5 },
            { left: 75, top: 65, x: 7, duration: 9.7, delay: 0.5 },
            { left: 35, top: 25, x: -3, duration: 10.3, delay: 1.8 },
            { left: 65, top: 85, x: 6, duration: 8.5, delay: 0.2 },
            { left: 55, top: 35, x: -7, duration: 11.4, delay: 1.1 },
            { left: 95, top: 55, x: 4, duration: 9.1, delay: 0.9 },
            { left: 5, top: 75, x: -6, duration: 10.8, delay: 1.6 },
            { left: 40, top: 10, x: 8, duration: 9.5, delay: 0.4 },
            { left: 80, top: 40, x: -4, duration: 10.1, delay: 1.3 },
            { left: 60, top: 70, x: 5, duration: 8.9, delay: 0.7 },
            { left: 20, top: 60, x: -8, duration: 11.2, delay: 1.4 },
            { left: 90, top: 20, x: 3, duration: 9.8, delay: 0.6 },
            { left: 30, top: 90, x: -5, duration: 10.4, delay: 1.7 },
            { left: 70, top: 50, x: 7, duration: 8.7, delay: 0.1 },
            { left: 50, top: 80, x: -3, duration: 10.9, delay: 1.9 },
            { left: 10, top: 30, x: 6, duration: 9.3, delay: 0.8 },

          ];
          
          const data = particleData[i % 20];
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${data.left}%`,
                top: `${data.top}%`,
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)',
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, data.x, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: data.duration,
                repeat: Infinity,
                delay: data.delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Glowing Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#913BFF]/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-transparent via-[#104CBA]/50 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>
      
      {/* Floating Background Word */}
      <FloatingWord word='Services' />
      
      {/* Central Content */}
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Enhanced Breadcrumb */}
          <motion.div
            className="flex items-center justify-center gap-3 text-sm mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <Link 
              href="/" 
              className="text-[#777C90] hover:text-[#913BFF] transition-all duration-300 hover:scale-110 relative"
            >
              <span className="relative z-10">HOME</span>
              <motion.div
                className="absolute inset-0 bg-[#913BFF]/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.span 
              className="text-[#913BFF] text-lg"
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              •
            </motion.span>
            <Link 
              href="/services" 
              className="text-[#777C90] hover:text-[#913BFF] transition-all duration-300 hover:scale-110 relative"
            >
              <span className="relative z-10">SERVICES</span>
            </Link>
            <motion.span 
              className="text-[#913BFF] text-lg"
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
            >
              •
            </motion.span>
            <motion.span 
              className="text-white font-semibold px-3 py-1 bg-[#913BFF]/20 rounded-full border border-[#913BFF]/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
            >
              SERVICE DETAILS
            </motion.span>
          </motion.div>

          {/* Spectacular Main Title */}
          <motion.div className="relative mb-8">
            <motion.h1
              className="text-4xl md:text-8xl lg:text-9xl font-bold mb-4 relative z-10"
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
              
              <motion.span
                className="bg-gradient-to-l from-[#104CBA] via-white to-[#913BFF] bg-clip-text text-transparent bg-300% animate-gradient-x-reverse"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {service.title}
              </motion.span>
            </motion.h1>
            
            {/* Floating text shadow */}
            <motion.div
              className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-[#913BFF]/10 blur-sm"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {service.title}
            </motion.div>
            
            {/* Floating text shadow */}
            <motion.div
              className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-[#913BFF]/10 blur-sm"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {service.title}
            </motion.div>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[#777C90] max-w-3xl mx-auto leading-relaxed mb-12 relative"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: 'linear-gradient(90deg, #777C90, #913BFF, #777C90)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {service.description}
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D36] to-transparent" />
    </section>
  );
}

