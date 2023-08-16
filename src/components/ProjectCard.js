import react from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
    return (
      <div className="project-card">
        <Link to={githubLink} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
        <img src={imageUrl} alt={title} />
      </div>
    );
  };

  export default ProjectCard;