"use client";
import React from "react";
import BackgroundCode from "./BackgroundCode";
import SideTitle from "./SideTitle";
import Title from "./Title";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <SideTitle name="about me" />
      <BackgroundCode
        image="/../public/images/bg-code-home.png"
        alignRight={true}
        width={700}
        height={700}
      />
      <div className="my-80 pt-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
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
          className="bg-beige-100/60 w-[800px] h-[500px] px-8 rounded-lg shadow-xl z-10 flex flex-col gap-6 items-center justify-center"
        >
          <p className="font-secondary">
            <span className="text-orange text-lg">Hello again!</span> Thanks for
            making it this far! I graduated with a{" "}
            <span className="text-orange">Bachelor's in Mathematics</span> in
            2020, but soon after cultivated a love for coding. Fast forward to
            2022, and I decided to take some more programming classes while I
            worked as a teacher. Since then, I have been consistently learning
            and improving my skills to become a full-stack developer and to
            start a career in something that I am passionate about.
          </p>
          <p className="font-secondary">
            When I am not coding, you can find me exploring the{" "}
            <span className="text-orange">outdoors</span> with my husband,
            trying to improve my <span className="text-orange">latte art</span>{" "}
            skills (they are non-existent at the moment, but I am determined!),
            playing a <span className="text-orange">game</span> on my Nintendo
            Switch, or enjoying a good <span className="text-orange">book</span>
            .
          </p>
          <p className="font-secondary">
            If you would like a more concise overview of my work experience,
            here is a link to my resume!
          </p>
          <button className="primaryButton">resume</button>
        </motion.div>
        <div className="flex flex-col gap-8">
          <Title name="about" />
          <Title name="me" />
        </div>
      </div>
    </div>
  );
};

export default About;
