"use client"
import Image from "next/image";

const SkillCard = ({ url, title, alt }) => {
  return (
    <div className="group hover:scale-110 relative flex justify-center cursor-pointer bg-white h-20 w-20 rounded-xl">
      <Image
        src="/../public/images/html5.png"
        alt={alt}
        height={50}
        width={50}
        className="filter group-hover:grayscale transition duration-300 ease-in-out object-contain"
      />
      <div className="absolute opacity-0 group-hover:opacity-90 group-hover:bg-white rounded-xl h-20 w-20 transition duration-300 ease-in-out ">
        <div className="flex items-center justify-center h-full">
          <p className="font-secondary text-md text-black opacity-100">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
