'use client';

import { useState, useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { AGENCY_NAME } from '@/lib/data';

export default function AboutContent() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const data = await fetch('/api/admin/team').then((r) => r.ok ? r.json() : []).catch(() => []);
        setTeam(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching team:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="section-label">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6 max-w-3xl">
              Three specialists.
              <br />
              <span className="gradient-text">Unlimited possibilities.</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-600 max-w-2xl leading-relaxed">
              {AGENCY_NAME} is a tight-knit studio of two MERN-stack developers and one
              multidisciplinary designer. We keep our team lean by design — so every
              project gets the full attention of senior-level talent from day one.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-dark-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <SectionHeader
                label="Our Mission"
                title="We build software that makes a measurable difference"
                className="mb-0"
              />
              <p className="text-dark-600 leading-relaxed mt-6">
                Too many agencies prioritize volume over quality. We founded {AGENCY_NAME}{' '}
                because we believe the best digital products come from small, focused teams
                who deeply understand both the technology and the business problem.
              </p>
              <p className="text-dark-600 leading-relaxed mt-4">
                Every project we take on receives the same level of strategic thinking,
                design craft, and engineering rigor — whether it&apos;s a five-page website or
                a complex SaaS platform. We measure our success by yours.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight">
              <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 sm:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Values</h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Craftsmanship',
                      desc: 'We treat every line of code and every pixel as an opportunity to deliver excellence.',
                    },
                    {
                      title: 'Transparency',
                      desc: 'No black boxes. You see our progress, our process, and our thinking in real time.',
                    },
                    {
                      title: 'Partnership',
                      desc: 'We succeed when you succeed. We think and act like co-founders, not contractors.',
                    },
                    {
                      title: 'Simplicity',
                      desc: 'The best solution is often the simplest. We avoid over-engineering and unnecessary complexity.',
                    },
                  ].map((value) => (
                    <li key={value.title} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-300 mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold">{value.title}:</span>{' '}
                        <span className="text-brand-100">{value.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              label="Our Workflow"
              title="How we bring ideas to life"
              subtitle="A structured yet flexible process refined over years and hundreds of successful projects."
              align="center"
            />
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              {
                phase: 'Phase 1',
                title: 'Discovery & Strategy',
                details: [
                  'Stakeholder interviews',
                  'Competitive analysis',
                  'User persona development',
                  'Technical requirements',
                  'Project scope & timeline',
                ],
              },
              {
                phase: 'Phase 2',
                title: 'Design & Prototype',
                details: [
                  'Information architecture',
                  'Wireframe creation',
                  'Visual design system',
                  'Interactive prototypes',
                  'Client review & iteration',
                ],
              },
              {
                phase: 'Phase 3',
                title: 'Development',
                details: [
                  'Component architecture',
                  'Frontend implementation',
                  'Backend & API development',
                  'Weekly sprint demos',
                  'Continuous integration',
                ],
              },
              {
                phase: 'Phase 4',
                title: 'Launch & Growth',
                details: [
                  'QA & cross-browser testing',
                  'Performance optimization',
                  'Deployment & DNS setup',
                  'Analytics configuration',
                  'Post-launch monitoring',
                ],
              },
            ].map((phase) => (
              <StaggerItem key={phase.phase}>
                <div className="p-6 rounded-2xl border border-dark-100 h-full hover:border-brand-200 transition-colors">
                  <span className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-2 block">
                    {phase.phase}
                  </span>
                  <h3 className="text-lg font-bold text-dark-900 mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.details.map((detail) => (
                      <li key={detail} className="text-dark-600 text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-dark-300 mt-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-50">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              label="The Team"
              title="Meet the people behind the code"
              subtitle="A carefully assembled team of specialists who bring complementary skills to every project."
              align="center"
            />
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : team.length === 0 ? (
              <div className="col-span-full text-center py-12 text-dark-500">
                No team members available yet.
              </div>
            ) : (
              team.map((member) => (
                <StaggerItem key={member.id || member.name}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-dark-100 card-hover">
                    {/* Avatar Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 via-brand-50 to-dark-50 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-brand-600 flex items-center justify-center text-white text-3xl font-bold">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-dark-900">{member.name}</h3>
                      <p className="text-brand-600 text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-dark-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-dark-50 text-dark-600 text-xs rounded-md font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">Want to work with us?</h2>
            <p className="section-subtitle mx-auto mb-8">
              We&apos;re always looking for exciting projects. Let&apos;s build something great together.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="group">
              Get in Touch
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
