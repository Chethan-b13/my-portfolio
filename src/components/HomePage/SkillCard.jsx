import React from 'react'
import { skills } from '../../../constants/consts'
import SmallCard from '../common/SmallCard'

const SkillCard = () => {
  return (
    <SmallCard styles={{alignItem:"flex-start"}}>
        <h2>Skills</h2>
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
  )
}

export default SkillCard