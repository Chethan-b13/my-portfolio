import React from 'react'
import SmallCard from '../common/SmallCard'

const FeaturedProjects = () => {
  return (
    <SmallCard styles={{alignItem:"flex-start",justifyContent:"flex-start"}}>
        <h2>Featured Projects</h2>
        <div className="imageContainer">
            <div className="overlayBg">
                <div className="projectDetails">
                    <p>Project Number #1</p>
                    <h6>Tech Stack | ReactJs</h6>
                </div>
            </div>
            <img src="./underConst.jpg" alt="" />
        </div>
    </SmallCard>
  )
}

export default FeaturedProjects