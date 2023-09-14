export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Joel's Site</a>
            <ul>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About me</a></li>                
                <li><a href="/contact">Contact me</a></li>                
            </ul>
        </nav>
    )
}