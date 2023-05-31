import Image from "next/image";

const ProjectInfo = () => {
  const live = false;

  return (
    <div className="max-w-6xl mx-auto relative flex flex-col gap-6">
      {/* demo video */}
      <div className="flex justify-center items-center m-10 rounded-xl ">
        <Image
          src="https://toriadev-portfolio.s3.us-west-2.amazonaws.com/projects/color-picker-02.png"
          alt=""
          width={1000}
          height={1000}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="px-36 flex flex-col justify-evenly gap-10 pb-24">
        {/* title */}
        <h1 className="font-primary uppercase tracking-widest text-xl text-orange">
          Color Picker Chrome Extension
        </h1>
        {/* short summary */}
        <p className="font-secondary text-body">
          A simple color picker Chrome Extension that allows you to pick and
          save hex value colors from web pages.
        </p>
        {/* live site */}
        {live ? (
          <a className="staticButton">live site</a>
        ) : (
          <a
            className="staticButton"
            href="https://github.com/torikak11/color-picker-chrome-extension"
            target="_blank"
          >
            git hub
          </a>
        )}
        {/* images */}
        {/* project explanation */}
        <h4 className="font-primary uppercase tracking-widest text-xl text-orange mt-6">
          project overview
        </h4>
        <p className="font-secondary text-sm">
          This chrome extension was created with web developers and designers in
          mind. In my work of designing applications, I wanted a quick way to
          see the hex value of a color that stood out to me. If, for example,
          you really like a shade of blue on an image displayed in your website,
          this extension can save the hex value with ease!
        </p>
        <p className="font-secondary text-sm">
          The extension allows you to choose hex values from the browser, copy a
          hex value to your clipboard, and also delete the color values not
          needed. All values not deleted will be saved for the next time you
          open the extension.
        </p>
        <p className="font-secondary text-sm">
          This extension uses basic HTML, CSS and Javascript as well as an API
          called EyeDropper.
        </p>
        {/* future aspirations */}
        <h4 className="font-primary uppercase tracking-widest text-xl text-orange mt-6">
          future improvments
        </h4>
        <p className="font-secondary text-sm">
          One main improvment for this extension that I would like to implement
          soon is to add rgb values as well to the color values saved. This will
          be of use to those who prefer to use rgb values in their work.
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
