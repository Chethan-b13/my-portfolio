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
    `I'm a Full‑Stack Engineer who ships production‑grade mobile and web products end‑to‑end. I build React Native apps, Next.js frontends, and Node.js/TypeScript backends—integrating payments, maps, and real‑time workflows. I focus on reliability, developer experience, and measurable outcomes: faster delivery, lower costs, and happier users.`;
  return (
    <>
      <div className="blur_background"></div>
      <div className="introSplit">
        <div className="introLeft">
          <div className="gridCardFour">
            {/* In Progress.... */}
            <SmallCard>
              <h1>
                2<span style={{ fontSize: "1rem" }}>+ Years</span>
              </h1>
              <p>Industry Experience</p>
            </SmallCard>
            <SmallCard>
              <h1>15+</h1>
              <p>Personal Projects</p>
            </SmallCard>
            <SmallCard>
              <h1>20+</h1>
              <p>Robust Skill Set</p>
            </SmallCard>
            <SmallCard>
              <h1>
                6<span style={{ fontSize: "1rem" }}>+ Years</span>
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
