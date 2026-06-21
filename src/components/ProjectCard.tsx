import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { withBase } from '../lib/theme';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const cover = project.images[0];

  return (
    <Link
      to={`/projects/${project.id}`}
      id={`project-${project.id}`}
      className="card-hover group block rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 dark:hover:border-brand-600 hover:shadow-lg dark:hover:shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
        {cover && !cover.isPlaceholder ? (
          <img
            src={withBase(cover.src)}
            alt={cover.caption ?? project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="text-slate-400 dark:text-slate-500 text-sm">
            {cover?.caption ?? '이미지 준비 중'}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between text-xs">
          <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-700">
            {project.company}
          </span>
          <span className="text-slate-500 dark:text-slate-400">{project.period}</span>
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-700 dark:group-hover:text-brand-300 transition">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{project.oneLine}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((s) => (
            <li
              key={s}
              className="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {s}
            </li>
          ))}
          {project.stack.length > 5 && (
            <li className="px-2 py-0.5 rounded-md text-xs text-slate-500 dark:text-slate-400">
              +{project.stack.length - 5}
            </li>
          )}
        </ul>
        <div className="mt-4 text-sm font-semibold text-brand-700 dark:text-brand-400 group-hover:translate-x-1 transition-transform">
          자세히 보기 →
        </div>
      </div>
    </Link>
  );
}
