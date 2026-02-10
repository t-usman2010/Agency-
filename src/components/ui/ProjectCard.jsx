import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/portfolio/${project?.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-dark-100 card-hover">
        {/* Thumbnail placeholder */}
        <div className="aspect-[16/10] bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-brand-400 font-medium text-lg">{project?.title}</span>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <HiArrowUpRight className="w-5 h-5 text-dark-900" />
          </div>
        </div>
        <div className="p-6">
          <span className="text-xs font-medium tracking-wider uppercase text-brand-600 mb-2 block">
            {project?.category}
          </span>
          <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-brand-600 transition-colors">
            {project?.title}
          </h3>
          <p className="text-dark-600 text-sm line-clamp-2">{project?.problem}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {((project?.techStack || project?.technologies) || []).slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-dark-50 text-dark-600 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {((project?.techStack || project?.technologies) || []).length > 4 && (
              <span className="px-2.5 py-1 bg-dark-50 text-dark-500 text-xs rounded-md">
                +{((project?.techStack || project?.technologies) || []).length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
