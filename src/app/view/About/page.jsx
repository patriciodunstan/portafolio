'use client';
import { AnimatedText } from '../../../Components/AnimatedText/AnimatedText';
import profilebiografia from '../../../../public/profilebiografia2.png';
import Image from 'next/image';
import { useSpring, useMotionValue, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Skills from '../../../Components/Skills/Skills';
import Experience from '../../../Components/Experience/Experience';

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
      <div className="flex items-center justify-center flex-col w-full">
        <AnimatedText text="Mejor Cada Día" className="pt-16 mb-16" />
      </div>
      <div className="grid w-full grid-cols-8 gap-16">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase text-gray-700">
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
            privilegio de trabajar en equipos multidisciplinarios, lo que me ha
            permitido aprender y crecer a partir de las experiencias,
            conocimientos y habilidades de mis compañeros.
          </p>
        </div>
        <div
          className="col-span-3 relative rounded-2xl border-2 border-solid border-black
        bg-white p-8"
        >
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gray-900" />
          <Image
            src={profilebiografia}
            alt="profilebiografia"
            className="w-full h-full rounded-2xl"
            priority={true}
          />
        </div>
        <div className="col-span-2 flex flex-col items-end gap-16 pt-16">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">3</span>
            <h2 className="text-xl font-medium capitalize text-gray-800">
              proyectos completados
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">1</span>
            <h2 className="text-xl font-medium capitalize text-gray-800">
              años experiencia
            </h2>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
    </>
  );
};
export default About;
