import BlogContent from './BlogContent';

const SITE_URL = 'https://www.webentis.online';

export const metadata = {
  title: 'Blog',
  description:
    'Insights and articles on web development, UI/UX design, branding, and building digital products. Practical advice from the Webentis team.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog | Webentis',
    description: 'Insights and articles on web development, UI/UX design, branding, and building digital products. Practical advice from the Webentis team.',
    url: `${SITE_URL}/blog`,
    siteName: 'Webentis',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Webentis',
    description: 'Insights and articles on web development, UI/UX design, branding, and building digital products. Practical advice from the Webentis team.',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
