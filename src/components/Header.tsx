import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Awards', href: '/awards' },
  { label: 'Contact', href: 'mailto:jefeljohnmaitem@gmail.com' },
];

export function Header() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }, []);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <header 
      className="sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--grid-line)'
      }}
    >
      <div className="mx-auto max-w-5xl border-x border-[var(--grid-line)] px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-16 flex-col justify-center gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-0">
          <Link
            to="/"
            className="font-heading text-[20px] font-normal text-[var(--text-primary)] transition-colors duration-300 hover:text-white"
            aria-label="Go to home"
          >
            Jefel Maitem
          </Link>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end">
            {navItems.map((item) => (
              item.href.startsWith('mailto:') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-heading text-[20px] text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="font-heading text-[20px] text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
