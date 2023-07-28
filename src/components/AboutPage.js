import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import astronaut from "../assets/Images/pngegg.png";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Segoe UI", monospace;
  /* font-style: italic; */
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="astronaut" />
        </Spaceman>
        <Main>
          Hi, This is Sarfaraz Ahmed from Karachi, Pakistan and welcome to the
          world of front-end development, where creativity and coding collide!
          <br></br>
          <br></br>
          My passion for programming in C++ and building dynamic websites using
          React JS drives me to constantly push the boundaries of what's
          possible on the web.
          <br></br>
          <br></br>With each project, I strive to create visually stunning and
          intuitive user experiences that leave a lasting impression. Let's
          create something amazing together!"
        </Main>
        <BigTitle
          text="ABOUT"
          top="10%"
          left="5%"
          rgba="rgba(118, 157, 181, 0.2);"
        />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
