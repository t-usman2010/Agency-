import CaseStudyContent from './CaseStudyContent';
import { PORTFOLIO } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return PORTFOLIO.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.problem,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudyContent project={project} />;
}
