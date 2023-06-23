"use client";
import { motion } from "framer-motion";

const Title = ({ name }) => {
  const firstLetter = name.slice(0, 1);
  const lastLetters = name.slice(1);
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="hidden lg:flex flex-col w-[60px] justify-center"
    >
      <h2 className="font-primary text-6xl uppercase text-orange text-center">
        {firstLetter}
      </h2>
      <h2 className="font-primary text-6xl uppercase break-words text-center leading-tight">
        {lastLetters}
      </h2>
    </motion.div>
  );
};

export default Title;
