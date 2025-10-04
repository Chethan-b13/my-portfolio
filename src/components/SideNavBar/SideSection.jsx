"use client";

import React, { useState } from "react";
import "@/styles/sideBar.scss";
import MainNameCard from "./MainNameCard";
import SideBarMenu from "./SideBarMenu";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import {
  MdArrowCircleLeft,
  MdClose,
  MdDownloading,
  MdMail,
  MdMenu,
} from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const SideSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [openMenu, setopenMenu] = useState(false);

  return (
    <>
      {isMobile && (
        <div
          className="humburger"
          style={{ left: openMenu && "13.5rem" }}
          onClick={() => {
            setopenMenu((open) => !open);
          }}
        >
          {!openMenu ? <MdMenu /> : <MdArrowCircleLeft />}
        </div>
      )}
      <div
        className={`sideBarcontainer ${isMobile ? "absoluteContainer" : ""} ${
          openMenu ? "expand" : ""
        }`}
      >
        <MainNameCard />
        <SideBarMenu />
        <div className="footerLinks smallFlexBox">
          <a
            href="https://linkly.link/2FzAc"
            target="_blank"
            download="https://drive.google.com/file/d/15iWBWT7cNgoeEdNhuHmKq7o1q2ZLBPsN/view?usp=sharing"
          >
            <button className="smallFlexBox resumeDownloadButton">
              <MdDownloading /> Resume{" "}
            </button>
          </a>
          <a
            href="https://github.com/chethan-b13/"
            target="_blank"
            className="smallFlexBox"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chethanb1321/"
            target="_blank"
            className="smallFlexBox"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:chethanb1321@gmail.com" className="smallFlexBox">
            <MdMail />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideSection;
