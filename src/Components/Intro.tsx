import "../App.css";
import Highlight from "./HighlightText";

function Intro() {
  return (
    <div className="intro-body" id="Intro">
      <div className="intro">
        <h1>
          Hi, I'm <Highlight text="Shub" color="#FF7792" />
        </h1>
        <p>Mobile/Web Developer</p>
        <button className="buttons cv">
          <a href="/assets/myCV.pdf" download="Shub_CV.pdf">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default Intro;
