export interface ExperienceData {
  companyName: string;
  logo?: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  website: string;
  description: string;
  responsibilities?: string[];
  certificate?: string;
}

export const experienceList: ExperienceData[] = [
  {
    "companyName": "Rootquotient",
    "role": "Software Developer II",
    "type": "Full Stack",
    "startDate": "07/2024",
    "endDate": "Present",
    "location": "Chennai, India",
    "website": "https://rootquotient.com/",
    "description": "Rootquotient is a product engineering company that helps businesses build digital solutions.",
    "responsibilities": [
      "Architected optimised CI/CD pipelines (Github Action, Azure DevOps and AWS) across Organization; enabled zero-downtime deploy with artifacts.",
      "Established real-time & performance best practices (Optimization, Code Splitting, Lazy Loading, Web Vital and WCAG/A11Y) adopted by 3+ teams org-wide.",
      "Achieved 99.8% uptime; managed 10K+ concurrent users efficiently.",
      "Mentored 5+ developers; achieved 3 SDE1 and 2 SDE2 promotions; improved velocity by 35%.",
      "Conducted 5+ tech interviews; hired 2 engineers; established evaluation framework."
    ]
  },
  {
    "companyName": "Rootquotient",
    "role": "Software Developer I",
    "type": "Frontend",
    "startDate": "04/2023",
    "endDate": "06/2024",
    "location": "Chennai, India",
    "website": "https://rootquotient.com/",
    "description": "Rootquotient is a product engineering company that helps businesses build digital solutions.",
    "responsibilities": [
      "Drove state management & API integration strategies across 2+ projects.",
      "Led peer reviews establishing React best practices; configured ESLint + Prettier and Git hooks reducing review cycles by 35%.",
      "Identified bottlenecks; coached team on profiling tools and optimization.",
      "Coordinated with product/design on technical feasibility; maintained 100% on-time sprint delivery."
    ]
  },
  {
    companyName: "Innovaccer",
    role: "Associate Software Engineer",
    type: "Frontend",
    startDate: "09/2021",
    endDate: "04/2023",
    location: "Noida, India",
    website: "https://innovaccer.com/",
    description: `It is a health cloud company dedicated to accelerating innovation in healthcare to connect and curate the world's healthcare information.`,
    responsibilities: [
      "Develop and ship highly interactive web applications for Incare which is one of the biggest revenue-generating products of Innovacccer.",
      "Develop and Contribute generic, most frequently used by customers components to their common libraries, those are used in their application.",
      "Worked with a variety of different languages, and frameworks such as TypeScript, ReactJS, Redux, Node.js, etc.",
      "Tested many functionalities via Jest (for unit-testing), Enzyme (for component testing), and Cypress (for end-to-end testing).",
      "Communicate & collaborate with various teams of engineers, and designers on a regular basis and recently attended many client calls.",
    ],
  },
  {
    companyName: "Cognizant",
    role: "Programmer Analyst Trainee",
    type: "Intern - Full Stack",
    startDate: "01/2021",
    endDate: "05/2021",
    location: "Remote, India",
    website: "https://www.cognizant.com/in/en",
    description: `Cognizant helps companies modernize technology, reimagine processes and transform experiences so they stay ahead in a fast-changing world.`,
    responsibilities: [
      "Learned and implemented Java, Maven, JDBC, MVC, and Spring Boot frameworks to build a full-stack web application.",
      "Gained hands-on experience in software development lifecycle, including requirements gathering, design, development, testing, and deployment.",
    ],
  },
  {
    companyName: "EPAM Systems India",
    role: "Pre Education Program",
    type: "Trainee",
    startDate: "01/2020",
    endDate: "06/2020",
    location: "Remote, India",
    website: "https://www.epam.com/",
    description: `EPAM Systems Inc (EPAM Systems) is a technology company that offers software engineering services for software development and digital platforms.`,
    certificate:
      "https://drive.google.com/file/d/1_BHK3hS__amlRIk1SF_-FU_OjgyDXEKq/view",
    responsibilities: [
      "This PEP includes 13 online webinars covering SE best practices, Design principles with the intermediate level of Java concept."
    ]
  },
];
