import React from "react";
import styled from "styled-components";

const NavLink = styled.div`
  color: white;
  cursor: pointer;

  &:hover {
    color: #8b8b8b;
  }
`;

const Navlink = ({ children, id }) => {
  // handles scrolling to section
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" }, true);
  };

  return <NavLink onClick={() => handleScroll(id)}>{children}</NavLink>;
};

export default Navlink;
