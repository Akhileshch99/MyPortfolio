import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const navBgClass = theme === 'light'
    ? 'bg-white/95 text-slate-900 shadow-sm border-b border-slate-200'
    : 'bg-secondary/95 text-white shadow-lg';

  const actionButton = theme === 'light'
    ? 'border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200'
    : 'border-blue-400 bg-accent text-white hover:bg-blue-500';

  return (
    <nav className={`${navBgClass} sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300`}> 
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="text-xl font-semibold tracking-wide gradient-text">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400 transition hover:text-accent"
            >
              Resume
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className={`rounded-full border px-3 py-2 text-sm font-medium transition ${actionButton}`}
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          <button
            className="md:hidden rounded-full border border-slate-600 px-3 py-2 text-lg text-slate-200 transition hover:bg-slate-700"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Open mobile navigation"
          >
            {isOpen ? '×' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-slate-700 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-slate-200 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="block text-base font-medium uppercase tracking-[0.15em] text-slate-200 transition hover:text-accent"
            >
              Resume
            </a>

            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="block w-full rounded-full border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
