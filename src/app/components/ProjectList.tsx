"use client";

import { useState } from 'react';
import ProjectForm from './ProjectForm';
import { v4 as uuidv4 } from 'uuid'; // Install uuid package

interface Project {
  _id: string;
  name: string;
  description: string;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Omit<Project, '_id'>) => {
    const newProject: Project = { ...project, _id: uuidv4() }; // Generate a new UUID
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <h2>Projects</h2>
      <ProjectForm addProject={addProject} />
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
