"use client";
import Image from "next/image";
import React from "react";
import SkillTags from "./SkillTags";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ title, summary, image, alt, tags, gitHub, slug }) => {
  const fullSlug = "/project/" + slug;

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
      className="md:pr-4 h-[800px] md:h-[340px] rounded-lg shadow-xl bg-beige-100-50 flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center z-10"
    >
      <div className="w-9/12 md:w-5/12 h-full">
        <img
          src={image}
          alt={alt}
          className="object-cover h-full w-full  md:rounded-l-xl"
        />
      </div>
      <div className="flex flex-col gap-6 max-w-md">
        <h4 className="font-primary tracking-widest text-lg text-black uppercase mt-6">
          {title}
        </h4>
        <p className="font-secondary ">{summary}</p>
        <div className="flex flex-row items-end gap-2">
          {tags.map((tag) => (
            <SkillTags tag={tag} />
          ))}
        </div>
        <div className="flex flex-row items-center gap-10 mt-4 mb-6">
          <Link className="primaryButton" href={fullSlug}>view project</Link>
          <a className="primaryButton" href={gitHub} target="_blank">
            git hub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
