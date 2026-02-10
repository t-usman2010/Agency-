'use client';

import Link from 'next/link';
import { HiArrowLeft, HiArrowRight, HiCheckCircle, HiStar } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function CaseStudyContent({ project }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-900 transition-colors mb-6"
            >
              <HiArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-3 block">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 leading-tight mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-dark-500">
              <span>Client: <strong className="text-dark-700">{project.client}</strong></span>
              <span>Duration: <strong className="text-dark-700">{project.duration}</strong></span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="container-max">
          <AnimatedSection variant="scaleIn">
            <div className="aspect-[16/9] bg-gradient-to-br from-brand-100 via-brand-50 to-dark-50 rounded-2xl flex items-center justify-center">
              <span className="text-brand-400 font-medium text-lg">{project.title} — Hero Visual</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding bg-dark-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <AnimatedSection>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-coral mb-3">
                The Challenge
              </h2>
              <p className="text-dark-700 text-lg leading-relaxed">{project.problem}</p>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-emerald mb-3">
                Our Solution
              </h2>
              <p className="text-dark-700 text-lg leading-relaxed">{project.solution}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection>
            <h2 className="section-title text-center mb-12">Measurable Results</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6" staggerDelay={0.1}>
            {project.results.map((result) => (
              <StaggerItem key={result.metric}>
                <div className="text-center p-8 rounded-2xl bg-dark-50 border border-dark-100">
                  <div className="text-3xl sm:text-4xl font-bold text-brand-600 mb-2">
                    {result.value}
                  </div>
                  <div className="font-semibold text-dark-900 mb-1">{result.metric}</div>
                  <div className="text-dark-500 text-sm">{result.description}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-dark-50">
        <div className="container-max">
          <AnimatedSection>
            <h2 className="section-title text-center mb-8">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-lg border border-dark-100 text-dark-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-padding bg-brand-600">
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
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">Want similar results?</h2>
            <p className="section-subtitle mx-auto mb-8">
              Let&apos;s discuss how we can apply the same strategic thinking and technical
              excellence to your project.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="group">
              Start Your Project
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
