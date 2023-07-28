import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Whistle } from "../components/AllSvgs";
const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  /* background-color: #fcf6f4; */
  padding: 0.3rem;
  border-radius: 50%;
  /* border: 1px solid #000; */
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  &:hover {
    background-color: rgba(109, 0, 255, 0.3);
    box-shadow: 0 0 8px 6px rgba(109, 0, 255, 0.3);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <Whistle width={40} height={40} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
