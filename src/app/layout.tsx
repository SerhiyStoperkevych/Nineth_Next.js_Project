import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Efficiency App",
  description: "Provides a way to more efficiently use group work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {data: session} = useSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Productivity App</h1>
          {session ? (
            <div>
              <span>Signed in as: {session.user?.email}</span>
              <button onClick={() => signOut()}>Sign Out</button>
            </div>
          ) : (
            <button onClick={() => signIn('google')}>Sign in with Google</button>
          )}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
