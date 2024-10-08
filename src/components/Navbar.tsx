import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // Theme toggle functionality
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    const localTheme = localStorage.getItem("theme");
    useEffect(() => {
        localStorage.setItem("theme", theme ?? "light");
        document.documentElement.setAttribute("data-theme", theme ?? "");
    }, [theme]);

    // Closes drawer when a link is clicked
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* Homepage buttons on small screens */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-primary rounded-box w-36 ${dropdownOpen ? '' : 'hidden'}`}>
                        <li><Link className="text-lg" onClick={closeDropdown} to="/projects">Projects</Link></li>
                        <li><Link className="text-lg" onClick={closeDropdown} to="/blogs">Blogs</Link></li>
                        <li><Link className="text-lg" onClick={closeDropdown} to="/about">About me</Link></li>
                        <li><Link className="text-lg" onClick={closeDropdown} to="/resume">Resume</Link></li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-2xl font-bold text-primary gap-4 z-0">
                    <img src="/favicon.ico" alt="" className="h-8 hidden sm:block" />
                    <p>
                        Joel's Corner
                    </p>
                </a>
            </div>
            {/* Theme toggle */}
            <div className="max-lg:navbar-end lg:navbar-center">
                <label className="flex cursor-pointer gap-2 items-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox" value="dark" className="toggle" onChange={handleToggle} defaultChecked={localTheme === "dark"} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
            {/* Homepage buttons on large screens */}
            <div className="navbar-end hidden lg:flex text-primary font-bold">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="text-xl" to="/projects">Projects</Link></li>
                    <li><Link className="text-xl" to="/blogs">Blogs</Link></li>
                    <li><Link className="text-xl" to="/about">About me</Link></li>
                    <li><Link className="text-xl" to="/resume">Resume</Link></li>
                </ul>
            </div>
        </div>
    )
}