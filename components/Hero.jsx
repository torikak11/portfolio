"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Title from "./Title";
import BackgroundCode from "./BackgroundCode";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["a Software Engineer.", "a Coffee Enthusiast.", "Victoria Lizzi."],
    loop: 1,
    delaySpeed: 2000,
    cursor: true,
  });

  return (
    <div className="max-w-5xl mx-auto relative">
      <BackgroundCode
        image="/../public/images/bg-code-home.png"
        alignRight={false}
        width={700}
        height={700}
      />
      <div className="h-screen flex gap-10 flex-col md:flex-row items-center justify-center md:justify-between">
        <Title name="welcome" />
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="w-[600px] h-[300px] rounded-lg bg-beige-100-50 flex flex-col justify-center items-center z-10"
        >
          <h1 className="font-secondary text-lg">
            <span>Hi, I'm {text}</span>
            <Cursor cursorColor="#E5A061" />
          </h1>
          <div className="mt-8">
            <Link href="#projects">
              <button className="primaryButton">See More</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
