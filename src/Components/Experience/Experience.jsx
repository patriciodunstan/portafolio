import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Details = ({ position, companyLink, company, time, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-o w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-pink-600 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-gray-800">{time}</span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });

  return (
    <div className="my-65 mt-4">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experiencia
      </h2>
      <motion.div
        style={{ scaleY: scrollYProgress }}
        ref={ref}
        className="w-[75%] mx-auto relative"
      >
        <motion.div className="absolute left-8 top-0 w-[4px] h-full bg-black origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Desarrollador Front-End"
            companyLink="https://desafiolatam.com/incubadora/"
            company="Desafio Latam"
            time="jun. 2023- sept. 2023"
            work="Encargado de la optimización y actualización de la pagina web devsafio.com, empleando tecnologías como React-Next.js y Tailwind CSS. Experiencia en herramientas como Jira, Git y Figma para una gestión eficaz del proyecto."
          />
        </ul>
      </motion.div>
    </div>
  );
};
export default Experience;
