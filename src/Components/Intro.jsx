import "../App.css";
import Highlight from "./HighlightText";

function Intro() {
  return (
    <div className="intro-body">
      <div className="intro">
        <h1>
          Hi, I'm <Highlight text="Shub" color="#FF7792" />
        </h1>
        <p>Mobile Developer</p>
      </div>
    </div>
  );
}

export default Intro;
