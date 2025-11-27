import { notFound } from 'next/navigation';
import { services, Service } from '@/data/services';
import ServiceDetailsHero from '@/components/services/serviceDetails/serviceDetailsHero';
import ServiceDetailsContent from '@/components/services/serviceDetails/serviceDetailsContent';
import ServicesCTA from '@/components/services/servicesCTA';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - TheDoable',
    };
  }

  return {
    title: `${service.title} - Service Details | TheDoable`,
    description: service.description,
  };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Extract serializable data without the icon component
  const serviceData: Omit<Service, 'icon'> = {
    title: service.title,
    slug: service.slug,
    description: service.description,
    detailedDescription: service.detailedDescription,
    features: service.features,
    featured: service.featured,
    ...(service.skills ? { skills: service.skills } : {}),
    ...(service.technologies ? { technologies: service.technologies } : {}),
    ...(service.stats ? { stats: service.stats } : {}),
    ...(service.specializedDescription ? { specializedDescription: service.specializedDescription } : {}),
    ...(service.mainImage ? { mainImage: service.mainImage } : {}),
    ...(service.subImages ? { subImages: service.subImages } : {}),
  };

  return (
    <>
      <ServiceDetailsHero service={serviceData} />
      <ServiceDetailsContent service={serviceData} />
      <ServicesCTA />
    </>
  );
}

