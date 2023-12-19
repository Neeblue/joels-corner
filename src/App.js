import { ThemeProvider } from './contexts/ThemeContext';
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