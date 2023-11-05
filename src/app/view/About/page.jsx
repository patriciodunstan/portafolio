'use client';
import { AnimatedText } from '../../../Components/AnimatedText/AnimatedText';
import profilebiografia from '../../../../public/profilebiografia2.png';
import Image from 'next/image';
import { useSpring, useMotionValue, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Skills from '../../../Components/Skills/Skills';
import Experience from '../../../Components/Experience/Experience';
import Education from '../../../Components/Education/Education';
import TransitionEffect from '@/Components/TransitionEffect/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
};

const About = () => {
  return (
    <>
    <TransitionEffect/>
      <div className="flex items-center justify-center flex-col w-full dark:text-white">
        <div className="pt-16">
          <AnimatedText
            text="Cada Día Mejor"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
        </div>
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-gray-700 dark:text-white">
              Biografia
            </h2>
            <p className="font-medium">
              Soy Patricio Dunstan un apasionado y comprometido profesional con
              una trayectoria de 5 años en el rubro de maquinaria. Durante este
              tiempo, he desarrollado habilidades sólidas en trabajo en equipo y
              resolución de problemas.
            </p>
            <p className="font-medium my-4">
              He emprendido un emocionante cambio de rumbo hacia el desarrollo
              web. Esta transición ha sido impulsada por mi deseo de explorar mi
              creatividad y mi fascinación por crear experiencias digitales.
            </p>
            <p className="font-medium">
              Creo firmemente en la importancia de mantener un ambiente laboral
              positivo y colaborativo, donde la comunicación y el apoyo entre
              colegas son fundamentales. A lo largo de mi carrera, he tenido el
              privilegio de trabajar en equipos multidisciplinarios, lo que me
              ha permitido aprender y crecer a partir de las experiencias,
              conocimientos y habilidades de mis compañeros.
            </p>
          </div>
          <div
            className="col-span-3 relative rounded-2xl border-2 border-solid border-black
        bg-white p-8 dark:bg-black dark:border-white xl:col-span-4 md:order-1 md:col-span-8"
          >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" />
            <Image
              src={profilebiografia}
              alt="profilebiografia"
              className="w-full h-full rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end gap-16 pt-16 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                3
              </span>
              <h2 className="text-xl font-medium capitalize text-gray-800 dark:text-gray-100 xl:text-center md:text-lg sm:text-base xs:text-sm">
                proyectos completados
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                1
              </span>
              <h2 className="text-xl font-medium capitalize text-gray-800 dark:text-gray-100 xl:text-center md:text-lg sm:text-base xs:text-sm">
                años experiencia
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </div>
    </>
  );
};
export default About;
