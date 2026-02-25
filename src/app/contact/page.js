import ContactContent from './ContactContent';

const SITE_URL = 'https://www.webentis.online';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Webentis. Tell us about your project and we\'ll respond within 24 hours with a free consultation.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact | Webentis',
    description: 'Get in touch with Webentis. Tell us about your project and we\'ll respond within 24 hours with a free consultation.',
    url: `${SITE_URL}/contact`,
    siteName: 'Webentis',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Webentis',
    description: 'Get in touch with Webentis. Tell us about your project and we\'ll respond within 24 hours with a free consultation.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
