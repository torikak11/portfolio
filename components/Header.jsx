"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { getSocials } from "@lib/sanity.utils";


export default async function Header() {
  const socials = await getSocials();
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            bgColor="transparent"
            fgColor="#B6A79D"
            target="_blank"
          />
        ))}
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
}
