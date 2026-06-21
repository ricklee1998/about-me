import { useCallback, useEffect } from 'react';
import { withBase } from '../lib/theme';

export type LightboxImage = {
  src: string;
  caption?: string;
};

type Props = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
};

export default function Lightbox({ images, index, onClose, onIndex }: Props) {
  const current = images[index];
  const total = images.length;

  const goPrev = useCallback(() => onIndex((index - 1 + total) % total), [index, total, onIndex]);
  const goNext = useCallback(() => onIndex((index + 1) % total), [index, total, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [goPrev, goNext, onClose]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="이미지 전체보기"
      className="fixed inset-0 z-[100]"
    >
      <button
        type="button"
        aria-label="배경 클릭으로 닫기"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/90 cursor-zoom-out"
      />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 sm:px-12 py-12 pointer-events-none">
        <img
          src={withBase(current.src)}
          alt={current.caption ?? '확대 이미지'}
          className="max-w-full max-h-[78vh] object-contain rounded shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        />
        {current.caption && (
          <p className="mt-4 text-sm text-slate-200 text-center max-w-2xl pointer-events-auto">
            {current.caption}
          </p>
        )}
        {total > 1 && (
          <p className="mt-1 text-xs text-slate-400 pointer-events-auto">
            {index + 1} / {total}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white text-lg flex items-center justify-center"
      >
        ✕
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="이전 이미지"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white text-2xl flex items-center justify-center"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="다음 이미지"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white text-2xl flex items-center justify-center"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
