"use client";

import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid'; // Install uuid package

interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string; // Changed to string to match form data type
  priority: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Omit<Task, '_id'>) => {
    const newTask: Task = { ...task, _id: uuidv4() }; // Generate a new UUID
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-white text-2xl mb-4 font-bold'>Task List</h2>
      <TaskForm addTask={addTask} />
      <ul className="m-4 space-y-4 text-white">
        {tasks.map((task) => (
          <li key={task._id} className="bg-teal-700 p-6 shadow-lg rounded-lg hover:bg-teal-600 transition-colors duration-3006">
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-semibold">Title:</label>
              <h1 className="block text-sm font-semibold">{task.title}</h1>
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-semibold">Priority:</label>
              <h2 className="block text-sm font-semibold">{task.priority}</h2>
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-semibold">DueDate:</label>
              <h3 className="block text-sm font-semibold">{new Date(task.dueDate).toDateString()}</h3>
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-semibold">Description:</label>
              <p className="text-gray-200">{task.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
