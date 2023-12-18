import React, { createContext, useState, FC } from 'react';
import { Theme, themeOptions } from '../types';

const themes = {
  light: { background: "#fff", color: "#000" },
  dark: { background: "#171717", color: "#fff" }
};

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: themes.dark, toggleTheme: () => {} });

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<themeOptions>("dark");
  
  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const providerValue = { theme: themes[theme], toggleTheme };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};