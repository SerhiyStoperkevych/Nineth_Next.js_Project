'user client';

import React, { useState } from 'react'

export default function GoalForm({ addGoal }: { addGoal: (goal: any) => void }) {

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [targetDate, setTargetDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addGoal({ name, description, targetDate });
        setTargetDate('');
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} >
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
            <input 
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
            />
            <button type='submit'>Add Goal</button>
        </form>
    )
}