import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const recent = projects.flatMap((project) =>
  (project.recentWork ?? [])
    .filter((work) => work.featured)
    .map((work) => ({ ...work, projectId: project.id, projectTitle: project.title })),
);

export default function RecentWork() {
  return (
    <section
      id="recent-work"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <header className="mb-8">
        <p className="text-brand-700 dark:text-brand-400 font-semibold tracking-wide text-sm">
          RECENT WORK · 2026.07–10
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          티팟에서 최근에 한 일
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          웹 채팅을 다듬고 모바일 앱을 만들었습니다. 기록은 2026년 10월 14일 기준입니다.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        {recent.map((work) => (
          <Link
            key={`${work.projectId}-${work.title}`}
            to={`/projects/${work.projectId}`}
            className="card-hover block p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <span className="text-xs font-semibold text-brand-700 dark:text-brand-400">
              {work.period} · {work.projectTitle}
            </span>
            <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{work.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {work.body}
            </p>
            <span className="mt-4 block text-sm font-semibold text-brand-700 dark:text-brand-400">
              자세히 보기 →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
