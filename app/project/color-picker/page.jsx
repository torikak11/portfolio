import Footer from "@components/Footer";
import ProjectInfo from "@components/ProjectInfo";
import { projectInfo } from "@constants";

const Project = () => {
  return (
    <div className="text-black h-screen scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-rounded-full scrollbar-track-beige-100/40 scrollbar-thumb-beige-200/60">
      <ProjectInfo data={projectInfo[0]} />
      <Footer />
    </div>
  );
};

export default Project;
