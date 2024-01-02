import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Spells from "./pages/Spells";
import Resume from "./pages/Resume";
import SingleProject from "./pages/SingleProject";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTopWrapper from "./components/ScrollToTopWrapper";

export default function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-primary flex">
          <Navbar />
        </header>
        <ScrollToTopWrapper>
          <main className="flex-grow">
            <Routes>
              <Route index element={<><Introduction /><Projects /></>} />
              <Route path="*" element={<Introduction />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:keyword" element={<SingleProject />} />
              <Route path="about" element={<About />} />
              <Route path="resume" element={<Resume />} />
              <Route path="spells" element={<Spells />} />
            </Routes>
          </main>
        </ScrollToTopWrapper>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}