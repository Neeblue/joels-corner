import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Spells from "./pages/Spells";
import SingleProject from "./pages/SingleProject";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WithScrollToTop from "./components/WithScrollToTop";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header className="sticky">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route index element={WithScrollToTop(Introduction)} />
            <Route path="*" element={WithScrollToTop(Introduction)} />
            <Route path="projects" element={WithScrollToTop(Projects)} />
            <Route path="projects/:keyword" element={WithScrollToTop(SingleProject)} />
            <Route path="about" element={WithScrollToTop(About)} />
            <Route path="contact" element={WithScrollToTop(Contact)} />
            <Route path="spells" element={WithScrollToTop(Spells)} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}