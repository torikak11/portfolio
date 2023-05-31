"use client";
import Image from "next/image";
import React from "react";
import SkillTags from "./SkillTags";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className="py-10 px-5 rounded-lg shadow-xl bg-beige-100-50 flex flex-col md:flex-row gap-10 justify-center items-center z-10"
    >
      <Image
        src="/../public/images/color-picker-01.png"
        alt="Screenshot of the color picker chrome extension"
        height={300}
        width={400}
        className="rounded object-cover"
      />
      <div className="flex flex-col gap-6">
        <h4 className="font-primary tracking-widest text-lg text-black uppercase ">
          Color Picker Chrome Extension
        </h4>
        <p className="font-secondary ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ultricies felis leo, sed varius risus semper eu. Vivamus auctor
          fringilla ipsum sed blandit. Aliquam egestas sollicitudin posuere.
          Mauris ante mauris, scelerisque at mattis quis, rhoncus a augue. Donec
          et metus id erat euismod iaculis. Mauris vehicula quam eu elit iaculis
          molestie.
        </p>
        <div className="flex flex-row items-end gap-2">
          <SkillTags />
          <SkillTags />
          <SkillTags />
          <SkillTags />
          <SkillTags />
        </div>
        <div className="flex flex-row items-center gap-10 mt-4">
          <button className="primaryButton">view project</button>
          <button className="primaryButton">git hub</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
