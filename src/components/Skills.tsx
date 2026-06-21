import { profile } from '../data/profile';

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <header className="mb-8">
        <p className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide text-sm">
          SKILLS
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          기술 스택
        </h2>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {profile.skills.map((group) => (
          <div
            key={group.label}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40"
          >
            <h3 className="font-bold text-slate-900 dark:text-white">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 rounded-md text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
