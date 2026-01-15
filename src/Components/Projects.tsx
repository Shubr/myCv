import Card from "./Card";
import right_arrow from "/assets/right-arrow.svg";
import left_arrow from "/assets/left-arrow.svg";
import { useRef } from "react";
import jsIcon from "/assets/js.png";
import cppIcon from "/assets/cpp.png";
import flutterIcon from '/assets/flutter.png';
import kotlinIcon from '/assets/kotlin.png';
import jetpackCIcon from '/assets/jetpackcompose.png';
import firebaseIcon from '/assets/firebase.png'; 


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
            name="iNutrition"
            detail="A health-tracking mobile app that helps users log meals, track calories, and follow personalised nutrition goal,
            with secure accounts and real-time data powered by Firebase"
          >
            <div className="icons">
              <img src={flutterIcon}/>
              <img src={firebaseIcon}/>
            </div>
            <div className="buttons">
              <a href="https://github.com/Shubr/iNutrition.git" target="_blank">View Repo</a>
            </div>
          </Card>

        <Card 
            name="TuckBox"
            detail="A mobile food ordering app built with Android JetPack Compose and Firebase, that lets users 
            place and scedule takeaway orders in real time, with secure login, order tracking and automatic receipt storage."
          >
            <div className="icons">
              <img src={kotlinIcon}/>
              <img src={jetpackCIcon}/>
              <img src={firebaseIcon}/>
            </div>
            <div className="buttons">
              <a href="https://github.com/Shubr/TruckBox.git" target="_blank">View Repo</a>
            </div>
          </Card>
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
          name="RedditPro"
          detail="A reddit wrapper app that minimises app usage and distractions, only showing you want you want to see.">
            <div className="icons">
              <img src={flutterIcon}></img>
            </div>
            <div className="buttons">
              <a href="https://github.com/Shubr/ProductiveReddit.git"
              target="_blank">
                View Repo
              </a>
            </div>
          </Card>
          
          <Card
            name="Alpha - Current"
            detail="A NDs Emulator for Android, enspired by Delta."
          >
            <div className="icons">
              <img src={cppIcon}/>
            </div>
            <div className="buttons">
              <a href="https://github.com/Shubr/Alpha" target="_blank">
                View Repo
              </a>
            </div>
          </Card>
      </div>
    </div>
  );
}

export default Projects;
