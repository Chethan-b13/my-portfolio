import {
  BiLogoDjango,
  BiLogoFlask,
  BiSolidIdCard,
  BiCodeBlock,
} from "react-icons/bi";
import {
  FaDatabase,
  FaDocker,
  FaGlobe,
  FaPython,
  FaReact,
  FaAws,
  FaJs,
  FaLaptopCode,
  FaPhoneAlt,
} from "react-icons/fa";
import { GoGraph, GoGitBranch } from "react-icons/go";
import { MdCoffee, MdComputer, MdDataObject } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const environment = process.env.NEXT_PUBLIC_ENV || "dev";
export const BASEURL = environment === "prod" ? "/my-portfolio/" : "/";

export const skills = [
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "JavaScript | TypeScript",
    icon: <FaJs />,
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
  },
  {
    name: "Django | Flask | Node.js",
    icon: <BiLogoDjango />,
  },
  {
    name: "REST APIs | Celery | Microservices",
    icon: <MdComputer />,
  },
  {
    name: "AWS (Lambda, ECS, EC2, SQS, EventBridge, CloudWatch, S3)",
    icon: <FaAws />,
  },
  {
    name: "Docker | Terraform",
    icon: <FaDocker />,
  },
  {
    name: "PostgreSQL | MySQL | DynamoDB | Redis",
    icon: <FaDatabase />,
  },
  {
    name: "React | Next.js | Redux",
    icon: <FaReact />,
  },
  {
    name: "Distributed Systems",
    icon: <FaGlobe />,
  },
  {
    name: "Event-Driven Architecture",
    icon: <MdDataObject />,
  },
  {
    name: "System Design",
    icon: <MdComputer />,
  },
  {
    name: "CI/CD",
    icon: <MdComputer />,
  },
];

export const menuOptions = [
  {
    name: "Home",
    icon: <FaLaptopCode />,
    linkTo: `${BASEURL}`,
  },
  {
    name: "Experience",
    icon: <BiSolidIdCard />,
    linkTo: `${BASEURL}#experience`,
  },
  {
    name: "Projects",
    icon: <GoGitBranch />,
    linkTo: `${BASEURL}projects`,
  },
  {
    name: "Skills",
    icon: <BiCodeBlock />,
    linkTo: `${BASEURL}#skillsSection`,
  },
  {
    name: "Certificates",
    icon: <AiOutlineSafetyCertificate />,
    linkTo: `${BASEURL}#certificates`,
  },
  {
    name: "Contact",
    icon: <FaPhoneAlt />,
    linkTo: "https://www.linkedin.com/in/chethanb1321/",
    target: "_blank",
  },
];

export const ContactDetails = [
  // {
  //   contactIcon: <FaPhoneAlt />,
  //   link: "tel:+917022381576",
  //   name: "+91 7022381576",
  // },
  {
    contactIcon: <MdMail />,
    link: "mailto:chethanb1321@gmail.com",
    name: "chethanb1321@gmail.com",
  },
  {
    contactIcon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/chethanb1321/",
    name: "https://www.linkedin.com/in/chethanb1321/",
  },
  {
    contactIcon: <FaGithub />,
    link: "https://github.com/chethan-b13/",
    name: "https://github.com/chethan-b13/",
  },
];

export const featuredProjects = [
  {
    projectName: "Logoutloud",
    techUsed: "React Native | Node.js | MongoDB",
    projectImage: "./projects/logoutloud/1.png",
  },
  {
    projectName: "Ticket Easy",
    techUsed: "Django | ReactJs | SQLite",
    projectImage: "./projects/ticketeasyHome.png",
  },
];

