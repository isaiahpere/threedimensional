import styled from "styled-components";

import Navlink from "./Navlink";
import Button from "../../components/global/Button";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 1024px) {
    padding: 0 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 80px;
  @media (min-width: 768px) {
    width: 100px;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  gap: 20px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 20px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./images/logo.png" />
          <List>
            <Navlink id="who-section">About Me</Navlink>
            <Navlink id="work-section">Experience</Navlink>
            <Navlink id="contact-section">Contact Me</Navlink>
          </List>
        </Links>
        <Icons>
          <Icon src="./images/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
