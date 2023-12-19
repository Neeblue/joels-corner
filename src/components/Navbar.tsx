import './Navbar.css';
import React, { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import ToggleTheme from './ToggleTheme';

export default function Navbar() {
    const theme = useContext(ThemeContext);
    const background = theme.theme.includes("#fff") ? "lightGray" : "rgba(0, 0, 0, 1)";
    const values = "font-bold text-lg max-sm:mx-auto";
    const focus = "focus:bg-link-focus focus:text-black";

    return (
        <nav className={`bg-black w-full flex justify-between py-2 px-4 mb-4 sm:flex-column max-sm:flex-col ${theme.theme}`}
            // Theme override for app background
            style={{ padding: "0.5rem", background: background, }}>
            <div className='flex flex-row gap-2'>
                <ToggleTheme />
                <Link to="/" className={`${values} ${focus} text-[2rem] max-sm:mb-2`}>Joel's Corner</Link>
            </div>
            <ul className='list-none flex gap-8'>
                <li className={values}><Link className={focus} to="/projects">Projects</Link></li>
                <li className={values}><Link className={focus} to="/about">About me</Link></li>
            </ul>
        </nav>
    )
}