import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  bootstrap,
  java,
  python,
  postgresql,
  aws,
  azure,
  agile,
  junit,
  mockito,
  selenium,
  jest,
  easymock,
  windows,
  linux,
  gitlab,
  kanban,
  restapi,
  microservices,
  html,
  css,
  reactjs,
  jenkins,
  vuejs,
  nodejs,
  mongodb,
  git,
  springboot,
  jira,
  docker,
  cicd,
  postman,
  sonarqube,
  acidbase,
  classicauto,
  transactionmonitoring,
  adfm,
  ats,
  falldetectionsystem,
  innoversity,
  timeclock,
  panelmanagement,
  mysql,
  srini,
  nwmsu,
  zensar,
  epam,
  vak,
  women,
  men,
  json,
  redux,
  jquery,
  kafka,
  hibernate,
  springcloud,
  graphql,
  firebase,
  sqlserver,
  oracle
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Scalable Systems Designer",
    icon: mobile,
  },
  {
    title: "User-Centric Interface Designer",
    icon: backend,
  },
  {
    title: "Agile Practitioner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JIRA",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Srini Soft Inc.",
    icon: srini,
    iconBg: "#383E56",
    date: "Jan 2024 – Present",
    points: [
      "Building a Clinical Decision Support System for a healthcare client using Java 17, Spring Boot, and Kafka. Integrated with Vision 3 EHR via REST APIs and deployed on Azure AKS. Created a React.js admin UI with Redux and JWT auth, and automated deployments using GitLab CI/CD."
    ]
  },
  {
    title: "Software Developer",
    company_name: "Northwest Missouri State University",
    icon: nwmsu,
    iconBg: "#383E56",
    date: "Aug 2023 – Dec 2024",
    points: [
      "Developed academic systems using Spring Boot, React, and Vue.js. Worked on Time Clock and Adjunct Faculty apps with Kafka, MySQL, and MongoDB. Deployed on AWS and followed Agile with CI/CD using Jenkins, ensuring test coverage and performance improvements."
    ]
  },
  {
    title: "Full Stack Developer",
    company_name: "Zensar Technologies",
    icon: zensar,
    iconBg: "#383E56",
    date: "Jul 2022 – Jul 2023",
    points: [
      "Built Classic Auto, a vehicle insurance app with Java 11, Spring Boot, MongoDB, and React. Implemented VIN-based workflows, premium calculations, JWT auth, and deployed to AWS. Focused on form validation, state management, and test coverage."
    ]
  },
  {
    title: "Full Stack Developer",
    company_name: "Epam Systems",
    icon: epam,
    iconBg: "#E6DEDD",
    date: "Jun 2021 – Jun 2022",
    points: [
      "Worked on a real-time fraud monitoring system using Spring Boot, Kafka, PostgreSQL, and React. Enabled secure dashboards with JWT, optimized reporting, and automated CI/CD with GitLab. Improved detection latency and performance under high load."
    ]
  },
  {
    title: "Junior Software Engineer",
    company_name: "VAK IT Systems",
    icon: vak,
    iconBg: "#E6DEDD",
    date: "Jan 2020 – May 2021",
    points: [
      "Developed a Panel Management System using Spring Boot, MySQL, React.js, and Kafka. Built five key modules and automated interview scheduling. Deployed on AWS and ensured UI reliability with Jest and backend tests using JUnit and Mockito."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Vaishnavi is a talented software developer with exceptional technical knowledge and expertise in development and deployment of applications built with Python Fast API and VueJS. I had the pleasure of working as her supervisor on the development of a faculty management web application. I am confident in her ability to understand complex technical requirements and develop scalable and efficient technical solutions in an agile environment and I am happy to recommend Vaishnavi to a team looking for a skilled and dedicated software developer.",
    name: "Bikash Adhikari",
    designation: "Software Developer | Programming Lead",
    company: "Northwest Missouri State University",
    image: men,
  },
  {
    testimonial:
      "Vaishnavi worked as a Graduate Assistant (GA) in the Learning & Teaching Center (LTC) at Northwest Missouri State University during 2023-2024. As a GA, Vaishnavi helped to manage a team of 10 student employees for the LTC.  Vaishnavi worked on the Adjunct Faculty Management System (ADFM) project. This web application was created to assist provosts, department chairs and directors to view, track, and manage adjunct faculty. Two other programs that Vaishnavi assisted with were the E-mail Automation and Time Clock. These were programs that were already developed, but needed some updating and maintenance. E-mail Automation sends automated e-mails to our online students. The Time Clock is a system used in our office for our student employees to clock in and out digitally and to easily track hours.  Vaishnavi would be an excellent employee. She is organized and follows through on tasks. Our office benefitted from the work that Vaishnavi was able to complete during the time here.",
    name: "Darla Runyon",
    designation: "Director--Learning & Teaching Center and Northwest Online at Northwest Missouri State University",
    company: "Northwest Missouri State University",
    image: women,
  },
  {
    testimonial:
      "I worked with Vaishnavi to develop an online game for my chemistry students. The game is posted online at https://vaishnavi-varaganti.itch.io/acid-base-quest. Vaishnavi developed this game in a semester as part of a course requirement. She was very responsive when I asked for modifications. I think that you will find that she is a very talented programmer if you hire her.",
    name: "Micheal Bellamy",
    designation: "Chemistry Professor",
    company: "Northwest Missouri State University",
    image: men,
  },
];

