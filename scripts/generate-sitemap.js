import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase Admin
let adminDb = null;

try {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  initializeApp({
    credential: cert(serviceAccount),
  });
  adminDb = getFirestore();
  console.log('✓ Firebase Admin initialized');
} catch (error) {
  console.warn('⚠ Firebase Admin not initialized:', error.message);
}

// Serialize Firestore document
function serializeDoc(doc) {
  const data = doc.data();
  const serialized = { id: doc.id };
  for (const [key, value] of Object.entries(data)) {
    if (value && typeof value.toDate === 'function') {
      serialized[key] = value.toDate().toISOString();
    } else {
      serialized[key] = value;
    }
  }
  return serialized;
}

// Fetch blog posts
async function getBlogPosts() {
  if (!adminDb) return [];
  try {
    const snapshot = await adminDb.collection('posts').orderBy('publishedAt', 'desc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.warn('Could not fetch blog posts:', error.message);
    return [];
  }
}

// Fetch portfolio projects
async function getPortfolioProjects() {
  if (!adminDb) return [];
  try {
    const snapshot = await adminDb.collection('projects').orderBy('order', 'asc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.warn('Could not fetch portfolio projects:', error.message);
    try {
      const snapshot = await adminDb.collection('projects').get();
      return snapshot.docs.map(serializeDoc);
    } catch (err) {
      console.warn('Could not fetch projects without order:', err.message);
      return [];
    }
  }
}

// Main sitemap generation function
async function generateSitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webentis.online';
  
  console.log(`Generating sitemap for ${baseUrl}...`);

  // Fetch dynamic content
  const [blogPosts, portfolioProjects] = await Promise.all([
    getBlogPosts(),
    getPortfolioProjects(),
  ]);

  console.log(`✓ Found ${blogPosts.length} blog posts`);
  console.log(`✓ Found ${portfolioProjects.length} portfolio projects`);

  // Build URLs array
  const urls = [
    // Static pages
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'monthly', priority: 0.9 },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
    { url: '/pricing', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.7 },
    { url: '/contact', changefreq: 'yearly', priority: 0.6 },
  ];

  // Add blog posts
  blogPosts.forEach((post) => {
    urls.push({
      url: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: post.publishedAt || new Date().toISOString(),
    });
  });

  // Add portfolio projects
  portfolioProjects.forEach((project) => {
    urls.push({
      url: `/portfolio/${project.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: project.createdAt || new Date().toISOString(),
    });
  });

  // Generate sitemap using sitemap package
  const stream = new SitemapStream({ hostname: baseUrl });
  const xmlString = await streamToPromise(
    Readable.from(urls).pipe(stream)
  ).then((data) => data.toString());

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  // Write sitemap to public folder
  fs.writeFileSync(outputPath, xmlString);
  
  console.log(`✓ Sitemap generated successfully at public/sitemap.xml`);
  console.log(`✓ Total URLs: ${urls.length}`);
}

// Run the generator
generateSitemap()
  .then(() => {
    console.log('✓ Sitemap generation complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('✗ Error generating sitemap:', error);
    process.exit(1);
  });
