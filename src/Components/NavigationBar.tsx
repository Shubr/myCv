import "../App.css";
import logo from "../assets/Logo.png";

function NavigationBar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo}></img>
        <h2>SHUB</h2>
      </div>
      <div className="links">
        <a href="#Intro">INTRO</a>
        <a href="#Projects">PROJECTS</a>
        <a href="#Experience">EXPERIENCE</a>
        <a href="#Contact">CONTACT</a>
      </div>
    </nav>
  );
}

export default NavigationBar;
