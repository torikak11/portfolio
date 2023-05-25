"use client";
import BackgroundCode from "./BackgroundCode";
import SkillCard from "./SkillCard";
import Title from "./Title";
import SideTitle from "./SideTitle";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <SideTitle name="skills" />
      <BackgroundCode
        image="/../public/images/bg-code-skills.png"
        alignRight={true}
        width={300}
        height={300}
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
          className="bg-beige-100/60 w-[800px] h-[500px] rounded-lg shadow-xl z-10 flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-5 gap-12">
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
