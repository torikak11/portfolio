"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BackgroundCode = ({ image, alignRight, width, height }) => {
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
    >
      <Image
        src={image}
        alt="background-text"
        width={width}
        height={height}
        className={
          alignRight
            ? "absolute top-[290px] right-[30px] opacity-60"
            : "absolute top-[290px] left-[30px] opacity-60"
        }
      />
    </motion.div>
  );
};

export default BackgroundCode;