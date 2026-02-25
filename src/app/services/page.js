import ServicesContent from './ServicesContent';

const SITE_URL = 'https://www.webentis.online';

export const metadata = {
  title: 'Services',
  description:
    'Explore Webentis\'s services: custom web applications, SaaS MVP development, UI/UX design, branding, performance optimization, SEO, and ongoing maintenance.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Services | Webentis',
    description: 'Explore Webentis\'s services: custom web applications, SaaS MVP development, UI/UX design, branding, performance optimization, SEO, and ongoing maintenance.',
    url: `${SITE_URL}/services`,
    siteName: 'Webentis',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Webentis',
    description: 'Explore Webentis\'s services: custom web applications, SaaS MVP development, UI/UX design, branding, performance optimization, SEO, and ongoing maintenance.',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
