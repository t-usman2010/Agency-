'use client';

import { HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-dark-500 hover:text-dark-900 dark:text-dark-400 dark:hover:text-dark-100 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-200"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <HiSun className="w-[18px] h-[18px]" />
      ) : (
        <HiMoon className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}
