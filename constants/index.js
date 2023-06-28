export const skills = [
  {
    name: "HTML5",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/html5.png",
    alt: "Logo of HTML5",
  },
  {
    name: "CSS3",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/css.png",
    alt: "Logo of CSS3",
  },
  {
    name: "Java Script",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/javascript.png",
    alt: "Logo of JavaScript",
  },
  {
    name: "React",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/react.png",
    alt: "Logo of React",
  },
  {
    name: "React Native",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/react-native.png",
    alt: "Logo of React Native",
  },
  {
    name: "Next.js",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/nextjs.png",
    alt: "Logo of Next.js",
  },
  {
    name: "Node.js",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/nodejs.png",
    alt: "Logo of Node.js",
  },
  {
    name: "Express",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/express.png",
    alt: "Logo of Express.js",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/tailwind.png",
    alt: "Logo of Tailwind CSS",
  },
  {
    name: "MongoDB",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/mongodb.png",
    alt: "Logo of MongoDB",
  },
  {
    name: "Python",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/python.png",
    alt: "Logo of Python",
  },
  {
    name: "C",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/c.png",
    alt: "Logo of C",
  },
  {
    name: "Git",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/git.png",
    alt: "Logo of Git",
  },
  {
    name: "Figma",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/figma.png",
    alt: "Logo of Figma",
  },
  {
    name: "VSCode",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/skills/vscode.png",
    alt: "Logo of Visual Studio Code",
  },
];

export const projects = [
  {
    title: "Sprout",
    summary:
      "A goal setting mobile app where the user can set their goals to a plant and watch it grow as they achieve their goal.",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/projects/sprout-02.png",
    alt: "A screenshot of the Sprout mobile app",
    tags: ["React Native", "Node.js", "Express", "MongoDB"],
    gitHub: "https://github.com/torikak11/sprout",
    slug: "sprout",
  },
  {
    title: "Recipe Generator",
    summary:
      "A web app that let's the user input ingredients to generate relevant recipes.",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/projects/recipe-generator-01.png",
    alt: "A screenshot of the Recipe Generator web page",
    tags: ["React", "Next.js", "REST API", "Tailwind"],
    gitHub: "https://github.com/torikak11/recipe-generator",
    slug: "recipe-generator",
  },
  {
    title: "Color Picker Chrome Extension",
    summary:
      "A simple color picker Chrome Extension that allows you to pick and save hex value colors from web pages.",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/projects/color-picker-02.png",
    alt: "A screenshot of the Color Picker Chrome Extension",
    tags: ["HTML5", "CSS", "JavaScript"],
    gitHub: "https://github.com/torikak11/color-picker-chrome-extension",
    slug: "color-picker",
  },
];

export const projectInfo = [
  {
    title: "sprout",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/projects/sprout-02.png",
    alt: "A screenshot of the Sprout Mobile App",
    summary:
      "A goal setting mobile app where the user can set their goals to a plant and watch it grow as they achieve their goal.",
    link: [
      "https://github.com/torikak11/sprout",
      "https://github.com/torikak11/sprout-api",
    ],
    overview: [
      "The idea for sprout originated from a need of organizing my many goals into a fun, satisfying way. I wanted to create this app to be reward based as well as adding a calming aesthetic to the stress of managing all of my goals. Adding a reward of growing plants as you complete the steps was a way to add that reward and add a unique take on the traditional goal keeping app.",
      "Sprout originally was only going to be developed as a frontend React Native app, but ended up having a seperate REST API developed for it as well. Developing the backend really helped me to understand more of how the frontend and backend of applications work together and intersect. Overall, while there were some frustrating moments trying to understand new technologies like node.js, the whole process was one of the most rewarding so far.",
    ],
    improvements: [
      "A future improvement that I have already started implementing is to add a habit tracker to the app as well. I have most of the logic done, but it still needs a little more polishing before production.",
      "Other features to implement would be to add account features such as editing your user information and a store based system where you can earn points on the number of plants grown and trade them for more features in the app.",
      "Lastly, I would like to explore backend optimization and performance. While this app is rather small, I would like to try different ways to optimize especially if I plan to add more features later.",
    ],
    livePage: false,
  },
  {
    title: "recipe generator",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/projects/recipe-generator-01.png",
    alt: "A screenshot of the Recipe Generator web app",
    summary:
      "A web app that let's the user input ingredients to generate relevant recipes.",
    link: ["https://recipe-generator-tawny.vercel.app"],
    overview: [""],
    improvements: [""],
    livePage: true,
  },
  {
    title: "color picker chrome extension",
    image:
      "https://toriadev-portfolio.s3.us-west-2.amazonaws.com/projects/color-picker-02.png",
    alt: "A screenshot of the Color Picker Chrome Extension",
    summary:
      "A simple color picker Chrome Extension that allows you to pick and save hex value colors from web pages.",
    link: ["https://github.com/torikak11/color-picker-chrome-extension"],
    overview: [
      "This chrome extension was created with web developers and designers in mind. In my work of designing applications, I wanted a quick way to save the hex value of a color that stood out to me. If, for example, you really like a shade of blue on an image displayed in your website, this extension can save the hex value with ease!",
      "The extension allows you to choose hex values from the browser, copy a hex value to your clipboard, and also delete the color values not needed. All values not deleted will be saved for the next time you open the extension.",
      "This extension uses basic HTML, CSS and Javascript as well as an API called EyeDropper.",
    ],
    improvements: [
      "One main improvment for this extension that I would like to implement soon is to add rgb values to the color values saved. This will be of use to those who prefer to use rgb values in their work.",
    ],
    livePage: false,
  },
];
