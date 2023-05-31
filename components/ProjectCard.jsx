"use client";
import Image from "next/image";
import React from "react";
import SkillTags from "./SkillTags";
import { motion } from "framer-motion";

const ProjectCard = ({ title, summary, image, alt, tags, gitHub }) => {
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
        delay: 1,
      }}
      viewport={{
        once: true,
      }}
      className="py-10 px-5 rounded-lg shadow-xl bg-beige-100-50 flex flex-col md:flex-row gap-10 justify-between items-center z-10"
    >
      <div className=" flex justify-center max-h-80 rounded-xl">
        <Image
          src={image}
          alt={alt}
          height={400}
          width={600}
          className="rounded object-contain"
        />
      </div>
      <div className="flex flex-col gap-6 max-w-md">
        <h4 className="font-primary tracking-widest text-lg text-black uppercase ">
          {title}
        </h4>
        <p className="font-secondary ">{summary}</p>
        <div className="flex flex-row items-end gap-2">
          {tags.map((tag) => (
            <SkillTags tag={tag} />
          ))}
        </div>
        <div className="flex flex-row items-center gap-10 mt-4">
          <button className="primaryButton">view project</button>
          <a className="primaryButton" href={gitHub} target="_blank">
            git hub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
