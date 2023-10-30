import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../projects.json';
import './SingleProject.css';

interface Project {
    keyword: string;
    title: string;
    detailsDescription: string[];
    detailsImage: string[];
}

export default function SingleProject(){
    const { keyword } = useParams<{ keyword: string }>();
    const project: Project | undefined = jsonData.find((project) => project.keyword === keyword);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="projectPage">
            {project && <h1 className="title">{project.title}</h1>}

            {project && project.detailsDescription.map((paragraph, index) => (
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