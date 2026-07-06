import {
    FaReact,
    FaJs,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaGitlab,
    FaAws,
    FaDocker,
    FaPython,
    FaConfluence,
    FaBitbucket,
    FaSass,
    FaStore,
    FaRocket,
} from "react-icons/fa";
import {
    SiRedux,
    SiTypescript,
    SiNextdotjs,
    SiJest,
    SiCypress,
    SiWebpack,
    SiBabel,
    SiEslint,
    SiStyledcomponents,
    SiVite,
    SiReactquery,
    SiMongodb,
    SiMysql,
    SiPostman,
    SiJira,
    SiOpenai,
    SiTailwindcss,
    SiSass,
    SiGoogle, // For Gemini
    SiN8N,
    SiNpm,
} from "react-icons/si";
import { VscAzure, VscJson, VscDebugAlt } from "react-icons/vsc";
import { MdArchitecture, MdSpeed, MdAccessibility, MdCode, MdBuild } from "react-icons/md";
import { RiRobot2Line, RiTerminalBoxLine, RiTeamLine } from "react-icons/ri";

// Default Icon if no match
export const StarIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export const getIcon = (topic: string) => {
    const t = topic.toLowerCase();

    // Core
    if (t.includes("react query")) return SiReactquery;
    if (t.includes("react")) return FaReact;
    if (t.includes("next")) return SiNextdotjs;
    if (t.includes("node")) return FaNodeJs;
    if (t.includes("javascript") || t.includes("js")) return FaJs;
    if (t.includes("typescript") || t.includes("ts")) return SiTypescript;
    if (t.includes("html")) return FaHtml5;
    if (t.includes("css")) return FaCss3Alt;
    if (t.includes("sass") || t.includes("scss")) return SiSass;
    if (t.includes("styled")) return SiStyledcomponents;
    if (t.includes("tailwind")) return SiTailwindcss;

    // State & Tools
    if (t.includes("redux")) return SiRedux;
    if (t.includes("webpack")) return SiWebpack;
    if (t.includes("vite")) return SiVite;
    if (t.includes("babel")) return SiBabel;
    if (t.includes("turbo")) return MdBuild; // SiTurborepo might be missing
    if (t.includes("npm")) return SiNpm;
    if (t.includes("eslint")) return SiEslint;

    // Testing
    if (t.includes("jest")) return SiJest;
    if (t.includes("cypress")) return SiCypress;
    if (t.includes("testing")) return SiJest;

    // Backend/DB
    if (t.includes("python")) return FaPython;
    if (t.includes("mongo")) return SiMongodb;
    if (t.includes("postman")) return SiPostman;
    if (t.includes("mysql") || t.includes("sql")) return SiMysql;

    // DevOps/Git
    if (t.includes("github")) return FaGithub;
    if (t.includes("gitlab")) return FaGitlab;
    if (t.includes("git")) return FaGitAlt;
    if (t.includes("aws")) return FaAws;
    if (t.includes("docker")) return FaDocker;
    if (t.includes("azure")) return VscAzure;
    if (t.includes("jira")) return SiJira;
    if (t.includes("ci/cd")) return MdBuild;
    if (t.includes("bitbucket")) return FaBitbucket;
    if (t.includes("confluence")) return FaConfluence;

    // AI
    if (t.includes("openai") || t.includes("chatgpt")) return SiOpenai;
    if (t.includes("gemini")) return SiGoogle;
    if (t.includes("ai") || t.includes("copilot") || t.includes("claude")) return RiRobot2Line;

    // General
    if (t.includes("architecture") || t.includes("microfrontend")) return MdArchitecture;
    if (t.includes("performance") || t.includes("speed")) return MdSpeed;
    if (t.includes("optimization")) return MdCode;
    if (t.includes("accessibility") || t.includes("a11y")) return MdAccessibility;
    if (t.includes("data")) return VscJson;
    if (t.includes("api")) return RiTerminalBoxLine;
    // State & Tools (Zustand fallback)
    if (t.includes("zustand")) return FaStore;
    if (t.includes("redux")) return SiRedux;

    // AI
    if (t.includes("antigravity")) return FaRocket;
    if (t.includes("perplexity")) return RiRobot2Line;
    if (t.includes("ollama")) return RiTerminalBoxLine;
    if (t.includes("n8n")) return SiN8N;
    if (t.includes("openai") || t.includes("chatgpt")) return SiOpenai;

    // SCSS override
    if (t.includes("sass") || t.includes("scss")) return FaSass;

    // ... default checks ...
    if (t.includes("debug") || t.includes("rca") || t.includes("troubleshoot")) return VscDebugAlt;
    if (t.includes("collaboration") || t.includes("team")) return RiTeamLine;
    if (t.includes("timeline") || t.includes("delivery")) return MdSpeed;

    return StarIcon;
};
