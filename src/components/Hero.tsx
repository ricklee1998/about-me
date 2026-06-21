import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70 dark:opacity-50"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 10%, rgba(20,184,166,0.18), transparent), radial-gradient(50% 40% at 10% 80%, rgba(15,118,110,0.14), transparent)',
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <p className="text-brand-700 dark:text-brand-400 font-semibold tracking-wide">
          Frontend Developer Portfolio
        </p>
        <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {profile.name}
          <span className="block text-slate-500 dark:text-slate-400 text-2xl sm:text-3xl font-semibold mt-3">
            {profile.role}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {profile.keywords.map((k) => (
            <span
              key={k}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-700"
            >
              {k}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            state={{ scrollTo: 'projects' }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow transition font-semibold"
          >
            프로젝트 보기 →
          </Link>
          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-brand-600 dark:border-brand-400 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition font-semibold"
          >
            연락하기
          </Link>
        </div>
      </div>
    </section>
  );
}