export const allProjects = [
  {
    projectName: "Logoutloud",
    techUsed: [
      "React Native",
      "Expo SDK 52",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "GCP",
    ],
    projectImages: [
      "./projects/logoutloud/1.png",
      "./projects/logoutloud/2.png",
      "./projects/logoutloud/3.png",
      "./projects/logoutloud/4.png",
      "./projects/logoutloud/5.png",
      "./projects/logoutloud/6.png",
      "./projects/logoutloud/7.png",
      "./projects/logoutloud/8.png",
    ],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.logoutloud.app",
    appStoreLink:
      "https://apps.apple.com/in/app/logoutloud/id6746362059?platform=iphone",
    details: [
      "A production-ready social experience platform for local hangouts and group journeys with real users.",
      "Mobile app: iOS & Android (React Native, Expo 52) with multi-provider auth, Google Maps-based discovery, push notifications, QR check-in, payments, ratings.",
      "Backend: Node.js/Express TypeScript API on GCP with MongoDB, Firebase, geospatial queries, role-based access (Users, Hosts, Captains).",
      "Payments: Multi-gateway integration (Razorpay, PayU, Cashfree) with UPI/cards.",
      "Security & Quality: JWT auth, validation, rate limiting; TypeScript, ESLint, Prettier, Jest.",
    ],
  },
  {
    projectName: "DanceStudio Portfolio",
    techUsed: ["Django", "ReactJs", "SQLite"],
    projectImages: [
      "./projects/danceSignup.png",
      "./projects/danceHomePage.png",
      "./projects/danceHomeJoin.png",
      "./projects/danceHome2.png",
      "./projects/danceHome3.png",
      "./projects/danceHome4.png",
      "./projects/danceFooter.png",
      "./projects/danceGallery.png",
      "./projects/danceProfile1.png",
    ],
    details: [
      "Developed an engaging website for a dance class, using Django, ReactJS, SQLite and JWT for session management",
      "Streamlined the dance class's online presence, effectively showcasing their expertise, and facilitating the sale of online classes and workshops, enhancing their reach and impact",
      "Developed a user-friendly interface allowing easy signups and membership application",
    ],
  },
  {
    projectName: "Ticket Easy",
    techUsed: ["Django", "ReactJs", "SQLite"],
    projectImages: [
      "./projects/loginSignup.png",
      "./projects/ticketeasyHome.png",
      "./projects/tikceteasytopEvents.png",
    ],
    deployedLink: "https://tick-it-easy-frontend.vercel.app/",
    details: [
      "Built a comprehensive ticketing application using Django-REST, React.js, PostgreSQL and JWT for session management",
      "Applied Redux for effective state management in project development",
      "Created a user-friendly interface for effortless event creation and ticket booking",
    ],
  },
  {
    projectName: "NoteRun",
    techUsed: ["Docker", "Flask", "Django", "PostgreSql"],
    projectImages: [
      "./projects/NoterDjango.png",
      "./projects/NoterHome.png",
      "./projects/NoterCreate.png",
      "./projects/NoterUpdate.png",
      "./projects/NoterDockerfile.png",
    ],
    details: [
      "Developed a multi-service application integrating Django for authentication and Flask for note-taking functionality",
      "Authentication Service: Implemented using Django to manage user authentication and registration, operational on port 5050",
      "Note Taking Service: Utilized Flask to enable CRUD operations for notes, accessible via port 5030",
      "Database Connectivity: Established a PostgreSQL database with persistent volumes, facilitating data storage for both services",
      "Docker Compose Implementation: Employed Docker Compose for containerizing and orchestrating services, ensuring easy deployment and management",
      // "Technical Infrastructure: Leveraged Docker Compose for streamlined container management, enhancing application portability and scalability.",
      // "Functionalities: Authentication service ensured secure user management, while note-taking service provided versatile CRUD operations for notes, enhancing data manipulation capabilities."
    ],
  },
  {
    projectName: "Potato leaf Diseases Prediction",
    techUsed: ["Python", "deep learning"],
    projectImages: ["./projects/PotatoLeaf.gif"],
    details: [
      "Developed a deep learning system using VGG16 and VGG19 models to classify diseases in potato plants based on leaf conditions",
      "Collected and pre-processed diverse datasets of potato plant images, ensuring data quality for effective model training",
      "Implemented data augmentation techniques to expand the dataset, enhancing the model's robustness and accuracy",
      "Achieved an average accuracy of 91% in classifying four types of potato plant diseases, addressing the decline in harvest quality and quantity caused by diseases",
    ],
  },
  {
    projectName: "Bangalore House Price Prediction",
    techUsed: ["Python", "Machine learning", "Data Analysis"],
    projectImages: [
      "./projects/bangaloreHousePrice1.png",
      "./projects/bangaloreHousePrice2.png",
    ],
    details: [
      "Created a Machine Learning Pipeline to predict house SalePrice, encompassing phases like Data Analysis, Feature Engineering, Exploratory Data Analysis, Model Building, and Model Deployment in line with the standard Data Science project life cycle.",
      "Utilized a Kaggle dataset focused on Bengaluru house prices to drive the predictive analysis.",
      "Performed comprehensive analysis, feature engineering, and exploratory data analysis, documented within the .ipynb file.",
      "Utilized essential packages including numpy, pandas, matplotlib, seaborn, and sklearn for data manipulation, visualization, and model development.",
    ],
  },
  {
    projectName: "Customer Churn Prediction",
    techUsed: ["Python", "Machine learning", "Data Analysis"],
    projectImages: ["./projects/customerChurn.gif"],
    details: [
      "Performed Data Cleaning, Data Analysis, and Data Preprocessing on telecommunication company data to prepare it for predictive modeling.",
      "Explored and trained various machine learning models, including Logistic Regression, SVM, Random Forest, Naive Bayes and Decision Tree",
      "Achieved a commendable 80% accuracy rate with Logistic Regression after hyper parameter tuning, demonstrating the predictive model's effectiveness in forecasting customer churn in the telecommunication sector.",
    ],
  },
];

