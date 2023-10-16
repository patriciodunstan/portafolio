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
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-o w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        trantion={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-gray-800">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });

  return (
    <div className="my-65 mt-4">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Educación</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Tecnico Informatico"
            time="2022-2024"
            place="Instituto Profesional Providencia(IPP)"
            info="domina los lenguajes de programación más usados en las empresas; además, cuenta con habilidades transversales que aportan en la operatoria, la gestión, la vida y la toma de decisiones de las organizaciones sobre desarrollar, mantener y/o mejorar los sistemas informáticos."
          />

          <Details
            type="Ingenieria en maquinaria, mecanica automotriz y sistemas electronicos"
            time="2007-2014"
            place="Universidad tecnologica de chile(INACAP)"
            info="capacitado para desempeñarse en actividades relacionadas con la gestión, administración, planificación, elaboración y evaluación de proyectos, interactuando con el conjunto de profesionales y técnicos de un taller de servicio, principalmente en empresas del sector automotriz tales como importadoras y comercializadoras de repuestos y vehículos automotrices, talleres de servicio técnico de transporte público y privado También podrá ejercer libremente la profesión como empresario subcontratista participando en proyectos y asesorías técnicas externas en temáticas de la especialidad"
          />
        </ul>
      </div>
    </div>
  );
};
export default Education;
