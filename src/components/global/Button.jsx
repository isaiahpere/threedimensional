import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: #201f20;
  box-shadow: 1px 1px 10px 3px rgba(255, 255, 255, 0.2);
  ${(props) => props.fullWidth && "width: 100%;"}
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #252525;
    transform: scale(1.03);
  }

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
