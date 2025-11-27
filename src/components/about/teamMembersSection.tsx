'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { teamMembers } from '@/data/teamMembers';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import SectionHeader from '../ui/sectionHeader';
import AnimatedGradients from '../ui/animatedGradients';
import FloatingCircles from '../ui/floatingCircles';
import FloatingStars from '../ui/floatingStars';

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    socialLinks: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
    };
  };
  delay: number;
}

function TeamCard({ member, delay, onNavigate }: TeamCardProps & { onNavigate: () => void }) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      onClick={onNavigate}
    >
      
      <div className="bg-[#1A1F3A] rounded-2xl overflow-hidden border border-[#913BFF]/20 hover:border-[#913BFF] transition-all duration-300 relative">

        {/* Member Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F3A] via-transparent to-transparent" />
          
          {/* Social Links */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            {member.socialLinks.facebook && (
              <a
                href={member.socialLinks.facebook}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#913BFF] hover:scale-110 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaFacebook className="text-sm" />
              </a>
            )}
            {member.socialLinks.twitter && (
              <a
                href={member.socialLinks.twitter}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#913BFF] hover:scale-110 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaTwitter className="text-sm" />
              </a>
            )}
            {member.socialLinks.linkedin && (
              <a
                href={member.socialLinks.linkedin}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#913BFF] hover:scale-110 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedin className="text-sm" />
              </a>
            )}
            {member.socialLinks.instagram && (
              <a
                href={member.socialLinks.instagram}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#913BFF] hover:scale-110 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaInstagram className="text-sm" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Member Info */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
          <p className="text-[#777C90]">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamMembersSection() {
  const router = useRouter();
  const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050D36] to-transparent" />
      <AnimatedGradients />
      <FloatingCircles />
      <FloatingStars />
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Expert Team Member"
          description="Meet our talented team of professionals who bring expertise and innovation to every project."
          alignment="left"
          className="mb-16"
        />

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              delay={index * 0.2}
              onNavigate={() => router.push(`/team/${toSlug(member.name)}`)}
            />
          ))}
        </div>

        {/* View More Button -> Route to Team page */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/team" className="inline-block bg-[#913BFF] hover:bg-[#7C2BE0] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            View More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
