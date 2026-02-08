import React from "react";
import Typewriter from "./Typewriter";
import {
  Wrapper,
  ContentContainer,
  IntroText,
  NameTitle,
  Bio,
  ImageContainer,
  ProfileImage,
  BackgroundBlur
} from "./myselfStyles";

const titles = [
  "Souvik Ghosh",
  "a Software Developer",
  "a Project Planner",
  "a Tech Enthusiast"
];

const MySelf = () => {

  return (
    <Wrapper>
      <ContentContainer>
        <IntroText>Hi, I'm</IntroText>
        <NameTitle>
          <Typewriter
            strings={titles}
            typeSpeed={100}
            deleteSpeed={50}
            pauseDuration={2000}
          />
        </NameTitle>
        <Bio>
          I am a <strong>Senior Frontend Engineer</strong> based in India with <strong>~4.5 years</strong> of experience specializing in <strong>React v19+</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong>. I focus on performance, reliability, and scalable architecture, having architected optimized CI/CD pipelines and established real-time best practices adopted organization-wide.
        </Bio>
        <Bio>
          I have a strong track record of delivering complex, high-impact projects. I stabilized an <strong>incident management platform</strong> (React v18, WebSockets) by resolving 150+ bugs and architecting a real-time sync system across multiple admin apps. I also built a custom rich-text editor for an <strong>EdTech platform</strong> handling <strong>59K+ monthly transactions</strong>, and optimized data-heavy calculators for a <strong>B2B SaaS product</strong>, improving render speeds by <strong>82%</strong>. I consistently aim for pixel-perfect execution and scalable architecture.
        </Bio>
      </ContentContainer>

      <ImageContainer>
        <BackgroundBlur />
        <ProfileImage src="Souvik.jpg" alt="Souvik Ghosh's pic" />
      </ImageContainer>
    </Wrapper>
  );
};

export default MySelf;
