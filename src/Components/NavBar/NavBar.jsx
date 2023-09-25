'use client';
import Link from 'next/link';

export function NavBar() {
  return (
    <header className="py-6 px-10 grid top-0 w-full bg-black">
      <nav className="flex justify-end">
        <ul className="flex space-x-6 items-center ">
          <li>
            <Link className="white-text" href="#About">
              <p className="text-white">About</p>
            </Link>
          </li>
          <li>
            <Link className="white-text" href="#Projects">
              <p className="text-white">Projects</p>
            </Link>
          </li>
          <li>
            <Link className="white-text" href="#Contact">
              <p className="text-white">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
