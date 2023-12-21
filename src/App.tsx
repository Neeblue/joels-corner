import { ThemeProvider } from './contexts/ThemeContext';
import Homepage from "./pages/Homepage";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App min-h-[100vh]">
          <Homepage />
        </div >
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
