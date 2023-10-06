import { Link } from 'react-router-dom';
import './Introduction.css';

export default function Introduction() {    
    return (
        <div className="intro">
            <div className="intro-text">Welcome to my webpage! Here you can find a list of projects that I have worked on,
            my resume, a way to contact me, and more information about myself!</div>
            {/* TODO: Add icon tags, Github main link */}
            <div className="buttons">
                <Button url = "/projects" name="Projects" img="/images/projects-icon.png" />
                <Button url = "/about" name="About me" img="/images/climbing-icon.webp"/>
                <Button url = "/contact" name="Contact me" img="/images/contact-icon.webp" />
            </div>
            <br />
        </div>
    );
}

function Button (props) {
    return (
        <div className='button'>
            <Link to={props.url}>
                <img src={process.env.PUBLIC_URL + props.img} alt={props.name} />
                <h1>{props.name}</h1>
            </Link>
        </div>
    );
}