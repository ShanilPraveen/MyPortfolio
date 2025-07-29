import Hero from "../sections/Hero";
import Tech from "../sections/Tech";
import Projects from "../sections/Projects";
import Blogs from "../sections/Blogs";
import Contact from "../sections/Contact";

const HomePage = () => {
  return (
    <div className="relative">
      {/* <Particles
        particleColors={["#3B82F6"]}
        particleCount={100}
        alphaParticles={true}
        particleBaseSize={150}
        sizeRandomness={1}
        className="-z-10"
      /> */}

        <Hero />
        <Tech />
        <Projects />
        <Blogs />
        <Contact />
    </div>
  );
};

export default HomePage;
