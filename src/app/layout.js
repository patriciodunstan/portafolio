import './globals.css';
import { NavBar } from '@/Components/NavBar/NavBar';
import { Footer } from '@/Components/Footer/Footer';

export const metadata = {
  title: 'PortafolioPdunstan',
  description: 'portafolio'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
