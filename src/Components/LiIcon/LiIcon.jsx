"use client"
import { motion, useScroll } from "framer-motion"
const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  })
  return (
    <figure className="absolute left-0 stroke-black dark:stroke-white">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-pink-500 dark:stroke-green-300 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-white dark:fill-black"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-pink-500 dark:fill-green-300"
        />
      </svg>
    </figure>
  )
}
export default LiIcon
