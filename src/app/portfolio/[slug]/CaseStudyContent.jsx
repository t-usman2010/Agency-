'use client';

import Link from 'next/link';
import { HiArrowLeft, HiArrowRight, HiCheckCircle, HiStar, HiCodeBracket, HiLightBulb, HiRocketLaunch } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function CaseStudyContent({ project }) {
  const technologies = project?.techStack || project?.technologies || [];
  const results = project?.results || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-0 bg-white dark:bg-dark-950 overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-8 group"
            >
              <HiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>

            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white leading-tight mb-6">
                {project.title}
              </h1>
              {project.description && (
                <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-3xl leading-relaxed mb-8">
                  {project.description}
                </p>
              )}
              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {technologies.map((tech, idx) => (
                    <span
                      key={`hero-tech-${idx}`}
                      className="px-3 py-1.5 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Hero Image */}
        {project?.image && (
          <div className="container-max px-4 sm:px-6 lg:px-8 mt-4 pb-16">
            <AnimatedSection variant="scaleIn" delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-900/10 dark:shadow-dark-950/40 border border-dark-100 dark:border-dark-800">
                <div className="aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        )}
      </section>

      {/* Overview Cards */}
      {(project?.challenge || project?.solution) && (
        <section className="section-padding bg-dark-50 dark:bg-dark-900">
          <div className="container-max">
            <AnimatedSection>
              <h2 className="section-title text-center mb-4">Project Overview</h2>
              <p className="section-subtitle text-center mx-auto mb-12">Understanding the problem and crafting the right approach</p>
            </AnimatedSection>
            <div className={`grid gap-8 ${project?.challenge && project?.solution ? 'lg:grid-cols-2' : 'max-w-2xl mx-auto'}`}>
              {project?.challenge && (
                <AnimatedSection delay={0.1}>
                  <div className="h-full bg-white dark:bg-dark-800 rounded-2xl p-8 border border-dark-100 dark:border-dark-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
                        <HiLightBulb className="w-5 h-5 text-accent-coral" />
                      </div>
                      <h3 className="text-lg font-bold text-dark-900 dark:text-white">The Challenge</h3>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{project.challenge}</p>
                  </div>
                </AnimatedSection>
              )}
              {project?.solution && (
                <AnimatedSection variant="fadeRight" delay={0.2}>
                  <div className="h-full bg-white dark:bg-dark-800 rounded-2xl p-8 border border-dark-100 dark:border-dark-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
                        <HiRocketLaunch className="w-5 h-5 text-accent-emerald" />
                      </div>
                      <h3 className="text-lg font-bold text-dark-900 dark:text-white">Our Solution</h3>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{project.solution}</p>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Key Results */}
      {results.length > 0 && (
        <section className="section-padding bg-white dark:bg-dark-950">
          <div className="container-max">
            <AnimatedSection>
              <h2 className="section-title text-center mb-4">Key Results</h2>
              <p className="section-subtitle text-center mx-auto mb-12">The impact our work delivered</p>
            </AnimatedSection>
            <StaggerContainer
              className={`grid gap-5 ${
                results.length === 1
                  ? 'max-w-lg mx-auto'
                  : results.length === 2
                  ? 'sm:grid-cols-2 max-w-3xl mx-auto'
                  : 'sm:grid-cols-2 lg:grid-cols-3'
              }`}
              staggerDelay={0.08}
            >
              {results.map((result, idx) => (
                <StaggerItem key={`result-${idx}`}>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-100 dark:border-dark-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-accent-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HiCheckCircle className="w-5 h-5 text-accent-emerald" />
                    </div>
                    <p className="text-dark-700 dark:text-dark-300 leading-relaxed font-medium">
                      {typeof result === 'string' ? result : result.value || result.metric || result.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {technologies.length > 0 && (
        <section className="section-padding bg-dark-50 dark:bg-dark-900">
          <div className="container-max">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/30 flex items-center justify-center">
                  <HiCodeBracket className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="section-title mb-0">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, idx) => (
                  <span
                    key={`${tech}-${idx}`}
                    className="px-5 py-2.5 bg-white dark:bg-dark-800 rounded-xl border border-dark-100 dark:border-dark-700 text-dark-700 dark:text-dark-300 text-sm font-medium shadow-sm hover:shadow-md hover:border-brand-200 dark:hover:border-brand-800 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project?.testimonial && (
        <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-700">
          <div className="container-max max-w-3xl text-center">
            <AnimatedSection>
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <HiStar key={i} className="w-6 h-6 text-accent-gold" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-6">
                &ldquo;{project.testimonial.text}&rdquo;
              </blockquote>
              <div className="text-brand-100">
                <p className="font-semibold text-white">{project.testimonial.author}</p>
                <p className="text-sm">{project.testimonial.role}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-max">
          <AnimatedSection>
            <div className="relative bg-gradient-to-br from-dark-900 to-dark-800 dark:from-dark-800 dark:to-dark-900 rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-600/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Want similar results?</h2>
                <p className="text-dark-300 max-w-xl mx-auto mb-8 text-lg">
                  Let&apos;s discuss how we can apply the same strategic thinking and technical
                  excellence to your project.
                </p>
                <Button href="/contact" variant="primary" size="lg" className="group">
                  Start Your Project
                  <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
