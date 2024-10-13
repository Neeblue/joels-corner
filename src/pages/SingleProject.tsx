import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '@/projects.json';

interface Project {
    keyword: string;
    title: string;
    detailsDescription: string[];
    detailsImage: string[];
}

export default function SingleProject(){
    const { keyword } = useParams<{ keyword: string }>();
    const project: Project | undefined = jsonData.find((project) => project.keyword === keyword);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="projectPage m-4">
            {project && <h1 className="title text-center font-bold mb-4 text-primary">{project.title}</h1>}

            {project && project.detailsDescription.map((paragraph, index) => (
                <div key={index} className='section max-w-full justify-center flex flex-col gap-4 mb-8 sm:flex-row sm:items-center'>
                    {isMobile ? (
                        <>
                            <div className="detailsParagraph text-primary" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                            <img className='detailsImage' src={project.detailsImage[index]} alt="" />

                        </>
                    ) : (
                        <>
                            {index % 2 === 0 ? (
                                <>
                                    <img className='detailsImage max-w-[50vw] max-h-[60vw] p-2 object-contain' src={project.detailsImage[index]} alt= "" />
                                    <div className="detailsParagraph text-primary max-w-[50vw] p-2" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                                </>
                            ) : (
                                <>
                                    <div className="detailsParagraph text-primary max-w-[50vw] p-2" dangerouslySetInnerHTML={{__html: paragraph}}></div>
                                    <img className='detailsImage max-w-[50vw] max-h-[60vw] p-2 object-contain' src={project.detailsImage[index]} alt="" />
                                </>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}