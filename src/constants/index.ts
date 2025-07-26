// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/leancal",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: "/src/assets/webdev.png",
  },
  {
    title: "React Native Developer",
    icon: "/src/assets/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "/src/assets/backend.png",
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
   {
    title: "Full Stack Developer",
    company_name: "Total Home S.A.",
    icon: "/src/assets/company/totalhome_logo.jpg",
    iconBg: "#383E56",
    date: "Jul 2023 – Present",
    points: [
      "Developed and maintained responsive web and mobile applications using Java, React, and React Native.",
      "Integrated modern technologies like Angular, TypeScript, Node.js, Next.js, MySQL, Firebase, microservices, Spring Boot, and Git to build scalable solutions.",
      "Collaborated with cross-functional teams to design, develop, and deploy new features in both web and mobile environments.",
      "Actively participated in Agile methodologies, including SCRUM sprints and daily stand-ups to ensure efficient delivery.",
      "Refactored and optimized code to improve performance and reduce load times.",
      "Diagnosed and resolved complex technical issues to ensure high system stability.",
      "Led projects such as a real-time product management system and a mobile insurance data app built with React Native.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "FLEX TECH Arg.",
    icon: "/src/assets/company/flex_tech_arg_logo.jpg",
    iconBg: "#E6DEDD",
    date: "Jul 2022 – Jul 2023",
    points: [
      "Built and maintained software solutions using Java, Spring Boot, and Quarkus.",
      "Developed and integrated RESTful APIs to enhance application interoperability.",
      "Managed and optimized databases using SQL, ensuring high performance and data integrity.",
      "Performed thorough testing and debugging using Postman and other tools.",
      "Contributed to Agile practices through SCRUM sprints and sprint reviews.",
      "Improved app response time by 30% and implemented new features that boosted client satisfaction by 25%.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Inteligentia SRL",
    icon: "/src/assets/company/inteligentia_logo.jpg",
    iconBg: "#383E56",
    date: "Nov 2021 – Jul 2023",
    points: [
      "Developed and maintained web applications using React Native, Angular, HTML, CSS, and JavaScript.",
      "Integrated and managed APIs and databases using Axios and Postman.",
      "Built responsive user interfaces with Bootstrap and Tailwind CSS.",
      "Used Git for version control and collaborated closely with the dev team.",
      "Improved UX through heuristic evaluations and UI research.",
      "Collaborated in UI design using Figma for a consistent visual experience.",
    ],
  },
  {
    title: "Frontend Mentor",
    company_name: "Argentina Programa",
    icon: "/src/assets/company/1646458289482.jpg",
    iconBg: "#E6DEDD",
    date: "Nov 2022 – Mar 2023",
    points: [
      "Led live workshops with hands-on coding sessions for junior devs.",
      "Provided mentorship, feedback, and technical follow-up to ensure student progress.",
      "Evaluated assignments, delivered detailed reviews, and fostered a collaborative learning environment.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: "/src/assets/company/freelance_self_employed_official_logo.jpg",
    iconBg: "#383E56",
    date: "Dec 2020 – Nov 2021",
    points: [
      "Built fully responsive websites for e-commerce, dashboards, homebanking platforms and more.",
      "Used React.js, Vue.js, Java, Spring Boot, HTML/CSS, Tailwind, APIs REST, SQL, and PostgreSQL.",
      "Handled frontend and backend design, integration and testing.",
    ],
  },
  {
    title: "Marketing & Sales Manager",
    company_name: "Vuelta Abajo Social Club",
    icon: "/src/assets/company/vuelta_abajo_social_club_logo.jpg",
    iconBg: "#E6DEDD",
    date: "Dec 2019 – Sep 2020",
    points: [
      "Managed digital marketing campaigns (SEO/SEM), sales platforms and client retention strategies.",
      "Created and optimized web pages for e-commerce and social media campaigns.",
      "Used tools like MercadoLibre, Tienda Nube, Facebook and Instagram to drive traffic and sales.",
    ],
  },
  {
    title: "Technical Support",
    company_name: "Parque Electrónica",
    icon: "/src/assets/company/images.png",
    iconBg: "#383E56",
    date: "Mar 2016 – Nov 2019",
    points: [
      "Repaired and configured PCs, notebooks, printers, and mobile devices.",
      "Installed and maintained local networks and managed user accounts.",
      "Worked across Windows, Linux and macOS environments.",
      "Reduced incident resolution time by 30% and implemented a tracking system that increased client satisfaction by 20%.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Leandro is a solid full stack developer. He helped us build a React app from scratch with excellent communication and fast delivery.",
    name: "Lucía González",
    designation: "Product Manager",
    company: "Total Home S.A.",
    image: user1,
  },
  {
    testimonial:
      "He’s a fast learner and always proposes useful ideas. I was impressed with his attention to performance and UX.",
    name: "Matías Peralta",
    designation: "Tech Lead",
    company: "Flex Tech Arg.",
    image: user2,
  },
  {
    testimonial:
      "Great experience working with Leandro. He turned our design into a fully functional e-commerce site in no time.",
    name: "Ana Romero",
    designation: "Client",
    company: "Local Retail",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/leandrocalvet",
  },
  {
    name: "Behance",
    icon: "/src/assets/socials/behance.svg",
    link: "https://www.behance.net/leandrocalvet2",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/leancal",
  },
] as const;
