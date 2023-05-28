import Header from "@components/Header";
import Hero from "@components/Hero";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import About from "@components/About";
import Contact from "@components/Contact";

const Home = () => {
  return (
    <div className="text-black h-screen scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-rounded-full scrollbar-track-beige-100/40 scrollbar-thumb-beige-200/60">
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
