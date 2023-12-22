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
        <nav className={`w-full flex justify-between items-center mb-4 ${theme.theme}`}
            // Theme override for app background
            style={{ background: background, }}>
            <div className='flex flex-row gap-2 items-center'>
                <ToggleTheme />
                <Link to="/" className={`${values} ${focus} text-[2rem]`}>Joel's Corner</Link>
            </div>
            <ul className='list-none flex gap-4 m-2 items-center'>
                <li className={values}><Link className={focus} to="/projects">Projects</Link></li>
                <li className={values}><Link className={focus} to="/about">About me</Link></li>
            </ul>
        </nav>
    )
}