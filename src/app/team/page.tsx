import TeamHeroSection from '../../components/team/teamHeroSection';
import TeamMembersSection from '../../components/team/teamMembersSection';
import dynamic from 'next/dynamic';

const TeamCTA = dynamic(() => import('@/components/team/teamCTA'), {
  loading: () => <div className="h-64 animate-pulse bg-[#050D36]/50" />
});

export default function TeamPage() {
  return (
    <>
      <TeamHeroSection />
      <TeamMembersSection />
      <TeamCTA />
    </>
  );
}

