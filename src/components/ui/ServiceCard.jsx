import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import {
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlineRocketLaunch,
  HiOutlinePaintBrush,
  HiOutlineMagnifyingGlass,
  HiOutlineWrenchScrewdriver,
  HiOutlineSquare3Stack3D,
} from 'react-icons/hi2';

// Icon mapping for services from Firestore
const ICON_MAP = {
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlineRocketLaunch,
  HiOutlinePaintBrush,
  HiOutlineMagnifyingGlass,
  HiOutlineWrenchScrewdriver,
  HiOutlineSquare3Stack3D,
};

export default function ServiceCard({ service, index }) {
  // Handle icon - can be a component (from data.js) or a string name (from Firestore)
  const Icon = typeof service?.icon === 'string' 
    ? (ICON_MAP[service.icon] || HiOutlineSquare3Stack3D)
    : (service?.icon || HiOutlineSquare3Stack3D);

  return (
    <div className="group bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm dark:shadow-none transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 dark:hover:shadow-dark-950/50 dark:hover:border-dark-700 p-6 sm:p-8 flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/30 flex items-center justify-center mb-5 group-hover:bg-brand-600 dark:group-hover:bg-brand-600 transition-colors duration-200">
        <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors duration-200" />
      </div>
      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{service?.title}</h3>
      <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed flex-1 mb-5">{service?.short}</p>
      <Link
        href={`/services#${service?.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors group/link"
      >
        Learn more
        <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
