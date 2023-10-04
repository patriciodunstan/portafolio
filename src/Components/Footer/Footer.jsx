import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t-2 border solid border-black font-medium text-lg">
      <div className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      </div>
    </footer>
  );
}
