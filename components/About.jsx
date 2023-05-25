import React from "react";
import BackgroundCode from "./BackgroundCode";
import SideTitle from "./SideTitle";
import Title from "./Title";

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
      <div className="mb-80 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div></div>
        <div className="flex flex-col gap-8">
            <Title name="about" />
            <Title name="me" />
        </div>
      </div>
    </div>
  );
};

export default About;
