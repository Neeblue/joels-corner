import { ThemeProvider } from './contexts/ThemeContext';
import Homepage from "./pages/Homepage";
import React from 'react';

function App() {

  return (
    <ThemeProvider>
      <div className="App min-h-[100vh]">
        <Homepage />
      </div >
    </ThemeProvider>
  )
}

export default App
