import React from 'react'
import SmallCard from '../common/SmallCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { featuredProjects } from '../../../constants/consts';

const FeaturedProjects = () => {
  return (
    <SmallCard styles={{alignItem:"flex-start",justifyContent:"flex-start"}}>
        <h2>Featured Projects</h2>
        <a href="/projects">View all</a>
        <div className="imageContainer">
            <Carousel autoPlay infiniteLoop interval={2000}>
              {
                featuredProjects.map((project,indx)=>{
                  return (
                  <React.Fragment key={indx}>
                    <div className="overlayBg">
                      <div className="projectDetails">
                          <h2>{project?.projectName}</h2>
                          <h6>{project?.techUsed}</h6>
                      </div>
                    </div>
                    <img src={project?.projectImage} alt="" />
                  </React.Fragment>
                  )
                })
              }
                
            </Carousel>
        </div>
    </SmallCard>
  )
}

export default FeaturedProjects