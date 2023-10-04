import './globals.css';
import { NavBar } from '@/Components/NavBar/NavBar';
import { Footer } from '@/Components/Footer/Footer';

export const metadata = {
  title: 'PortafolioPdunstan',
  description: 'portafolio'
};

export default function RootLayout({ children, className = '' }) {
  return (
    <html lang="en">
      <body className="pt-0">
        <NavBar />
        <section
          className={`w-full h-full inline-block z-0 bg-white p-32 pt-1 px-2 ${className}`}
        >
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
