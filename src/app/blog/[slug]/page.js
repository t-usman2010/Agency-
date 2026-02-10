import BlogPostContent from './BlogPostContent';
import { BLOG_POSTS_STATIC } from '@/lib/data';
import { notFound } from 'next/navigation';

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
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS_STATIC.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostContent post={post} />;
}
