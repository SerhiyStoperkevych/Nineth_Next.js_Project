'use client';

import { useState } from 'react';
import ProjectForm from './ProjectForm';

export default function ProjectList() {
  const [projects, setProjects] = useState<string[]>([]);

  const addProject = (project: any) => {
    setProjects([...projects, project]);
  };

  return (
    <div>
      <h2>Projects</h2>
      <ProjectForm addProject={addProject} />
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
