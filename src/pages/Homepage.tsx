
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Projects from '../pages/Projects';
import SingleProject from '../pages/SingleProject';
import About from '../pages/About';
import Spells from "../pages/Spells";
import ScrollToTopWrapper from '../components/ScrollToTopWrapper';
import { ThemeContext } from '../contexts/ThemeContext';
import Home from '../pages/Home';

export default function Homepage() {
    const theme = useContext(ThemeContext);

    return (
        <div className={`min-h-[100vh] ${theme.theme}`}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <header className="sticky top-0">
                    <Navbar />
                </header>
                <main className={theme.theme}>
                    <ScrollToTopWrapper>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="*" element={<Home />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="projects/:keyword" element={<SingleProject />} />
                            <Route path="about" element={<About />} />
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