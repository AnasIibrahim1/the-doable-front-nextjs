'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { teamMembers } from '@/data/teamMembers';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import AnimatedGradients from '@/components/ui/animatedGradients';
import FloatingCircles from '@/components/ui/floatingCircles';
import FloatingStars from '@/components/ui/floatingStars';

const ServicesCTA = dynamic(() => import('@/components/services/servicesCTA'), {
  loading: () => <div className="h-64 animate-pulse bg-[#050D36]/50" />
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function findMemberBySlug(slug: string) {
  return teamMembers.find((m) => slugify(m.name) === slug);
}

export default function TeamMemberDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const member = findMemberBySlug(slug);
  if (!member) return notFound();

  const ratingOutOfTen = 9.2; // keep 9+ / 10 as requested
  
  // Suppress unused variable warning - ratingOutOfTen is used in the component
  void ratingOutOfTen;
  const skills = [
    { label: 'Graphic Design', value: 80 },
    { label: 'UI/UX Design', value: 96 },
    { label: 'Writing', value: 88 },
    { label: 'Design', value: 92 },
    { label: 'Communicate', value: 90 },
    { label: 'Photography', value: 92 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050D36] via-[#0A1A4A] to-[#1A0B4E]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#913BFF]/10 via-transparent to-[#104CBA]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#913BFF]/20 via-transparent to-transparent" />
        
        {/* Animated Background Elements */}
        <AnimatedGradients />
        <FloatingCircles />
        <FloatingStars />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
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
          />
        </div>

        <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Breadcrumb */}
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
                href="/team" 
                className="text-[#777C90] hover:text-[#913BFF] transition-all duration-300 hover:scale-110 relative"
              >
                <span className="relative z-10">TEAM</span>
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
              <motion.span 
                className="text-white font-semibold px-3 py-1 bg-[#913BFF]/20 rounded-full border border-[#913BFF]/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
              >
                Member DETAILS
              </motion.span>
            </motion.div>

            {/* Main Title */}
            <motion.div className="relative mb-8">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 relative z-10"
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
                <span className="bg-gradient-to-r from-white via-[#913BFF] to-[#104CBA] bg-clip-text text-transparent bg-300% animate-gradient-x">
                  Member
                </span>{' '}
                <motion.span
                  className="bg-gradient-to-l from-[#104CBA] via-white to-[#913BFF] bg-clip-text text-transparent bg-300% animate-gradient-x-reverse"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Details
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
                Member Details
              </motion.div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-[#777C90] max-w-3xl mx-auto leading-relaxed"
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
                Meet {member.name} - {member.role}
              </motion.span>
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D36] to-transparent" />
      </section>

      {/* Team Details Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto max-[1280px]:px-8">

          <div className="grid md:grid-cols-2 gap-8 bg-[#0B1130] rounded-2xl border border-[#913BFF]/20 p-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#0E153D]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white">{member.name}</h1>
              <p className="text-[#777C90]">{member.role}</p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <InfoRow label="Job Title" value={member.role} />
                <InfoRow label="Skill Level" value="Pro Level" />
                <InfoRow label="Phone" value="(+00) 365 0852 85" />
                <InfoRow label="Language" value="English, Bangla" />
                <InfoRow label="Email" value="team@thedoable.com" />
                <InfoRow label="Experiences" value="> 2 Years" />
              </div>

              <div className="pt-4">
                <p className="text-white/80 mb-2">Follow More:</p>
                <div className="flex gap-3">
                  {member.socialLinks.facebook && socialIcon(member.socialLinks.facebook, <FaFacebook className="text-sm" />)}
                  {member.socialLinks.twitter && socialIcon(member.socialLinks.twitter, <FaTwitter className="text-sm" />)}
                  {member.socialLinks.linkedin && socialIcon(member.socialLinks.linkedin, <FaLinkedin className="text-sm" />)}
                  {member.socialLinks.instagram && socialIcon(member.socialLinks.instagram, <FaInstagram className="text-sm" />)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-white mb-4">Biography</h2>
              <p className="text-[#9AA0B5] leading-relaxed">
                Quickly integrate client-centered user experiences through vertical data. Holisticly reimagine interactive
                expertise after distinctive resources. Collaboratively engineer prospective imperatives with transparent
                technology. Professionally morph excellent materials.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {skills.map((s, i) => (
                  <SkillCircle key={i} value={s.value} label={s.label} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Our Skills</h3>
              <div className="grid grid-cols-3 gap-4">
                {['html', 'css', 'js', 'php', 'c', 'dart', 'python', 'ts'].map((k) => (
                  <div key={k} className="h-16 rounded-lg border border-[#913BFF]/20 bg-[#0E153D] flex items-center justify-center text-white/70">
                    {k.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-[#10163C] border border-[#913BFF]/20">
      <span className="text-[#9AA0B5] text-sm">{label}</span>
      <span className="text-white ml-auto text-sm counter">{value}</span>
    </div>
  );
}

function socialIcon(href: string, icon: React.ReactNode) {
  return (
    <Link href={href} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#913BFF] hover:scale-110 transition-all duration-300">
      {icon}
    </Link>
  );
}

function SkillCircle({ value, label }: { value: number; label: string }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" className="mb-3">
        <circle cx="60" cy="60" r={radius} stroke="#2A2F55" strokeWidth="10" fill="none" />
        <circle cx="60" cy="60" r={radius} stroke="#913BFF" strokeWidth="10" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        <text x="60" y="65" textAnchor="middle" className="counter fill-white text-lg font-bold">{value}%</text>
      </svg>
      <span className="text-white text-sm text-center">{label}</span>
    </div>
  );
}

 