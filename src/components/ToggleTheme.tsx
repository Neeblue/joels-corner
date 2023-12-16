import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ToggleTheme() {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={theme.toggleTheme} style={theme.theme}>
      {theme?.theme ? 'light' : 'Dark'}
    </button>
  );
};
