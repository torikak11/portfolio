import BackgroundCode from "./BackgroundCode";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto relative">
      <BackgroundCode
        image="/../public/images/bg-code-skills.png"
        alignRight={true}
        width={300}
        height={300}
      />
      <div className="h-screen flex flex-col md:flex-row justify-center md:justify-between items-center relative">
        <div className="bg-white/60 w-[700px] h-[400px] rounded-lg z-10 flex flex-col items-center justify-center">
          skills
        </div>
        <Title name="skills" />
      </div>
    </div>
  );
};

export default Skills;
