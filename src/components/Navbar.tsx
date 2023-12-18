import './Navbar.css';
import React, { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import ToggleTheme from './ToggleTheme';

export default function Navbar() {
    const theme = useContext(ThemeContext);
    const background = theme.theme.background === "#fff" ? "lightGray" : "rgba(0, 0, 0, 1)";
    return (
        <nav className="nav" style={{
            ...theme.theme,
            padding: "0.5rem", 
            background: background,
        }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                <ToggleTheme />
                <Link to="/" className="site-title">Joel's Corner</Link>
            </div>
            <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About me</Link></li>
                {/* <li><Link to="/contact">Contact me</Link></li> */}
            </ul>
        </nav>
    )
}