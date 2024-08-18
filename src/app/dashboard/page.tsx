import { useSession } from 'next-auth/react';
import TaskList from '../components/TaskList';
import ProjectList from '../components/ProjectList';
import GoalList from '../components/GoalList';

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
            <TaskList/>
            <ProjectList/>
            <GoalList/>
        </div>
    )
}