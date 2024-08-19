"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      <h1>Productivity App</h1>
      <div>
        {!session ? (
          <button onClick={() => signIn()}>Sign in</button>
        ) : (
          <>
            <span>Signed in as {session.user?.name}</span>
            <Link href={'/dashboard'}>Dashboard</Link>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </div>
    </nav>
  );
}
