"use client";

import React, { useState } from 'react';

interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: string; // Changed to string to match form data type
    priority: string;
    completed: false;
  }

interface TaskFormProps {
  addTask: (task: Omit<Task, '_id'>) => void; // Exclude _id for form input
}

export default function TaskForm({ addTask }: TaskFormProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [priority, setPriority] = useState<string>('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask({ title, description, dueDate, priority, completed: false });
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-purple-600 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Task Form</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="font-medium text-white mb-1">Project's Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            required
            className="border border-gray-300 p-2 rounded-lg bg-white text-gray-900"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium text-white mb-1">Project's Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
            className="border border-gray-300 p-2 rounded-lg bg-white text-gray-900"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueDate" className="font-medium text-white mb-1">Project's Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg bg-white text-gray-900"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="priority" className="font-medium text-white mb-1">Project's Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-violet-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-purple-800 rounded-lg shadow-lg py-2 px-4 
                    hover:ring-4 hover:ring-violet-500 hover:bg-purple-600 
                    transform transition-all duration-300 ease-out hover:scale-105
                    focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-50"
        >
          Add Task
        </button>
      </div>
    </form>

  );
}
