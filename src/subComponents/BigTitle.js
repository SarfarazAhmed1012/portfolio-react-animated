import React from "react";
import styled from "styled-components";
const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.rgba};
  font-size: calc(5rem + 5vw);
  z-index: 0;

  &:hover {
    text-shadow: 2px 2px 2px #38374f;
  }
`;

const BigTitle = (props) => {
  return (
    <Text
      top={props.top}
      left={props.left}
      right={props.right}
      rgba={props.rgba}
    >
      {props.text}
    </Text>
  );
};

export default BigTitle;
