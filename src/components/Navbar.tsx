import './Navbar.css';
import React, { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Joel's Corner</Link>
            <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About me</Link></li>                
                <li><Link to="/contact">Contact me</Link></li>                
            </ul>
        </nav>
    )
}