import Card from "./Card";
import right_arrow from "/assets/right-arrow.svg";
import left_arrow from "/assets/left-arrow.svg";
import { useRef } from "react";
import jsIcon from "/assets/js.png";
import reactIcon from "/assets/react.png";
import typeIcon from "/assets/typescriptIcon.png";
// import csIcon from "/assets/cs.png";
// import spectreConsoleIcon from '/assets/spectre-console.png';
import flutterIcon from '/assets/flutter.png';

import Highlight from "./HighlightText";

function Projects() {
  const cardHolderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (cardHolderRef.current) {
      cardHolderRef.current.scrollLeft -= 350;
      console.log("hello");
    }
  };

  const scrollRight = () => {
    if (cardHolderRef.current) {
      cardHolderRef.current.scrollLeft += 350;
    }
  };

  return (
    <div className="projects-body" id="Projects">
      <h1>
        Project
        <Highlight text={"s"} color={"#006BFF"} />
      </h1>
      <div className="card-controller">
        <button onClick={scrollLeft}>
          <img src={left_arrow} alt="Right Arrow" />
        </button>
        <button onClick={scrollRight}>
          <img src={right_arrow} />
        </button>
      </div>
      <div className="card-holder" ref={cardHolderRef}>
        <Card
          name="HighLight"
          detail="Easy highlighting tool high, highlight text on any website - Google Extension"
        >
          <div className="icons">
            <img src={jsIcon} />
          </div>
          <div className="buttons">
            <a
              href="https://chromewebstore.google.com/detail/highlight/lilkclnbcmjpmkbjmdffndjeaooiilfm"
              target="_blank"
            >
              View Extension
            </a>
          </div>
        </Card>
        <Card
          name={"VarDevs"}
          detail="I created the font-end for VarDevs, making responsive Ui/Ux"
        >
          <div className="icons">
            <img src={reactIcon} />
            <img src={typeIcon} />
          </div>
          <div className="buttons vardevs">
            <a href="https://www.vardevs.com" target="_blank">
              View Site
            </a>
          </div>
        </Card>
        
        <Card
          name={"zScanner"}
          detail="Currently working on a Flutter App that can scan food items and add it to your lists. This is just a test project using new API and android functionality"
        >
          <div className="icons">
            <img src={flutterIcon}/>
          </div>
          <div className="buttons">
            <a href="https://github.com/Shubr/zScanner.git" target="_blank">
              View GitHub
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
