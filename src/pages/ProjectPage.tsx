import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { withBase } from '../lib/theme';
import Lightbox, { type LightboxImage } from '../components/Lightbox';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setLightboxIndex(null);
  }, [id]);

  const lightboxImages = useMemo<LightboxImage[]>(() => {
    if (!project) return [];
    const out: LightboxImage[] = [];
    // 1) 커버
    const cover = project.images[0];
    if (cover && !cover.isPlaceholder) {
      out.push({ src: cover.src, caption: cover.caption });
    }
    // 2) 비교 (before/after pair)
    project.comparisons?.forEach((c) => {
      out.push({ src: c.before.src, caption: `${c.topic} — ${c.before.caption}` });
      out.push({ src: c.after.src, caption: `${c.topic} — ${c.after.caption}` });
    });
    // 3) 갤러리 (cover 이후 이미지)
    project.images.slice(1).forEach((img) => {
      if (!img.isPlaceholder) out.push({ src: img.src, caption: img.caption });
    });
    return out;
  }, [project]);

  const lightboxIndexFor = (src: string) => lightboxImages.findIndex((i) => i.src === src);
  const openLightbox = (src: string) => {
    const i = lightboxIndexFor(src);
    if (i >= 0) setLightboxIndex(i);
  };

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
        <p className="text-brand-700 dark:text-brand-400 font-semibold text-sm">PROJECT NOT FOUND</p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
          해당 프로젝트를 찾을 수 없습니다
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

  const cover = project.images[0];

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
      <nav className="mb-6 flex items-center justify-between text-sm">
        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-400 transition"
        >
          ← 모든 프로젝트
        </Link>
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-medium text-brand-700 dark:text-brand-400 hover:underline"
          >
            {project.site.replace(/^https?:\/\//, '')} ↗
          </a>
        )}
      </nav>

      <header className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-700">
            {project.company}
          </span>
          <span className="text-slate-500 dark:text-slate-400">{project.period}</span>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{project.oneLine}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.role}</p>
        {project.note && (
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 italic">※ {project.note}</p>
        )}
      </header>

      {cover && !cover.isPlaceholder && (
        <figure className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <button
            type="button"
            onClick={() => openLightbox(cover.src)}
            aria-label="이미지 전체보기"
            className="block w-full aspect-[16/9] bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden cursor-zoom-in group"
          >
            <img
              src={withBase(cover.src)}
              alt={cover.caption ?? project.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-[1.02]"
            />
          </button>
          {cover.caption && (
            <figcaption className="px-4 py-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
              {cover.caption}
            </figcaption>
          )}
        </figure>
      )}

      {project.context && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">배경</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.context}
          </p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">개요</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          {project.overview}
        </p>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">핵심 기능</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {project.features.map((f) => (
              <article
                key={f.title}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40"
              >
                <h3 className="font-bold text-brand-700 dark:text-brand-300">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {project.video && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">데모 영상</h2>
          <figure className="mt-4 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-black">
            <video
              src={withBase(project.video.src)}
              controls
              preload="metadata"
              playsInline
              className="w-full h-auto"
            />
            {project.video.caption && (
              <figcaption className="px-4 py-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                {project.video.caption}
              </figcaption>
            )}
          </figure>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">담당 업무</h2>
        <ul className="mt-3 space-y-2">
          {project.responsibilities.map((r) => (
            <li
              key={r}
              className="flex gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40"
            >
              <span
                aria-hidden
                className="mt-2 shrink-0 size-1.5 rounded-full bg-brand-500 dark:bg-brand-400"
              />
              <span className="text-slate-700 dark:text-slate-200">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">주요 성과</h2>
        <ul className="mt-3 space-y-2">
          {project.achievements.map((a) => (
            <li
              key={a}
              className="flex gap-3 p-3 rounded-lg border border-brand-200 dark:border-brand-800 bg-brand-50/60 dark:bg-brand-900/10"
            >
              <span aria-hidden className="text-brand-700 dark:text-brand-300 font-bold mt-0.5">
                ★
              </span>
              <span className="text-slate-800 dark:text-slate-100">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">기술 스택</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li
              key={s}
              className="px-3 py-1.5 rounded-md text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {project.comparisons && project.comparisons.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Before · After</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            입사 전(25) → 리뉴얼 후(26) 비교. 이미지를 클릭하면 전체보기로 확대됩니다.
          </p>
          <div className="mt-5 space-y-10">
            {project.comparisons.map((c) => (
              <article key={c.topic}>
                <header className="mb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{c.topic}</h3>
                  {c.description && (
                    <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                      {c.description}
                    </p>
                  )}
                </header>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ComparisonSide
                    label="BEFORE (25)"
                    img={c.before}
                    accent="slate"
                    onOpen={openLightbox}
                  />
                  <ComparisonSide
                    label="AFTER (26)"
                    img={c.after}
                    accent="brand"
                    onOpen={openLightbox}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {project.images.length > 1 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">스크린샷</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            이미지를 클릭하면 전체보기로 확대됩니다.
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {project.images.slice(1).map((img) => (
              <figure
                key={img.src}
                className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
              >
                <button
                  type="button"
                  onClick={() => !img.isPlaceholder && openLightbox(img.src)}
                  disabled={img.isPlaceholder}
                  aria-label={img.isPlaceholder ? '이미지 준비 중' : '이미지 전체보기'}
                  className="block w-full aspect-[16/10] bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden cursor-zoom-in disabled:cursor-default group"
                >
                  {img.isPlaceholder ? (
                    <div className="text-slate-400 dark:text-slate-500 text-xs p-4 text-center">
                      {img.caption ?? '이미지 준비 중'}
                    </div>
                  ) : (
                    <img
                      src={withBase(img.src)}
                      alt={img.caption ?? project.title}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform group-hover:scale-[1.02]"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = 'none';
                      }}
                    />
                  )}
                </button>
                {img.caption && (
                  <figcaption className="px-3 py-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-14 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-400 transition"
        >
          ← 모든 프로젝트
        </Link>
      </footer>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndex={setLightboxIndex}
        />
      )}
    </article>
  );
}

type ComparisonSideProps = {
  label: string;
  img: { src: string; caption: string };
  accent: 'slate' | 'brand';
  onOpen: (src: string) => void;
};

function ComparisonSide({ label, img, accent, onOpen }: ComparisonSideProps) {
  const accentClass =
    accent === 'brand'
      ? 'bg-brand-600 text-white'
      : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200';

  return (
    <figure className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <span className={`px-2 py-0.5 rounded text-xs font-bold ${accentClass}`}>{label}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">{img.caption}</span>
      </div>
      <button
        type="button"
        onClick={() => onOpen(img.src)}
        aria-label="이미지 전체보기"
        className="block w-full aspect-[16/10] bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden cursor-zoom-in group"
      >
        <img
          src={withBase(img.src)}
          alt={img.caption}
          loading="lazy"
          className="w-full h-full object-contain transition-transform group-hover:scale-[1.02]"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = 'none';
          }}
        />
      </button>
    </figure>
  );
}
