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
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-white text-2xl mb-4 font-bold'>Projects</h1>
      <ProjectForm addProject={addProject} />
      <ul className="m-4 space-y-4 text-white">
        {projects.map((project) => (
          <li key={project._id} className="bg-teal-700 p-6 shadow-lg rounded-lg hover:bg-teal-600 transition-colors duration-300">
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-semibold">Name:</label>
              <h1 className="text-xl font-bold">{project.name}</h1>
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-semibold">Description:</label>
              <p className="text-gray-200">{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
