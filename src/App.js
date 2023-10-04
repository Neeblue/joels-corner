import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route index element={<Introduction />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:keyword" element={<SingleProject />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<div style={{textAlign: "center"}}>Page not found!</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}