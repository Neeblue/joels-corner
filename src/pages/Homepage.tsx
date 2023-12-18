
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Projects from '../pages/Projects';
import SingleProject from '../pages/SingleProject';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Spells from "../pages/Spells";
import ScrollToTopWrapper from '../components/ScrollToTopWrapper';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Homepage() {
    const theme = useContext(ThemeContext);

    return (
        <div style={{
            ...theme.theme,
            minHeight: "100vh",
        }}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <header className="sticky">
                    <Navbar />
                </header>
                <main style={theme.theme}>
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
            </BrowserRouter>
        </div>
    );
}