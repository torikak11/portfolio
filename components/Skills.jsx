"use client";
import BackgroundCode from "./BackgroundCode";
import SkillCard from "./SkillCard";
import Title from "./Title";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto relative">
      <BackgroundCode
        image="/../public/images/bg-code-skills.png"
        alignRight={true}
        width={300}
        height={300}
      />
      <div className="py-40 flex flex-col md:flex-row justify-center md:justify-between items-center relative">
        <motion.div
          initial={{
            y: 100,
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
          className="bg-white/70 w-[700px] h-[400px] rounded-lg z-10 flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-5 gap-10">
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </div>
        </motion.div>
        <Title name="skills" />
      </div>
    </div>
  );
};

export default Skills;