export const certificatesInfo = [
  {
    name: "Python for Data Science",
    date: "Feb 2023",
    creds:
      "https://drive.google.com/file/d/1V9M8XtaFkERinUOQp94dHvtzCMLK2zLa/view?usp=sharing",
  },
  {
    name: "AWS Academy Graduate",
    date: "Apr 2022",
    creds: "https://www.credly.com/badges/a79faf88-26e2-4674-9b6a-0b096ba50679",
  },
];

export const workExperience = [
  {
    companyName: "Interview Kickstart",
    companyLogo: "./ik_logo.png",
    duration: "May 2024 - Present",
    role: "Software Engineer II",
    summary: [
      "Led migration from EC2 and Elastic Beanstalk to Dockerized ECS Fargate infrastructure, improving reliability, autoscaling, deployment efficiency, and operational scalability across production services.",
      "Drove a company-wide PII encryption initiative across 170+ AWS Lambda services and 50+ production workloads, delivering compliance upgrades with zero downtime.",
      "Architected a distributed event-driven platform using Salesforce Platform Events, AWS Lambda, SQS, Celery, and n8n, processing 20K+ events daily with fault-tolerant delivery, retries, and monitoring.",
      "Redesigned HubSpot–Salesforce synchronization architecture and migrated 700K+ records while modernizing legacy integrations and improving CRM data reliability.",
      "Built automated lead recovery systems using Django, Celery, EventBridge, Lambda, and SQS, saving $2K–$3K daily while maintaining 99%+ CRM data accuracy.",
      "Built a distributed support automation platform using AWS Lambda, DynamoDB, SQS, and DLQs, increasing student query resolution from 30–40% to 90%+.",
    ],
  },
  {
    companyName: "Vedasis Analytics Pvt Ltd.",
    companyLogo: "./vhubLogo.png",
    duration: "Jun 2023 - Apr 2024",
    role: "Founding Engineer",
    summary: [
      "Built the company's influencer marketing SaaS platform from 0 to 1, owning architecture, backend services, frontend applications, database design, and production deployment.",
      "Led engineering execution through sprint planning, feature prioritization, code reviews, and development workflows, improving delivery predictability and reducing production defects.",
      "Designed and implemented RBAC, subscription management, and credit-based billing systems that enabled scalable customer onboarding and monetization.",
      "Established cloud infrastructure on GCP Cloud Run and implemented CI/CD pipelines using GitHub Actions, improving deployment velocity and engineering productivity.",
      "Improved backend performance by 60% through Redis caching, concurrent processing, and database query optimization.",
      "Built large-scale Instagram and YouTube data pipelines processing 300K+ records monthly for influencer discovery and analytics.",
    ],
  },
];

export const internshipExp = [
  {
    companyName: "Betsol",
    companyLogo: "./betsolLogo.png",
    duration: "Feb 2023 - Mar 2023",
    role: "Software Engineer Trainee",
    summary: [
      "Mastered DevOps tools, including Docker and Docker Compose, to optimize development and deployment workflows",
      "Pioneered a proof-of-concept initiative, transitioning the product to a stateless architecture",
      "Conducted research on the Restic backup tool, exploring its capabilities and potential applications",
      "Collaborated with the team, recognizing individual roles and working collectively towards shared objectives",
    ],
  },
];
