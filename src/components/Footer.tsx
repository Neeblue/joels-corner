import React from 'react';
import './Footer.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Footer() {
    // A simple footer component that displays a clickable email address and a phone number in the bottom right corner of my site.
    const theme = useContext(ThemeContext);

    return (
        <div className='footer' style={theme.theme}>
            <div>JoelMiles.com</div>
            <a style={theme.theme} href='mailto: email@joelmiles.com'>
                email@joelmiles.com
            </a>
        </div>
    );
};
