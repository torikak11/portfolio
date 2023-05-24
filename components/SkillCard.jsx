import Image from "next/image";

const SkillCard = () => {
  return (
    <div className="group relative flex justify-center cursor-pointer bg-black h-20 w-20 rounded-xl">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        height={50}
        width={50}
        className="group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-90 group-hover:bg-white rounded-lg h-20 w-20 transition duration-300 ease-in-out ">
        <div className="flex items-center justify-center h-full">
          <p className="font-secondary text-md text-black opacity-100">Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
