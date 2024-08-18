'user client';

import React, { useState } from 'react'

export default function ProjectForm({ addProject }: { addProject: (project: any) => void }) {

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProject({ name, description });
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
                placeholder='Name...'
                required
            />
            <input 
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description...'
            />
            <button type='submit'>Add Project</button>
        </form>
    )
}