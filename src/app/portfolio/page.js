import PortfolioContent from './PortfolioContent';

const SITE_URL = 'https://webentis.online';

export const metadata = {
  title: 'Portfolio',
  description:
    'Explore our portfolio of custom web applications, SaaS platforms, and e-commerce solutions. Real case studies with measurable results.',
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: 'Portfolio | Webentis',
    description: 'Explore our portfolio of custom web applications, SaaS platforms, and e-commerce solutions. Real case studies with measurable results.',
    url: `${SITE_URL}/portfolio`,
    siteName: 'Webentis',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Webentis',
    description: 'Explore our portfolio of custom web applications, SaaS platforms, and e-commerce solutions. Real case studies with measurable results.',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
