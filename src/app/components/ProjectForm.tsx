"use client";

import { useState } from 'react';

// Define ProjectFormProps
interface ProjectFormProps {
  addProject: (project: Omit<Project, '_id'>) => void; // Exclude _id for form input
}

// Define Project interface
interface Project {
  _id: string;
  name: string;
  description: string;
}

export default function ProjectForm({ addProject }: ProjectFormProps) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({ name, description }); // Exclude _id here
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Project Form</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name..."
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
      />
      <button type="submit">Add Project</button>
    </form>
  );
}
