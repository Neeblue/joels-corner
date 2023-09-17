import react from 'react';

// const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
//     return (
//       <div className="project-card">
//         <a href={githubLink} target="_blank" rel="noopener noreferrer">
//           <h2>{title}</h2>
//         </a>
//         <p>{description}</p>
//         <img src={imageUrl} alt={title} width={300} />
//       </div>
//     );
//   };

const ProjectCard = ({ props }) => {
  return (
          <div className="project-card">
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
              <h2>{props.title}</h2>
            </a>
            <p>{props.description}</p>
            <img src={props.imageUrl} alt={props.title} width={300} />
          </div>
        );
      };

 export default ProjectCard;