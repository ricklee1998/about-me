import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { applyTheme, getInitialTheme, type Theme } from "../lib/theme";
import { profile } from "../data/profile";

const navItems = [
  { id: "introduction", label: "Introduction" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition"
    >
      <span aria-hidden className="text-base">
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link to="/" className="font-bold tracking-tight text-slate-900 dark:text-slate-100 shrink-0">
            {profile.name}
            <span className="text-brand-600 dark:text-brand-400"> ·</span>
            <span className="ml-1 font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">{profile.role}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to="/"
                state={{ scrollTo: item.id }}
                className="px-3 py-1.5 text-sm rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={profile.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center px-3 py-1.5 text-sm rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200/60 dark:border-slate-800/80 mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <a href={`mailto:${profile.contacts.email}`} className="text-slate-600 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-400">
            {profile.contacts.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
