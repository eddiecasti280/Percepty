import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      style={{
        background: 'none',
        border: '1px solid var(--border-color)',
        borderRadius: 8,
        padding: '6px 10px',
        cursor: 'pointer',
        fontSize: '1.15rem',
        lineHeight: 1,
        transition: 'border-color 0.2s',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;