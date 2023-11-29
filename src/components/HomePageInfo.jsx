"use client";
import React from 'react'
import "../../styles/homepage.scss";
import { Typewriter } from 'react-simple-typewriter';
import SmallCard from './smallComponents/SmallCard';

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
          <div className="mainGridSection">
            <div className="blur_background"></div>
            <div className="gridCardFour">
              {/* In Progress.... */}
              <SmallCard>
                <h1>15+</h1>
                <p>Personal Projects</p>
              </SmallCard>
              <SmallCard>
                <h1>6<span style={{fontSize:"1rem"}}>Months</span></h1>
                <p>Industry Experience</p>
              </SmallCard>
              <SmallCard>
                <h1>20+</h1>
                <p>Robust Skill Set</p>
              </SmallCard>
              <SmallCard>
                <h1>1100+</h1>
                <p>Contributions Last Year</p>
              </SmallCard>
              
            </div>
            <SmallCard alignItem="flex-start">
              <h2>Engineering Tomorrow: One Line of Code at a Time.</h2>
              <p>
              Hey! I&#39;m on an awesome tech journey, exploring as a Data Scientist and Full Stack Developer. 
              I enjoy creating cool stuff using Python and React while also diving into Data Structures, Algorithms, and system designs.
              Currently, I&#39;m leading a fantastic tech team, blending my coding passion with leadership skills. 
              Together, let&#39;s create an innovative future!
              </p>
              <a href="mailto:chethanb1321@gmail.com">Get in Touch</a>
            </SmallCard>
          </div>
        </div>
    </div>
  )
}

export default HomePageInfo