import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: #da4ea2;
  ${(props) => props.fullWidth && "width: 100%;"}
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 160px;
    ${(props) => props.fullWidth && "width: 100%;"};
    font-size: 16px;
  }
`;

const Button = ({ children, fullWidth, type, value }) => {
  return (
    <CustomButton fullWidth={fullWidth} type={type} value={value}>
      {children}
    </CustomButton>
  );
};

export default Button;
