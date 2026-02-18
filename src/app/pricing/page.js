import PricingContent from './PricingContent';

const SITE_URL = 'https://webentis.online';

export const metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing packages for web development, SaaS MVP, and design services. Compare features, timelines, and find the right plan for your business.',
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: 'Pricing | Webentis',
    description: 'Transparent pricing packages for web development, SaaS MVP, and design services. Compare features, timelines, and find the right plan for your business.',
    url: `${SITE_URL}/pricing`,
    siteName: 'Webentis',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Webentis',
    description: 'Transparent pricing packages for web development, SaaS MVP, and design services. Compare features, timelines, and find the right plan for your business.',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
