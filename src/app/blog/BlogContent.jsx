'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { BLOG_POSTS_STATIC } from '@/lib/data';

export default function BlogContent() {
  const posts = BLOG_POSTS_STATIC;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white dark:bg-dark-950">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="section-label">Blog & Insights</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-tight mb-6 max-w-3xl">
              Thoughts on building{' '}
              <span className="gradient-text">better products</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl leading-relaxed">
              Practical insights on development, design, and strategy from the team at NestWeb.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="container-max">
          <AnimatedSection>
            <Link href={`/blog/${posts[0].slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 bg-dark-50 dark:bg-dark-900 rounded-2xl overflow-hidden border border-dark-100 dark:border-dark-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 dark:hover:shadow-dark-950/50 dark:hover:border-dark-700">
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-brand-100 via-brand-50 to-dark-50 dark:from-brand-950/30 dark:via-dark-800 dark:to-dark-900 flex items-center justify-center min-h-[250px]">
                  <span className="text-brand-400 dark:text-brand-500 font-medium">Featured Article</span>
                </div>
                <div className="p-6 sm:p-8 lg:py-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-brand-50 text-brand-600 text-xs font-semibold rounded-md">
                      {posts[0].category}
                    </span>
                    <span className="text-dark-500 text-xs">{posts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-dark-500 dark:text-dark-400 leading-relaxed mb-4">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400">
                    <span className="font-medium text-dark-700 dark:text-dark-300">{posts[0].author}</span>
                    <span>·</span>
                    <span>{posts[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-max">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {(posts || []).slice(1).map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm dark:shadow-none transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 dark:hover:shadow-dark-950/50 dark:hover:border-dark-700 overflow-hidden flex flex-col h-full">
                    <div className="aspect-[16/10] bg-gradient-to-br from-brand-50 via-brand-100 to-dark-50 dark:from-brand-950/30 dark:via-dark-800 dark:to-dark-900 flex items-center justify-center">
                      <span className="text-brand-400 dark:text-brand-500 text-sm font-medium">{post.category}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-0.5 bg-brand-50 text-brand-600 text-xs font-semibold rounded-md">
                          {post.category}
                        </span>
                        <span className="text-dark-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-dark-500 dark:text-dark-400 text-sm line-clamp-2 flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-dark-500 dark:text-dark-400">
                          <span className="font-medium text-dark-700 dark:text-dark-300">{post.author}</span>
                          <span className="mx-1">·</span>
                          <span>{post.date}</span>
                        </div>
                        <HiArrowRight className="w-4 h-4 text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
