'use client';

import React from 'react'
import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const HangingIcons = () => {
  const githubUrl = "<https://github.com/chethancheths/>"
  const linkedinUrl = "<https://www.linkedin.com/in/chethan-b-31b58a192/>"
  const [mailId, setmailId] = useState("<chethanb1321@gmail.com/>")

  const handleEmailClick = ()=> {
    navigator.clipboard.writeText("chethanb1321@gmail.com");
    setmailId("<Copied_to_Clipboard/>");
    setTimeout(() => {
      setmailId("<chethanb1321@gmail.com/>")
    }, 1000);
    
  }
  return (
    <div className="hangerContainer">
        <div className="line"></div>
        <a href="https://github.com/chethancheths/" target='_blank'>
          <FaGithub />
          <p>{githubUrl}</p>
        </a>
        <a href="https://www.linkedin.com/in/chethan-b-31b58a192/" target='_blank'>
          <FaLinkedin />
          <p>{linkedinUrl}</p>
        </a>
        <a href="#" onClick={handleEmailClick}>
          <MdEmail />
          <p>{mailId}</p>
        </a>
    </div>
  )
}

export default HangingIcons