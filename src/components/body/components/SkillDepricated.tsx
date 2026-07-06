import LinearProgressBar from "src/utils/LinearProgressBar";
import CircularProgressBar from "src/components/body/components/styles/loadingStyle";

const mainSubjectList = [
  {
    topic: "ReactJs Architecture",
    percentage: 100,
  },
  {
    topic: "Core JavaScript",
    percentage: 100,
  },
  {
    topic: "Code Optimization",
    percentage: 100,
  },
  {
    topic: "CI/CD",
    percentage: 97,
  },
  {
    topic: "Web Performance",
    percentage: 95,
  },
  {
    topic: "Accessibility (A11Y)",
    percentage: 97,
  },

];

const otherSubjectList = [
  {
    topic: "Libraries & Frameworks: React v19+, Next.js, Node.js, Rest APIs, Styled Components",
    percentage: 100,
  },
  {
    topic: "State Management: Context API, Redux Toolkit, Redux, React Query, Zustand",
    percentage: 100,
  },
  {
    topic: "Languages: TypeScript, JavaScript (ES2023+), HTML5, CSS3, SCSS",
    percentage: 100,
  },
  {
    topic: "Testing tools: Jest, Vitest, RTL, Cypress",
    percentage: 34,
  },
  {
    topic: "Build & Automation: Vite, Webpack, Babel, NPM, PNPM, ESLint, Git, Azure DevOps, AWS, CI/CD, Agile/Scrum",
    percentage: 64,
  },
  {
    topic: "Frontend Ecosystem:",
    percentage: 82,
  },
  {
    topic: "Enzyme",
    percentage: 68,
  },
  {
    topic: "Formik",
    percentage: 73,
  },
  {
    topic: "NodeJs (Basic)",
    percentage: 34,
  },
  {
    topic: "Data Structure",
    percentage: 64,
  },
  {
    topic: "Git",
    percentage: 82,
  },
  {
    topic: "Enzyme",
    percentage: 68,
  },
  {
    topic: "Formik",
    percentage: 73,
  },
  {
    topic: "NodeJs (Basic)",
    percentage: 34,
  },
  {
    topic: "Data Structure",
    percentage: 64,
  },
  {
    topic: "Git",
    percentage: 82,
  },
];

const Skill = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "91vh",
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "60%" }}>
        <div
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <CircularProgressBar options={mainSubjectList} />
        </div>
      </div>
      <div style={{ width: "40%", height: "calc(100vh - 100px)", overflow: "scroll" }}>
        <div
          style={{
            width: "80%",
            margin: "16px auto",
          }}
        >
          <LinearProgressBar options={otherSubjectList} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
