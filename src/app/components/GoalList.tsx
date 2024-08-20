'use client';

import React, { useState } from 'react';
import GoalForm from './GoalForm';

interface Goal {
    _id: string;
    name: string;
    description: string;
    targetDate: Date;
}

export default function GoalList() {
    const [goals, setGoals] = useState<Goal[]>([]);

    const addGoal = (goal: Omit<Goal, '_id'>) => {
        // Generate a dummy ID for now. Replace this with actual ID generation if needed.
        const newGoal = { ...goal, _id: Math.random().toString(36).substr(2, 9) };
        setGoals([...goals, newGoal]);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-white text-2xl mb-4 font-bold'>Goals</h2>
            <GoalForm addGoal={addGoal} />
            <ul className="m-4 space-y-4 text-white">
                {goals.map((goal) => (
                    <li key={goal._id} className="bg-teal-700 p-6 shadow-lg rounded-lg hover:bg-teal-600 transition-colors duration-300">
                        <div className="mb-4">
                            <label htmlFor="" className="block text-sm font-semibold">Name:</label>
                            <h1 className="text-xl font-bold">{goal.name}</h1>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-sm font-semibold">Target Date:</label>
                            <h2 className="text-xl font-bold">{goal.targetDate.toDateString()}</h2>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-semibold">Description:</label>
                            <p className="text-xl font-bold">{goal.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
