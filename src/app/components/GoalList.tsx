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
        <div>
            <h2>Goals</h2>
            <GoalForm addGoal={addGoal} />
            <ul>
                {goals.map((goal) => (
                    <li key={goal._id}>
                        <h1>{goal.name}</h1>
                        <h2>{goal.targetDate.toDateString()}</h2>
                        <p>{goal.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
