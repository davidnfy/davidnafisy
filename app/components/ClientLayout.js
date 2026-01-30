'use client';

import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import LoadingScreen from './LoadingScreen';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
}
