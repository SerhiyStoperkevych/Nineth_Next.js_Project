import '../styles/globals.css';
import SessionProviderWrapper from './components/SessionProviderWrapper';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <Navbar/>
          <main className="container mx-auto p-4 min-h-screen max-w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {children}
          </main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
