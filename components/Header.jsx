"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-row items-center justify-between p-5 max-w-7xl mx-auto z-20">
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
        className="flex flex-row items-center gap-4"
      >
        <SocialIcon bgColor="transparent" fgColor="#14110F" />
        <SocialIcon
          url="mailto:victoriakratzke@gmail.com"
          bgColor="transparent"
          fgColor="#14110F"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/victorializzi"
          bgColor="transparent"
          fgColor="#14110F"
        />
        <SocialIcon
          url="https://www.github.com/torikak11"
          bgColor="transparent"
          fgColor="#14110F"
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
        <div className="w-20 text-center">
          <p className="nav-text">Home</p>
        </div>
        <div className="w-20 text-center">
          <p className="nav-text">Projects</p>
        </div>
        <div className="w-20 text-center">
          <p className="nav-text">Resume</p>
        </div>
        <div className="w-20 text-center">
          <p className="nav-text">Contact</p>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
