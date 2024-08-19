'use client';

import React, { useState } from 'react';

interface GoalFormProps {
    addGoal: (goal: Omit<Goal, '_id'>) => void;
}

interface Goal {
    _id: string;
    name: string;
    description: string;
    targetDate: Date;
}

export default function GoalForm({ addGoal }: GoalFormProps) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [targetDate, setTargetDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newGoal = {
            name,
            description,
            targetDate: new Date(targetDate) // Convert string to Date object
        };
        addGoal(newGoal);
        setTargetDate('');
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
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
    );
}
