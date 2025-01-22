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
    `I'm a versatile Full Stack Developer from Bangalore with a solid foundation in Computer Science.
    My expertise spans end-to-end development of web and mobile applications, specializing in Python, React.js, Next.js, React Native, and AWS.
    I have extensive experience in designing and implementing seamless workflows, integrating complex payment systems.
    Along with my technical skills, I bring leadership experience in driving successful project deliveries and leading high-performing teams.`;
  return (
    <>
      <div className="blur_background"></div>
      <div className="gridCardFour">
        {/* In Progress.... */}
        <SmallCard>
          <h1>
            2<span style={{ fontSize: "1rem" }}> Years</span>
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
            4<span style={{ fontSize: "1rem" }}>+ Years</span>
          </h1>
          <p>Hands on Experience</p>
        </SmallCard>
      </div>
      <SmallCard styles={{ alignItem: "flex-start" }}>
        <h2>About Me</h2>
        <p>{aboutMe}</p>
        <a href="mailto:chethanb1321@gmail.com">Get in Touch</a>
      </SmallCard>
    </>
  );
};

export default IntroSection;
