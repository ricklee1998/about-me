import { profile } from '../data/profile';

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <header className="mb-10">
        <p className="text-brand-700 dark:text-brand-400 font-semibold tracking-wide text-sm">
          ABOUT
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          제가 일하면서 배운 것들
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">
          글로벌 실시간 통신, AI 기반 서비스, 대학 LMS — 도메인을 거치며 사용자·고객과의 거리를 어떻게 좁혀왔는지 정리했습니다.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-5">
        {profile.highlights.map((h, i) => (
          <article
            key={h.title}
            className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-brand-400 dark:hover:border-brand-600 transition"
          >
            <div className="text-xs font-bold tracking-wide text-brand-700 dark:text-brand-400">
              0{i + 1}
            </div>
            <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{h.title}</h3>
            <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{h.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
