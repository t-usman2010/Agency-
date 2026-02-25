export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/favicon.ico'],
      },
    ],
    sitemap: 'https://www.webentis.online/sitemap.xml',
  };
}
