import { Link } from 'react-router-dom';
import Tag from '@components/Tag';
import { useState } from 'react';

type Project = {
    keyword: string;
    image: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className='project w-[21rem] max-w-[90vw] text-primary'>
            <h2 className='title font-bold text-secondary'>
                <Link to={`/projects/${project.keyword}`}>{project.title}</Link>
            </h2>
            <div className='githubLink mb-2 flex items-center justify-center gap-2'>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Github
                    <svg className='inline ml-2' xmlns="http://www.w3.org/2000/svg" width="14" height="14" stroke='currentColor' viewBox="0 0 24 24">
                        <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                </a>
            </div>
            <div className='imageContainer mb-2'>
                <Link to={`/projects/${project.keyword}`}>
                    <div className="relative max-w-[90vw] sm:max-w-[300px] h-[250px] mx-auto flex items-center justify-center">
                        {!imgLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-neutral animate-pulse rounded-lg" style={{ width: '100%', height: '100%' }} />
                        )}
                        <img
                            className={`image max-w-[90vw] sm:max-w-[300px] h-[250px] mx-auto transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            onLoad={() => setImgLoaded(true)}
                        />
                    </div>
                    {project.tags.map((tag: string) => (
                        tag && <Tag key={tag} name={tag} />
                    ))}
                </Link>
            </div>
            <p className='description'>{project.description}</p>
        </div>
    );
}