'use client';

import { motion } from 'framer-motion';

export default function HeroFloatingElements() {
  return (
    <>
      {/* Advanced Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Complex Shapes */}
        <motion.div
          className="absolute top-20 left-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            <div className="w-24 h-24 border-2 border-[#913BFF]/30 rounded-2xl rotate-45" />
            <div className="absolute inset-2 bg-gradient-to-br from-[#913BFF]/20 to-transparent rounded-xl" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-32"
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1.1, 1],
            y: [0, 25, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-[#104CBA]/20 to-[#913BFF]/20 rounded-full border border-[#104CBA]/40">
            <div className="w-full h-full rounded-full border-4 border-dashed border-[#913BFF]/30 animate-spin-slow" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 0.9, 1],
            x: [0, -20, 20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-16 h-32 bg-gradient-to-t from-[#913BFF]/30 to-[#104CBA]/30 rounded-full transform rotate-12 blur-sm" />
        </motion.div>

        {/* DNA-like Helix */}
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            rotate: [0, 360],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="relative w-8 h-40">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#913BFF]/40 rounded-full"
                style={{
                  left: `${Math.sin((i * Math.PI) / 4) * 20 + 10}px`,
                  top: `${i * 5}px`,
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Orbital System */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div className="relative w-80 h-80">
            {/* Orbits */}
            <div className="absolute inset-0 border border-[#913BFF]/10 rounded-full" />
            <div className="absolute inset-8 border border-[#104CBA]/10 rounded-full" />
            <div className="absolute inset-16 border border-[#913BFF]/10 rounded-full" />
            
            {/* Planets */}
            <motion.div
              className="absolute top-0 left-1/2 w-3 h-3 bg-[#913BFF]/60 rounded-full transform -translate-x-1/2"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute top-8 left-1/2 w-2 h-2 bg-[#104CBA]/60 rounded-full transform -translate-x-1/2"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute top-16 left-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* Floating Code Symbols */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-2xl text-[#913BFF]/20 font-mono"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {'</>'}
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/6 text-xl text-[#104CBA]/20 font-mono"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          {'{}'}
        </motion.div>

        <motion.div
          className="absolute top-3/4 left-1/3 text-lg text-[#913BFF]/20 font-mono"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        >
          {'()=>'}
        </motion.div>

        {/* Magic Sparkles */}
        {Array.from({ length: 15 }).map((_, i) => {
          // Pre-calculated random values for consistent rendering
          const sparkleData = [
            { duration: 4.2, delay: 1.8 }, { duration: 3.7, delay: 3.2 }, { duration: 5.1, delay: 0.5 },
            { duration: 3.3, delay: 4.1 }, { duration: 4.8, delay: 2.3 }, { duration: 3.9, delay: 1.1 },
            { duration: 4.5, delay: 3.8 }, { duration: 3.6, delay: 0.9 }, { duration: 5.0, delay: 2.7 },
            { duration: 4.1, delay: 1.5 }, { duration: 3.8, delay: 4.3 }, { duration: 4.7, delay: 0.7 },
            { duration: 3.4, delay: 3.5 }, { duration: 4.9, delay: 2.1 }, { duration: 4.3, delay: 1.9 }
          ];
          
          return (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + (i * 60) % 80}%`,
                top: `${15 + (i * 43) % 70}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: sparkleData[i % 15].duration,
                repeat: Infinity,
                delay: sparkleData[i % 15].delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Flowing Energy Lines */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1000 1000"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.path
            d="M100,200 Q500,100 900,300 Q700,500 300,600 Q100,400 100,200"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            d="M200,800 Q600,600 800,400 Q500,200 200,400 Q400,600 200,800"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="1"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#913BFF" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#104CBA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#913BFF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#104CBA" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#913BFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#104CBA" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </>
  );
}
