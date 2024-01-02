import React from 'react'
import SmallCard from '../common/SmallCard'

const IntroSection = () => {
  return (
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
            <h1>17+</h1>
            <p>Robust Skill Set</p>
            </SmallCard>
            <SmallCard>
            <h1>1100+</h1>
            <p>Contributions Last Year</p>
            </SmallCard>
            
        </div>
        <SmallCard styles={{alignItem:"flex-start"}}>
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
  )
}

export default IntroSection