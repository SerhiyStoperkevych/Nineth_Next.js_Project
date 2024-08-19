"use client";

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Dashboard() {

    const {data: session, status} = useSession();

    if (status === "loading") {
        return <p>Loading...</p>
    };

    if (!session) {
        return <p>You need to sign in to access the dashboard.</p>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <Link href={'/task'}>TaskList</Link>
                <Link href={'/project'}>ProjectList</Link>
                <Link href={'/goal'}>GoalList</Link>
            </div>
        </div>
    )
}