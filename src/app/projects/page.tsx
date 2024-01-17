import SideSection from '@/components/SideNavBar/SideSection'
import React from 'react'
import "@/styles/homepage.scss";
import ProjectCards from '@/components/projects/ProjectCards';

const ProjectPage = () => {
  return (
    <div>
        <div className="pageLayout">
            <SideSection />
            <div className='mainInfo_container'>
                <div className="padding_section">
                    <div className="blur_background"></div>
                    <h1 id='headline'>All Projects</h1>
                    <ProjectCards />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage