'use client';
import './globals.css';
import { NavBar } from '@/Components/NavBar/NavBar';
import { Footer } from '@/Components/Footer/Footer';
import { useEffect } from 'react';
import { metadata } from '@/util/metadata';
import Script from 'next/script';

export default function RootLayout({ children, className = '' }) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="pt-0 dark:bg-black">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
        if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
      `}
        </Script>
        <NavBar />
        <section
          className={`w-full h-full inline-block z-0 bg-white p-32 pt-1 px-2 dark:bg-black${className}`}
        >
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
