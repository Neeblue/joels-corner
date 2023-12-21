import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../projects.json';

interface Project {
    keyword: string;
    title: string;
    detailsDescription: string[];
    detailsImage: string[];
}

export default function SingleProject() {
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

    const text = "mb-[2rem] md:mb-0 md:justify-center md:mx-[2rem]"; //Tailwind classes for text
    const img = "w-[100%] max-h-[90vh] m-auto md:w-[40%] md:p-[1rem]"; //Tailwind classes for images

    return (
        <div className="mb-[1rem]">
            {project && <div className="text-center m-[1rem] font-bold text-2xl">{project.title}</div>}

            {project && project.detailsDescription.map((paragraph, index) => (
                <div key={index} className='flex flex-col md:flex-row md:justify-between'>
                    {isMobile ? (
                        <>
                            <br></br>
                            <div className={ text } dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                            {/* <img className={img} src={process.env.PUBLIC_URL + project.detailsImage[index]} alt="" /> */}
                            <img className={img} src={project.detailsImage[index]} alt="" />
                            <br></br>
                        </>
                    ) : (
                        <>
                            {index % 2 === 0 ? (
                                <>
                                    {/* <img className={img} src={process.env.PUBLIC_URL + project.detailsImage[index]} alt="" /> */}
                                    <img className={img} src={project.detailsImage[index]} alt="" />
                                    <div className={ text } dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                                </>
                            ) : (
                                <>
                                    <div className={ text } dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                                    {/* <img className={img} src={process.env.PUBLIC_URL + project.detailsImage[index]} alt="" /> */}
                                    <img className={img} src={project.detailsImage[index]} alt="" />
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
