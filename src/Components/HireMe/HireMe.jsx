import React from 'react';
import { CircularText } from '../Icons/Icons';
import Link from 'next/link';

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-56 h-auto flex items-center justify-center relative">
        <CircularText
          className={'fill-black animate-spin-slow dark:fill-white'}
        />

        <Link
          href="https://wa.me/56945822142?text=Hola,%20quiero%20cotizar"
          className="flex items-center justify-center
    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm
    shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold 
    hover:bg-white hover:text-black
    dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white hover:dark:border-white"
        >
          Hablemos
        </Link>
      </div>
    </div>
  );
}
