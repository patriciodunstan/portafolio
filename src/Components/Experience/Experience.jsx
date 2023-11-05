import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from '../LiIcon/LiIcon';

/**
 * Renders details of a position at a company.
 *
 * @param {Object} position - The position object containing information about the position.
 * @param {string} position.position - The position title.
 * @param {string} position.companyLink - The link to the company website.
 * @param {string} position.company - The name of the company.
 * @param {string} position.time - The duration of the position.
 * @param {string} position.work - The description of the work done.
 * @return {JSX.Element} - The rendered details component.
 */
const Details = ({ position, companyLink, company, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-o w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        trantion={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-pink-600 dark:text-green-300 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-gray-800 dark:text-gray-200 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:md-16">
        Experiencia
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white
        md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Desarrollador Front-End"
            companyLink="https://desafiolatam.com/incubadora/"
            company="Desafio Latam"
            time="jun. 2023- sept. 2023"
            work="Encargado de la optimización y actualización de la pagina web devsafio.com, empleando tecnologías como React-Next.js y Tailwind CSS. Experiencia en herramientas como Jira, Git y Figma para una gestión eficaz del proyecto."
          />

          <Details
            position="Desarrollador Front-End"
            companyLink="https://desafiolatam.com/incubadora/"
            company="Desafio Latam"
            time="jun. 2023- sept. 2023"
            work="Encargado de la optimización y actualización de la pagina web devsafio.com, empleando tecnologías como React-Next.js y Tailwind CSS. Experiencia en herramientas como Jira, Git y Figma para una gestión eficaz del proyecto."
          />
          <Details
            position="Desarrollador Front-End"
            companyLink="https://desafiolatam.com/incubadora/"
            company="Desafio Latam"
            time="jun. 2023- sept. 2023"
            work="Encargado de la optimización y actualización de la pagina web devsafio.com, empleando tecnologías como React-Next.js y Tailwind CSS. Experiencia en herramientas como Jira, Git y Figma para una gestión eficaz del proyecto."
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
