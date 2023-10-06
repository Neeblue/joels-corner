import './Footer.css';

const Footer = () => {
    // A simple footer component that displays a clickable email address and a phone number in the bottom right corner of my site.
    return (
        <div className='footer'>
            <div>JoelMiles.com</div>
            <a href='mailto: joelmiles@hotmail.co.uk'>
                joelmiles@hotmail.co.uk
            </a>
        </div>
    );
};

export default Footer;
