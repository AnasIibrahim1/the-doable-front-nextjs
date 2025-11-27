'use client';

import { motion } from 'framer-motion';
import { Service, services } from '@/data/services';
import ServiceNavigationSidebar from './serviceNavigationSidebar';
import ServiceDescriptionSection from './serviceDescriptionSection';
import ServiceSpecializedSection from './serviceSpecializedSection';
import ServiceSkillsSection from './serviceSkillsSection';
import ServiceFeaturesSection from './serviceFeaturesSection';
import ServiceStatsSection from './serviceStatsSection';
import ServiceContactForm from './serviceContactForm';

interface ServiceDetailsContentProps {
  service: Omit<Service, 'icon'>;
}

export default function ServiceDetailsContent({ service }: ServiceDetailsContentProps) {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#050D36] via-[#0A1A4A] to-[#050D36]">
      <div className="max-w-7xl mx-auto max-[1280px]:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Service Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ServiceNavigationSidebar 
                services={services.map((s) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const { icon, ...serviceData } = s;
                  return serviceData;
                })}
                currentSlug={service.slug}
              />
              
              {/* Contact Form in Sidebar */}
              <div className="mt-8">
                <ServiceContactForm />
              </div>
            </motion.div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 space-y-16">
            {/* Main Description Section */}
            <ServiceDescriptionSection service={service} />

            {/* Specialized Section */}
            {service.specializedDescription && (
              <ServiceSpecializedSection service={service} />
            )}

            {/* Skills & Technologies Section */}
            {service.technologies && (
              <ServiceSkillsSection 
                {...(service.skills ? { skills: service.skills } : {})}
                technologies={service.technologies}
              />
            )}

            {/* Features Section */}
            <ServiceFeaturesSection service={service} />

            {/* Statistics Section */}
            {service.stats && (
              <ServiceStatsSection stats={service.stats} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

