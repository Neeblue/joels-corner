import React from 'react';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { themes } from '../App';

export default function ToggleTheme() {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={theme?.setTheme} style={{ theme.theme }}>
      {theme?.theme ? 'light' : 'Dark'}
    </button>
  );
};
