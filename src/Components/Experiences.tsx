import Highlight from "./HighlightText";

function Experience() {
  return (
    <div className="experience-body" id="Experience">
      <h1>
        E
        <Highlight text={"xp"} color={"#06D001"} />
        erience
      </h1>
      <div className="experience-cards">
        <div className="card">
          <h1>Certificate in ICT</h1>
          <h2>UCOL Palmerston North</h2>
          I started my journey as a tech student in 2022 at UCOL, where I had to
          adapt to a new environment. With minimal knowledge in tech, I knew I
          had to change, so I started grinding C# at home to impress my peers.
          <br /> Outcome: Certificate acquired, peers impressed, parents...
          still disappointed I didn’t become a doctor.
          <div className="footer">
            <p>February 2022 - June 2022</p>
          </div>
        </div>
        <div className="card">
          <h1>Diploma in ICT</h1>
          <h2>UCOL Palmerston North</h2>
          Continuing my studies at UCOL, I expanded my technical expertise,
          tackling more complex projects and deepening my understanding of
          software development. I honed problem-solving skills and collaborated
          with peers on real-world applications, solidifying my passion for the
          industry.
          <br /> Outcome: Diploma earned, technical skills strengthened, and
          confidence built for the next challenge.
          <div className="footer">
            <p>July 2022 - June 2023</p>
          </div>
        </div>
        <div className="card">
          <h1>Bachelors in ICT</h1>
          <h2>UCOL Palmerston North</h2>
          Building on my previous studies, I am currently pursuing my Bachelor's
          degree in ICT at UCOL. This phase of my education has pushed me to
          explore advanced concepts in software development, networking, and
          system architecture. Beyond the classroom, I continue refining my
          skills by working on real-world projects and staying updated with
          industry trends.
          <div className="footer">
            <p>July 2023 - Current</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
