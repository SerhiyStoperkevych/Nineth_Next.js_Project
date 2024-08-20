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
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-purple-600 w-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Project Form</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-white">Project's Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
            required
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium text-white">Project's Description:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-purple-800 rounded-lg shadow-lg py-2 px-4 
                     hover:ring-4 hover:ring-violet-500 hover:bg-purple-600 
                     transform transition-all duration-300 ease-out hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-50"
          >
          Add Project
        </button>
      </div>
    </form>
  );
}
