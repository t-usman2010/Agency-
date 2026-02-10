'use client';

import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi2';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function BlogPostContent({ post }) {
  return (
    <>
      <article className="pt-28 sm:pt-36 pb-16 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-900 transition-colors mb-8"
            >
              <HiArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 bg-brand-50 text-brand-600 text-xs font-semibold rounded-md">
                {post.category}
              </span>
              <span className="text-dark-500 text-xs">{post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-dark-500 mb-10 pb-8 border-b border-dark-100">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-xs">
                {post.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <span className="font-medium text-dark-700">{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
          </AnimatedSection>

          {/* Article Image Placeholder */}
          <AnimatedSection variant="scaleIn">
            <div className="aspect-[16/9] bg-gradient-to-br from-brand-50 via-brand-100 to-dark-50 rounded-2xl mb-10 flex items-center justify-center">
              <span className="text-brand-400 font-medium">Article Cover Image</span>
            </div>
          </AnimatedSection>

          {/* Article Content */}
          <AnimatedSection>
            <div className="prose prose-lg max-w-none prose-headings:text-dark-900 prose-headings:font-bold prose-p:text-dark-600 prose-p:leading-relaxed prose-strong:text-dark-800 prose-li:text-dark-600 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline">
              {post.content.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl font-bold text-dark-900 mt-10 mb-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-xl font-bold text-dark-900 mt-8 mb-3">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('- **')) {
                  const parts = trimmed.replace('- **', '').split(':**');
                  return (
                    <div key={i} className="flex items-start gap-3 my-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2.5 shrink-0" />
                      <p className="text-dark-600">
                        <strong className="text-dark-900">{parts[0]}:</strong>
                        {parts[1]}
                      </p>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-dark-600 leading-relaxed my-4">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Author Card */}
          <AnimatedSection>
            <div className="mt-12 p-6 sm:p-8 bg-dark-50 rounded-2xl border border-dark-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-lg">
                  {post.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-semibold text-dark-900">{post.author}</p>
                  <p className="text-dark-500 text-sm">TriForge Studio</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* CTA */}
      <section className="section-padding bg-dark-50 border-t border-dark-100">
        <div className="container-max text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-dark-900 mb-3">
              Want to work with us?
            </h3>
            <p className="text-dark-600 mb-6">
              Let&apos;s bring your project to life.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Start a Project
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
