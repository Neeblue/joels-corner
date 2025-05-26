import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '@/projects.json';

interface Project {
    keyword: string;
    title: string;
    detailsDescription: string[];
    detailsImage: string[];
}

export default function SingleProject() {
    const { keyword } = useParams<{ keyword: string }>();
    const project: Project | undefined = jsonData.find((project) => project.keyword === keyword);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640);
    const [imgLoaded, setImgLoaded] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="projectPage m-4">
            {project && <h1 className="title text-center font-bold mb-4 text-secondary">{project.title}</h1>}

            {project && project.detailsDescription.map((paragraph, index) => (
                <div key={index} className='section max-w-full justify-center flex flex-col gap-4 mb-8 sm:flex-row sm:items-center'>
                    {isMobile ? (
                        <>
                            <div className="detailsParagraph text-primary" dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                            <div className="relative w-full flex items-center justify-center">
                                {!imgLoaded[index] && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-neutral animate-pulse rounded-lg" style={{ width: '100%', height: '100%', minHeight: 200 }} />
                                )}
                                <img
                                    className={`detailsImage transition-opacity duration-300 ${imgLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                                    src={project.detailsImage[index]}
                                    alt=""
                                    loading="lazy"
                                    onLoad={() => setImgLoaded(l => ({ ...l, [index]: true }))}
                                    style={{ minHeight: 200 }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {index % 2 === 0 ? (
                                <>
                                    <div className="relative max-w-[50vw] max-h-[60vw] p-2 flex items-center justify-center">
                                        {!imgLoaded[index] && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-neutral animate-pulse rounded-lg" style={{ width: '100%', height: '100%', minHeight: 200 }} />
                                        )}
                                        <img
                                            className={`detailsImage max-w-[50vw] max-h-[60vw] p-2 object-contain transition-opacity duration-300 ${imgLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                                            src={project.detailsImage[index]}
                                            alt=""
                                            loading="lazy"
                                            onLoad={() => setImgLoaded(l => ({ ...l, [index]: true }))}
                                            style={{ minHeight: 200 }}
                                        />
                                    </div>
                                    <div className="detailsParagraph text-primary max-w-[50vw] p-2" dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                                </>
                            ) : (
                                <>
                                    <div className="detailsParagraph text-primary max-w-[50vw] p-2" dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                                    <div className="relative max-w-[50vw] max-h-[60vw] p-2 flex items-center justify-center">
                                        {!imgLoaded[index] && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-neutral animate-pulse rounded-lg" style={{ width: '100%', height: '100%', minHeight: 200 }} />
                                        )}
                                        <img
                                            className={`detailsImage max-w-[50vw] max-h-[60vw] p-2 object-contain transition-opacity duration-300 ${imgLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                                            src={project.detailsImage[index]}
                                            alt=""
                                            loading="lazy"
                                            onLoad={() => setImgLoaded(l => ({ ...l, [index]: true }))}
                                            style={{ minHeight: 200 }}
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}