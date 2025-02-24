import Card from "./Card";
import right_arrow from "../assets/right-arrow.svg";
import left_arrow from "../assets/left-arrow.svg";
import { useRef } from "react";
import jsicon from "../assets/js.png";
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
            <img src={jsicon} />
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
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
