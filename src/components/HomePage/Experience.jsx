import React from 'react'
import SmallCard from '../common/SmallCard'
import { workExperience } from '../../../constants/consts';

const Experience = () => {

  return (
    <SmallCard styles={{alignItem:"flex-start",justifyContent:"flex-start",minHeight:"fit-content", height:"fit-content"}}>
        <div className='columnFlex'>
        <h2 id="experience">Experience</h2>
        {
          workExperience.map((experience,indx)=>{
            return(
              <React.Fragment key={indx}>
                <hr id='divider' />
                <div className="companyInfo">
                    <div className="companyLogo">
                        <img src={experience.companyLogo} alt="" />
                    </div>
                    <div>
                        <h4>{experience?.companyName}</h4>
                        <h3>{experience?.role}</h3>
                        <p>{experience?.duration}</p>
                    </div>
                </div>
                {
                  experience.summary.map((point,indx)=>{
                    return (
                      <div key={indx} className='flexBox flex_gap_1 alignFlexStart'>
                          •
                          <p>{point}</p>
                      </div>
                    )
                  })
                }      
                
              </React.Fragment>
            )
          })
        }
        </div>
        {/* <a href="">Read More</a> */}
    </SmallCard>
  )
}

export default Experience