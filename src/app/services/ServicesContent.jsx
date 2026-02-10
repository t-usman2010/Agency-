'use client';

import { useState, useEffect } from 'react';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export default function ServicesContent() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await fetch('/api/admin/services').then((r) => r.ok ? r.json() : []).catch(() => []);
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="section-label">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6 max-w-3xl">
              Everything you need to{' '}
              <span className="gradient-text">ship great products</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-600 max-w-2xl leading-relaxed">
              From initial concept to ongoing maintenance, we provide end-to-end digital 
              services that help businesses launch faster, grow smarter, and scale confidently.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-dark-50">
        <div className="container-max space-y-16 lg:space-y-24">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12 text-dark-500">
              No services available yet.
            </div>
          ) : (
            services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id || service.slug}
                  id={service.slug || service.id}
                  className="scroll-mt-24"
                >
                  <AnimatedSection>
                    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${isEven ? '' : 'lg:direction-rtl'}`}>
                      <div className={isEven ? '' : 'lg:order-2'}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-dark-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Button href="/contact" variant="primary" size="md" className="group">
                          Discuss This Service
                          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                      <div className={isEven ? '' : 'lg:order-1'}>
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-dark-100">
                          <h4 className="font-semibold text-dark-900 mb-4">What&apos;s Included</h4>
                          <ul className="space-y-3">
                            {service.features?.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <HiCheckCircle className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
                                <span className="text-dark-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              label="Tech Stack"
              title="Tools we trust"
              subtitle="We work with battle-tested technologies chosen for reliability, performance, and developer experience."
              align="center"
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" staggerDelay={0.05}>
            {[
              { name: 'React', desc: 'UI Library' },
              { name: 'Next.js', desc: 'Framework' },
              { name: 'Node.js', desc: 'Runtime' },
              { name: 'MongoDB', desc: 'Database' },
              { name: 'Firebase', desc: 'BaaS' },
              { name: 'Express', desc: 'Backend' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'TypeScript', desc: 'Language' },
              { name: 'Figma', desc: 'Design' },
              { name: 'Vercel', desc: 'Deployment' },
            ].map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="p-5 rounded-xl border border-dark-100 text-center hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-300">
                  <h4 className="font-semibold text-dark-900 text-sm">{tech.name}</h4>
                  <p className="text-dark-500 text-xs mt-1">{tech.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-950">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Not sure which service you need?
            </h2>
            <p className="text-dark-400 text-lg max-w-xl mx-auto mb-8">
              Book a free 30-minute discovery call and we&apos;ll help you figure out the best path forward.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="group">
              Book a Free Call
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
