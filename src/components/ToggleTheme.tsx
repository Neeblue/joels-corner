import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ToggleTheme() {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={theme.toggleTheme} className={theme.theme} style={{ fontSize: '2rem', border: 'none', background: 'none', cursor: "pointer" }}>
      {theme.theme.includes('#fff') ? '🌖' : '🌑'}
    </button>
  );
};
