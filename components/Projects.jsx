import BackgroundCode from "./BackgroundCode";
import SideTitle from "./SideTitle";
import Title from "./Title";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto relative">
      <SideTitle name="projects" />
      <BackgroundCode
        image="/../public/images/bg-code-home.png"
        alignRight={false}
        width={700}
        height={700}
      />
      <div className="py-52 px-10 flex flex-row justify-between items-center relative">
        <Title name="projects" />
      </div>
    </div>
  );
};

export default Projects;
