'use client';

import { useState, useEffect } from 'react';
import { HiCheckCircle, HiXCircle, HiArrowRight, HiSparkles } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { FAQS } from '@/lib/data';

export default function PricingContent() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPricing() {
      try {
        const data = await fetch('/api/admin/pricing').then((r) => r.ok ? r.json() : []).catch(() => []);
        setPackages(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching pricing:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPricing();
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white dark:bg-dark-950">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label">Pricing</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-tight mb-6">
              Transparent pricing.
              <br />
              <span className="gradient-text">No surprises.</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed">
              Choose a package that fits your needs, or contact us for a custom quote.
              Every package includes our full attention and commitment to quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="container-max">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-6 sm:p-8 text-center text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm mb-3">
                <HiSparkles className="w-4 h-4" />
                Q1 2026 Offer
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                20% off any package booked before March 31, 2026
              </h3>
              <p className="text-dark-300 text-sm">Only 2 project slots remaining this quarter.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-max">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : (packages || []).length === 0 ? (
              <div className="col-span-full text-center py-12 text-dark-500 dark:text-dark-400">
                No pricing packages available yet.
              </div>
            ) : (
              (packages || []).map((pkg) => (
                <StaggerItem key={pkg.id || pkg.name}>
                  <div
                    className={`relative bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm dark:shadow-none p-6 sm:p-8 flex flex-col h-full ${
                      pkg.popular
                        ? 'border-brand-600 dark:border-brand-500 ring-2 ring-brand-600/20 dark:ring-brand-500/20'
                        : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-brand-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">{pkg.name}</h3>
                      <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">{pkg.description}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-dark-900 dark:text-white">{pkg.price}</span>
                        {pkg.period && <span className="text-dark-500 dark:text-dark-400 text-sm">{pkg.period}</span>}
                      </div>
                    </div>

                    <ul className="space-y-3 flex-1 mb-8">
                      {pkg.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <HiCheckCircle className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
                          <span className="text-sm text-dark-700 dark:text-dark-300">{typeof feature === 'string' ? feature : feature.text || feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button href="/contact" variant={pkg.popular ? 'primary' : 'outline'} size="md" className="w-full">
                      Get Started
                    </Button>
                  </div>
                </StaggerItem>
              ))
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-max max-w-3xl">
          <AnimatedSection>
            <SectionHeader
              label="FAQ"
              title="Frequently asked questions"
              subtitle="Answers to the questions we hear most often."
              align="center"
            />
          </AnimatedSection>
          <AnimatedSection>
            <Accordion items={FAQS} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-950">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Ready to get started?
            </h2>
            <p className="text-dark-400 text-lg max-w-xl mx-auto mb-8">
              Book a free discovery call and we&apos;ll create a custom proposal tailored to your project.
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
