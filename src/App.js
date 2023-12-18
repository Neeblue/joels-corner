import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Homepage />
      </div >
    </ThemeProvider>
  );
}