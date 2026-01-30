'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme, isMounted } = useTheme();

  // Jangan render sampai hydration selesai
  if (!isMounted) return null;

  const commonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 60,
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.18s ease, box-shadow 0.18s ease',
    padding: 0,
  };

  const lightStyle = {
    ...commonStyle,
    background: '#ffffff',
    boxShadow: '0 6px 18px rgba(16,24,40,0.08)',
    color: '#0f172a'
  };

  const darkStyle = {
    ...commonStyle,
    background: 'linear-gradient(180deg,#0b1220 0%, #0f1724 100%)',
    boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
    color: '#ffffff'
  };

  const style = isDark ? darkStyle : lightStyle;

  return (
    <button
      onClick={toggleTheme}
      style={style}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light' : 'Dark'}
    >
      {/* Show icon that reflects current mode: sun for light, moon for dark */}
      {!isDark ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
