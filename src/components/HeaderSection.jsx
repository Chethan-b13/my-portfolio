import React from 'react'
import NavBar from './NavBar'
import "../../styles/header.scss";
import HangingIcons from './HangingIcons';

const HeaderSection = () => {
  return (
    <>
      <HangingIcons />
      <NavBar />
    </>
  )
}

export default HeaderSection