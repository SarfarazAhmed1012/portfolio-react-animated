import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import "./style.css";
import Particles from "react-particles-js";
import configNew from "../config/particlejs-config-new.json";
// import { YinYang } from "./AllSvgs";
// import Football from "../assets/Images/football.png"

import { FaVolleyballBall } from "react-icons/fa";
import Intro from "../components/Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: rgb(255, 254, 207);
  background: linear-gradient(
    90deg,
    rgba(255, 254, 207, 1) 0%,
    rgba(173, 169, 249, 1) 0%,
    rgba(239, 233, 255, 1) 36%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 500px) {
    top: ${(props) => (props.click ? "50%" : "50%")};
    right: ${(props) => (props.click ? "50%" : "calc(0.7rem + 1vw)")};
    font-size: 1rem;
    /* left: 8rem; */
  }
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-size: 1.2rem;
  position: absolute;
  top: 28%;
  left: calc(1rem + 2vw);
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 500px) {
    left: ${(props) =>
      props.click ? "calc(0.7rem + 1vw)" : "calc(0.7rem + 1vw)"};
    top: 40%;
    font-size: 1rem;
    /* z-index: 3; */
    /* left: 8rem; */
  }
  @media (max-width: 900px) {
    top: 40%;
  }
`;
const BottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  bottom: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-size: 1.2rem;
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;

  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  @media (max-width: 500px) {
    left: ${(props) => (props.click ? "88%" : "50%")};
    /* left: 8rem; */
  }
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 3.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
  &:hover span {
    /* color: lightblue; */
    opacity: 0.5;
    /* animation: ${rotate} infinite 5.5s linear; */
    /* box-shadow: 0 0 8px 6px rgba(109, 0, 255, 0.3); */
    /* border-radius: 50%; */
  }
  .football_icon {
    &:hover {
      /* color: lightblue; */
      opacity: 0.8;
      animation: ${rotate} infinite 5.5s linear;
      box-shadow: 0 0 8px 6px rgba(109, 0, 255, 0.3);
      border-radius: 50%;
    }
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: linear-gradient(to right, #1c2331 0%, #c60b1e 50%, #1c2331 100%);
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Particles params={configNew} />
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <FaVolleyballBall
            size={click ? "70" : "120"}
            onClick={() => handleClick()}
            className="football_icon"
            // width={click ? 120 : 400}
            // height={click ? 120 : 200}
          />
          <span>Click here</span>
        </Center>
        <Contact
          target="_blank"
          to={{ pathname: "mailto:sarfarazahmed1012@gmail.com" }}
        >
          <motion.h3
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say Salam!
          </motion.h3>
        </Contact>
        <BLOG to="/blog">
          <motion.h3
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My Blogs
          </motion.h3>
        </BLOG>
        <Work to="/work" click={click}>
          <motion.h3
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My work
          </motion.h3>
        </Work>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h3>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.h3>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
