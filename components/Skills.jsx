"use client";
import BackgroundCode from "./BackgroundCode";
import SkillCard from "./SkillCard";
import Title from "./Title";
import SideTitle from "./SideTitle";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto relative">
      <SideTitle name="skills" />
      <BackgroundCode
        image="https://toriadev-portfolio.s3.us-west-2.amazonaws.com/background/bg-code-skills.png"
        alignRight={true}
        width={500}
        height={500}
      />
      <div className="mb-80 pt-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center relative">
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
          className="bg-beige-100/60 p-2 md:p-16 rounded-lg shadow-xl z-10 flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-5 gap-4 md:gap-12">
            {skills.map((skill) => (
              <SkillCard url={skill.image} alt={skill.alt} name={skill.name} key={skill.name} />
            ))}
          </div>
        </motion.div>
        <Title name="skills" />
      </div>
    </div>
  );
};

export default Skills;
