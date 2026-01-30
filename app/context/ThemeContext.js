'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load theme dari localStorage saat mount
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    
    // Apply theme ke HTML element
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    // Use functional update so we have the previous value reliably
    setIsDark((prev) => {
      const newVal = !prev;
      const newTheme = newVal ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      // add a temporary class to enable smooth transitions
      document.documentElement.classList.add('theme-animate');

      if (newVal) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // remove the helper class after the transition finishes
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-animate');
      }, 360);

      return newVal;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
