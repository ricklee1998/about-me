import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <p className="text-brand-700 dark:text-brand-400 font-semibold text-sm">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
        페이지를 찾을 수 없습니다
      </h1>
      <Link
        to="/"
        className="inline-flex mt-6 items-center px-4 py-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition"
      >
        ← 홈으로
      </Link>
    </section>
  );
}
