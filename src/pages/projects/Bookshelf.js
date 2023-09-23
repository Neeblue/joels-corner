import jsonData from '../../projects.json';

export default function Bookshelf() {
    const project = jsonData.find(project => project.title === "Bookshelf Mobile App") ?? jsonData.projects[1];

    return (
        <div className="Bookshelf">
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






            {/* <div className="firstSection">
                <div className="firstParagraph">
                    <div dangerouslySetInnerHTML={{__html: project.detailsDescription1}}></div>
                </div>
                <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage1} alt="image missing!" />    
            </div>
            <div className="secondSection">
                <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage2} alt="image missing!" />
                <div className="secondParagraph">
                    <div dangerouslySetInnerHTML={{__html: project.detailsDescription2}}></div>
                </div>
            </div> */}
        </div>
    ); /* TODO: Remove white line at bottom */
}