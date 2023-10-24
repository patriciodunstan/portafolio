'use client';

import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black
          curosor-pointer absolute dark:text-black dark:bg-white "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">
        Conocimientos
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black
          curosor-pointer dark:text-dark dark:bg-white"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>

        <Skill name="HTML" x="-27vw" y="0vw" />
        <Skill name="CSS" x="0vw" y="-12vw" />
        <Skill name="JavaScript" x="27vw" y="0vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-29vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="26vw" y="18vw" />
      </div>
    </>
  );
}
export default Skills;