const projects = [
  {
    name: "Adjunct Faculty Management System",
    description: "Web app to manage adjunct faculty data and performance metrics integrated with Canvas LMS.",
    detailedDescription:
      "This system streamlines adjunct faculty oversight using data from LMS, Evaluation Kit, and Canvas. Initially built with Spring Boot, it was later transitioned to FastAPI with MongoDB and React.js. It supports three distinct roles (Admin, Chair, Viewer) with JWT-based authentication.",
    features: [
      "Secure role-based access control using JWT",
      "Integration with Canvas LMS and Evaluation Kit",
      "Faculty dashboards with performance metrics",
      "Built using FastAPI, React.js, and MongoDB",
      "Supports post-pandemic online education tracking"
    ],
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "React JS", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: adfm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Time Clock Application",
    description: "Attendance tracker with real-time summaries, Kafka logging, and admin-level reporting.",
    detailedDescription:
      "An intuitive web application allowing users to track work hours, clock in/out, and view summaries. Admins manage records and generate reports. Kafka handles real-time event streaming. Built with React, Spring Boot, and MySQL.",
    features: [
      "Employee clock in/out functionality",
      "Daily, weekly, monthly summaries",
      "Admin reporting dashboard",
      "Kafka used for real-time logging",
      "Built with React, Spring Boot, and MySQL"
    ],
    tags: [
      { name: "React JS", color: "green-text-gradient" },
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Kafka", color: "pink-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    image: timeclock,
    source_code_link: "https://github.com/",
  },
  {
    name: "Attendance Tracking System",
    description: "Vue + Spring Boot system to manage real-time attendance logging with analytics dashboards.",
    detailedDescription:
      "Developed to simplify and automate attendance recording, this system supports real-time updates, analytics dashboards, and secure access control using JWT. CI/CD is handled via GitLab and Jenkins.",
    features: [
      "Real-time attendance logging",
      "Admin dashboards for analytics",
      "JWT authentication for secure access",
      "CI/CD via GitLab and Jenkins",
      "Deployed to AWS for scalability"
    ],
    tags: [
      { name: "Vue JS", color: "green-text-gradient" },
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    image: ats,
    source_code_link: "https://github.com/",
  },
  {
    name: "Classic Auto Insurance",
    description: "Vehicle insurance app with VIN-based forms, premium calculations, and coverage selection.",
    detailedDescription:
      "A full-stack insurance management system built for vehicle policy handling. Supports editing vehicle details, calculating premiums, and applying discounts. Users can choose between monthly or full-term payment plans.",
    features: [
      "VIN-based vehicle data entry",
      "Add/edit/replace/remove vehicle info",
      "Auto-calculated discounts and premiums",
      "JWT + RBAC security for user access",
      "Integrated with AWS for production hosting"
    ],
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "React JS", color: "pink-text-gradient" },
      { name: "AWS", color: "blue-text-gradient" },
    ],
    image: classicauto,
    source_code_link: "https://github.com/",
  },
  {
    name: "Transaction Monitoring System",
    description: "Real-time fraud detection using Kafka, Spring Boot microservices, and PostgreSQL.",
    detailedDescription:
      "Built for a finance client, this system analyzes live transactions and detects suspicious patterns. It uses Kafka for event streaming, PostgreSQL for logs, and React with Redux for the UI.",
    features: [
      "Kafka-based real-time event processing",
      "React + Redux frontend for monitoring",
      "Spring Boot microservices architecture",
      "Role-based compliance access with JWT",
      "PostgreSQL backend for audit logging"
    ],
    tags: [
      { name: "Kafka", color: "green-text-gradient" },
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "React JS", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],
    image: transactionmonitoring,
    source_code_link: "https://github.com/",
  },
  {
    name: "Panel Management System",
    description: "Modular interview scheduling system with Kafka and multi-role access.",
    detailedDescription:
      "Enterprise application designed to coordinate panelist availability with candidate schedules. Includes five modules: User, Master, Candidate, Panel, and Interview Management.",
    features: [
      "Five modules for full interview workflow",
      "Real-time event messaging with Kafka",
      "Role-based access with JWT",
      "Built with Spring Boot, React, MySQL",
      "Deployed to AWS cloud"
    ],
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "React JS", color: "green-text-gradient" },
      { name: "Kafka", color: "pink-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    image: panelmanagement,
    source_code_link: "https://github.com/",
  },
  {
    name: "Innoversity",
    description: "Crowdsourced innovation portal where users solve posted challenges and win rewards.",
    detailedDescription:
      "Innoversity connects problem solvers and organizations through a gamified challenge-solving platform. Features role-based participation, leaderboard, and cash rewards.",
    features: [
      "Challenge and solution portal",
      "Leaderboard and reward system",
      "Secure user management with JWT",
      "MongoDB for data persistence",
      "Node.js backend, React frontend"
    ],
    tags: [
      { name: "Node JS", color: "blue-text-gradient" },
      { name: "React JS", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: innoversity,
    source_code_link: "https://github.com/vaishnavi-varaganti/innoversity",
  },
  {
    name: "Acid-Base Game",
    description: "A 2D chemistry game teaching acid-base reactions using fun challenges and levels.",
    detailedDescription:
      "Built with Godot, this educational game helps players learn neutralization reactions by selecting correct acids or bases. Includes 4 levels of increasing difficulty.",
    features: [
      "Built using Godot engine",
      "4 levels of interactive gameplay",
      "Educational quizzes on acid-base reactions",
      "Multiple choice mechanism with score tracking",
      "Fun visuals and duck shooter character"
    ],
    tags: [
      { name: "Godot", color: "blue-text-gradient" },
      { name: "React JS", color: "green-text-gradient" },
    ],
    image: acidbase,
    source_code_link: "https://github.com/vaishnavi-varaganti/acid-base-game",
  },
  {
    name: "Fall Detection System for the Elderly",
    description: "IoT-based fall alert system with wearable sensor and emergency notification.",
    detailedDescription:
      "An IoT project to detect falls using accelerometer data from Raspberry Pi. Alerts are sent to caregivers through a Firebase-connected mobile app within 15 seconds.",
    features: [
      "Wearable device with fall detection sensors",
      "Real-time alerts via mobile app",
      "Firebase backend with emergency contacts",
      "90%+ detection accuracy",
      "Reliable UI for seniors and caregivers"
    ],
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "Android", color: "green-text-gradient" },
      { name: "Raspberry Pi", color: "pink-text-gradient" },
    ],
    image: falldetectionsystem,
    source_code_link: "https://github.com/vaishnavi-varaganti/Fall-Detection-System-for-the-Elderly",
  },
];

