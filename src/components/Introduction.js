export default function Introduction() {
    return (
        <div className="intro">
            Welcome to my webpage! Here you can find a list of projects that I have worked on,
            my resume, a way to contact me, and more information about myself!
            {/* TODO: Add icon tags, Github main link */}
            <br></br>
            <div className="buttons">
                <Button name="Projects" />
                <Button name="About me" />
                <Button name="Contact me" />
            </div>
        </div>
    );
}

function Button({ name }) {
    const handleClick = () => {
        switch (name) {
            case "Projects":
                window.location.href = "/projects";
                break;
            case "About me":
                window.location.href = "/about";
                break;
            case "Contact me":
                window.location.href = "/contact";
                break;
            default:
                break;
        }
    };

    return (
        <button onClick={handleClick}>
            {name}
        </button>
    );
}
