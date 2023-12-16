import './Navbar.css';
import React, { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import ToggleTheme from './ToggleTheme';

export default function Navbar() {
    const theme = useContext(ThemeContext);
    return (
        <nav className="nav" style={{...theme.theme, padding:"0.5rem"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "0.5rem"}}>
                <Link to="/" className="site-title">Joel's Corner</Link>
                <ToggleTheme />
            </div>
            <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About me</Link></li>
                {/* <li><Link to="/contact">Contact me</Link></li> */}
            </ul>
        </nav>
    )
}