"use client"
import Link from "next/link"
import Logo from "../Logo/Logo"
import { useRouter } from "next/navigation"
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "../Icons/Icons"
import { motion } from "framer-motion"
import ThemeSwitcher from "@/Components/ThemeSwitcher/ThemeSwitcher"
import { useState } from "react"

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.pathname === href ? "w-full" : "w-0"}
      dark:bg-white`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter()
  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-white dark:text-black my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
        h-[1px] inline-block w-0 bg-white absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.pathname === href ? "w-full" : "w-0"}
      dark:bg-black`}
      >
        &nbsp;
      </span>
    </button>
  )
}

export function NavBar() {
  const [mode, setMode] = ThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="py-8 px-24 w-full font-medium flex items-center justify-between dark:text-white relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? " rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? " opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? " -rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex flex-row">
          <CustomLink href="/" title="Inicio" className="mr-4 " />

          <CustomLink
            href="/view/About"
            title="Acerca de Mi"
            className="mx-4 "
          />

          <CustomLink
            href="/view/Projects"
            title="Proyectos"
            className="mx-4 "
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/patriciodunstan"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/patriciodunstan"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-black"} />
            ) : (
              <MoonIcon className={"fill-black"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-black dark:bg-gray-200 rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Inicio"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/view/About"
              title="Acerca de Mi"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/view/Projects"
              title="Proyectos"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/patriciodunstan"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/patriciodunstan"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-white rounded-full dark:bg-black sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-black"} />
              ) : (
                <MoonIcon className={"fill-black"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  )
}
