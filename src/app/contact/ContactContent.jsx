'use client';

import { useState } from 'react';
import { HiEnvelope, HiPhone, HiMapPin, HiCheckCircle, HiArrowRight } from 'react-icons/hi2';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { submitContactForm } from '@/lib/firestore';
import { AGENCY_EMAIL, AGENCY_PHONE, AGENCY_ADDRESS } from '@/lib/data';

const BUDGETS = [
  'Under $3,000',
  '$3,000 – $8,000',
  '$8,000 – $18,000',
  '$18,000+',
  'Not sure yet',
];

const PROJECT_TYPES = [
  'Website / Landing Page',
  'Web Application',
  'SaaS MVP',
  'E-Commerce',
  'UI/UX Design',
  'Branding',
  'Other',
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMsg(
        'There was an issue submitting the form. Please email us directly or try again later.'
      );
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white dark:bg-dark-950">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="section-label">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-tight mb-6 max-w-3xl">
              Let&apos;s build something{' '}
              <span className="gradient-text">remarkable</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours
              with a free initial consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Get in touch</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <HiEnvelope className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-dark-500 dark:text-dark-400 text-xs mb-0.5">Email</p>
                          <a
                            href={`mailto:${AGENCY_EMAIL}`}
                            className="text-dark-900 dark:text-white font-medium text-sm hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                          >
                            {AGENCY_EMAIL}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiPhone className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-dark-500 dark:text-dark-400 text-xs mb-0.5">Phone</p>
                          <a
                            href={`tel:${AGENCY_PHONE.replace(/\s/g, '')}`}
                            className="text-dark-900 dark:text-white font-medium text-sm hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                          >
                            {AGENCY_PHONE}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiMapPin className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-dark-500 dark:text-dark-400 text-xs mb-0.5">Office</p>
                          <p className="text-dark-900 dark:text-white font-medium text-sm">{AGENCY_ADDRESS}</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-dark-200 dark:border-dark-700">
                    <h3 className="font-semibold text-dark-900 dark:text-white mb-2">Response time</h3>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">
                      We respond to all inquiries within 24 hours during business days. For
                      urgent requests, call us directly.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-dark-200 dark:border-dark-700">
                    <h3 className="font-semibold text-dark-900 dark:text-white mb-2">What happens next?</h3>
                    <ol className="space-y-2 text-dark-500 dark:text-dark-400 text-sm">
                      <li className="flex gap-2">
                        <span className="font-semibold text-brand-600 shrink-0">1.</span>
                        We review your project details
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-brand-600 shrink-0">2.</span>
                        Schedule a free 30-min discovery call
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-brand-600 shrink-0">3.</span>
                        Deliver a custom proposal & timeline
                      </li>
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection variant="fadeRight">
                {status === 'success' ? (
                  <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm dark:shadow-none p-8 sm:p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent-emerald/10 flex items-center justify-center mx-auto mb-6">
                      <HiCheckCircle className="w-8 h-8 text-accent-emerald" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
                      Message sent successfully!
                    </h3>
                    <p className="text-dark-500 dark:text-dark-400 mb-6">
                      Thank you for reaching out. We&apos;ll review your project details and
                      get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-brand-600 dark:text-brand-400 font-medium text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm dark:shadow-none p-6 sm:p-8 space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-900 dark:text-dark-100 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input-base"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-900 dark:text-dark-100 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input-base"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-dark-900 dark:text-dark-100 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-base"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-dark-900 dark:text-dark-100 mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="input-base"
                        >
                          <option value="">Select a type</option>
                          {PROJECT_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-dark-900 dark:text-dark-100 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="input-base"
                        >
                          <option value="">Select a range</option>
                          {BUDGETS.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-dark-900 dark:text-dark-100 mb-2">
                        Desired Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="input-base"
                        placeholder="e.g., 6 weeks, Q2 2026, ASAP"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-900 dark:text-dark-100 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-base resize-y"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full sm:w-auto group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
