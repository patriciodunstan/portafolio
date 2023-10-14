'use client';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { useRouter } from 'next/navigation';
import { GithubIcon, LinkedInIcon } from '../Icons/Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export function NavBar() {
  return (
    <header className="py-8 px-24 w-full font-medium flex items-center justify-between">
      <nav className="flex flex-row">
        <CustomLink href="/" title="Inicio" className="mr-4 text-black" />

        <CustomLink
          href="/view/About"
          title="Acerca de Mi"
          className="mx-4 text-black"
        />

        <CustomLink
          href="/view/Projects"
          title="Proyectos"
          className="mx-4 text-black"
        />

        <CustomLink
          href="/Contact"
          title="Contacto"
          className="ml-4 text-black"
        />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/patriciodunstan"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/patriciodunstan"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
}
