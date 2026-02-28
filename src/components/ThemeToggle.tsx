import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isLightTheme = document.documentElement.classList.contains('light-theme');
    setIsLight(isLightTheme);
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      // Switch to dark
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to light
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
    setIsLight(!isLight);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-lg 
                 bg-[var(--bg-secondary)] 
                 border border-[var(--border)]
                 text-[var(--text-primary)]
                 hover:border-[var(--border-hover)]
                 hover:text-[var(--accent)]
                 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}