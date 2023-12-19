import { ThemeProvider } from './contexts/ThemeContext';
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-[100vh]">
        <Homepage />
      </div >
    </ThemeProvider>
  );
}