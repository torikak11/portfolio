import BackgroundCode from "./BackgroundCode";
import ProjectCard from "./ProjectCard";
import SideTitle from "./SideTitle";
import Title from "./Title";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto relative">
      <SideTitle name="projects" />
      <BackgroundCode
        image="https://toriadev-portfolio.s3.us-west-2.amazonaws.com/background/bg-code-projects.png"
        alignRight={false}
        width={500}
        height={500}
      />
      <div className="pt-20 flex flex-col lg:flex-row justify-center lg:justify-between gap-52 items-center lg:items-start relative">
        <Title name="projects" />
        <div className="flex flex-col gap-16 mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
