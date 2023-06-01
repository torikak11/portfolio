"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BackgroundCode = ({ image, alignRight, width, height, alt }) => {
  return (
    <motion.div
      initial={{
        y: -50,
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
        alt={alt}
        width={width}
        height={height}
        className={
          alignRight
            ? "absolute top-[50px] right-[20px] opacity-50"
            : "absolute top-[50px] left-[30px] opacity-50"
        }
      />
    </motion.div>
  );
};

export default BackgroundCode;