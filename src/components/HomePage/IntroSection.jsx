import React from 'react'
import SmallCard from '../common/SmallCard'

const IntroSection = () => {
  const aboutMe = 
  // `
  // I'm a Bangalore-based Computer Science and Engineering graduate thriving as a skilled Full Stack Developer. 
  // My ability to swiftly adapt and wield a diverse skill set has empowered me to efficiently lead tech teams. 
  // Proficient in crafting full stack web applications using Python and ReactJs/Nextjs, 
  // I specialize in data collection, preprocessing, and creating innovative machine learning, deep learning, and NLP models.
  // `
  `Hey there! I'm a Computer Science graduate based in Bangalore, thriving as a Full Stack Developer and efficiently leading a tech team. 
  I quickly adapt and bring a versatile skill set to the table. 
  I specialize in crafting full stack web apps using Python, ReactJs/NextJs, 
  and enjoy working on data collection, preprocessing, and building machine learning, deep learning, and NLP models.`
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
            <h1>1<span style={{fontSize:"1rem"}}>Year</span></h1>
            <p>Industry Experience</p>
            </SmallCard>
            <SmallCard>
            <h1>17+</h1>
            <p>Robust Skill Set</p>
            </SmallCard>
            <SmallCard>
            <h1>3<span style={{fontSize:"1rem"}}>Years</span></h1>
            <p>Hands on Experience</p>
            </SmallCard>
            
        </div>
        <SmallCard styles={{alignItem:"flex-start"}}>
            {/* <h2>Engineering Tomorrow: One Line of Code at a Time.</h2> */}
            <h2>About Me</h2>
            {/* <p>
            Hey! I&#39;m on an awesome tech journey, exploring as a Data Scientist and Full Stack Developer. 
            I enjoy creating cool stuff using Python and React while also diving into Data Structures, Algorithms, and system designs.
            Currently, I&#39;m leading a fantastic tech team, blending my coding passion with leadership skills. 
            Together, let&#39;s create an innovative future!
            </p> */}
            <p>
            {aboutMe}
            </p>
            <a href="mailto:chethanb1321@gmail.com">Get in Touch</a>
        </SmallCard>
    </div>
  )
}

export default IntroSection