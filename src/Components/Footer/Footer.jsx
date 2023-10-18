export function Footer() {
  return (
    <footer className="w-full border-t-2 border solid border-black font-medium text-lg dark:text-white dark:border-white">
      <div className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      </div>
    </footer>
  );
}
