'use client';

import { HiStar } from 'react-icons/hi2';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm dark:shadow-none transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 dark:hover:shadow-dark-950/50 dark:hover:border-dark-700 p-6 sm:p-8 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial?.rating || 5 }).map((_, i) => (
          <HiStar key={i} className="w-4 h-4 text-accent-gold" />
        ))}
      </div>
      <blockquote className="text-dark-700 dark:text-dark-300 text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial?.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-dark-100 dark:border-dark-800">
        <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-950/40 flex items-center justify-center text-brand-700 dark:text-brand-400 font-semibold text-sm">
          {(testimonial?.author || '')
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="font-semibold text-dark-900 dark:text-white text-sm">{testimonial?.author}</p>
          <p className="text-dark-500 dark:text-dark-400 text-xs">{testimonial?.role}</p>
        </div>
      </div>
    </div>
  );
}
