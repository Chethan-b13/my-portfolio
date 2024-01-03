import React from 'react'
import "@/styles/sideBar.scss"
import MainNameCard from './MainNameCard';
import SideBarMenu from './SideBarMenu';
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { MdDownloading , MdMail} from "react-icons/md";

const SideSection = () => {
  return (
    <div className='sideBarcontainer'>
      <MainNameCard />
      <SideBarMenu />
      <div className="footerLinks smallFlexBox">
        <a href="https://drive.google.com/file/d/1oXC6wUkiwmhn9PFwnBD9t_b1V9VcX8Mt/view?usp=drive_link" target='_blank' download="https://drive.google.com/file/d/1oXC6wUkiwmhn9PFwnBD9t_b1V9VcX8Mt/view?usp=drive_link">
          <button className='smallFlexBox resumeDownloadButton'><MdDownloading /> Resume  </button>
        </a>
        <a href="https://github.com/chethan-b13/" target='_blank' className='smallFlexBox'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/chethan-b-31b58a192/" target='_blank' className='smallFlexBox'><FaLinkedin /></a>
        <a href="mailto:chethanb1321@gmail.com" className='smallFlexBox'><MdMail /></a>
      </div>
    </div>
  )
}

export default SideSection