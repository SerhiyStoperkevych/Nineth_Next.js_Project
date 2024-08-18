'use client';

import React, {useState} from 'react'
import TaskForm from './TaskForm';

export default function TaskList() {

    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: any) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <h2>Task List</h2>
            <TaskForm addTask={addTask} />
            <ul>
                {tasks.map((msg) => (
                    <li key={msg._id}>{msg.title}</li>
                ))}
            </ul>
        </div>
    )
}