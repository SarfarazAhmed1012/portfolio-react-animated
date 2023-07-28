import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 520px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Segoe UI", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 1.5rem;
    width: 28vw;
    height: 40vh;
    line-height: 1.3;
    justify-content: center;
  }
  @media (max-width: 520px) {
    margin-top: 3rem;
    width: 43vw;
    height: 24vh;
    line-height: 1.3;
    justify-content: center;
  }
  @media (max-width: 400px) {
    margin-top: 3rem;
    width: 38vw;
    height: 25vh;
  }

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  @media (max-width: 800px) {
    font-size: calc(0.8em + 0.8vw);
  }
  @media (max-width: 520px) {
    font-size: calc(0.6rem + 0.4vw);
  }
  @media (max-width: 400px) {
    font-size: calc(0.3rem + 0.4vw);
  }

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.5rem + 0.8vw);
  padding: 0.2rem 0;

  @media (max-width: 800px) {
    font-size: calc(0.4rem + 0.6vw);
  }
  @media (max-width: 520px) {
    font-size: calc(0.5rem + 0.4vw);
  }
  @media (max-width: 400px) {
    font-size: calc(0.3rem + 0.4vw);
  }
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
    @media (max-width: 800px) {
      font-size: calc(0.5rem + 0.8vw);
    }
  }
  ul,
  p {
    margin-left: 2rem;
    font-size: 1rem;
    color: #384052;
    @media (max-width: 800px) {
      font-size: calc(0.4rem + 0.5vw);
    }
    @media (max-width: 600px) {
      font-size: calc(0.4rem + 0.6vw);
    }
    @media (max-width: 520px) {
      font-size: calc(0.3rem + 0.4vw);
    }
    @media (max-width: 400px) {
      font-size: calc(0.3rem + 0.4vw);
    }
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent />
        <SocialIcons />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Programmer
          </Title>
          <Description>
            I love to do coding in data structure and algorithm implementing
            C++, consistently looking for optimized solutions for DSA problems.
          </Description>
          <Description>
            <strong>Problems' areas:</strong>
            <ul>
              <li>Algorithms</li>
              <li>Arrays</li>
              <li>Linked Lists</li>
              <li>Graphs</li>
              <li>Trees</li>
            </ul>
          </Description>
          <Description>
            <strong>Languages</strong>
            <ul>
              <li>C++</li>
              <li>Python</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40} />
            Front End Developer
          </Title>
          <Description>
            A React JS front-end developer with a passion for crafting seamless
            user experiences through dynamic and interactive web applications.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              CSS, Modern Javascript(ES6+) , React JS, Redux, React Hooks and
              Context API, Sass, Tailwind, RESTful API integration, React
              Testing Library, .
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VS Code, Figma</p>
          </Description>
        </Main>
        <BigTitle
          text="SKILLS"
          top="74%"
          left="30%"
          rgba="rgba(61, 61, 71, 0.3)"
        />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
