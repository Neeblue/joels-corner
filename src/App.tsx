import { ThemeProvider } from './contexts/ThemeContext';
import Homepage from "./pages/Homepage";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <ThemeProvider>
      <MantineProvider>
        <BrowserRouter>
          <div className="App min-h-[100vh]">
            <Homepage />
          </div >
        </BrowserRouter>
      </MantineProvider>
    </ThemeProvider>
  )
}

export default App
