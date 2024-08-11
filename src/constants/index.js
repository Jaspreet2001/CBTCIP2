import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  zealWeb,
  zealApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Nebero Systems Pvt. Ltd.",
    company_website: "#", // Add the website URL if available
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "January 2024 - May 2024",
    points: [
      "Primarily focused on frontend development using Vue.js, Vuex, API integration, HTML, CSS, Bootstrap, and Vuetify.",
      "Contributed to various company projects, including adding an email preview feature, working on the Nebero firewall, Admin Panel, Nebero ERP, VOIP Project, and a matrimonial project.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Innobyte Services",
    company_website: "#", // Add the website URL if available
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Worked on a housing project using the MERN stack, allowing users to book rooms and houses.",
      "Enhanced both frontend and backend functionalities to provide a seamless booking experience.",
    ],
  },
  {
    title: "Python Trainee",
    company_name: "Auribises Technologies Pvt. Ltd.",
    company_website: "#", // Add the website URL if available
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2022",
    points: [
      "Excelled in 'Python with Data Science,' leading a Customer Management System project.",
      "Showcased adept skills in Python programming and data science for effective data management.",
    ],
  },
  {
    title: "Contributor",
    company_name: "GirlScript Winter of Contributing",
    company_website: "#", // Add the website URL if available
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "September 2021 - November 2021",
    points: [
      "Worked in domains such as Front-end Web Development with HTML, CSS, JavaScript, Bootstrap, DSA, C/C++, and contributed to open source projects.",
    ],
  },
  {
    title: "Web Dev/Designing Intern",
    company_name: "The Sparks Foundation",
    company_website: "#", // Add the website URL if available
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "November 2021 - December 2021",
    points: [
      "Crafted responsive web solutions with HTML, CSS, and JavaScript for practical applications.",
    ],
  },
];

const projects = [
  {
    name: "Intrusion Detection System Using ML",
    description:
      "Designed an IDS that monitors network traffic and system activity to identify potential security threats or unauthorized access attempts. Implemented using various ML algorithms to adapt to new attacks and measured its performance.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Linux",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp, // Add the relevant image for the project
    hosted_link: "#", // Add the hosted link if available
  },
  {
    name: "VoyagEase: Your AI Travel Companion",
    description:
      "VoyagEase is a user-friendly travel platform with registration, login, itinerary planning, maps, and reminders for a smooth travel experience. It incorporates advanced features like hotel bookings and OpenAI tech, elevating the platform’s ability to provide an interactive journey.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb, // Add the relevant image for the project
    hosted_link: "#", // Add the hosted link if available
  },
  {
    name: "Snappy - Realtime Chat Application",
    description:
      "Built a real-time chat app using the MERN stack and Socket.IO for instant communication. Implemented user authentication, avatar selection, and an intuitive UI/UX with React. Ensured seamless real-time messaging and a feature-rich user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp, // Add the relevant image for the project
    hosted_link: "#", // Add the hosted link if available
  },
];

const personalInfo = {
  name: "Jaspreet",
  fullName: "Jaspreet Kaur",
  email: "jaspreetjawanda06@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/jassu-jaspreet-5b9982322/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Jaspreet2001",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
