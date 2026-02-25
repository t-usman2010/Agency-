import AboutContent from './AboutContent';

const SITE_URL = 'https://www.webentis.online';

export const metadata = {
  title: 'About',
  description:
    'Learn about Webentis — a boutique web agency of three specialists: two MERN stack developers and a UI/UX designer, building premium digital products.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About | Webentis',
    description: 'Learn about Webentis  a boutique web agency of three specialists: two MERN stack developers and a UI/UX designer, building premium digital products.',
    url: `${SITE_URL}/about`,
    siteName: 'Webentis',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Webentis',
    description: 'Learn about Webentis  a boutique web agency of three specialists: two MERN stack developers and a UI/UX designer, building premium digital products.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
