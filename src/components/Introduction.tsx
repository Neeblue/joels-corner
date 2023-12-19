import React, { Link } from 'react-router-dom';

export default function Introduction() {
    return (
        <div className="text-center mb-8">
            <div className="text-xl mb-4">Welcome to my webpage! Here you can find a list of projects that I have worked on, and more information about myself!</div>
            {/* TODO: Add icon tags, Github main link */}
            <div className="flex flex-col sm:flex-row sm:justify-center">
                <Button url="/projects" name="Projects" img="/images/projects-icon.png" />
                <Button url="/about" name="About me" img="/images/about-icon.png" />
                <Button url="/contact" name="Contact me" img="/images/contact-icon.png" />
            </div>
            <br />
        </div>
    );
}

function Button (props: {url: string, name: string, img: string}) {
    return (
        <div className='max-sm:mx-auto'>
            <Link className='hover:bg-transparent' to={props.url}>
                <img className='w-[50vw] sm:w-[20rem]' src={process.env.PUBLIC_URL + props.img} alt={props.name} />
                <div className='decoration-0 text-2xl'>{props.name}</div>
            </Link>
        </div>
    );
}
