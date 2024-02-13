import { BiLogoDjango, BiLogoFlask, BiSolidIdCard, BiCodeBlock } from 'react-icons/bi';
import { FaDatabase, FaDocker, FaGlobe, FaHtml5, FaPython, FaReact, FaWordpress,FaLaptopCode,FaPhoneAlt } from 'react-icons/fa';
import { GoGraph,GoGitBranch } from 'react-icons/go';
import { MdCoffee, MdComputer, MdDataObject } from 'react-icons/md';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { MdMail} from "react-icons/md";


const environment = "prod"
export const BASEURL = environment==="dev"?"/":"https://chethan-b13.github.io/my-portfolio/"


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
        "linkTo":`${BASEURL}`
    },
    {
        "name":"Projects",
        "icon": <GoGitBranch />,
        "linkTo":`${BASEURL}projects`
    },
    {
        "name":"Skills",
        "icon": <BiCodeBlock />,
        "linkTo":`${BASEURL}#skillsSection`
    },
    {
        "name":"Experience",
        "icon": <BiSolidIdCard />,
        "linkTo":`${BASEURL}#experience`
    },
    {
        "name":"Certificates",
        "icon": <AiOutlineSafetyCertificate />,
        "linkTo":`${BASEURL}#certificates`
    },
    {
        "name":"Contact",
        "icon": <FaPhoneAlt />,
        "linkTo":"https://www.linkedin.com/in/chethan-b-31b58a192/",
        "target":"_blank"
    },
]

export const ContactDetails = [
  {
      contactIcon : <FaPhoneAlt />,
      link : "tel:+917022381576",
      name : "+91 7022381576"
  },
  {
      contactIcon : <MdMail />,
      link : "mailto:chethanb1321@gmail.com",
      name : "chethanb1321@gmail.com"
  },
  {
      contactIcon : <FaLinkedin />,
      link : "https://www.linkedin.com/in/chethan-b-31b58a192/",
      name : "https://www.linkedin.com/in/chethan-b-31b58a192/"
  },
  {
      contactIcon : <FaGithub />,
      link : "https://github.com/chethan-b13/",
      name : "https://github.com/chethan-b13/"
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
    projectImage: "./projects/danceSignup.png"
  },
]

