import { getPortfolioProjects } from '@/lib/firestore-admin';
import { BLOG_POSTS_STATIC } from '@/lib/data';

const SITE_URL = 'https://www.webentis.online';

export default async function sitemap() {
  const currentDate = new Date().toISOString();

  // Static pages
  const routes = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  // Get dynamic portfolio projects
  let portfolioProjects = [];
  try {
    portfolioProjects = await getPortfolioProjects();
  } catch (error) {
    console.error('Error fetching portfolio projects for sitemap:', error);
  }

  const projectRoutes = portfolioProjects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: project.updatedAt?.toDate?.()?.toISOString() || currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Get blog posts
  const blogRoutes = BLOG_POSTS_STATIC.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
