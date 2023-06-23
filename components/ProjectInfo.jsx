import Image from "next/image";
import { IoReturnDownBackOutline } from "react-icons/io5";

const ProjectInfo = ({ data }) => {
  const liveSite = data.livePage;

  const LiveSiteButton = () => {
    {
      data.link.map((link) => {
        <a className="staticButton" href={link} target="_blank" key="link">
          live site
        </a>;
      });
    }
  };

  const GitSiteButton = () => {
    {
      data.link.map((link) => {
        <a className="staticButton" href={link} target="_blank" key="link">
          git hub
        </a>;
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto relative flex flex-col gap-6">
      {/* demo video */}
      <div className="flex flex-row items-center gap-4 p-6 ">
        <IoReturnDownBackOutline color="orange" size={22} />
        <a
          href="/#projects"
          className="font-secondary text-black hover:text-orange"
        >
          back to home
        </a>
      </div>
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
        <div className="flex flex-row justify-evenly align-center">
          {liveSite
            ? data.link.map((link) => (
                <a
                  className="staticButton"
                  href={link}
                  target="_blank"
                  key="link"
                >
                  live site
                </a>
              ))
            : data.link.map((link) => (
                <a
                  className="staticButton"
                  href={link}
                  target="_blank"
                  key="link"
                >
                  git hub
                </a>
              ))}
        </div>
        {/* images */}
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
  );
};

export default ProjectInfo;
