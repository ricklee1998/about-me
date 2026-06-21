import { Link } from 'react-router-dom';
import { companyMeta, companyOrder, projectsByCompany } from '../data/projects';

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <header className="mb-10">
        <p className="text-brand-700 dark:text-brand-400 font-semibold tracking-wide text-sm">
          EXPERIENCE
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          경력 타임라인
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          페어리테일 → 라이너스 → 에피소든. 각 회사의 프로젝트를 클릭하면 상세로 이동합니다.
        </p>
      </header>

      <ol className="relative border-l border-slate-200 dark:border-slate-800 ml-3 space-y-10">
        {companyOrder
          .filter((c) => c !== '대학')
          .map((company) => {
            const meta = companyMeta[company];
            const list = projectsByCompany(company);
            return (
              <li key={company} className="pl-6">
                <span className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-white dark:ring-slate-950" />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{company}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{meta.period}</span>
                </div>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{meta.oneLine}</p>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                  {list.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/projects/${p.id}`}
                        className="block p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-600 hover:bg-brand-50/40 dark:hover:bg-brand-900/10 transition"
                      >
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {p.title}
                        </span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {p.period}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
      </ol>
    </section>
  );
}
