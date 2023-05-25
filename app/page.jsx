import Header from "@components/Header";
import Hero from "@components/Hero";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import About from "@components/About";
import Contact from "@components/Contact";

const Home = () => {
  return (
    <div className="text-black h-screen overflow-scroll z-0 min-w-full">
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* About Me / Resume? */}
      <section id="about">
        <About />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
