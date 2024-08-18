'use client';

import React, {useState} from 'react'

export default function TaskForm({addTask}: {addTask: (task: any) => void}) {

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
        setPriority('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Task Form</h2>
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title...'
                required
            />
            <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description...'
            />
            <input 
                type="date" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)} >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type='submit'>Add Task</button>
        </form>
    )
}