import { useLocation } from 'react-router-dom';

const links = [
  {
    label: 'jefeljohnmaitem@gmail.com',
    href: 'mailto:jefeljohnmaitem@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jefel-design',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jefel/',
  },
];

export function Footer() {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer id="contact" className="border-b border-[var(--grid-line)]">
      <div className="mx-auto max-w-5xl border-x border-[var(--grid-line)] px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--text-faint)]">
              Contact
            </p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--text-muted)]">
              Open to thoughtful collaborations across interface design,
              responsive websites, and front-end implementation.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 sm:justify-end" aria-label="Social links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-[var(--grid-line)] pt-5">
          <p className="text-xs text-[var(--text-faint)]">
            © {new Date().getFullYear()} Jefel Maitem
          </p>
        </div>
      </div>
    </footer>
  );
}
