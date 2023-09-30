import { useEffect, useState } from 'react';
import jsonData from '../projects.json';
import './Projects.css';

const Projects = () => {
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
    <div className='projects'>      
      <h1 className='header'>GitHub Projects</h1>
      <div className='subHeader'>(Click on a project title to see more information about that project)</div>

      {projects.map((project, index) => (
        <div key={index} className="container">
          
          <div className='imageContainer'>
            <img className='image' src={process.env.PUBLIC_URL + project.image} alt={project.title} />
          </div>

          <div className='text'>            
            <h2 className='title'><a href={"/projects/" + project.keyword}>{project.title}</a></h2>
            <div>
              <a className='githubLink' href={project.link} target="_blank" rel="noopener noreferrer">
                (Github)
              </a>
            </div>
            <p className='description'>{project.description}</p>
            {/* TODO: Add tags */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;