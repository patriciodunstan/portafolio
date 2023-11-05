export function Footer() {
  return (
    <footer className="w-full border-t-2 border solid border-black font-medium text-lg dark:text-white dark:border-white sm:text-base">
      <div className="py-8 flex items-center justify-betwee lg:flex-col lg:py-6" >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      </div>
    </footer>
  );
}
