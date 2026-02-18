import CaseStudyContent from './CaseStudyContent';
import { getProjectBySlug, getPortfolioProjects } from '@/lib/firestore-admin';
import { notFound } from 'next/navigation';

const SITE_URL = 'https://webentis.online';

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
      alternates: {
        canonical: `${SITE_URL}/portfolio/${slug}`,
      },
      openGraph: {
        title: `${project.title} | Portfolio | Webentis`,
        description: project.problem || project.challenge || project.description,
        url: `${SITE_URL}/portfolio/${slug}`,
        siteName: 'Webentis',
        type: 'article',
        locale: 'en_US',
        images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${project.title} | Portfolio | Webentis`,
        description: project.problem || project.challenge || project.description,
        images: project.image ? [project.image] : [],
      },
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
