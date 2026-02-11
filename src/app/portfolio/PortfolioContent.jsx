'use client';

import { useState, useEffect } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import { HiArrowRight } from 'react-icons/hi2';

export default function PortfolioContent() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/admin/projects');
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('API Error:', response.status, errorData);
          setError(errorData.error || `API returned ${response.status}`);
          setProjects([]);
          return;
        }
        const data = await response.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white dark:bg-dark-950">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="section-label">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-tight mb-6 max-w-3xl">
              Work that speaks{' '}
              <span className="gradient-text">for itself</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl leading-relaxed">
              From analytics dashboards to e-commerce platforms, here are some of the
              projects we&apos;re most proud of each with real, measurable impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-max">
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.12}>
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <div className="text-red-600 font-semibold mb-2">Error loading projects</div>
                <div className="text-dark-500 text-sm">{error}</div>
                <div className="text-dark-400 text-xs mt-2">Check browser console for details</div>
              </div>
            ) : (projects || []).length === 0 ? (
              <div className="col-span-full text-center py-12 text-dark-500 dark:text-dark-400">
                No projects available yet.
              </div>
            ) : (
              (projects || []).map((project) => (
                <StaggerItem key={project.id || project.slug}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">Have a project in mind?</h2>
            <p className="section-subtitle mx-auto mb-8">
              Let&apos;s discuss how we can bring your vision to life with the same level of
              quality and attention to detail.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="group">
              Start a Conversation
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
