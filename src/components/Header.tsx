import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../lib/assets';

export function Header() {
  const logoSrc = publicAsset('jefel.svg');

  useEffect(() => {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center"
            aria-label="Go to home"
          >
            <img
              src={logoSrc}
              alt="JJM Logo"
              className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          <Link
            to="/about"
            className="text-sm font-light transition-colors duration-300 hover:text-[var(--accent)]"
            style={{ color: 'var(--text-primary)' }}
          >
            About
          </Link>

        </div>
      </div>
    </header>
  );
}
