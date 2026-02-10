'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight, HiArrowUpRight, HiSparkles } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';
import ProjectCard from '@/components/ui/ProjectCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Button from '@/components/ui/Button';
import { AGENCY_NAME } from '@/lib/data';

const STATS = [
  { value: '40+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3', label: 'Expert Specialists' },
  { value: '<2s', label: 'Avg. Load Time' },
];

export default function HomePage() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [servicesData, projectsData, testimonialsData] = await Promise.all([
          fetch('/api/admin/services').then((r) => r.ok ? r.json() : []).catch(() => []),
          fetch('/api/admin/projects').then((r) => r.ok ? r.json() : []).catch(() => []),
          fetch('/api/admin/testimonials').then((r) => r.ok ? r.json() : []).catch(() => []),
        ]);
        setServices(Array.isArray(servicesData) ? servicesData : []);
        setProjects(Array.isArray(projectsData) ? projectsData : []);
        setTestimonials(Array.isArray(testimonialsData) ? testimonialsData : []);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[128px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-400/10 rounded-full blur-[128px] animate-float animate-delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[128px]" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm mb-8"
            >
              <HiSparkles className="w-4 h-4" />
              <span>Limited Q1 availability — 2 spots remaining</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              We build digital
              <br />
              products that{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-300">
                drive growth
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-dark-400 max-w-2xl mb-10 leading-relaxed"
            >
              {AGENCY_NAME} is a boutique agency of MERN stack developers and a designer
              crafting high-performance web applications, SaaS platforms, and brand
              experiences for ambitious companies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" variant="primary" size="lg" className="group">
                Start Your Project
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/portfolio" variant="ghost" size="lg" className="text-dark-300 hover:text-white hover:bg-white/10">
                View Our Work
                <HiArrowUpRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-12 border-t border-dark-800"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-dark-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              label="Why TriForge"
              title="Built different. Built to last."
              subtitle="We combine deep technical expertise with design thinking to deliver products that don't just look good — they perform."
            />
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                title: 'Product-Minded Engineering',
                description:
                  'We don\'t just write code — we think about user journeys, conversion funnels, and business outcomes at every step.',
                icon: '🧠',
              },
              {
                title: 'Lean, Senior Team',
                description:
                  'No junior handoffs. Every line of code is written and reviewed by experienced engineers and a seasoned designer.',
                icon: '⚡',
              },
              {
                title: 'Transparent Process',
                description:
                  'Weekly demos, shared Figma files, and real-time Slack communication. You always know exactly where your project stands.',
                icon: '🔍',
              },
              {
                title: 'Modern Tech Stack',
                description:
                  'React, Next.js, Node.js, Firebase, and Tailwind CSS. We use best-in-class tools that ensure long-term maintainability.',
                icon: '🛠️',
              },
              {
                title: 'Design + Development',
                description:
                  'In-house design and development means tighter collaboration, faster iteration, and pixel-perfect implementation.',
                icon: '🎨',
              },
              {
                title: 'Post-Launch Support',
                description:
                  'We don\'t disappear after launch. Every project includes dedicated support, monitoring, and ongoing optimization.',
                icon: '🚀',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6 sm:p-8 rounded-2xl border border-dark-100 hover:border-brand-200 transition-colors duration-300 h-full">
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <h3 className="text-lg font-bold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── FEATURED SERVICES ────────────────────────────────── */}
      <section className="section-padding bg-dark-50">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              label="Our Services"
              title="End-to-end digital solutions"
              subtitle="From concept to deployment and beyond, we cover every aspect of building exceptional web products."
            />
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : services.length === 0 ? (
              <div className="col-span-full text-center py-12 text-dark-500">
                No services available yet.
              </div>
            ) : (
              services.slice(0, 6).map((service, i) => (
                <StaggerItem key={service.id || i}>
                  <ServiceCard service={service} index={i} />
                </StaggerItem>
              ))
            )}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12">
            <Button href="/services" variant="outline" size="md" className="group">
              Explore All Services
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── RECENT PROJECTS ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16">
              <SectionHeader
                label="Our Work"
                title="Recent projects"
                subtitle="Real solutions delivering measurable results for ambitious companies."
                className="mb-0"
              />
              <Button href="/portfolio" variant="ghost" size="sm" className="mt-4 sm:mt-0 shrink-0 group">
                View All
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : projects.length === 0 ? (
              <div className="col-span-full text-center py-12 text-dark-500">
                No projects available yet.
              </div>
            ) : (
              projects.slice(0, 4).map((project) => (
                <StaggerItem key={project.id || project.slug}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── LIMITED OFFER ────────────────────────────────────── */}
      <section className="section-padding bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/50 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/50 rounded-full blur-[128px]" />
        </div>
        <div className="container-max relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              <HiSparkles className="w-4 h-4" />
              Limited Time Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              20% off your first project this quarter
            </h2>
            <p className="text-brand-100 text-lg max-w-xl mx-auto mb-8">
              Book a discovery call before March 31, 2026 and receive 20% off any package.
              Only 2 spots remaining for Q1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="white" size="lg" className="group">
                Claim Your Spot
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/pricing" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                See Pricing
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="section-padding bg-dark-50">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              label="Testimonials"
              title="What our clients say"
              subtitle="Don't take our word for it. Here's what the people we've worked with have to say."
              align="center"
            />
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : testimonials.length === 0 ? (
              <div className="col-span-full text-center py-12 text-dark-500">
                No testimonials available yet.
              </div>
            ) : (
              testimonials.slice(0, 4).map((t, i) => (
                <StaggerItem key={t.id || i}>
                  <TestimonialCard testimonial={t} />
                </StaggerItem>
              ))
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── PROCESS OVERVIEW ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              label="How We Work"
              title="Simple process. Exceptional results."
              subtitle="We've refined our process over hundreds of projects to maximize quality and minimize friction."
              align="center"
            />
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn your business, goals, and users through a deep discovery call and research phase.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Wireframes, visual design, and interactive prototypes — all reviewed and approved before a line of code is written.',
              },
              {
                step: '03',
                title: 'Develop',
                description: 'Agile sprints with weekly demos. You see progress in real time and provide feedback continuously.',
              },
              {
                step: '04',
                title: 'Deploy & Support',
                description: 'Rigorous QA, performance optimization, and launch day support, followed by dedicated post-launch maintenance.',
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── TECH STACK BAR ───────────────────────────────────── */}
      <section className="py-12 bg-dark-950 overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Figma', 'Vercel', 'TypeScript', 'PostgreSQL'].map(
              (tech) => (
                <span key={tech} className="text-dark-500 text-sm font-medium tracking-wide hover:text-dark-300 transition-colors cursor-default">
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
