import AboutMe from "../components/AboutMe";
import Gradient from "../components/Gradient";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const LandingPage = () => {
  return (
    <>
      <div className="md:hidden absolute top-0 right-0 z-[30]">
        <Gradient />
      </div>
      <div className=" md:snap-y md:snap-mandatory overflow-x-hidden  md:h-screen md:w-screen">
        <Header />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;
