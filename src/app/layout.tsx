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
          <main className="container mx-auto p-4">
            {children}
          </main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
