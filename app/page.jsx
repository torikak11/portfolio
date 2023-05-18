import Header from "@components/Header";
import Hero from "@components/Hero";
import Skills from "@components/Skills";

const Home = () => {
  return (
    <div className="text-black h-screen overflow-scroll z-0">
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Skills */}
      <section id="skills" className="bg-beige-100/40">
        <Skills />
      </section>

      {/* Projects */}

      {/* Resume */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
