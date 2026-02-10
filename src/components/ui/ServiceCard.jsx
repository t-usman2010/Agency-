import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-dark-100 card-hover flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-600 transition-colors duration-300">
        <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-dark-900 mb-3">{service.title}</h3>
      <p className="text-dark-600 text-sm leading-relaxed flex-1 mb-5">{service.short}</p>
      <Link
        href={`/services#${service.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors group/link"
      >
        Learn more
        <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
