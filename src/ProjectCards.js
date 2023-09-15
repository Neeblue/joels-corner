import React, { useEffect, useState } from 'react';
import jsonData from './projects.json';

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  /*useEffect(() => {
    // Fetch the GitHub projects data from your backend API
    fetch('https://raw.githubusercontent.com/Neeblue/WebsiteData/main/data')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);*/

  useEffect(() => {
    setProjects(jsonData);
  }, []);

  return (
    <div className='projectCards'>
      <h1 className='header'>GitHub Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className='title'>{project.title}</h2>
          <p className='description'>{project.description}</p>
          {/* Add tags */}
          <a className='link' href={project.link} target="_blank" rel="noopener noreferrer">
            Github link
          </a>
          <img className='image' src={project.image} alt={project.title} width={300} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;