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
        <div className="flex flex-col justify-center items-center text-white shadow-lg rounded-lg bg-purple-600 h-screen p-4">
            <h1 className="text-3xl font-semibold mb-0">Dashboard</h1>
            <div className="flex flex-row space-x-4 text-2xl font-bold mt-2">
                <Link href={'/task'} className="hover:text-purple-300">TaskList</Link>
                <Link href={'/project'} className="hover:text-purple-300">ProjectList</Link>
                <Link href={'/goal'} className="hover:text-purple-300">GoalList</Link>
            </div>
        </div>
    )
}