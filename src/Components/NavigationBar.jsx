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
        <a href="#">HOME</a>
        <a href="#">PROJECTS</a>
        <a href="#">EXPERIENCE</a>
        <a href="#">CONTACT</a>
      </div>
    </nav>
  );
}

export default NavigationBar;
