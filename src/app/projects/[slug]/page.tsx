import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import ProjectDetailsHero from '@/components/projects/projectDetails/projectDetailsHero';
import ProjectDetailsContent from '@/components/projects/projectDetails/projectDetailsContent';
import ServicesCTA from '@/components/services/servicesCTA';

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found - TheDoable',
    };
  }

  return {
    title: `${project.title} - Project Details | TheDoable`,
    description: project.detailedDescription || project.description,
  };
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetailsHero project={project} />
      <ProjectDetailsContent project={project} />
      <ServicesCTA />
    </>
  );
}

