import jsonData from '../../projects.json';

export default function Librarian() {
    const project = jsonData.find(project => project.title === "Librarian WPF App") ?? jsonData.projects[2];

    return (
        <div className="projectPage">
            <h1 className="title">{project.title}</h1>

            {project.detailsDescription.map((paragraph, index) => (
                <div key={index}>
                    {index % 2 === 0 ? (
                        <div className='section'>
                            <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage[index]} alt= "" />
                            <div className="detailsParagraph" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                        </div>
                        
                    ) : (
                        <div className='section'>
                            <div className="detailsParagraph" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                            <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage[index]} alt="" />
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
    );
}