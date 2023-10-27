import React, { useEffect, useState } from 'react';
import jsonData from '../projects.json';
import './Projects.css';
import { Link } from 'react-router-dom';

interface Project {
  keyword: string;
  image: string;
  title: string;
  link: string;
  description: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  /*useEffect(() => {
    // Fetch the GitHub projects data from your backend API
    fetch('https://raw.githubusercontent.com/Neeblue/WebsiteData/main/data')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);*/

  useEffect(() => {
    setProjects(jsonData.filter(project => project.hidden === "false"));
  }, []);

  return (
    <div className='projects'>
      <h1 className='header'>GitHub Projects</h1>
      <div className='sub-header'>(Click on a project title to see more information about that project)</div>

      {projects.map((project, index) => (
        <div key={index} className="container">

          <div className='imageContainer'>
            
              <Link to={`/projects/${project.keyword}`}>
                <img className='image' src={process.env.PUBLIC_URL + project.image} alt={project.title} />
              </Link>
          </div>

          <div className='text'>
            {/* <h2 className='title'><a href={"/projects/" + project.keyword}>{project.title}</a></h2> */}
            <h2 className='title'>
              <Link to={`/projects/${project.keyword}`}>{project.title}</Link>
            </h2>

            <a className='githubLink' href={project.link} target="_blank" rel="noopener noreferrer">
              (Github)
            </a>
            <p className='description'>{project.description}</p>
            {/* TODO: Add tags */}
          </div>
        </div>
      ))}
    </div>
  );
};