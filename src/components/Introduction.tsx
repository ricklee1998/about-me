import { profile } from '../data/profile';

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    >
      <header className="mb-10">
        <p className="text-brand-700 dark:text-brand-400 font-semibold tracking-wide text-sm">
          INTRODUCTION
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          자기소개
        </h2>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          {profile.intro.map((p, i) => (
            <div key={i}>
              {p.title && (
                <h3 className="text-lg font-bold text-brand-700 dark:text-brand-300 mb-1">
                  {p.title}
                </h3>
              )}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <aside className="lg:sticky lg:top-20 self-start">
          <blockquote className="relative p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/60 dark:from-brand-900/40 dark:to-brand-800/20 border border-brand-200 dark:border-brand-800">
            <span
              aria-hidden
              className="absolute -top-3 -left-2 text-5xl text-brand-400 dark:text-brand-500 select-none"
            >
              “
            </span>
            <p className="text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
              {profile.philosophy}
            </p>
            <footer className="mt-4 text-sm text-brand-700 dark:text-brand-300">
              — 개발 철학
            </footer>
          </blockquote>
        </aside>
      </div>
    </section>
  );
}
