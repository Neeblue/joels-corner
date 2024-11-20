import { useEffect, useState } from 'react';
import jsonData from '@/projects.json';
import ProjectCard from '@/components/ProjectCard';

type Project = {
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
    <div className='projects-page text-center'>
      <h1 className='header text-3xl font-bold text-secondary'>GitHub Projects</h1>
      <div className='sub-header text-primary mb-8 mx-2'>(Click on a project title or image to see more information about that project)</div>
      <div className="projects flex flex-col flex-wrap justify-center items-center sm:items-start gap-8 mb-12 sm:flex-row">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}