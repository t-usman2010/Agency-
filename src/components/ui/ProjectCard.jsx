import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function ProjectCard({ project }) {
  const technologies = project?.techStack || project?.technologies || [];

  return (
    <Link href={`/portfolio/${project?.slug}`} className="group block">
      <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm dark:shadow-none transition-all duration-200 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-dark-950/50 dark:hover:border-dark-700 overflow-hidden">
        {/* Thumbnail */}
        <div className="aspect-[16/10] relative overflow-hidden bg-dark-100 dark:bg-dark-800">
          {project?.image ? (
            <img
              src={project.image}
              alt={project?.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-brand-400/10 to-dark-200/50 dark:from-brand-600/20 dark:via-brand-500/10 dark:to-dark-800 flex items-center justify-center">
              <span className="text-brand-400 dark:text-brand-500 font-medium text-lg">{project?.title}</span>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/0 to-dark-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
            <HiArrowUpRight className="w-5 h-5 text-dark-900 dark:text-dark-100" />
          </div>
        </div>
        <div className="p-6">
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400 mb-2 block">
            {project?.category}
          </span>
          <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {project?.title}
          </h3>
          <p className="text-dark-500 dark:text-dark-400 text-sm line-clamp-2">{project?.description}</p>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={`${tech}-${idx}`}
                  className="px-2.5 py-1 bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="px-2.5 py-1 bg-dark-50 dark:bg-dark-800 text-dark-500 dark:text-dark-400 text-xs rounded-lg">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
