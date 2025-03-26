import Contact from "../Components/Contact";
import Experience from "../Components/Experiences";
import Intro from "../Components/Intro";
import NavigationBar from "../Components/NavigationBar";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

export default function MainPage() {
  return (
    <>
      <NavigationBar />
      <Intro />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
