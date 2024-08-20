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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-purple-600 w-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-white">Goal Form</h1>
            <div>
                <label htmlFor="" className="font-medium text-white"></label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                    placeholder='Name...'
                    required
                />
            </div>
            <div>
                <label htmlFor="" className="font-medium text-white"></label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                    placeholder='Description...'
                />
            </div>
            <div>
                <label htmlFor="" className="font-medium text-white"></label>
                <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                />
            </div>
            <button type='submit' className="text-white bg-purple-800 rounded-lg shadow-lg py-2 px-4 
                     hover:ring-4 hover:ring-violet-500 hover:bg-purple-600 
                     transform transition-all duration-300 ease-out hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-50"
            >Add Goal</button>
        </form>
    );
}
