import { BiLogoDjango, BiLogoFlask, BiSolidIdCard, BiCodeBlock } from 'react-icons/bi';
import { FaDatabase, FaDocker, FaGlobe, FaHtml5, FaPython, FaReact, FaWordpress,FaLaptopCode,FaPhoneAlt } from 'react-icons/fa';
import { GoGraph,GoGitBranch } from 'react-icons/go';
import { MdCoffee, MdComputer, MdDataObject } from 'react-icons/md';
import { AiOutlineSafetyCertificate } from "react-icons/ai";


export const skills = [
    {
      name:"Python",
      icon : <FaPython />
    },
    {
      name:"DSA",
      icon : <MdDataObject />
    },
    {
      name:"Django",
      icon : <BiLogoDjango />
    },
    {
      name:"ReactJs | NextJs",
      icon : <FaReact />
    },
    {
      name:"Machine Learning | Deep Learning | NLP",
      icon : <GoGraph />
    },
    {
      name:"WebSockets  ",
      icon : <FaGlobe />
    },
    {
      name:"SQL | BigQuery | NoSQL",
      icon : <FaDatabase />
    },
    {
      name:"HTML | CSS | JavaScript",
      icon : <FaHtml5 />
    },
    {
      name:"Docker | Docker-Compose",
      icon : <FaDocker />
    },
    {
      name:"System Design",
      icon : <MdComputer />
    },
    {
      name:"Flask",
      icon : <BiLogoFlask />
    },
    {
      name:"WordPress",
      icon : <FaWordpress />
    },
    {
      name:"Java",
      icon : <MdCoffee />
    },
  ]

  export const menuOptions = [
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
        "linkTo":"#skillsSection"
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
        "linkTo":"https://www.linkedin.com/in/chethan-b-31b58a192/",
        "target":"_blank"
    },
]