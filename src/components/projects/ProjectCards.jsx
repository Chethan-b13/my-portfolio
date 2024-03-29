'use client'
import React from 'react'
import SmallCard from '../common/SmallCard'
import "@/styles/projects.scss";
import { allProjects } from '../../../constants/consts';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const ProjectCards = () => {
  return (
    <div className='mainGridSection'>
        {
            allProjects.map((project,indx)=>{
                return(
                    <SmallCard key={indx} styles={{alignItem:"flex-start",justifyContent:"flex-start",padding:"0"}}>
                        <Carousel infiniteLoop interval={2000 + indx*20} showThumbs={false}>
                            {
                                project?.projectImages.map((image,key)=>{
                                    return <img key={key} className='allProjectsImage' src={image} alt="" />
                                })
                            }
                        </Carousel>
                        <div className="projectInfo">
                            <div className="flexBox flex_gap_1 flexWrap">
                                {
                                    project?.techUsed.map((tech,i)=>{
                                        return(
                                            <SmallCard key={i} styles={{width:"fit-content",minHeight:"auto",padding:"0.3rem 0.5rem"}} mobile={true}>
                                                <p>{tech}</p>
                                            </SmallCard>
                                        )
                                    })
                                }
                            </div>
                            <div className="flexBox flex_gap_1 flexWrap">
                                <h3>{project?.projectName}</h3>
                                {
                                    project?.deployedLink &&
                                    <a href={project?.deployedLink} target='_blank'><FaExternalLinkSquareAlt /></a>
                                }
                            </div>
                            {
                                project?.details.map((point,idx)=>{
                                    return (
                                        <div key={idx} className='flexBox flex_gap_1 alignFlexStart'>
                                            •
                                            <p>{point}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </SmallCard>
                )
            })
        }
    </div>
  )
}

export default ProjectCards