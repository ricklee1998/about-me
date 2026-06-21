import { useState } from 'react';
import { companyOrder, projectsByCompany, type Company } from '../data/projects';
import ProjectCard from './ProjectCard';

const filters: (Company | 'ALL')[] = ['ALL', '페어리테일', '라이너스', '에피소든', '대학'];

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Company | 'ALL'>('ALL');

  const visible =
    filter === 'ALL'
      ? companyOrder.flatMap((c) => projectsByCompany(c))
      : projectsByCompany(filter);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <header className="mb-8">
        <p className="text-brand-700 dark:text-brand-400 font-semibold tracking-wide text-sm">
          PROJECTS
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          진행한 프로젝트
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          카드를 클릭하면 각 프로젝트의 상세 페이지로 이동합니다.
        </p>
      </header>

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 text-sm rounded-full border transition ${
              filter === f
                ? 'bg-brand-600 text-white border-brand-600 hover:bg-brand-700'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {f === 'ALL' ? '전체' : f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
