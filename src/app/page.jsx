import Image from 'next/image';
import profilePic from '../../public/mokker.png';
import { AnimatedText } from '@/Components/AnimatedText/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/Components/Icons/Icons';
import HireMe from '@/Components/HireMe/HireMe';
export default function Home() {
  return (
    <>
      <main className="flex items-center text-black w-full min-h-screen">
        <div className="flex items-center justify-between w-full">
          <Image src={profilePic} alt="hero" className="w-1/3 h-auto" />
          <div className="w-2/3 flex flex-col items-center self-center pl-4">
            <AnimatedText
              text="Desarrollador Front-End"
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              Como desarrollador fron-end, estoy dedicado a convertir ideas en
              innovadores aplicaciones web. Explora mis proyectos los cuales
              muestran mi experiencia en React-nextjs y desarrollo web
            </p>
            <div className="flex items-center sefl-start mt-2">
              <Link
                href="https://drive.google.com/file/d/1tEl6lEWHh1aBqQjFaKqSaPA5Eri52XLt/view?usp=drive_link"
                target={'_blank'}
                className="flex items-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-white hover:text-black border border-solid border-transparent hover:border-black
                "
              >
                Curriculum <LinkArrow className={'w-6 ml-1'} />
              </Link>
              <Link
                href="mailto:patricio.dunstan@gmail.com"
                target={'_blank'}
                className="ml-4 text-lg font-medium capitalize text-black underline"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
        <HireMe />
      </main>
    </>
  );
}
