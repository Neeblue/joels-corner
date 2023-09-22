import jsonData from '../../projects.json';

export default function Bookshelf() {
    //const project = JsonData.projects[1];
    // const project = JsonData.projects.find(project => project.title === "Bookshelf");
    const project = jsonData.find(project => project.title === "Bookshelf Mobile App") ?? jsonData.projects[1];

    return (
        <div>
            <h1>{project.title}</h1>
            <div>{project.detailsDescription}</div>
        </div>
    );
}