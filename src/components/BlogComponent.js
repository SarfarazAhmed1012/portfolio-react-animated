import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(motion(NavLink))`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 0.5px solid rgba(104, 150, 255, 0.9);
  /* border: 2px solid ${(props) => props.theme.text}; */
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: auto;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    border: 0.5px solid rgba(228, 236, 212, 0.9);
  }

  @media (max-width: 800px) {
    width: calc(8rem + 12vw);
    height: 18rem;
    padding: 0.8rem;
  }
  @media (max-width: 700px) {
    margin-bottom: 60px;
    width: calc(12rem + 16vw);
    height: 15rem;
  }
  @media (max-width: 450px) {
    margin-bottom: 30px;
    width: calc(10rem + 13vw);
    height: 15rem;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}: hover & {
    border: 4px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 800px) {
    font-weight: 500;
    padding: 0.3rem 0;
    font-size: 1rem;
  }
  @media (max-width: 450px) {
    font-weight: 400;
    padding: 0.2rem 0;
    font-size: 0.9rem;
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  @media (max-width: 800px) {
    padding: 0.3rem 0;
  }
  @media (max-width: 450px) {
    padding: 0.2rem 0;
  }
`;

const Tag = styled.span`
  padding-right: 0.5rem;
  @media (max-width: 800px) {
    padding: 0.3rem 0;
    font-size: 0.9rem;
  }
  @media (max-width: 450px) {
    padding: 0.2rem 0;
    font-size: 0.8rem;
  }
`;

const Date = styled.span`
  padding: 0.5rem 0;
  @media (max-width: 800px) {
    padding: 0.3rem 0;
    font-size: 0.9rem;
  }
  @media (max-width: 450px) {
    padding: 0.2rem 0;
    font-size: 0.8rem;
  }
`;

const Container = styled(motion.div)``;

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

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" to={{ pathname: link }}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}> #{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
