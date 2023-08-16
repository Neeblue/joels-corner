import react from 'react';

const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
    return (
      <div className="project-card">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
        <img src={imageUrl} alt={title} />
      </div>
    );
  };

 export default ProjectCard;