import React, { createContext, useState, FC } from 'react';

interface ThemeContextProps {
  theme: { background: string, color: string };
  setTheme: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const themes = {
  "light": { background: "#fff", color: "#000" },
  "dark": { background: "#171717", color: "#fff" }
};

const ThemeContext = createContext<ThemeContextProps>({ theme: themes.dark, setTheme: undefined });

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

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
