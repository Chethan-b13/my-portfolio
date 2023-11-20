import React from 'react';
import { FaLaptopCode,FaPhoneAlt } from "react-icons/fa";
import { BiSolidIdCard, BiCodeBlock } from "react-icons/bi";
import { GoGitBranch } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const SideBarMenu = () => {

    const menuOptions = [
        {
            "name":"Home",
            "icon": <FaLaptopCode />,
            "linkTo":"#"
        },
        {
            "name":"Projects",
            "icon": <GoGitBranch />,
            "linkTo":"#"
        },
        {
            "name":"Skills",
            "icon": <BiCodeBlock />,
            "linkTo":"#"
        },
        {
            "name":"About",
            "icon": <BiSolidIdCard />,
            "linkTo":"#"
        },
        {
            "name":"Certificates",
            "icon": <AiOutlineSafetyCertificate />,
            "linkTo":"#"
        },
        {
            "name":"Contact",
            "icon": <FaPhoneAlt />,
            "linkTo":"#"
        },
    ]

    return (
        <div className="sidenav_list">
            {
                menuOptions.map((items,i)=>{
                    return (
                        <div className='nav_items' key={i}>
                        <a href={items.linkTo} >
                        {items.icon}
                        {items.name}
                        </a>
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

export default SideBarMenu