export const allProjects = [
  {
    projectName: "Ticket Easy",
    techUsed : ["Django","ReactJs","SQLite"],
    projectImages: ["./projects/loginSignup.png","./projects/ticketeasyHome.png","./projects/tikceteasytopEvents.png"],
    deployedLink : "https://tick-it-easy-frontend.vercel.app/",
    details : [
      "Built a comprehensive ticketing application using Django-REST, React.js, PostgreSQL and JWT for session management",
      "Applied Redux for effective state management in project development",
      "Created a user-friendly interface for effortless event creation and ticket booking"
    ]
  },
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
    projectName: "NoteRun",
    techUsed : ["Docker","Flask","Django","PostgreSql"],
    projectImages: ["./projects/NoterDjango.png","./projects/NoterHome.png","./projects/NoterCreate.png","./projects/NoterUpdate.png","./projects/NoterDockerfile.png"],
    details : [
      "Developed a multi-service application integrating Django for authentication and Flask for note-taking functionality",
      "Authentication Service: Implemented using Django to manage user authentication and registration, operational on port 5050",
      "Note Taking Service: Utilized Flask to enable CRUD operations for notes, accessible via port 5030",
      "Database Connectivity: Established a PostgreSQL database with persistent volumes, facilitating data storage for both services",
      "Docker Compose Implementation: Employed Docker Compose for containerizing and orchestrating services, ensuring easy deployment and management",
      // "Technical Infrastructure: Leveraged Docker Compose for streamlined container management, enhancing application portability and scalability.",
      // "Functionalities: Authentication service ensured secure user management, while note-taking service provided versatile CRUD operations for notes, enhancing data manipulation capabilities."
  ]
  },
  {
    projectName: "Potato leaf Diseases Prediction",
    techUsed : ["Python","deep learning"],
    projectImages: ["./projects/PotatoLeaf.gif"],
    details : [
      "Developed a deep learning system using VGG16 and VGG19 models to classify diseases in potato plants based on leaf conditions",
      "Collected and pre-processed diverse datasets of potato plant images, ensuring data quality for effective model training",
      "Implemented data augmentation techniques to expand the dataset, enhancing the model's robustness and accuracy",
      "Achieved an average accuracy of 91% in classifying four types of potato plant diseases, addressing the decline in harvest quality and quantity caused by diseases",
  ]
  },
  {
    projectName: "Bangalore House Price Prediction",
    techUsed : ["Python","Machine learning","Data Analysis"],
    projectImages: ["./projects/bangaloreHousePrice1.png","./projects/bangaloreHousePrice2.png"],
    details : [
      "Created a Machine Learning Pipeline to predict house SalePrice, encompassing phases like Data Analysis, Feature Engineering, Exploratory Data Analysis, Model Building, and Model Deployment in line with the standard Data Science project life cycle.",
      "Utilized a Kaggle dataset focused on Bengaluru house prices to drive the predictive analysis.",
      "Performed comprehensive analysis, feature engineering, and exploratory data analysis, documented within the .ipynb file.",
      "Utilized essential packages including numpy, pandas, matplotlib, seaborn, and sklearn for data manipulation, visualization, and model development."
  ]
  },
  {
    projectName: "Customer Churn Prediction",
    techUsed : ["Python","Machine learning","Data Analysis"],
    projectImages: ["./projects/customerChurn.gif"],
    details : [
      "Performed Data Cleaning, Data Analysis, and Data Preprocessing on telecommunication company data to prepare it for predictive modeling.",
      "Explored and trained various machine learning models, including Logistic Regression, SVM, Random Forest, Naive Bayes and Decision Tree",
      "Achieved a commendable 80% accuracy rate with Logistic Regression after hyper parameter tuning, demonstrating the predictive model's effectiveness in forecasting customer churn in the telecommunication sector."
  ]
  },
  
]


export const certificatesInfo = [
  {
    name: "Python for Data Science",
    date: "Feb 2023",
    creds: "https://drive.google.com/file/d/1V9M8XtaFkERinUOQp94dHvtzCMLK2zLa/view?usp=sharing"
  },
  {
    name: "AWS Academy Graduate",
    date: "Apr 2022",
    creds: "https://www.credly.com/badges/a79faf88-26e2-4674-9b6a-0b096ba50679"
  }
]


export const workExperience = [
  {
    companyName:"Vedasis Analytics Pvt Ltd.",
    companyLogo : "./vhubLogo.png",
    duration:"May 2023 - Present",
    role:"FullStack Developer & Tech Lead",
    summary:[
      "Optimized Flask backend structure, boosting scalability and readability, Integrated Swagger documentation and boosted productivity by 70%",
      "Implemented code refactoring techniques within NextJs app, eliminating reliance on external UI libraries and reduced bug fixing time by 25%",
      "Conducted code reviews for stable, bug-free deployments which reduced post-deployment issues by 50% and improved overall product quality",
      "Engineered scraping tools for Instagram and YouTube, enabling collection of over 8000 data points per day",
      "Enhanced back end performance by 60% through Redis integration, multi-threading, and optimized query efficiency",
      "Mentored the team in writing efficient, reusable code, emphasizing industry best practices resulting in 30% reduction in redundant lines",
      "Revamped WordPress landing page, slashing reload time from 8 to 2 seconds and boosting SEO score by 89%",
      "Interacted directly with 10+ clients to gather requirements, planning feature implementations aligned with stakeholder needs"
    ]
  },
]

export const internshipExp = [
  {
    companyName:"Betsol",
    companyLogo : "./betsolLogo.png",
    duration:"Feb 2023 - Mar 2023",
    role:"Software Engineer Trainee",
    summary:[
      "Mastered DevOps tools, including Docker and Docker Compose, to optimize development and deployment workflows",
      "Pioneered a proof-of-concept initiative, transitioning the product to a stateless architecture",
      "Conducted research on the Restic backup tool, exploring its capabilities and potential applications",
      "Collaborated with the team, recognizing individual roles and working collectively towards shared objectives",
    ]
  },
]