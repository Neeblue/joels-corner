import jsonData from '../../projects.json';

export default function Bookshelf() {
    const project = jsonData.find(project => project.title === "Bookshelf Mobile App") ?? jsonData.projects[1];

    return (
        <div>
            <h1>{project.title}</h1>
            <div>{project.detailsDescription}</div>
            <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage1} alt="image missing!" />
            <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage2} alt="image missing!" />

            <img src={project.detailsImage1} />
            <img src={project.detailsImage2} />
        </div>
    );
}