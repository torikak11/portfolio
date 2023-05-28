"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-row items-center justify-between p-6 z-20 mx-auto bg-beige-100/20">
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
        <SocialIcon bgColor="transparent" fgColor="#B6A79D" target="_blank" />
        <SocialIcon
          url="mailto:victoriakratzke@gmail.com"
          bgColor="transparent"
          fgColor="#B6A79D"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/victorializzi"
          bgColor="transparent"
          fgColor="#B6A79D"
          target="_blank"
        />
        <SocialIcon
          url="https://www.github.com/torikak11"
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
        <a href="#hero">
          <div className="w-20 text-center navText">Home</div>
        </a>
        <a href="#projects">
          <div className="w-20 text-center navText">Projects</div>
        </a>
        <div className="w-20 text-center">
          <p className="navText">Resume</p>
        </div>
        <a href="#contact">
          <button className="w-20 text-center navText">Contact</button>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
