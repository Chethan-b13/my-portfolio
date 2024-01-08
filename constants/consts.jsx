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
      name:"Flask",
      icon : <BiLogoFlask />
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
        "linkTo":"/"
    },
    {
        "name":"Projects",
        "icon": <GoGitBranch />,
        "linkTo":"/projects"
    },
    {
        "name":"Skills",
        "icon": <BiCodeBlock />,
        "linkTo":"/#skillsSection"
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


export const featuredProjects = [
  {
    projectName: "Ticket Easy",
    techUsed : "Django | ReactJs | SQLite",
    projectImage: "./projects/ticketeasyHome.png"
  },
  {
    projectName: "DanceStudio Portfolio",
    techUsed : "Django | ReactJs | SQLite",
    projectImage: "./projects/danceHome2.png"
  },
]

export const allProjects = [
  {
    projectName: "DanceStudio Portfolio",
    techUsed : ["Django","ReactJs","SQLite"],
    projectImages: ["./projects/danceSignup.png","./projects/danceHomePage.png","./projects/danceHomeJoin.png","./projects/danceHome2.png","./projects/danceHome3.png","./projects/danceHome4.png","./projects/danceFooter.png","./projects/danceGallery.png","./projects/danceProfile1.png"],
    details : [
      "Developed an engaging website for a dance class, using Django, ReactJS, SQLite and JWT for session management",
      "Streamlined the dance class's online presence, effectively showcasing their expertise, and facilitating the sale of online classes and workshops, enhancing their reach and impact",
      "Developed a user-friendly interface allowing easy signups and membership application"
    ]
  },
  {
    projectName: "Ticket Easy",
    techUsed : ["Django","ReactJs","SQLite"],
    projectImages: ["./projects/loginSignup.png","./projects/ticketeasyHome.png","./projects/tikceteasytopEvents.png"],
    details : [
      "Built a comprehensive ticketing application using Django-REST, React, SQLite and JWT for session management",
      "Applied Redux for effective state management in project development",
      "Created a user-friendly interface for effortless event creation and ticket booking"
    ]
  },
]