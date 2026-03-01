import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
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

  const scrollToHero = () => {
    const element = document.getElementById('hero');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={scrollToHero}
            className="group flex items-center"
            aria-label="Go to home"
          >
            <img
              src={isLight ? "jefel-dark.svg" : "jefel.svg"}
              alt="JJM Logo"
              className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </button>

          {/* Social Icons + Theme Toggle - Minimal version */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jefel/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/jefel-design"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="mailto:jefeljohnmaitem@gmail.com"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            <button
              onClick={toggleTheme}
              className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}