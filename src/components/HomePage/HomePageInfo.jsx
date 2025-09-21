"use client";
import React, { useEffect, useState } from "react";
import "@/styles/homepage.scss";
import { Typewriter } from "react-simple-typewriter";
import SkillCard from "./SkillCard";
import IntroSection from "./IntroSection";
import FeaturedProjects from "./FeaturedProjects";
import Certificates from "./Certificates";
import Experience from "./Experience";
import ContactCard from "./ContactCard";
import SideSection from "../SideNavBar/SideSection";

const HomePageInfo = () => {
  return (
    <>
      <SideSection />
      <div className="mainInfo_container">
        <div className="padding_section">
          <h1 id="headline">
            Hello World! <br />
            I&#39;m a{" "}
            <Typewriter
              words={[
                "Full-Stack Engineer",
                "Mobile & Web Developer",
                "Backend/API Specialist",
                "Product Builder",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <div className="mainGridSection">
            <div className="grid-intro">
              <IntroSection />
            </div>
            <div className="leftColumn">
              <div className="grid-skills">
                <SkillCard />
              </div>
              <div className="grid-featured">
                <FeaturedProjects />
              </div>
              <div className="grid-certificates">
                <Certificates />
              </div>
              <div className="grid-contact">
                <ContactCard />
              </div>
            </div>
            <div className="rightColumn">
              <div className="grid-experience">
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageInfo;
