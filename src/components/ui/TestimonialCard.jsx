'use client';

import { HiStar } from 'react-icons/hi2';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-dark-100 card-hover flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <HiStar key={i} className="w-5 h-5 text-accent-gold" />
        ))}
      </div>
      <blockquote className="text-dark-700 leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
        <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">
          {testimonial.author
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="font-semibold text-dark-900 text-sm">{testimonial.author}</p>
          <p className="text-dark-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
