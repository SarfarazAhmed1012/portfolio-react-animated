import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
const LogoComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [text, setText] = useState("sarfaraz");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 400) {
      setText("SA");
    } else if (width <= 800) {
      setText("Ahmed");
    } else {
      setText("Ahmed");
    }
  }, [width]);
  return <Logo color={props.theme}> {text}</Logo>;
};

export default LogoComponent;
