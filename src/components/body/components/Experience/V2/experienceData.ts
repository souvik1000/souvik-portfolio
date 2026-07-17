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
    "endDate": "06/2026",
    "location": "Chennai, India",
    "website": "https://rootquotient.com/",
    "description": "Rootquotient is a product engineering company that helps businesses build digital solutions.",
    "responsibilities": [
      "Architected a scalable WebSocket-based communication platform for incident management, enabling live messaging, dashboards, and Google Maps route synchronization while reducing update latency by 25%.",
      "Built reusable responsive UI component libraries using Shadcn and Tailwind CSS, adopted across 2+ fintech loan platforms, reducing design effort by 40% and improving UI consistency.",
      "Automated release engineering by implementing CI/CD pipelines with Azure DevOps, AWS, automated testing, GitLeaks scanning, and artifact versioning, reducing release cycles by 20–30%.",
      "Improved performance for data-intensive views rendering 50K+ records using memoization, virtualization, incremental loading, lazy loading, and code splitting, reducing initial render time and improving runtime responsiveness by 20–45%.",
      "Developed a shared React component library adopted across 3+ enterprise applications, reducing duplicate code by 30% and accelerating feature delivery by 20%.",
      "Implemented a service worker-based update mechanism that detects new deployments and prompts users to refresh, reducing stale-client issues and increasing latest-version adoption by 30%.",
      "Built a modular rich-text editor shared across 5 applications and integrated Razorpay using secure token-based authentication, supporting 59K+ monthly transactions.",
      "Implemented MSAL (Microsoft Entra ID) authentication and React Query persistence (offline cache), enabling secure authentication, offline-first data access, and seamless user sessions across enterprise applications."
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
      "Built a high-performance React search and filtering system with debouncing, pagination, and dynamic filters, improving search efficiency by 15% while reducing backend load by 20%.",
      "Developed a role-based coupon management platform with secure creation, distribution, and redemption workflows, increasing campaign conversions by 15%.",
      "Built a modular React admin dashboard using Ant Design and Chart.js for analytics, user management, and role-based access control, reducing manual administrative effort and report generation time by 30%.",
      "Improved developer productivity by creating a reusable React boilerplate with shared configurations, testing, Git hooks, CI integration, and scalable project architecture, reducing project setup time by 40%."
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
      "Developed reusable, highly configurable Custom dropdown components with multi-select, infinite scrolling, search, clear/reset behavior, and end-to-end test coverage, adopted across 3+ healthcare products serving 3.5M+ users.",
      "Achieved 54% to 87% test coverage and reduced post-release defects by 20%.",
      "Worked with cross-functional teams (design/backend/mobile/product) across 3+ products, participating in sprint planning and quality assurance."
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
