import AboutMe from "../components/AboutMe";
import Gradient from "../components/Gradient";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/background";

const LandingPage = () => {
  return (
    <>
      {/* Gradient component */}
      <div className="md:hidden absolute top-0 right-0 z-[30]">
        <Gradient />
      </div>

      {/* Main content that should be scrollable */}
      <div className="md:snap-y md:snap-mandatory overflow-x-hidden md:h-screen md:w-screen relative z-[10]">
        <Header />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </div>

      {/* Background component, placed behind content */}
    </>
  );
};

export default LandingPage;
