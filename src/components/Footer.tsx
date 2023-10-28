import React from 'react';
import './Footer.css';

export default function Footer() {
    // A simple footer component that displays a clickable email address and a phone number in the bottom right corner of my site.
    return (
        <div className='footer'>
            <div>JoelMiles.com</div>
            <a href='mailto: email@joelmiles.com'>
                email@joelmiles.com
            </a>
        </div>
    );
};
