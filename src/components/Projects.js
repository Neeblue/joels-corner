import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
  const projects = [
    {
      title: 'Program 1',
      description: 'Description of Program 1...',
      imageUrl: 'program1.jpg',
      githubLink: 'https://github.com/user/repo1',
    },
    {
      title: 'Program 2',
      description: 'Description of Program 2...',
      imageUrl: 'program2.jpg',
      githubLink: 'https://github.com/user/repo2',
    },
    // Add more programs here
  ];

  return (
    <div className="app">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;