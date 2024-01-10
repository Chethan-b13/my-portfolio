import React from 'react'
import SmallCard from '../common/SmallCard'
import animationData from "../../../public/underConstruction.json";
import Lottie from 'lottie-react';

const Experience = () => {
  return (
    <SmallCard styles={{alignItem:"flex-start",justifyContent:"flex-start"}}>
        <h2 id="experience">Experience</h2>
        <div className="companyInfo">
            <div className="companyLogo">
                <img src="./vhubLogo.png" alt="" />
            </div>
            <div>
                <h4>Vedasis Analytics Pvt Ltd.</h4>
                <p>May 2023 - Present</p>
                {/* <h3>FullStack Developer & Tech Lead</h3> */}
                {/* <hr /> */}
                {/* <div className="flexBox flex_gap_1">
                •
                </div> */}
            </div>
        </div>
        <Lottie animationData={animationData}  loop={true} style={{width:"80%"}}/>
    </SmallCard>
  )
}

export default Experience