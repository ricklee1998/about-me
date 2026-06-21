import { profile } from '../data/profile';

const items = [
  {
    label: 'Email',
    value: profile.contacts.email,
    href: `mailto:${profile.contacts.email}`,
    copy: profile.contacts.email,
  },
  {
    label: 'Phone',
    value: profile.contacts.phone,
    href: `tel:${profile.contacts.phone.replace(/-/g, '')}`,
    copy: profile.contacts.phone,
  },
  {
    label: 'GitHub',
    value: profile.contacts.github.replace(/^https?:\/\//, ''),
    href: profile.contacts.github,
    copy: profile.contacts.github,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <header className="mb-8">
        <p className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide text-sm">
          CONTACT
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          연락처
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          제안·면접·문의 어느 채널이든 환영합니다.
        </p>
      </header>

      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.label === 'GitHub' ? '_blank' : undefined}
            rel={item.label === 'GitHub' ? 'noreferrer' : undefined}
            className="card-hover block p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 dark:hover:border-brand-600"
          >
            <div className="text-xs font-semibold tracking-wide text-brand-700 dark:text-brand-400 uppercase">
              {item.label}
            </div>
            <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-white break-all">
              {item.value}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
