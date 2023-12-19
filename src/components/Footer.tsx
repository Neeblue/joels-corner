import React from 'react';
import './Footer.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Footer() {
    // A simple footer component that displays a clickable email address and a phone number in the bottom right corner of my site.
    const theme = useContext(ThemeContext);
    const background = theme.theme.background === "#fff" ? "lightGray" : "rgba(0, 0, 0, 1)";

    return (
        <div className='fixed bottom-0 flex justify-between w-full p-2 bg-black' style={{
            ...theme.theme,
            background: background,
            }}>
            <div>JoelMiles.com</div>
            <a style={theme.theme} className='text-nav-link' href='mailto: email@joelmiles.com'>
                email@joelmiles.com
            </a>
        </div>
    );
};
