'use client';

import AboutHeroSection from '@/components/about/aboutHeroSection';
import AboutContentSection from '@/components/about/aboutContentSection';
import AboutFeaturesSection from '@/components/about/aboutFeaturesSection';
import AboutStatsSection from '@/components/about/aboutStatsSection';
import TeamMembersSection from '@/components/about/teamMembersSection';
import VideoSection from '@/components/about/videoSection';
import PricingSection from '@/components/about/pricingSection';

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutContentSection />
      <AboutFeaturesSection />
      <AboutStatsSection />
      <TeamMembersSection />
      <VideoSection />
      <PricingSection />
    </>
  );
}
