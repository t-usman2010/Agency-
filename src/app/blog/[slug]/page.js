import BlogPostContent from './BlogPostContent';
import { BLOG_POSTS_STATIC } from '@/lib/data';
import { notFound } from 'next/navigation';

const SITE_URL = 'https://webentis.online';

export async function generateStaticParams() {
  return BLOG_POSTS_STATIC.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS_STATIC.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Blog | Webentis`,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: 'Webentis',
      type: 'article',
      locale: 'en_US',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Blog | Webentis`,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS_STATIC.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostContent post={post} />;
}
