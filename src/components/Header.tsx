import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
      setIsLight(true);
    } else {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
      setIsLight(false);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }

    setIsLight(!isLight);
  };

  const navItems = ['about', 'experience', 'skills', 'awards', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center"
            aria-label="Go to home"
          >
            <img
              src={isLight ? "jefel-dark.svg" : "jefel.svg"}
              alt="JJM Logo"
              className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium capitalize text-[var(--text-secondary)]
                           transition-colors duration-300 
                           hover:text-[var(--accent)]"
              >
                {item}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg
                         border border-[var(--border)]
                         text-[var(--text-primary)]
                         hover:border-[var(--accent)] hover:text-[var(--accent)]
                         transition-all duration-300
                         flex items-center justify-center ml-2"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </nav>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-3 md:hidden">

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg
                         border border-[var(--border)]
                         text-[var(--text-primary)]
                         hover:border-[var(--accent)] hover:text-[var(--accent)]
                         transition-all duration-300
                         flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-[var(--border)]">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm font-medium capitalize 
                           text-[var(--text-secondary)] transition-colors duration-300 
                           hover:text-[var(--accent)]"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}