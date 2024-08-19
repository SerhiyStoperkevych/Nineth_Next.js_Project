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
    <div>
      <h2>Task List</h2>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h1>{task.title}</h1>
            <h2>{task.priority}</h2>
            <h3>{new Date(task.dueDate).toDateString()}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
