import { useEffect, useState } from 'react';
import jsonData from '@/projects.json';
import { Link } from 'react-router-dom';
import Tag from '@components/Tag';

interface Project {
  keyword: string;
  image: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(jsonData.filter(project => project.hidden === "false"));
  }, []);

  return (
    <div className='projects-page text-center'>
      <h1 className='header text-3xl font-bold text-primary'>GitHub Projects</h1>
      <div className='sub-header text-primary mb-8 mx-2'>(Click on a project title or image to see more information about that project)</div>
      <div className="projects flex flex-col flex-wrap justify-center items-center sm:items-start gap-8 mb-12 sm:flex-row sm:flex">
        {projects.map((project, index) => (
          <div key={index}>
            <div className='project w-[21rem] max-w-[90vw] text-primary'>
              <h2 className='title font-bold'>
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
                  <img className='image w-[21rem] max-w-[90vw]' src={project.image} alt={project.title} />
                  {project.tags.map((tag: string) => (
                    tag && <Tag key={tag} name={tag} />
                  )
                  )}
                </Link>
              </div>
              <p className='description'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}