import React, { useEffect, useState } from 'react';
import jsonData from '../projects.json';
import './Projects.css';
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
    <div className='projects-page'>
      <h1 className='header'>GitHub Projects</h1>
      <div className='sub-header'>(Click on a project title to see more information about that project)</div>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="container">
            <div className='project'>
              <h2 className='title'>
                <Link to={`/projects/${project.keyword}`}>{project.title}</Link>
              </h2>
              <div className='githubLink'><
                a href={project.link} target="_blank" rel="noopener noreferrer">
                (Github)
              </a>
              </div>
              <div className='imageContainer'>
                <Link to={`/projects/${project.keyword}`}>
                  <img className='image' src={process.env.PUBLIC_URL + project.image} alt={project.title} />
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