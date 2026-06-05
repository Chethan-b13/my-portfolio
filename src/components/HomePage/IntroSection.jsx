import React from "react";
import SmallCard from "../common/SmallCard";

const IntroSection = () => {
  const aboutMe =
    // `
    // I'm a Bangalore-based Computer Science and Engineering graduate thriving as a skilled Full Stack Developer.
    // My ability to swiftly adapt and wield a diverse skill set has empowered me to efficiently lead tech teams.
    // Proficient in crafting full stack web applications using Python and ReactJs/Nextjs,
    // I specialize in data collection, preprocessing, and creating innovative machine learning, deep learning, and NLP models.
    // `
    `
    I'm a Full-Stack Software Engineer with 3+ years of experience building scalable products, distributed systems, 
    and cloud-native applications. From React and Next.js frontends to event-driven backend platforms on AWS, 
    I enjoy solving complex engineering problems and delivering systems with measurable business impact.
    `;
  return (
    <>
      <div className="blur_background"></div>
      <div className="introSplit">
        <div className="introLeft">
          <div className="gridCardFour">
            {/* In Progress.... */}
            <SmallCard>
              <h1>
                3+<span style={{ fontSize: "1rem" }}> Years</span>
              </h1>
              <p>Building Software Products</p>
            </SmallCard>
            <SmallCard>
              <h1>0 → 1</h1>
              <p>Products Built from Scratch</p>
            </SmallCard>
            <SmallCard>
              <h1>170+</h1>
              <p>Services Managed</p>
            </SmallCard>
            <SmallCard>
              <h1>
                7+<span style={{ fontSize: "1rem" }}> Years</span>
              </h1>
              <p>Hands on Experience</p>
            </SmallCard>
          </div>
        </div>
        <div className="introRight">
          <SmallCard styles={{ alignItem: "flex-start", height: "100%" }}>
            <h2>About Me</h2>
            <p>{aboutMe}</p>
            <a href="mailto:chethanb1321@gmail.com">Get in Touch</a>
          </SmallCard>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
