import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github } from "../components/AllSvgs";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  width: 18rem;
  height: 38vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 2.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 5px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  @media (max-width: 900px) {
    width: 14rem;
    height: 30vh;
  }
  @media (max-width: 700px) {
    margin-right: 5rem;
    width: 10rem;
    height: 25vh;
  }
  @media (max-width: 400px) {
    width: 10rem;
    height: 23vh;
    padding: 1.5rem 0.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  @media (max-width: 900px) {
    font-size: calc(1em + 0.3vw);
  }
  @media (max-width: 400px) {
    font-size: calc(0.8em + 0.7vw);
  }
`;

const Description = styled.h3`
  font-size: calc(0.8em + 0.3ew);
  font-family: "Karla", sans-serif;
  font-weight: 500;
  @media (max-width: 900px) {
    font-size: calc(0.7em + 0.2vw);
  }

  @media (max-width: 500px) {
    font-size: calc(0.7em + 0.3vw);
    font-weight: 400;
  }
  @media (max-width: 400px) {
    font-size: calc(0.5em + 0.2vw);
    font-weight: 300;
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}: hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8rem + 0.3vw);
  @media (max-width: 900px) {
    font-size: calc(0.7em + 0.2vw);
  }
  @media (max-width: 400px) {
    margin-right: 0.8rem;
    font-size: calc(0.6rem + 0.2vw);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 6px 6px 6px 6px;
  font-size: calc(1em + 0.5vw);

  @media (max-width: 900px) {
    font-size: calc(0.7em + 0.2vw);
  }

  @media (max-width: 400px) {
    font-size: calc(0.7em + 0.3vw);
    padding: 0.6rem calc(1rem + 0.3vw);
    text-align: center;
    height: 8px;
  }

  ${Box}: hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  &:hover {
    box-shadow: 0 0 8px 6px rgba(0, 0, 255, 0.3);
  }
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
  @media (max-width: 400px) {
    /* font-size: calc(0.7em + 0.2vw);
    width: 10px;
    height: 10px; */
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Demo
        </Link>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
