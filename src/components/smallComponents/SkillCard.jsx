import React from 'react'
import { skills } from '../../../constants/consts'
import SmallCard from './SmallCard'

const SkillCard = () => {
  return (
    <div className="mainGridSection" id="skillsSection">
        <SmallCard styles={{alignItem:"flex-start"}}>
            <h1>Skills</h1>
            <div className="flexBox flex_gap_1 flexWrap">
                {
                skills.map((skill,indx)=>{
                    return (
                    <SmallCard key={indx} styles={{width:"fit-content",minHeight:"auto",padding:"0.3rem 0.5rem"}}>
                        <div className="flexBox flex_gap_half">
                        {skill?.icon}
                        <p>{skill?.name}</p>
                        </div>
                    </SmallCard>
                    )
                })
                }
            </div>
        </SmallCard>

    </div>
  )
}

export default SkillCard