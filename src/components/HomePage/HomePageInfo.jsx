"use client";
import React from 'react'
import "@/styles/homepage.scss";
import { Typewriter } from 'react-simple-typewriter';
import SkillCard from './SkillCard';
import IntroSection from './IntroSection';
import FeaturedProjects from './FeaturedProjects';
import Certificates from './Certificates';
import Experience from './Experience';

const HomePageInfo = () => {

  return (
    <div className='mainInfo_container'>
        <div className="padding_section">
          <h1 id='headline'>Hello World! <br />
          I&#39;m a {" "}
          <Typewriter
            words={['Team Lead', 'Data Scientist', "Full Stack Developer"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </h1>
          <IntroSection />
          <div className="mainGridSection" id="skillsSection">
            <SkillCard />
            <FeaturedProjects />
            <Experience />
            <div className='certAndContact'>
              <Certificates />
              {/* <Certificates /> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePageInfo