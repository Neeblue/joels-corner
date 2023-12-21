
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../pages/home/Projects';
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
        </div>
    );
}