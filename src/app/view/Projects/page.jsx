import { AnimatedText } from '@/Components/AnimatedText/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/Components/Icons/Icons';
import c10form from '../../../../public/c10form.png';
import apicrud from '../../../../public/apicrud.png';
import TransitionEffect from '@/Components/TransitionEffect/TransitionEffect'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid 
    border-black bg-white shadow-2xl p-12 dark:bg-black dark:border-white
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl dark:bg-white
       xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-pink-500 font-medium text-xl dark:text-green-300 xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold dark:bg-white dark:text-black 
            sm:px-4 sm:text-base"
          >
            Visita Proyecto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid 
    border-black bg-white p-6  dark:bg-black dark:border-white xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-pink-500 font-medium text-xl dark:text-green-300 lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-white lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visita
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
            {''}
          </Link>
        </div>
      </div>
    </article>
  );
};
function Projects() {
  return (
    <>
      <TransitionEffect />
      <div className="w-full mb-16 flex flex-col items-center justify-center dark:text-white">
        <div className="pt-16">
          <AnimatedText
            text="Cada Día Mejor"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Pagina Web Devsafio"
                img={c10form}
                summary="Actualización y mejora para la pagina de cliente Devsafio, trabajo realizado en celula 10 de incubadora Desafio Latam"
                link="https://c10-frontend.vercel.app/"
                github="https://github.com/patriciodunstan/c10-frontend"
                type="Proyecto de equipo"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NodeJs Api Crud"
                img={apicrud}
                link="https://github.com/patriciodunstan/node-CRUD-API"
                github="https://github.com/patriciodunstan/node-CRUD-API"
                type="Proyecto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
