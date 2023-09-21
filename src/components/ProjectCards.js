import React, { useEffect, useState } from 'react';
import jsonData from '../projects.json';

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
      <div className='subHeader'>Click on a project title to see more information about that project</div>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className='leftColumn'>
            
            <h2 className='title'><a href={project.detailsPage}>{project.title}</a></h2>
            <a className='link' href={project.link} target="_blank" rel="noopener noreferrer">
              (Github)
            </a>
            <p className='description'>{project.description}</p>
            {/* Add tags */}
          </div>
          <div className='rightColumn'>
            <img className='image' src={process.env.PUBLIC_URL + project.image} alt={project.title} />
          </div>
        </div>

      ))}
    </div>
  );
};

export default ProjectCards;