import CaseStudyContent from './CaseStudyContent';
import { getProjectBySlug, getPortfolioProjects } from '@/lib/firestore-admin';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  try {
    const projects = await getPortfolioProjects();
    return projects.map((project) => ({ slug: project.slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug(slug);
    if (!project) return {};
    return {
      title: project.title,
      description: project.problem || project.challenge || project.description,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {};
  }
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug(slug);
    if (!project) notFound();
    return <CaseStudyContent project={project} />;
  } catch (error) {
    console.error('Error fetching project:', error);
    notFound();
  }
}
