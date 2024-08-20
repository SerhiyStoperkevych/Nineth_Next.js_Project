"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-row bg-gradient-to-r from-purple-600 to-purple-500">
      <h1 className="justify-start m-6 py-2 text-white font-bold">Productivity App</h1>
      <div className="flex-1 flex justify-end m-6 font-bold">
        {!session ? (
          <button 
          onClick={() => signIn()} 
          className="text-white bg-purple-800 rounded-lg shadow-lg py-2 px-4 
                     hover:ring-4 hover:ring-violet-500 hover:bg-purple-600 
                     transform transition-all duration-300 ease-out hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-50
                     ">
                        Sign in
                      </button>
        
        ) : (
          <div className="flex items-center justify-center space-x-4 mx-4">
            <span className="text-white">Signed in as {session.user?.name}</span>
            <Link href={'/dashboard'} className="text-white bg-purple-800 rounded-lg shadow-lg py-2 px-4 
                     hover:ring-4 hover:ring-violet-500 hover:bg-purple-600 
                     transform transition-all duration-300 ease-out hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-50">Dashboard</Link>
            <button onClick={() => signOut()} className="text-white bg-purple-800 rounded-lg shadow-lg py-2 px-4 
                     hover:ring-4 hover:ring-violet-500 hover:bg-purple-600 
                     transform transition-all duration-300 ease-out hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-50">Sign out</button>
          </div>
        )}
      </div>
    </nav>
  );
}
