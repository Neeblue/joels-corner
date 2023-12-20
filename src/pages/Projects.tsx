import React, { useEffect, useState } from 'react';
import jsonData from '../projects.json';
import { Link } from 'react-router-dom';
import Tag from '../components/Tag';

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
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>GitHub Projects</h1>
      <div className='mb-8'>(Click on a project title to see more information about that project)</div>
      <div className="flex flex-wrap items-start gap-8 mb-12">
        {projects.map((project, index) => (
          <div key={index} className="justify-between gap-2 mx-4">
            <div className='max-w-[90vw] w-[21rem]'>
              <h2 className='title'>
                <Link to={`/projects/${project.keyword}`}>{project.title}</Link>
              </h2>
              <div className='mb-2'><
                a href={project.link} target="_blank" rel="noopener noreferrer">
                (Github)
              </a>
              </div>
              <div className='mb-2'>
                <Link to={`/projects/${project.keyword}`}>
                  <img className='max-w-[90vw] w-[21rem]' src={process.env.PUBLIC_URL + project.image} alt={project.title} />
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
};