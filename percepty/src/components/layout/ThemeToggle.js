import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-label="Toggle theme"
      className="theme-toggle-btn"
    >
      <span className="material-icons-round">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
}

export default ThemeToggle;