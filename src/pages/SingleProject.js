import jsonData from '../projects.json';
import './SingleProject.css';

import { useMediaQuery } from 'react-responsive';

export default function SingleProject(props){
    const project = jsonData.find(project => project.keyword === props.keyword);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="projectPage">
            <h1 className="title">{project.title}</h1>

            {project.detailsDescription.map((paragraph, index) => (
                <div key={index} className='section'>
                    {isMobile ? (
                        <>
                            <br></br>
                            <div className="detailsParagraph" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                            <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage[index]} alt="" />
                            <br></br>
                        </>
                    ) : (
                        <>
                            {index % 2 === 0 ? (
                                <>
                                    <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage[index]} alt= "" />
                                    <div className="detailsParagraph" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                                </>
                            ) : (
                                <>
                                    <div className="detailsParagraph" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                                    <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage[index]} alt="" />
                                </>
                            )}
                            <br></br>
                        </>
                    )}
                </div>
            ))}
            <br></br>
        </div>
    );
}