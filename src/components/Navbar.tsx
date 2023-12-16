import './Navbar.css';
import React, { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

export default function Navbar() {
    const theme = useContext(ThemeContext);
    return (
        <nav className="nav" style={theme.theme}>
            <Link to="/" className="site-title">Joel's Corner</Link>
            <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About me</Link></li>                
                <li><Link to="/contact">Contact me</Link></li>                
            </ul>
        </nav>
    )
}