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
  BackgroundBlur,
} from "./myselfStyles";

const titles = [
  "Souvik Ghosh",
  "a Software Developer",
  "a Project Planner",
  "a Tech Enthusiast",
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
          I am a <strong>Senior Frontend Engineer</strong> based in India with{" "}
          <strong>5 years</strong> of experience specializing in{" "}
          <strong>React v19+</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Next.js</strong>. I focus on performance, reliability, and
          scalable architecture, having architected optimized CI/CD pipelines
          and established real-time best practices adopted organization-wide.
        </Bio>
        <Bio>
          I have a strong track record of delivering complex, high-impact projects. I architected a scalable, real-time <strong>WebSocket-based communication platform</strong> for incident management that reduced update latency by <strong>25%</strong>. I also built a modular rich-text editor shared across 5 applications supporting <strong>59K+ monthly transactions</strong>, and optimized data-intensive views rendering <strong>50K+ records</strong> (improving responsiveness by up to <strong>45%</strong>). I consistently aim for performance-first, pixel-perfect execution, and scalable architecture.
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
