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
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Introduction />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*">"404 Not Found"</Route>
            <Route path="projects" element={<Projects />}>
              <Route path=":keyword" element={<SingleProject />} />
            </Route>            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}