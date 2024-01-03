import React from 'react'
import SmallCard from '../common/SmallCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const FeaturedProjects = () => {
  return (
    <SmallCard styles={{alignItem:"flex-start",justifyContent:"flex-start"}}>
        <h2>Featured Projects</h2>
        <div className="imageContainer">
            <Carousel autoPlay infiniteLoop interval={2000}>
                <div>
                  <div className="overlayBg">
                    <div className="projectDetails">
                        <h3>Ticket Easy</h3>
                        <h6>Django | ReactJs | SQLite</h6>
                    </div>
                  </div>
                  <img src="./projects/ticketeasyHome.png" alt="" />
                </div>
                <div>
                  <div className="overlayBg">
                    <div className="projectDetails">
                        <h3>Ticket Easy</h3>
                        <h6>Django | ReactJs | SQLite</h6>
                    </div>
                  </div>
                  <img src="./projects/tikceteasytopEvents.png" alt="" />
                </div>
                <div>
                  <div className="overlayBg">
                    <div className="projectDetails">
                        <h3>Ticket Easy</h3>
                        <h6>Django | ReactJs | SQLite</h6>
                    </div>
                  </div>
                  <img src="./projects/loginSignup.png" alt="" />
                </div>
                
            </Carousel>
        </div>
    </SmallCard>
  )
}

export default FeaturedProjects