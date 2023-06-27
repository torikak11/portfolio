import Footer from "@components/Footer";
import { projectInfo } from "@constants";
import Image from "next/image";
import { IoReturnDownBackOutline } from "react-icons/io5";

const Project = () => {
  const data = projectInfo[0];

  return (
    <div className="text-black h-screen scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-rounded-full scrollbar-track-beige-100/40 scrollbar-thumb-beige-200/60">
      <div className="max-w-6xl mx-auto relative flex flex-col gap-6">
        <div className="flex flex-row items-center gap-4 p-6 ">
          <IoReturnDownBackOutline color="orange" size={22} />
          <a
            href="/#projects"
            className="font-secondary text-black hover:text-orange"
          >
            back to home
          </a>
        </div>
        {/* Main Project Image */}
        <div className="flex justify-center items-center rounded-xl ">
          <Image
            src={data.image}
            alt={data.alt}
            width={1000}
            height={1000}
            className="rounded-xl object-contain"
          />
        </div>
        <div className="px-6 md:px-36 flex flex-col justify-evenly gap-10 pb-24">
          {/* title */}
          <h1 className="font-primary uppercase tracking-widest text-xl text-orange">
            {data.title}
          </h1>
          {/* short summary */}
          <p className="font-secondary text-body">{data.summary}</p>
          {/* live site */}
          <div className="flex md:flex-row justify-evenly align-center">
            <a className="staticButton" href={data.link[0]} target="_blank">
              Sprout GitHub
            </a>
            <a className="staticButton" href={data.link[1]} target="_blank">
              Sprout API GitHub
            </a>
          </div>
          {/* video */}
          <h4 className="font-primary uppercase tracking-widest text-xl text-orange mt-6">
            app demo
          </h4>
          <div className="flex justify-center">
            <video
              autoPlay
              loop
              muted
              style={{ width: 300, height: 500 }}
            >
              <source src="/sprout-demo.mp4" type="video/mp4" />
            </video>
          </div>
          {/* project explanation */}
          <h4 className="font-primary uppercase tracking-widest text-xl text-orange mt-6">
            project overview
          </h4>
          {data.overview.map((item) => (
            <p className="font-secondary text-sm">{item}</p>
          ))}
          {/* future aspirations */}
          <h4 className="font-primary uppercase tracking-widest text-xl text-orange mt-6">
            future improvements
          </h4>
          {data.improvements.map((item) => (
            <p className="font-secondary text-sm">{item}</p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
