'user client';

import React, { useState } from 'react'
import GoalForm from './GoalForm';

export default function GoalList() {

    const [goals, setGoals] = useState<string[]>([]);

    const addGoal = (goal: any) => {
        setGoals([...goals, goal]);
    };

    return (
        <div>
            <h2>Goals</h2>
            <GoalForm addGoal={addGoal}/>
            <ul>
                {goals.map((msg) => (
                    <li key={msg._id}>{msg.name}</li>
                ))}
            </ul>
        </div>
    )
}