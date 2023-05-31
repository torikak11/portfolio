"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Title from "./Title";
import BackgroundCode from "./BackgroundCode";
import Link from "next/link";

export default function Hero({ pageInfo, bgImages }) {
  const [text, count] = useTypewriter({
    words: [
      "a Full-Stack Developer.",
      "a Coffee Enthusiast.",
      "Victoria Lizzi.",
    ],
    loop: 1,
    delaySpeed: 2000,
    cursor: true,
  });

  return (
    <div className="max-w-6xl mx-auto relative">
      <BackgroundCode
        image="/../public/images/bg-code-home.png"
        alt=""
        alignRight={false}
        width={700}
        height={700}
      />
      <div className="h-screen flex gap-10 flex-col lg:flex-row items-center justify-center lg:justify-between">
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
          className="w-[700px] h-[400px] rounded-lg shadow-xl bg-beige-100-50 flex flex-col justify-center items-center z-10"
        >
          <h1 className="font-secondary text-lg text-black">
            <span>Hi, I'm {text}</span>
            <Cursor cursorColor="#E5A061" />
          </h1>
          <p className="mx-6 mt-5 text-center font-secondary text-black">
            I strive to create intuitive designs and seek opportunities to learn
            and grow. Feel free to check out my projects below or continue
            exploring!
          </p>
          <div className="mt-8">
            <Link href="#projects">
              <button className="primaryButton">projects</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