const categorizedTechnologies = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: javascript },
      { name: "React.js", icon: reactjs },
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "Vue.js", icon: vuejs },
      { name: "Bootstrap", icon: bootstrap },
      { name: "TypeScript", icon: typescript },
      { name: "JSON", icon: json },
      { name: "Redux", icon: redux },
      { name: "jQuery", icon: jquery },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: java },
      { name: "Spring Boot", icon: springboot },
      { name: "Node.js", icon: nodejs },
      { name: "Python", icon: python },
      { name: "REST APIs", icon: restapi },
      { name: "Microservices", icon: microservices },
      { name: "Kafka", icon: kafka },
      { name: "GraphQL", icon: graphql },
      { name: "Hibernate", icon: hibernate },
      { name: "Spring Cloud", icon: springcloud },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "Oracle", icon: oracle },
      { name: "SQL Server", icon: sqlserver },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    category: "DevOps & Cloud Technologies",
    items: [
      { name: "AWS", icon: aws },
      { name: "Azure", icon: azure },
      { name: "Jenkins", icon: jenkins },
      { name: "Docker", icon: docker },
      { name: "CI/CD Pipelines", icon: cicd },
    ],
  },
  {
    category: "Testing & Quality",
    items: [
      { name: "Junit", icon: junit },
      { name: "Mockito", icon: mockito },
      { name: "Selenium", icon: selenium },
      { name: "Jest", icon: jest },
      { name: "SonarQube", icon: sonarqube },
      { name: "Postman", icon: postman },
    ]
  },
  {
    category: "Agile Methodologies",
    items: [
      { name: "Agile", icon: agile },
      { name: "Kanban", icon: kanban },
      { name: "Jira", icon: jira },
    ],
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Windows", icon: windows },
      { name: "Linux", icon: linux },
    ],
  },
];


export { services, technologies, experiences, testimonials, projects, categorizedTechnologies };
