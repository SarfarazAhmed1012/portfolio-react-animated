import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Github, LinkedIn } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  .social_buttons {
    &:hover {
      background-color: rgba(109, 0, 255, 0.3);
      box-shadow: 0 0 8px 6px rgba(109, 0, 255, 0.3);
      border-radius: 50%;
    }
  }
  /* .Github_icon {
    &:hover {
      padding: 4px;
    }
  }
  .facebook_icon {
    &:hover {
      padding: 4px;
    }
  }
  .linkedin_icon {
    &:hover {
      padding: 4px;
    }
  } */
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  transition: all 0.3s ease-in-out;
  &:hover {
    /* transform: rotate(360deg); */
    width: 10px;
    background-color: black;
  }
  /* animation: myanimation 0.5s ease-in-out; */
  @keyframes myanimation {
    0% {
      width: 100px;
      background-color: black;
    }
    50% {
      width: 150px;
      background-color: red;
    }
    100% {
      width: 100px;
      background-color: black;
    }
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          className="social_buttons"
          to={{ pathname: "https://github.com/SarfarazAhmed1012" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Github
            className="Github_icon"
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          className="social_buttons"
          to={{ pathname: "https://www.facebook.com/sarfarazahmed1012/" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Facebook
            className="facebook_icon"
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          className="social_buttons"
          to={{
            pathname: "https://www.linkedin.com/in/sarfaraz-ahmed-215ba016a/",
          }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
