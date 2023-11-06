import Image from "next/image"
import profilePic from "../../public/mokker.png"
import { AnimatedText } from "@/Components/AnimatedText/AnimatedText"
import Link from "next/link"
import { LinkArrow } from "@/Components/Icons/Icons"
import HireMe from "@/Components/HireMe/HireMe"
import TransitionEffect from "@/Components/TransitionEffect/TransitionEffect"

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-black w-full min-h-screen dark:text-white">
        <div className="pt-0 md:p-16 sm:p-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <Image
              src={profilePic}
              alt="hero"
              className="w-1/3 h-auto lg:hidden md:inline-block md:w-full"
              priority
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 50vw"
            />
            <div className="w-2/3 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Desarrollador Web"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Como desarrollador Web, estoy dedicado a convertir ideas en
                innovadores aplicaciones. Explora mis proyectos los cuales
                muestran mi experiencia en React-nextjs y desarrollo web
              </p>
              <div className="flex items-center sefl-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/drive/folders/1eTL3MhiVa6p8O_lgtJgyrVz-jZ1Es_fs?usp=drive_link"
                  target={"_blank"}
                  className="flex items-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-white hover:text-black border border-solid border-transparent hover:border-black
                dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white hover:dark:border-white
                md:p-2 md:px-4 md:text-base
                "
                >
                  Curriculum <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:patricio.dunstan@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-black underline dark:text-white m:text-base"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
          <HireMe />
        </div>
      </main>
    </>
  )
}
