import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  color: #242424;
  background-color: #42ba74;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
`;

const Toast = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Toast;
