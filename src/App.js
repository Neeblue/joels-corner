import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Spells from "./pages/Spells";
import SingleProject from "./pages/SingleProject";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTopWrapper from "./components/ScrollToTopWrapper";
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider>
          <header className="sticky">
            <Navbar />
          </header>
          <main>
            <ScrollToTopWrapper>
              <Routes>
                <Route index element={<Introduction />} />
                <Route path="*" element={<Introduction />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:keyword" element={<SingleProject />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="spells" element={<Spells />} />
              </Routes>
            </ScrollToTopWrapper>
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </BrowserRouter>
    </div >
  );
}