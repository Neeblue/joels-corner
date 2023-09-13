import React, { useEffect, useState } from 'react';
import jsonData from '../projects.json';

const GitHubProjectList = () => {
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
    <div>
      <h1>GitHub Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
          <img src={project.image} alt={project.title} width={300} />
        </div>
      ))}
    </div>
  );
};

export default GitHubProjectList;