import './Navbar.css';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="nav">
                <a href="/" className="site-title">Joel's Corner</a>
                <ul>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About me</Link></li>                
                    <li><Link to="/contact">Contact me</Link></li>                
                </ul>
            </nav>
            <Outlet />
        </>        
    )
}