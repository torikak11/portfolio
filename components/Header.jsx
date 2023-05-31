"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = ({ socials }) => {
  const [current, setCurrent] = useState(1);

  return (
    <header className="sticky top-0 flex flex-row items-center justify-between h-16 px-6 z-20 mx-auto bg-beige-100/30">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-6"
      >
        <SocialIcon
          url="mailto:victoriakratzke@gmail.com"
          bgColor="transparent"
          fgColor="#B6A79D"
          target="_blank"
        />
      </motion.div>
      {/* Navigation */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-12 hidden md:flex"
      >
        <a href="#hero" onClick={() => setCurrent(1)}>
          <div className={current === 1 ? "w-24 text-center activeNavText" : "w-24 text-center navText"}>Home</div>
        </a>
        <a href="#projects" onClick={() => setCurrent(2)}>
          <div className={current === 2 ? "w-24 text-center activeNavText" : "w-24 text-center navText"}>Projects</div>
        </a>
        <a href="#projects" onClick={() => setCurrent(3)}>
          <div className={current === 3 ? "w-24 text-center activeNavText" : "w-24 text-center navText"}>Resume</div>
        </a>
        <a href="#contact" onClick={() => setCurrent(4)}>
          <div className={current === 4 ? "w-24 text-center activeNavText" : "w-24 text-center navText"}>Contact</div>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;